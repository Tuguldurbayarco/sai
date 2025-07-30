import {getTranslations} from 'next-intl/server';
import OptionsContainer from '@/components/UI/OptionsContainer'
import {unstable_setRequestLocale} from 'next-intl/server';

const Information = async ({params: {locale}}: {params: {locale: string}}) => {
  unstable_setRequestLocale(locale);
  const t = await getTranslations('Information');
  return (
    <div className='visibility_area' > 
      <div className='information_margin'>
        <p className='information_main_header'>{t('title')}</p>
        <div >
          <img
            src='/mongolia.jpg'
            style={{ margin: "0 auto", display: "block"}}
          />
        </div>
        <div>
          <p className='information_second_header'>{t('subtitle')}</p>
          <p className='information_desc'>{t('text')}</p>
        </div>
      </div>
      <div>
        <div>
          <img
            src='/terelj.jpg'
            alt='picture'
            width='100%'
            style={{marginBottom: "2.7%", borderRadius: "10px"}}
          />
          <div>
            <div className='information_space'>
              <img
                src='/cousine1.jpg'
                alt='food'
                width='50%'
                style={{borderBottomLeftRadius: "10px", borderTopLeftRadius: "10px"}}
              />
              <img
                src='/cousine2.jpg'
                alt='meal'
                width='50%'
                style={{borderBottomRightRadius: "10px", borderTopRightRadius: "10px"}}
              />
            </div>
            <div style={{marginTop: "2%"}}>
              <p className='information_second_header' style={{marginBottom: "2%"}}>{t('cuisine')}</p>
              <p className='information_desc'>{t('cuisine_desc')}</p>
            </div>
          </div>
          <div>
            <div className='information_space'>
              <img
                src='/culture.jpg'
                alt='song'
                width='100%'
                style={{borderRadius: "10px"}}
              />
            </div>
            <div style={{marginTop: "2%"}}>
              <p className='information_second_header' style={{marginBottom: "2%"}}>{t('culture')}</p>
              <p className='information_desc'>{t('culture_desc')}</p>
            </div>
          </div>
          <div>
            <div className='information_space'>
              <img
                src='/kashmere.jpg'
                alt='cashmere'
                width='100%'
                style={{borderRadius: "10px"}}
              />
            </div>
            <div style={{marginTop: "2%"}}>
              <p className='information_second_header' style={{marginBottom: "2%"}}>{t('cashmere')}</p>
              <p className='information_desc'>{t('kashmere_desc')}</p>
            </div>
          </div>
          <div>
            <div className='information_space'>
              <img
                src='/muse.jpg'
                alt='Museums'
                width='100%'
                style={{borderRadius: "10px"}}
              />
            </div>
            <div style={{marginTop: "2%"}}>
              <p className='information_second_header' style={{marginBottom: "2%"}}>{t('museum')}</p>
              <p className='information_desc'>{t(`museum_list.${0}.title`)} <br/> {t(`museum_list.${1}.title`)}  <br/>{t(`museum_list.${2}.title`)}  <br/>{t(`museum_list.${3}.title`)} <br/>{t(`museum_list.${4}.title`)} <br/>{t(`museum_list.${5}.title`)} <br/>{t(`museum_list.${6}.title`)}<br/> {t(`museum_list.${7}.title`)} <br/>{t(`museum_list.${8}.title`)} <br/>{t(`museum_list.${9}.title`)} <br/>{t(`museum_list.${10}.title`)}</p>
            </div>
          </div>
          <div>
            <div className='information_space'>
              <img
                src='/temp.jpg'
                alt='Temples'
                width='100%'
                style={{borderRadius: "10px"}}
              />
            </div>
            <div style={{marginTop: "2%"}}>
              <p className='information_second_header' style={{marginBottom: "2%"}}>{t('temple')}</p>
              <p className='information_desc'>{t(`temple_list.${0}.title`)} <br/> {t(`temple_list.${1}.title`)} <br/> {t(`temple_list.${2}.title`)}</p>
            </div>
          </div>
          <div>
            <div className='information_space'>
              <img
                src='/music.jpg'
                alt='Music and free Time'
                width='100%'
                style={{borderRadius: "10px"}}
              />
            </div>
            <div style={{marginTop: "2%"}}>
              <p className='information_second_header' style={{marginBottom: "2%"}}>{t('music')}</p>
              <p className='information_desc'>{t(`music_list.${0}.title`)} <br/> {t(`music_list.${1}.title`)} <br/> {t(`music_list.${2}.title`)} <br/> {t(`music_list.${3}.title`)}<br/> {t(`music_list.${4}.title`)}</p>
            </div>
          </div>
          <div>
            <div className='information_space'>
              <img
                src='/rest.jpg'
                alt='Restaraunts'
                width='100%'
                style={{borderRadius: "10px"}}
              />
            </div>
            <div style={{marginTop: "2%"}}>
              <p className='information_second_header' style={{marginBottom: "2%"}}>{t('restaurante')}</p>
              <p className='information_desc'>{t(`restaurante_list.${0}.title`)}<br/> {t(`restaurante_list.${1}.title`)}<br/>{t(`restaurante_list.${2}.title`)}<br/>{t(`restaurante_list.${3}.title`)}<br/>{t(`restaurante_list.${4}.title`)}<br/>{t(`restaurante_list.${5}.title`)}<br/>{t(`restaurante_list.${6}.title`)}<br/>{t(`restaurante_list.${7}.title`)}<br/>{t(`restaurante_list.${8}.title`)}<br/>{t(`restaurante_list.${9}.title`)}<br/>{t(`restaurante_list.${10}.title`)}<br/>{t(`restaurante_list.${11}.title`)}<br/>{t(`restaurante_list.${12}.title`)}<br/>{t(`restaurante_list.${13}.title`)}</p>
            </div>
          </div>
        </div>
        <div>
          <p className='information_option'>{t('subtitle2')}</p>
          <OptionsContainer/>
        </div>
      </div>
    </div>
  )
}

export default Information
