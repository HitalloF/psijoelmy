// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "PSI Joelmy Lins",
  description: "Psicólogo Joelmy Lins.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className="bg-[#301e4b] text-white antialiased">
        {children}
      </body>
    </html>
  );
}
