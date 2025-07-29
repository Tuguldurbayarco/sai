import {getTranslations} from 'next-intl/server';
import Link from 'next/link';
import '../../nextButton.css';
import {unstable_setRequestLocale} from 'next-intl/server';

const Naadam = async ({params: {locale}}: {params: {locale: string}}) => {
  unstable_setRequestLocale(locale);
  const t = await getTranslations('Events')
  return (
    <div className='visibility_area'>
      <div className='image_container'>
        <div className='image_container_image'>
          <img
            src='/21.jpg'
            style={{marginBottom: "3%"}}
          />
        </div>
      </div>
      <div className='main_container'>
        <div className='events_margins'> 
          <p className='header_container'>{t('naadam-festival.title')}</p>
        </div>
        <div>
          <p className='text_container' style={{textAlign: 'justify'}}>{t('naadam-festival.text')}</p>
        </div>
        <div className='text_container'> 
        </div>
      </div>
      <div className='events_button_btn'> 
        <Link href={'./ice'}>
          <button className='events_button'>
            {t('previous')}
          </button>
        </Link>
        <Link href={'./tsagaansar'}>
          <button className='events_button'> 
            {t('next')}
          </button>
        </Link>
      </div>
    </div>
  )
}

export default Naadam