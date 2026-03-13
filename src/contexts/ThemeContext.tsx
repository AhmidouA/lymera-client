// src/contexts/ThemeContext.tsx
"use client";

import { createContext, useContext, useSyncExternalStore, ReactNode } from "react";

type Theme = "light" | "dark";

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// Store externe pour le thème
const themeStore = {
  getTheme(): Theme {
    if (typeof window === "undefined") return "light";
    const storedTheme = localStorage.getItem("selectedTheme");
    // Validation du thème
    if (storedTheme === "dark" || storedTheme === "light") {
      return storedTheme;
    }
    return "light";
  },
  
  setTheme(theme: Theme) {
    // 1. Vérifie si on est côté serveur (SSR/SSG avec Next.js)
    // Si window n'existe pas, on est côté serveur, donc on arrête ici
    if (typeof window === "undefined") return;
    
    // 2. Récupère l'élément racine HTML (<html>) du document
    const root = document.documentElement;
    
    // 3. Ajoute ou retire la classe "dark" sur l'élément <html>
    // Si theme est "dark", on ajoute la classe "dark"
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      // Sinon (theme est "light"), on retire la classe "dark"
      root.classList.remove("dark");
    }
    
    // 4. Sauvegarde le thème choisi dans le localStorage du navigateur
    // Comme ça, le thème persiste même après rechargement de la page
    localStorage.setItem("selectedTheme", theme);
    
    // 5. Notifie TOUS les abonnés (listeners) que le thème a changé
    // Chaque listener est une fonction, on l'exécute pour qu'elle se mette à jour
    // C'est ce qui permet à useSyncExternalStore de savoir qu'il faut re-render
    themeStore.listeners.forEach(listener => listener());
  },
  
  // 6. Set qui stocke toutes les fonctions "listener" (abonnés)
  // Un Set est comme un tableau mais sans doublons
  // Chaque composant qui utilise useTheme s'abonne ici
  listeners: new Set<() => void>(),
  
  // 7. Fonction d'abonnement appelée par useSyncExternalStore
  subscribe(listener: () => void) {
    // Ajoute le listener (la fonction de callback) au Set des abonnés
    // Quand le thème change, ce listener sera appelé
    themeStore.listeners.add(listener);
    
    // Retourne une fonction de "nettoyage" (cleanup)
    // Cette fonction sera appelée quand le composant se démonte
    // Elle retire le listener du Set pour éviter les fuites mémoire
    return () => themeStore.listeners.delete(listener);
  }
};

export function ThemeProvider({ children }: { children: ReactNode }) {
  const theme = useSyncExternalStore<Theme>(
    themeStore.subscribe,
    themeStore.getTheme,
    () => "light" // Valeur serveur par défaut
  );

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    themeStore.setTheme(newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  
  return context;
}