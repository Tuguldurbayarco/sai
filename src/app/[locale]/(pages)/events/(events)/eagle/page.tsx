import { createTranslator, isValidLocale, defaultLocale } from "@/lib/i18n";
import Link from 'next/link';
import '../../nextButton.css';

const EagleFestival = ({params: {locale}}: {params: {locale: string}}) => {  
  const validLocale = isValidLocale(locale) ? locale : defaultLocale;
  const t = createTranslator(validLocale);
  
  // Function to add locale prefix to href
  function addLocaleToHref(href: string): string {
    return `/${validLocale}${href}`;
  }
  return (
    <div className='visibility_area'>
      <div className='image_container'>
        <div className='image_container_image'>
          <img
            src='/20.jpg'
            style={{marginBottom: "3%"}}
          />
        </div>
      </div>
      <div className='main_container'>
        <div className='events_margins'> 
          <p className='header_container'>{t('Events.eagle-festival.title')}</p>
        </div>
        <div>
          <p className='text_container' style={{textAlign: 'justify'}}>{t('Events.eagle-festival.text')}</p>
        </div>
        <div className='text_container'>
        </div>
      </div>
      <div className='events_button_btn'> 
        <Link href={addLocaleToHref('/events/camel')}>
          <button className='events_button'>
            {t('Events.previous')}
          </button>
        </Link>
        <Link href={addLocaleToHref('/events/ice')}>
          <button className='events_button'> 
            {t('Events.next')}
          </button>
        </Link>
      </div>
    </div>
  )
}

export default EagleFestival