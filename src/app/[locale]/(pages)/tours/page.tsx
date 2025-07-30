import {getTranslations} from 'next-intl/server';
import { TOURS_LINK, INDIVIDUAL_TOURS } from '@/constants';
import {unstable_setRequestLocale} from 'next-intl/server';

const Tours = async ({params: {locale}}: {params: {locale: string}}) => {
  unstable_setRequestLocale(locale);
  const t = await getTranslations('Tours');
  return (
    <div>
      <img
        src='/toursmain.jpg'
        alt='Name'
        width='100%'
      />
      <div className='header_container_for_picture'>
        <h1 className='header_on_picture'>{t('title_on_picture')}</h1>
      </div>
      <div className='visibility_area'>
        <h2 style={{marginBottom: "2%"}} className='header_for_divede'>{t('subtitle')}</h2>
        <div >
          <div style={{position: 'relative', marginBottom: "4%"}}>
            <a href='/tours/khangai' style={{display: 'block'}}>
              <img
                src='/tmkhangai.jpg'
                width="100%"
                height="auto"
                style={{borderRadius: "10px"}}
              />
            </a>
            <div className='tours_image_container'>
              <p className='tour_container_header_desc'>{t('main_tour')}</p>
              <p className='tour_container_desc'>
              {t('main_tour_desc')} <a href='/tours/khangai' style={{color: "#ebc934"}}> {t('read_more')}</a>
              </p>
            </div>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between"}}>
            {TOURS_LINK.map((element, index ) => (
              <div style={{position: 'relative', marginBottom: "4%"}} key={element.id} className='tours_page_image_container'>
                <a href={element.href}>
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
                  <p className='tour_container_header_desc_mini'>{t(`tourList.${index}.title`)} - {t(`tourDays.${index}.days`)}{/*here also make links like as tourList*/}</p>
                  <p className='tour_container_desc_mini'>{t(`tourList.${index}.description`)} <a href={element.href} style={{color: "#ebc934"}}> {t('read_more')}</a></p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div>
          <div style={{marginBottom: "3%"}}>
            <h2 className='header_for_divede'>{t('individual_title')}</h2>
          </div>
          <div style={{position: 'relative', marginBottom: "4%"}}>
            <a href='/tours/altai' style={{ display: 'block' }}>
              <img
                src='/altai.jpg'
                width="100%"
                height="auto"
                style={{borderRadius: "10px"}}
              />
            </a>
            <div className='tours_image_container'>
              <p className='tour_container_header_desc'>{t('altai')}</p>
              <p className='tour_container_desc'>{t('altai_desc')}<a href='/tours/altai' style={{color: "#ebc934"}}> {t('read_more')}</a></p>
            </div>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between"}}>
            {INDIVIDUAL_TOURS.map((element, index ) => (
              <div style={{position: 'relative', marginBottom: "4%"}} key={element.id} className='tours_page_image_container'>
                <a href={element.href}>
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
                  <p className='tour_container_header_desc_mini'>{t(`individualList.${index}.title`)} {/*here also make links like as tourList*/}</p>
                  <p className='tour_container_desc_mini'>{t(`individualList.${index}.description`)} <a href={element.href} style={{color: "#ebc934"}}> {t('read_more')}</a></p>
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