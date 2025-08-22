import { createTranslator, isValidLocale, defaultLocale } from "@/lib/i18n";
import Link from 'next/link';
import '../../../../../../components/UI/button.css';

const Altai = ({params: {locale}}: {params: {locale: string}}) => {  const validLocale = isValidLocale(locale) ? locale : defaultLocale;
  const t = createTranslator(validLocale);
  
  // Function to add locale prefix to href
  function addLocaleToHref(href: string): string {
    return `/${validLocale}${href}`;
  }  return (
    <div className='tours_and_events_margin_top'>
      <div className='visibility_area'> {/*For description*/}
        <div>
          <div style={{position: 'relative', padding: "1%", backgroundColor: "#ffde4d"}}>
            <img
              src='/altai_tour.jpg'
              alt='Route'
            />
          </div>
          <div style={{ padding: "2%", backgroundColor: "#f6f5ff"}}>
            <h2 className='tour_left_column_header'>{t('Tours.altai_tour_title')}</h2>
            <p className='tour_individual_text'>{t('Tours.altai_tour_text')}</p>
            <p className='tour_individual_text'>{t('Tours.altai_tour_text2')}</p>
            <div style={{marginTop: "2%", bottom: 0}}>
              <Link href={addLocaleToHref("/contacts/#targetBlock")} className='myButton '>
                {t('Tours.altai_tour_button')}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Altai