import {getTranslations} from 'next-intl/server';
import { mobileCompanies } from '@/constants'
import {unstable_setRequestLocale} from 'next-intl/server';

const Phone = async ({params: {locale}}: {params: {locale: string}}) => {
  unstable_setRequestLocale(locale);
  const t = await getTranslations('Information')
  return (
    <div className='visibility_area' style={{marginTop: "7.4%"}}>
      <img
        src='/pmain.jpg'
        alt='phone_page'
        style={{marginBottom: "3%"}}
      />
      <div className='phone_page_display'>
        {mobileCompanies.map((element, index) => (
          <div key={element.id} style={{ justifyContent: "center", alignItems: "center" }}>
            <a href={element.href}>
              <img 
                key={element.id} 
                src={element.src} 
                alt={element.title} 
                height='auto'
                className='phone_page_png_size'
                style={{marginBottom: "2%",}}
              /> 
            </a>
          <p className='phone_titles'>{t(`phone.title.${index}.title`)}</p>
        </div>
        ))}
      </div>
      <div>
        <p className='phone_text'>{t('phone.text')}</p>
      </div>
    </div>
  )
}

export default Phone