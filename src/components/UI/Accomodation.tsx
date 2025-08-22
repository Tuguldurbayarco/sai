
import { createTranslator, isValidLocale, defaultLocale, Locale } from "@/lib/i18n";

const Accommodation = ({locale}: {locale?: Locale}) => {
  const validLocale = isValidLocale(locale || 'en') ? (locale || 'en') : defaultLocale;
  const t = createTranslator(validLocale);
  
  // Function to add locale prefix to href
  function addLocaleToHref(href: string): string {
    return `/${validLocale}${href}`;
  }
  
  return (
    <div style={{position: 'relative', marginBottom: "3%"}}>
      <h2 className='tour_items_header trocchi-regular'>{t('Accommodation.title')}</h2>
      <img
        src='/tmcity.jpg'
        alt="City"
        width='100%'
        height='auto'
        style={{position: "relative", borderRadius: "10px"}}
      />
      <a className='hotels_container' href='/information/hotels'>{t('Accommodation.subtitle')}</a>
    </div>
  )
}

export default Accommodation