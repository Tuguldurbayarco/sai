import {useTranslations} from 'next-intl';
import Image from 'next/image';
import { EVENTS } from '@/constants';

const EventContainer = () => {
  const t = useTranslations('Events');
  return (
    <div >
      <div className='events_display'>
        {EVENTS.map((element, index) => (
          <div key={index} className='events_display_container'>
            <a href={element.href} className='events_display_image_cont'>
              <img
                src={element.src}
                alt='images'
                width='100%'
                height='auto'
                style={{borderRadius: "10px"}}
              />
            </a>
            <div className='events_display_text_cont'>
              <p className='event_block_header'>{t(`event-container.${index}.title`)}</p>
              <p className='event_block_desc'>
                {t(`event-container.${index}.description`)}
                <a href={element.href} style={{color: "#4d5df0"}}> {t('eventContainer')}</a>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default EventContainer