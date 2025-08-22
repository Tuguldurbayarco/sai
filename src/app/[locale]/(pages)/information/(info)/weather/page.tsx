import { createTranslator, isValidLocale, defaultLocale } from "@/lib/i18n";

const Weather = ({params: {locale}}: {params: {locale: string}}) => {  const validLocale = isValidLocale(locale) ? locale : defaultLocale;
  const t = createTranslator(validLocale);  return (
    <div className='visibility_area'>
      <div className='visa_margin_top' style={{marginBottom: "4%", textAlign: "justify"}}>
        <p className='visa_title'>{t('weather.title')}</p>
        <br/>
        <p className='visa_text'>{t('weather.text1')}</p>
        <br/>
        <p className='visa_text'>{t('weather.text2')}</p>
        <br/>
        <p className='visa_text'>{t('weather.text3')}</p>
        <br/>
        <p className='visa_text'>{t('weather.text4')}</p>
        <br/>
        <p className='visa_text'>{t('weather.text5')}</p>
      </div>
    </div>
  )
}

export default Weather