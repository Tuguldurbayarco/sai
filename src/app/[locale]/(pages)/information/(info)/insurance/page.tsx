import {getTranslations} from 'next-intl/server';
import {unstable_setRequestLocale} from 'next-intl/server';

const Insurance = async ({params: {locale}}: {params: {locale: string}}) => {
  unstable_setRequestLocale(locale);
  const t = await getTranslations('Information')
  return (
    <div className='visa_margin_top'>  
      <div style={{marginTop: "10%"}} className='visibility_area'>
        <h2 className='visa_title'>{t('insurance.title')}</h2>
        <div className='visa_text'>
          <p>{t('insurance.text1')}</p>
          <p>{t('insurance.text2')}</p>
          <p>{t('insurance.text3')}</p>
        </div>
      </div>
    </div>
  )
}

export default Insurance