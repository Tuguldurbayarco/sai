import { createTranslator, isValidLocale, defaultLocale } from "@/lib/i18n";

const Visa = ({params: {locale}}: {params: {locale: string}}) => {  const validLocale = isValidLocale(locale) ? locale : defaultLocale;
  const t = createTranslator(validLocale);  return (
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
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Visa