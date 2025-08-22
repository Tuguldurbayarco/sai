import { createTranslator, isValidLocale, defaultLocale } from "@/lib/i18n";
import { TOURS_LINK, INDIVIDUAL_TOURS } from '@/constants';

const Tours = ({params: {locale}}: {params: {locale: string}}) => {
  const validLocale = isValidLocale(locale) ? locale : defaultLocale;
  const t = createTranslator(validLocale);
  
  // Function to add locale prefix to href
  function addLocaleToHref(href: string): string {
    return `/${validLocale}${href}`;
  }
  
  return (
    <div>
      <img
        src='/toursmain.jpg'
        alt='Name'
        width='100%'
      />
      <div className='header_container_for_picture'>
        <h1 className='header_on_picture'>{t('Tours.title_on_picture')}</h1>
      </div>
      <div className='visibility_area'>
        <h2 style={{marginBottom: "2%"}} className='header_for_divede'>{t('Tours.subtitle')}</h2>
        <div >
          <div style={{position: 'relative', marginBottom: "4%"}}>
            <a href={addLocaleToHref('/tours/khangai')} style={{display: 'block'}}>
              <img
                src='/tmkhangai.jpg'
                width="100%"
                height="auto"
                style={{borderRadius: "10px"}}
              />
            </a>
            <div className='tours_image_container'>
              <p className='tour_container_header_desc'>{t('Tours.main_tour')}</p>
              <p className='tour_container_desc'>
              {t('Tours.main_tour_desc')} <a href={addLocaleToHref('/tours/khangai')} style={{color: "#ebc934"}}> {t('Tours.read_more')}</a>
              </p>
            </div>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between"}}>
            {TOURS_LINK.map((element, index ) => (
              <div style={{position: 'relative', marginBottom: "4%"}} key={element.id} className='tours_page_image_container'>
                <a href={addLocaleToHref(element.href)}>
                  <img 
                    key={element.id} 
                    src={element.src}
                    alt='tours images'
                    width='100%'
                    height='auto'
                    style={{borderRadius: "10px"}}
                  /> 
                </a>
                <div className='tours_image_container'>
                  <p className='tour_container_header_desc_mini'>{t(`Tours.tourList.${index}.title`)} - {t(`Tours.tourDays.${index}.days`)}{/*here also make links like as tourList*/}</p>
                  <p className='tour_container_desc_mini'>{t(`Tours.tourList.${index}.description`)} <a href={addLocaleToHref(element.href)} style={{color: "#ebc934"}}> {t('Tours.read_more')}</a></p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div>
          <div style={{marginBottom: "3%"}}>
            <h2 className='header_for_divede'>{t('Tours.individual_title')}</h2>
          </div>
          <div style={{position: 'relative', marginBottom: "4%"}}>
            <a href={addLocaleToHref('/tours/altai')} style={{ display: 'block' }}>
              <img
                src='/altai.jpg'
                width="100%"
                height="auto"
                style={{borderRadius: "10px"}}
              />
            </a>
            <div className='tours_image_container'>
              <p className='tour_container_header_desc'>{t('Tours.altai')}</p>
              <p className='tour_container_desc'>{t('Tours.altai_desc')}<a href={addLocaleToHref('/tours/altai')} style={{color: "#ebc934"}}> {t('Tours.read_more')}</a></p>
            </div>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between"}}>
            {INDIVIDUAL_TOURS.map((element, index ) => (
              <div style={{position: 'relative', marginBottom: "4%"}} key={element.id} className='tours_page_image_container'>
                <a href={addLocaleToHref(element.href)}>
                  <img 
                    key={element.id} 
                    src={element.src}
                    alt='individual tours images'
                    width='100%'
                    height='auto'
                    style={{borderRadius: "10px"}}
                  /> 
                </a>
                <div className='tours_image_container'>
                  <p className='tour_container_header_desc_mini'>{t(`Tours.individualList.${index}.title`)} {/*here also make links like as tourList*/}</p>
                  <p className='tour_container_desc_mini'>{t(`Tours.individualList.${index}.description`)} <a href={addLocaleToHref(element.href)} style={{color: "#ebc934"}}> {t('Tours.read_more')}</a></p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Tours