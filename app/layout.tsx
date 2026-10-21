import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kelime | İngilizce Öğren",
  description: "Her gün öğren, doğru zamanda tekrar et, İngilizceni geliştir.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="tr">
      <body>{children}</body>
    </html>
  );
}
