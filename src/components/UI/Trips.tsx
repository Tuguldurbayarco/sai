import { TOURS_IMAGES, TOURS_IMAGES_2 } from '@/constants'
import {useTranslations} from 'next-intl';
import Link from "next/link";

const Trips = () => {
  const t = useTranslations('Tours');
  return (
    <div >
      <h2 className='tour_items_header trocchi-regular'>{t('title')}</h2>
      <div style={{display: "flex", flexWrap: "wrap", justifyContent: "space-between"}}>
        {TOURS_IMAGES.map((element, index) => (
          <div key={element.id} className='main_page_three_tours_container'>
            <a href={element.href}>
              <img 
                key={element.id} 
                src={element.src} 
                width='100%' 
                height="auto"
                style={{borderRadius: "10px"}}
              /> 
            </a>
            <div style={{textAlign: "center", padding: "1%"}}>
              <Link href={element.href} className='mainpage_festivals_title trocchi-regular'>
                {t(`tourList.${index}.title`)}
              </Link>
            </div>
          </div>
        ))}
      </div>
      <div style={{display: "flex", flexWrap: "wrap", justifyContent: "space-between", marginTop: "0.7%"}}>
        {TOURS_IMAGES_2.map((elem, ind) => (
          <div key={elem.id} className='main_page_two_tours_container'>
            <a href={elem.href}>
              <img 
                key={elem.id} 
                src={elem.src} 
                width='100%' 
                height="auto"
                style={{borderRadius: "10px"}}
              /> 
            </a>
            <div style={{textAlign: "center", marginBottom: "5%", padding: "1%"}}>
              <Link href={elem.href} className='mainpage_festivals_title trocchi-regular'>
                {t(`tourList.${ind + 3}.title`)}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Trips