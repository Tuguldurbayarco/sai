import FooterInput from "./UI/FooterInput"
import {useTranslations} from 'next-intl';
import { links } from "@/constants";
import Link from "next/link"

const Footer = () => {
  const t = useTranslations('Footer');

  return (
    <footer style={{ backgroundColor: "#3d3d3b" }}>
      <div className="visibility_area">
        <div className="footer_display">
          <div className="footer_first_column">
            {/* 1 column */}
            <div style={{color: "#fff"}}>
              <h2 className="footer_containers_title">{t('title2')}</h2>
              <div>
                {links.map((link, index) => (
                  <li key={link.key} style={{ display: 'block', marginBottom: "2%" }}>
                    <Link href={link.href} key={link.key} style={{textDecoration: "none", color: "#fff"}} className="footer_containers_text">
                      {t(`links.${index}.title`)}
                    </Link>
                  </li>
                ))}
              </div>
            </div>
          </div>
          {/* 2 column */}
          <div className="footer_second_column">
            <div style={{color: "#fff"}} >
              <h2 className="footer_containers_title">{t('title1')}</h2>
              <div className="footer_containers_text">
                <p>
                  Ulaanbaatar, Mongolia,<br />
                  Bayangol District, 9th Khoroo,<br />
                  3-2 building, {t('address')}
                </p>
                <div>
                  <strong >{t('phone')} </strong>
                  +976-88109099<br />
                  <strong style={{opacity: "0"}}>{t('phone')} </strong>
                  +976-89750308<br /> 
                </div>
                <p>
                  <strong>{t('mail')} </strong>
                  info@saibaitour.mn<br />
                </p>
              </div>
            </div>
          </div>
          {/* 3 column */}
          <div className="footer_third_column">
            <div style={{color: "#fff"}}>
              <h2 className="footer_containers_title">{t('title3')}</h2>
            </div>
            <div style={{gap: "2%", display: "flex", width: "100%"}}>
              <div>
                {/*<FooterInput/>*/}
                <FooterInput 
                  title={t('ntitle')} 
                  mail={t('ntitle1')} 
                  messages={t('ntitle2')} 
                  button={t('button')} 
                  pl1={t('placeholder1')} 
                  pl2={t('placeholder2')}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style={{backgroundColor: "#282829", color: "#fff"}}>
        <div className="visibility_area" style={{display: "flex", justifyContent: "space-between", paddingTop: "2%", paddingBottom: "1.3%"}}>
          <div>
            <p>©Saibai Tour LLC. 2024</p>
          </div>
          <div>
            <a href="/terms-conditions"></a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

