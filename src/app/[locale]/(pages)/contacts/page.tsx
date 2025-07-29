import {getTranslations} from 'next-intl/server';
import InputForm from '@/components/UI/InputForm';
import {unstable_setRequestLocale} from 'next-intl/server';

const Contacts = async ({params: {locale}}: {params: {locale: string}}) => {
  unstable_setRequestLocale(locale);
  const t = await getTranslations('Contacts');
  return (
    <div >
      <div style={{width: "100%"}}>
        <img 
          src='/2-2.jpg'
          alt='Contacts'
          width='100%'
          height='auto'
        />
        <div className='header_container_for_picture'>
          <h1 className='header_on_picture'>{t('title')}</h1>
        </div>
      </div>
      <div style={{width: "100%", height: "100%", textAlign: "center"}}> {/*Endehee*/}
        <div style={{width: "100%", height: "100%"}}>
          <div className='contact_plank'>
            <div style={{padding: "2%"}}>
              <img
                src='/phone.png'
                alt='phone'
                height='auto'
                className='contact_paddings'
              />
              <a href="tel:+97688109099" style={{textDecoration: "none"}}>+976-88109099<br /></a>
              <a href="tel:+97689750308" style={{textDecoration: "none"}}>+976-89750308</a>
            </div>
            <div style={{padding: "2%"}}>
              <img
                src='/email.png'
                alt='mail'
                height='auto'
                className='contact_paddings'
              />
              <a href="mailto:info@saibaitour.mn" style={{textDecoration: "none"}}>info@saibaitour.mn<br /></a>
            </div>
            <div style={{padding: "2%"}}>
              <img
                src='/location.png'
                alt='location'
                height='auto'
                className='contact_paddings'
              />
              <a href={`https://www.google.com/maps?q=${encodeURIComponent('47.924610, 106.863472')}`} target="_blank" rel="noopener noreferrer" style={{textDecoration: "none"}}>{t('fourth')}</a>
            </div>
            <div style={{padding: "2%"}}>
              <img
                src='/post.png'
                alt='post'
                height='auto'
                className='contact_paddings'
              />
              <p>16093-0024, 9 khoroo, 3-2 building,<br />Ulaanbaatar, Mongolia</p>
            </div>
          </div>
        </div>
      </div> {/*Ene hurter*/}
      <div className='visibility_area'>
        <div>
          <h2 className='contact_subheader'>{t('header')}</h2>
        </div>
        <div >
          <p className='contact_text'>{t('text')}</p>
        </div>
      </div>
      <div id="targetBlock" className='visibility_area'>
        <h2 className='contact_subheader'>{t('second')}</h2>
        <p className='contact_text' style={{textAlign: "center"}}>{t('third')}</p>
        <div className='visibility_area'>
          <InputForm
            formHeader={t('formHeader')}
            formTitle={t('name')}
            formPlaceholder1={t('first')}
            formPlaceholder2={t('last')}
            mail={t('email')}
            countryTitle={t('country')}
            tourTitle={t('tour')}
            numberTitle={t('number')}
            messageTitle={t('message')}
            agreeTitle={t('agree')}
            buttonTitle={t('button')}
            choice={t('choice')}
            disabled_mask1={t('disabled_mask1')}
            choice1={t('choice1')}
            choice2={t('choice2')}
            choice3={t('choice3')}
            choice4={t('choice4')}
            choice5={t('choice5')}
            disabled_mask2={t('disabled_mask2')}
            choice6={t('choice6')}
            choice7={t('choice7')}
            choice8={t('choice8')}
            country1={t('country1')}
            country2={t('country2')}
            country3={t('country3')}
            country4={t('country4')}
            country5={t('country5')}
            country6={t('country6')}
            country7={t('country7')}
            country8={t('country8')}
            country9={t('country9')}
            country10={t('country10')}
            country11={t('country11')}
            country12={t('country12')}
            country13={t('country13')}
          />
        </div>
      </div>
    </div>
  )
}

export default Contacts