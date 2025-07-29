import {useTranslations} from 'next-intl';
import Image from 'next/image'
import { FESTIVALS } from '@/constants'
import Link from "next/link";

const Festivals = () => {
  const t = useTranslations('Events');
  return (
    <div style={{display: "flex", flexWrap: "wrap", justifyContent: "space-between"}}>
      {FESTIVALS.map((element, index) => (
        <div key={index} className='main_page_festivals_container'>
          <a href={element.href}>
            <img
              src={element.src}
              alt='festivals'
              width='100%'
              height='auto'
              style={{borderRadius: "10px"}}
            />
          </a>
          <div style={{textAlign: "center", padding: "1%", marginBottom: "4%"}}>
            <Link href={element.href} className='mainpage_festivals_title trocchi-regular'>
              {t(`festivals.${index}.title`)}
            </Link>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Festivals