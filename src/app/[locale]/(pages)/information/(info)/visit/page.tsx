import {getTranslations} from 'next-intl/server';
import SeasonsSlider from '@/components/UI/SeasonsSlider';
import {unstable_setRequestLocale} from 'next-intl/server';

const Visit = async ({params: {locale}}: {params: {locale: string}}) => {
  unstable_setRequestLocale(locale);
  const t = await getTranslations('Information');
  return (
    <div>
      <div>
        <div>
          <SeasonsSlider  
            winter={t('seasons.title1')}
            winterDescription1={t('seasons.description1')}
            winterDescription2={t('seasons.description1-1')}
            spring={t('seasons.title2')}
            springDescription1={t('seasons.description2')}
            springDescription2={t('seasons.description2-1')}
            summer={t('seasons.title3')}
            summerDescription1={t('seasons.description3')}
            summerDescription2={t('seasons.description3-1')}
            autumn={t('seasons.title4')}
            autumnDescription1={t('seasons.description4')}
            autumnDescription2={t('seasons.description4-1')}
          />
        </div>
        <div className='seasons_title_positioning'>
          <p className='seasons_title_on_picture'>{t('visit')}</p>
        </div>
      </div>
    </div>
  )
}

export default Visit  