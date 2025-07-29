import {getTranslations} from 'next-intl/server';
import {unstable_setRequestLocale} from 'next-intl/server';

const Accommodation = async ({params: {locale}}: {params: {locale: string}}) => {
  unstable_setRequestLocale(locale);
  const t = await getTranslations('Accommodation');
  return (
    <div style={{position: 'relative', marginBottom: "3%"}}>
      <h2 className='tour_items_header trocchi-regular'>{t('title')}</h2>
      <img
        src='/tmcity.jpg'
        alt="City"
        width='100%'
        height='auto'
        style={{position: "relative", borderRadius: "10px"}}
      />
      <a className='hotels_container' href='/information/hotels'>{t('subtitle')}</a>
    </div>
  )
}

export default Accommodation