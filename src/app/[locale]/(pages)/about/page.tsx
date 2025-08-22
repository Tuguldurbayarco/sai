import { createTranslator, isValidLocale, defaultLocale } from "@/lib/i18n";
import CarsSlider from '@/components/UI/CarsSlider';

const About = ({params: {locale}}: {params: {locale: string}}) => {  const validLocale = isValidLocale(locale) ? locale : defaultLocale;
  const t = createTranslator(validLocale);  return (
    <div>
      <div>
        <img
          src='/bt0.jpg'
          alt='Name'
          width='100%'
        />
        <div className='header_container_for_picture'>
          <h1 className='header_on_picture'>{t('About.title')}</h1>
        </div>
      </div>
      <div className='visibility_area'>
        <p className='about_titles'>{t('About.subtitle')}</p>
        <div style={{justifyContent: "center", textAlign: "justify"}}>
          <p className='about_text'>{t('About.text')}</p>
          <div>
            <h2 style={{marginBottom: "2%"}} className='about_titles'>{t('About.vehicle')}</h2>
            <CarsSlider/>
            <p className='cars_desciption'>{t('About.cars_desc')}</p>
          </div>
          <div>
            <h2 style={{marginBottom: "2%"}} className='about_titles'>{t('About.goals_header')}</h2>
          </div>
          <div className='about_true_positioning about_position_margin_between_block'>
            <div className='about_chess_text_container about_border_top_left_radius about_block_border_top_right_radius'>
              <h2 className='about_chess_header'>{t('About.mission')}</h2>
              <ul className='about_mission_text' style={{listStyleType: "disc"}}>
                <li>{t(`About.mission_desc.${0}.title`)}</li>
                <li>{t(`About.mission_desc.${1}.title`)}</li>
                <li>{t(`About.mission_desc.${2}.title`)}</li>
                <li>{t(`About.mission_desc.${3}.title`)}</li>
                <li>{t(`About.mission_desc.${4}.title`)}</li>
              </ul>
            </div>
            <div className='about_chess_image_container about_border_top_right_radius about_block_border_bottom_right_radius about_block_border_bottom_left_radius'>
              <img
                src='/bt1.jpg'
                className='about_image_styles'
                alt="Image"
              />
            </div>
          </div>
          <div className='about_true_positioning about_position_margin_between_block'>
            <div className='about_chess_image_container about_block_border_top_left_radius about_block_border_top_right_radius'>
              <img
                src='/bt3.jpg'
                className='about_image_styles'
                alt="Image"
              />
            </div>
            <div className='about_chess_text_container about_block_border_bottom_right_radius about_block_border_bottom_left_radius'>
              <h2 className='about_chess_header'>{t('About.team')}</h2>
              <p className='about_mission_text'>{t('About.team_desc')}</p>
            </div>
          </div>
          <div className='about_true_positioning'>
            <div className='about_chess_text_container about_border_bottom_left_radius about_block_border_top_left_radius about_block_border_top_right_radius'>
              <h2 className='about_chess_header'>{t('About.staff')}</h2>
              <p className='about_mission_text'>{t('About.staff_desc')}</p>
            </div>
            <div className='about_chess_image_container about_border_bottom_right_radius about_block_border_bottom_right_radius about_block_border_bottom_left_radius'>
              <img
                src='/staff.jpg'
                className='about_image_styles'
                alt="Заполняющее изображение"
              />
            </div>
          </div>
          <div>
            <h2 className='about_titles' style={{marginTop: "3%"}}>ACCREDITATION</h2>
            <img
              src='/cert.png'
              className='about_image_styles'
              alt="certificate"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default About

