import {getTranslations} from 'next-intl/server';
import {unstable_setRequestLocale} from 'next-intl/server';

const Weather = async ({params: {locale}}: {params: {locale: string}}) => {
  unstable_setRequestLocale(locale);
  const t = await getTranslations('Information');
  return (
    <div className='visibility_area'>
      <div className='visa_margin_top' style={{marginBottom: "4%", textAlign: "justify"}}>
        <p className='visa_title'>{t('weather.title')} </p>
        <p className='visa_text'>{t('weather.text1')}</p>
        <p className='visa_text'>{t('weather.text2')}</p>
        <p className='visa_text'>{t('weather.text3')}</p>
        <p className='visa_text'>{t('weather.text4')}</p>
      </div>
    </div>
  )
}

export default Weather