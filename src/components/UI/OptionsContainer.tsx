import {useTranslations} from 'next-intl';
import { OPTIONS } from '@/constants';

const OptionsContainer = () => {
  const t = useTranslations('Information')
  return (
    <div style={{marginBottom: "5%"}}>
      <div >
        {OPTIONS.map((element, index) => (
          <div key={index}>
            <div className='information_options_display'>
              <img
                src={element.src}
                alt='options'
                width='100%'
                height='auto'
                style={{borderRadius: "10px"}}
                className='information_option_width'
              />
              <div className='information_option_width information_text_container_left_margin'>
                <p className='options_title'>{t(`transport.${index}.title`)}</p>
                <p className='options_text'>{t(`transport.${index}.description`)}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default OptionsContainer