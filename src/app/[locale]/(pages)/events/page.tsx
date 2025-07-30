import {getTranslations} from 'next-intl/server';
import EventContainer from '@/components/UI/EventContainer';
import {unstable_setRequestLocale} from 'next-intl/server';

const Events = async ({params: {locale}}: {params: {locale: string}}) => {
  unstable_setRequestLocale(locale);
  const t = await getTranslations('Events');
  return (
    <div>
      <div>
        <img
          src='/3-3.jpg'
          alt='Name'
          width='100%'
        />
        <div className='header_container_for_picture'>
          <h1 className='header_on_picture'>{t('title')}</h1>
        </div>
      </div>
      <div className='visibility_area' style={{marginTop: "5%"}}>
        <EventContainer/>
      </div>
    </div>
  )
}

export default Events