import Footer from "@/components/Footer";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./[locale]/globals.css";
import NavBarServer from "@/components/NavBarServer";
import SocialIcons from "@/components/UI/SocialIcons";
import {unstable_setRequestLocale} from 'next-intl/server';

const inter = Roboto({
  subsets: ["latin"],
  weight: "100"
});

const locales = ['en', 'ko'];

export function generateStaticParams() {
  return locales.map((locale) => ({locale}));
}

export const metadata: Metadata = {
  title: "Saibai Tour",
  description: "Best tours in Mongilia",
};

export default function RootLayout({
  children,
  params: {locale}
}: Readonly<{
  children: React.ReactNode;
  params: {locale: string};
}>) {

  unstable_setRequestLocale(locale);

  return (
    <html lang={locale}>
      <body>
        <NavBarServer/>
        <SocialIcons/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}

