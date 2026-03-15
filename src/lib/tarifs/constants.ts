export type TarifItem = { name: string; duration: string; price: string };

export const tarifsZonesFemme: TarifItem[] = [
  { name: "Aisselles", duration: "15 min", price: "40 €" },
  { name: "Avants-bras", duration: "15 min", price: "50 €" },
  { name: "Bras (mains incluse)", duration: "15 min", price: "90 €" },
  { name: "Mains", duration: "10 min", price: "35 €" },
  { name: "Bas du dos", duration: "15 min", price: "50 €" },
  { name: "Ligne ventrale", duration: "15 min", price: "30 €" },
  { name: "Ventre", duration: "15 min", price: "50 €" },
  { name: "Jambes complètes", duration: "30 min", price: "150 €" },
  { name: "Cuisses", duration: "15 min", price: "100 €" },
  { name: "Maillot échancré (sif)", duration: "10 min", price: "60 €" },
  { name: "Demi-jambes", duration: "15 min", price: "90 €" },
  { name: "Maillot intégral (sif)", duration: "15 min", price: "90 €" },
  { name: "Fesses", duration: "15 min", price: "50 €" },
  { name: "Inter sourcils", duration: "10 min", price: "30 €" },
  { name: "Lèvres supérieures", duration: "10 min", price: "30 €" },
  { name: "Joues", duration: "10 min", price: "30 €" },
  { name: "Menton", duration: "10 min", price: "30 €" },
];

export const forfaitsFemme: TarifItem[] = [
  { name: "Aisselles, maillot échancré (sif) et demi-Jambes", duration: "1h", price: "140 €" },
  { name: "Aisselles, maillot intégral (sif), et demi-Jambes", duration: "1h", price: "170 €" },
  { name: "Aisselles, maillot échancré, et jambes complètes", duration: "1h", price: "200 €" },
  { name: "Aisselles, maillot intégral (sif), et jambes complètes", duration: "1h", price: "220 €" },
  { name: "Aisselles et maillot échancré (sif)", duration: "1h", price: "80 €" },
  { name: "Aisselles et maillot intégral (sif)", duration: "1h", price: "110 €" },
  { name: "Aisselles et demi-Jambes", duration: "30 min", price: "110 €" },
  { name: "Aisselles et jambes complètes", duration: "1h", price: "160 €" },
  { name: "Maillot échancré (sif) et demi-Jambes", duration: "30 min", price: "120 €" },
  { name: "Maillot intégral (sif) et demi-Jambes", duration: "30 min", price: "160 €" },
  { name: "Maillot échancré et Jambes complètes", duration: "1h", price: "180 €" },
  { name: "Maillot intégral (sif) et jambes complètes", duration: "1h", price: "220 €" },
];

export const tarifsZonesHomme: TarifItem[] = [
  { name: "Zone visage au choix", duration: "15 min", price: "50 €" },
  { name: "Aisselles", duration: "15 min", price: "45 €" },
  { name: "Torse", duration: "30 min", price: "70 €" },
  { name: "Abdomen", duration: "30 min", price: "70 €" },
  { name: "Nuque", duration: "15 min", price: "40 €" },
  { name: "Épaules", duration: "25 min", price: "60 €" },
  { name: "Dos entier", duration: "30 min", price: "130 €" },
  { name: "Haut ou Bas du Dos", duration: "30 min", price: "70 €" },
  { name: "Avant bras + Mains Offertes", duration: "30 min", price: "70 €" },
  { name: "Bras entiers + Mains Offertes", duration: "45 min", price: "130 €" },
  { name: "Mains", duration: "15 min", price: "40 €" },
  { name: "Demi-Jambes", duration: "45 min", price: "100 €" },
  { name: "Jambes entières", duration: "50 min", price: "170 €" },
  { name: "Maillot intégral (sif)", duration: "30 min", price: "130 €" },
  { name: "Maillot échancré", duration: "30 min", price: "80 €" },
  { name: "Fesses", duration: "30 min", price: "70 €" },
  { name: "Sif", duration: "15 min", price: "40 €" },
];

export const forfaitsHomme: TarifItem[] = [
  { name: "Forfait Dos, Torse, Abdomen", duration: "1h30", price: "250 €" },
  { name: "Forfait Torse, Abdomen", duration: "1h", price: "130 €" },
  { name: "Forfait Épaules, Dos, Nuque", duration: "1h", price: "200 €" },
  { name: "Forfait Torse, Abdomen, Aisselles", duration: "1h15", price: "170 €" },
];

export const tarifsOnglerie: TarifItem[] = [
  { name: "Formule pose complète mains et pieds", duration: "3h", price: "70 €" },
  { name: "Pose complète mains (ongles sains, déco basique)", duration: "2h", price: "50 €" },
  { name: "Remplissage (d'une pose faite par Nassima)", duration: "2h", price: "45 €" },
  { name: "Formule semi/gel sur ongles naturels mains et pieds", duration: "2h", price: "60 €" },
  { name: "Gel sur ongles naturels", duration: "1h30", price: "40 €" },
  { name: "Pose pied avec reconstruction", duration: "1h", price: "40 €" },
  { name: "Semi pieds", duration: "1h", price: "30 €" },
  { name: "Dépose mains ou pieds", duration: "30 min", price: "20 €" },
];

export const tarifDrainage: TarifItem[] = [
  { name: "Drainage lymphatique", duration: "2h · Bilan + contre-indications inclus", price: "90 €" },
];