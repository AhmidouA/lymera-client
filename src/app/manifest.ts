import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Institut Lymera",
    short_name: "Lymera",
    description: "Institut d'esthétique à Jacou — Épilation laser, onglerie et drainage lymphatique",
    start_url: "/",
    display: "standalone",
    background_color: "#FAF7F2",
    theme_color: "#8B6347",
    icons: [
      { src: "/favicon.ico", sizes: "32x32" },
      { src: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
  };
}