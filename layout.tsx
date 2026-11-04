import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Yaprak Dökümü TV",
  description: "Yaprak Dökümü için kesintisiz yayın ve izleyici topluluğu."
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="tr"><body>{children}</body></html>;
}
