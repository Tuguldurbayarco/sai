import "./globals.css";
import {unstable_setRequestLocale} from 'next-intl/server';
import {locales} from '../../navigation';
import { Roboto } from "next/font/google";
import Footer from "@/components/Footer";
import NavBarServer from "@/components/NavBarServer";
import SocialIcons from "@/components/UI/SocialIcons";

const inter = Roboto({
  subsets: ["latin"],
  weight: "100"
});

// Generate static params for all supported locales
export function generateStaticParams() {
  return locales.map((locale) => ({locale}));
}

export default function LocaleLayout({
  children,
  params: {locale}
}: {
  children: React.ReactNode;
  params: {locale: string};
}) {
  // Set the locale for static generation
  unstable_setRequestLocale(locale);
  
  return (
    <html lang={locale}>
      <body className={inter.className}>
        <NavBarServer/>
        <SocialIcons/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
