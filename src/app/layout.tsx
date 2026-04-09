import type { Metadata } from "next";
import { Outfit, Playfair_Display } from "next/font/google";
import { SmoothScrollProvider } from "@/components/smooth-scroll";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Tiquatirão Mar & Brasa | O Litoral, na Capital!",
  description:
    "Restaurante de frutos do mar em São Paulo desde 1997. Paella, caldeirada, camarão na moranga e muito mais. Penha de França, Zona Leste.",
  keywords: [
    "restaurante frutos do mar são paulo",
    "tiquatirão",
    "paella são paulo",
    "caldeirada",
    "camarão na moranga",
    "restaurante penha",
  ],
  openGraph: {
    title: "Tiquatirão Mar & Brasa",
    description: "O litoral, na capital! Frutos do mar desde 1997.",
    type: "website",
    locale: "pt_BR",
    images: ["/assets/paella-frutos-do-mar-grande.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tiquatirão Mar & Brasa",
    description: "O litoral, na capital! Frutos do mar desde 1997.",
  },
  other: {
    "theme-color": "#0C0A08",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${outfit.variable} ${playfair.variable} antialiased`}
    >
      <body className="min-h-screen bg-background font-sans text-foreground">
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
      </body>
    </html>
  );
}
