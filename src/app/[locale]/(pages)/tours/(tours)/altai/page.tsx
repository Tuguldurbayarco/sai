import Link from 'next/link';
import '../../../../../../components/UI/button.css';
import {getTranslations} from 'next-intl/server';
import {unstable_setRequestLocale} from 'next-intl/server';

const Altai = async ({params: {locale}}: {params: {locale: string}}) => {
  unstable_setRequestLocale(locale);
  const t = await getTranslations('Tours');
  return (
    <div className='tours_and_events_margin_top'>
      <div className='visibility_area'> {/*For description*/}
        <div>
          <div style={{position: 'relative', padding: "1%", backgroundColor: "#ffde4d"}}>
            <img
              src='/altai_tour.jpg'
              alt='Route'
            />
          </div>
          <div style={{ padding: "2%", backgroundColor: "#f6f5ff"}}>
            <h2 className='tour_left_column_header'>{t('altai_tour_title')}</h2>
            <p className='tour_individual_text'>{t('altai_tour_text')}</p>
            <p className='tour_individual_text'>{t('altai_tour_text2')}</p>
            <div style={{marginTop: "2%", bottom: 0}}>
              <Link href="/contacts/#targetBlock" className='myButton '>
                {t('altai_tour_button')}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Altai