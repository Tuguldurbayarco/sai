import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Saibai Tour",
  description: "Best tours in Mongolia",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}

