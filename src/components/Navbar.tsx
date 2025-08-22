"use client";
import Link from "next/link";
import {useState, useEffect} from "react";
import LocalSwitcher from "./UI/Switcher";
import { NAV_LINKS } from "@/constants";
import { createTranslator, defaultLocale, isValidLocale } from "@/lib/i18n";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  // Extract locale from pathname
  const locale = pathname.split('/')[1];
  const validLocale = isValidLocale(locale) ? locale : defaultLocale;
  const t = createTranslator(validLocale);
  
  // Function to add locale prefix to href
  function addLocaleToHref(href: string): string {
    return `/${validLocale}${href}`;
  }
  const [scrolled, setScrolled] = useState(false);

  const [isMenuOpen, setMenuOpen] = useState(false);

  const handleBurgerClick = () => {
    setMenuOpen(!isMenuOpen); 
  };

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleBodyScroll = (e: { preventDefault: () => void; }) => {
      if (isMenuOpen) {
        e.preventDefault();
      }
    };

    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('scroll', handleBodyScroll, { passive: false });
    } else {
      document.body.style.overflow = 'auto';
      window.removeEventListener('scroll', handleBodyScroll);
    }

    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('scroll', handleBodyScroll);
    };
  }, [isMenuOpen]);

  function menuLabel(link: { href: string, key: string, title: string }){
    switch (link.key){
      case "about":
        return t("Index.menu.0.label");
      case "events":
        return t("Index.menu.1.label");
      case "tours":
        return t("Index.menu.2.label");
      case "information":
        return t("Index.menu.3.label");
      case "contacts":
        return t("Index.menu.4.label");
      default:
        return "";
    }
  }

  function NavbarLink({ link }: { link: { href: string, key: string, title: string } }) {
    const handleLinkClick = () => {
      setMenuOpen(false);
    };
  
    return (
      <Link href={addLocaleToHref(link.href)} key={link.key} 
        className="navbar_menu_buttons"
        onMouseEnter={({ currentTarget }) => currentTarget.style.color = "#2f2399"}
        onMouseLeave={({ currentTarget }) => currentTarget.style.color = "#000"}
        onClick={handleLinkClick} // Добавляем обработчик клика
      >
        {menuLabel(link)}
      </Link>
    );
  }
  
  return (
    <div >
      <div >
        <nav className={`navbar ${scrolled ? 'scrolled' : 'non_scrolled'}`} 
          style={{display: "flex", justifyContent: "center", position: 'fixed', top: 0, width: '100%'}} 
        >
          <Link href={`/${validLocale}/`} className={`logo ${scrolled ? 'scrolled' : ''} logo_margin`}>
            <img src="/logo.png" alt="logo" height='auto'/>
          </Link>
          <div className={`header_burger ${isMenuOpen ? 'open' : ''}`} onClick={handleBurgerClick}>
            <span></span>
          </div>
          <div className={`header_menu ${isMenuOpen ? 'open' : ''}`}>
            <ul className="navbar_menu_container">
              {NAV_LINKS.map((link) => (
                <NavbarLink key={link.key} link={link}/>
              ))} 
            </ul>
          </div>
          <div className="switcher">
            <LocalSwitcher/>
          </div>
          <div className={`overlay ${isMenuOpen ? 'open' : ''}`}></div>
        </nav>
      </div>
    </div>
  );
}

export default Navbar