import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
});

export const metadata: Metadata = {
  title: "DjassApp - La marketplace vocale du commerce informel ivoirien",
  description:
    "DjassApp digitalise le djassa ivoirien. Créez votre boutique en ligne par la voix en moins de 5 minutes. Marketplace multi-vendeurs pour le commerce informel en Côte d'Ivoire.",
  keywords: [
    "marketplace",
    "commerce informel",
    "Côte d'Ivoire",
    "Abidjan",
    "e-commerce",
    "mobile money",
    "djassa",
    "boutique en ligne",
    "IA vocale",
  ],
  authors: [{ name: "Ando Technologies" }],
  openGraph: {
    title: "DjassApp - La marketplace vocale du commerce informel",
    description:
      "Créez votre boutique en ligne par la voix en moins de 5 minutes. La première marketplace pensée pour le commerce informel ivoirien.",
    type: "website",
    locale: "fr_CI",
    siteName: "DjassApp",
  },
  twitter: {
    card: "summary_large_image",
    title: "DjassApp - Marketplace vocale Côte d'Ivoire",
    description:
      "Digitalisez votre commerce informel. Boutique en ligne en 5 minutes par la voix.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        <link rel="icon" type="image/jpeg" href="/demarrage_fin.jpg" />
      </head>
      <body className={`${roboto.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
