import {getTranslations} from 'next-intl/server';
import {unstable_setRequestLocale} from 'next-intl/server';

const Visa = async ({params: {locale}}: {params: {locale: string}}) => {
  unstable_setRequestLocale(locale);
  const t = await getTranslations('Information');
  return (
    <div className='visa_margin_top'>
      <div className='visibility_area'>
        <div>
          <h1 className='visa_title'>{t('visa.title')}</h1>
          <p className='visa_text'>{t('visa.text')}</p>
          <ul className='visa_points'>
            <li>{t('visa.ul1')}</li>
            <li>{t('visa.ul2')}</li>
            <li>{t('visa.ul3')}</li>
            <li>{t('visa.ul4')}</li>
            <li>{t('visa.ul5')}</li>
            <li>{t('visa.ul6')}</li>
            <li>{t('visa.ul7')}</li>
            <li>{t('visa.ul8')}</li>
            <li>{t('visa.ul9')}</li>
          </ul>
          <h2 className='visa_text'>{t('visa.subtitle')}</h2>
          <ul style={{fontWeight: "500"}} className='visa_points'>
            <li>{t('visa.ul10')}</li>
            <li>{t('visa.ul11')}</li>
            <li>{t('visa.ul12')}</li>
            <li>{t('visa.ul13')}</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Visa