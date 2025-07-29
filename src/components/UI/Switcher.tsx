import { useLocale } from 'next-intl';
import React from 'react';
import {useTranslations} from 'next-intl';

export default function LocalSwitcher() {
  const t = useTranslations('Index');
  const localActive = useLocale();

  const handleImageClick = () => {
    const nextLocale = localActive === 'ko' ? 'en' : 'ko';
    location.href = `/${nextLocale}`;
  };

  return (
    <div onClick={handleImageClick} className='switcher_btn' style={{ cursor: 'pointer' }}>
      <img 
        src={localActive === 'ko' ? '/g-britain.png' : '/s-korea.png'}
        alt='switcher flag'
        height="auto"
        width="36px"
      />
    </div>
  )
}
