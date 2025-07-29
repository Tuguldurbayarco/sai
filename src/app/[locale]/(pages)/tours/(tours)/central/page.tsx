import Link from 'next/link';
import '../../../../../../components/UI/button.css';
import {getTranslations} from 'next-intl/server';
import {unstable_setRequestLocale} from 'next-intl/server';

const Central = async ({params: {locale}}: {params: {locale: string}}) => {
  unstable_setRequestLocale(locale);
  const t = await getTranslations('Central');
  return (
    <div className='tours_and_events_margin_top'>
      <div className='visibility_area'> {/*For description*/}
        <div>
          <div style={{position: 'relative', padding: "1%", backgroundColor: "#ffde4d"}}>
            <img
              src='/mapcenter.png'
              alt='Route'
            />
          </div>
          <div className='tours_background_color'>
            <h1 className='tours_main_description_header'>{t('picture_text')}</h1>
            <p className='tours_main_description'>{t('description')}</p>
          </div>
          <div style={{position: 'relative'}}>
            <img
              src='/cet0.jpg'
              alt='Ulaanbaatar'
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
            <p className='tours_page_main_header'></p>
          </div>
          <div style={{display: "flex", padding: "2%", backgroundColor: "#f6f5ff"}}>
            <div style={{width: "100%", marginRight: "8%"}}>{/*left cont*/}
              <div>
                <p className='tour_left_column_header'>{t('day1')}</p>
              </div>
              <div>
                <p className='tour_left_column_text'>{t('day1text')}</p>
              </div>
              <div>
                <p className='tour_left_column_subheader'>{t('attention')}</p>
                <p className='tour_left_column_text_sec'>{t('att_desc')}</p>
              </div>
            </div>
            <div style={{width: "100%"}}>{/*right cont*/}
              <div>
                <p className='tour_left_column_header'>{t('program')}</p>
              </div>
              <div className='tour_right_column_text'>
                <ul style={{fontWeight: "500", marginBottom: "1%"}}>
                  <li>{t('schedule1-1')}</li>
                  <li>{t('schedule1-2')}</li>
                  <li>{t('schedule1-3')}</li>
                  <li>{t('schedule1-4')}</li>
                  <li>{t('schedule1-5')}</li>
                  <li>{t('schedule1-6')}</li>
                  <li>{t('schedule1-7')}</li>
                </ul>
              </div>
              <div style={{display: "flex", gap: "2.2%", marginRight: "3%", alignItems: 'flex-start'}}>
                <p className='tour_right_column_icons_text'>
                  <img src='/eat.png' alt="eat" style={{backgroundColor: "#32a848", borderRadius: "8px"}} className='tour_right_column_icons'/>{t('icon1')}
                </p>
                <p className='tour_right_column_icons_text'>
                  <img src='/wifi.png' alt="wifi" style={{backgroundColor: "#32a848", borderRadius: "8px"}} className='tour_right_column_icons'/>3g/4g
                </p>
                <p className='tour_right_column_icons_text'>
                  <img src='/shower.png' alt="shower" style={{backgroundColor: "#32a848", borderRadius: "8px"}} className='tour_right_column_icons'/>{t('icon4')}
                </p>
                <p className='tour_right_column_icons_text'>
                  <img src='/bulb.png' alt="bulb" style={{backgroundColor: "#32a848", borderRadius: "8px"}} className='tour_right_column_icons'/>{t('icon5')}
                </p>
                <p className='tour_right_column_icons_text'>
                  <img src='/battery.png' alt="battery" style={{backgroundColor: "#32a848", borderRadius: "8px"}} className='tour_right_column_icons'/>{t('icon3')}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div> 
          <div style={{position: 'relative'}}>
            <img
              src='/cet1.jpg'
              alt='Ulaanbaatar'
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
          <div style={{display: "flex", padding: "2%", backgroundColor: "#f6f5ff"}}>
            <div style={{width: "100%", marginRight: "8%"}}>{/*left cont*/}
              <div>
                <p className='tour_left_column_header'>{t('day2')}</p>
              </div>
              <div>
                <p className='tour_left_column_text'>{t('day2text')}</p>
              </div>
              <div>
                <p className='tour_left_column_subheader'>{t('attention2')}</p>
                <p className='tour_left_column_text_sec'>{t('att_desc2')}</p>
              </div>
            </div>
            <div style={{width: "100%"}}>{/*right cont*/}
              <div>
                <p className='tour_left_column_header'>{t('program')}</p>
              </div>
              <div className='tour_right_column_text'>
                <ul style={{fontWeight: "500", marginBottom: "1%"}}>
                  <li>{t('schedule2-1')}</li>
                  <li>{t('schedule2-2')}</li>
                  <li>{t('schedule2-3')}</li>
                  <li>{t('schedule2-4')}</li>
                  <li>{t('schedule2-5')}</li>
                </ul>
              </div>
              <div style={{display: "flex", gap: "2.2%", marginRight: "3%", alignItems: 'flex-start'}}>
                <p className='tour_right_column_icons_text'>
                  <img src='/eat.png' alt="eat" style={{backgroundColor: "#32a848", borderRadius: "8px"}} className='tour_right_column_icons'/>{t('icon1')}
                </p>
                <p className='tour_right_column_icons_text'>
                  <img src='/wifi.png' alt="wifi" style={{backgroundColor: "#32a848", borderRadius: "8px"}} className='tour_right_column_icons'/>3g/4g
                </p>
                <p className='tour_right_column_icons_text'>
                  <img src='/shower.png' alt="shower" style={{backgroundColor: "#32a848", borderRadius: "8px"}} className='tour_right_column_icons'/>{t('icon4')}
                </p>
                <p className='tour_right_column_icons_text'>
                  <img src='/bulb.png' alt="bulb" style={{backgroundColor: "#32a848", borderRadius: "8px"}} className='tour_right_column_icons'/>{t('icon5')}
                </p>
                <p className='tour_right_column_icons_text'>
                  <img src='/battery.png' alt="battery" style={{backgroundColor: "#32a848", borderRadius: "8px"}} className='tour_right_column_icons'/>{t('icon3')}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div >
          <div style={{position: 'relative'}}>
            <img
              src='/cet3.jpg'
              alt='Ulaanbaatar'
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
          <div style={{display: "flex", padding: "2%", backgroundColor: "#f6f5ff"}}>
            <div style={{width: "100%", marginRight: "8%"}}>{/*left cont*/}
              <div>
                <p className='tour_left_column_header'>{t('day3')}</p>
              </div>
              <div>
                <p className='tour_left_column_text'>{t('day3text')}</p>
              </div>
              <div>
                <p className='tour_left_column_subheader'></p>
                <p className='tour_left_column_text_sec'>{t('attention3')}</p>
              </div>
            </div>
            <div style={{width: "100%"}}>{/*right cont*/}
              <div>
                <p className='tour_left_column_header'>{t('program')}</p>
              </div>
              <div className='tour_right_column_text'>
                <ul style={{fontWeight: "500", marginBottom: "1%"}}>
                  <li>{t('schedule3-1')}</li>
                  <li>{t('schedule3-2')}</li>
                  <li>{t('schedule3-3')}</li>
                  <li>{t('schedule3-4')}</li>
                  <li>{t('schedule3-5')}</li>
                  <li>{t('schedule3-6')}</li>
                </ul>
              </div>
              <div style={{display: "flex", gap: "2.2%", marginRight: "3%", alignItems: 'flex-start'}}>
                <p className='tour_right_column_icons_text'>
                  <img src='/eat.png' alt="eat" style={{backgroundColor: "#32a848", borderRadius: "8px"}} className='tour_right_column_icons'/>{t('icon1')}
                </p>
                <p className='tour_right_column_icons_text'>
                  <img src='/wifi.png' alt="wifi" style={{backgroundColor: "#32a848", borderRadius: "8px"}} className='tour_right_column_icons'/>3g/4g
                </p>
                <p className='tour_right_column_icons_text'>
                  <img src='/shower.png' alt="shower" style={{backgroundColor: "#32a848", borderRadius: "8px"}} className='tour_right_column_icons'/>{t('icon4')}
                </p>
                <p className='tour_right_column_icons_text'>
                  <img src='/bulb.png' alt="bulb" style={{backgroundColor: "#32a848", borderRadius: "8px"}} className='tour_right_column_icons'/>{t('icon5')}
                </p>
                <p className='tour_right_column_icons_text'>
                  <img src='/battery.png' alt="battery" style={{backgroundColor: "#32a848", borderRadius: "8px"}} className='tour_right_column_icons'/>{t('icon3')}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div> 
          <div style={{position: 'relative'}}>
            <img
              src='/cet4.jpg'
              alt='Ulaanbaatar'
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
          <div style={{display: "flex", padding: "2%", backgroundColor: "#f6f5ff"}}>
            <div style={{width: "100%", marginRight: "8%"}}>{/*left cont*/}
              <div>
                <p className='tour_left_column_header'>{t('day4')}</p>
              </div>
              <div>
                <p className='tour_left_column_text'>{t('day4text')}</p>
              </div>
              <div>
                <p className='tour_left_column_subheader'>{t('attention4')}</p>
                <p className='tour_left_column_text_sec'> {t('att_desc4_1')} <br/>{t('att_desc4_2')}<br/>{t('att_desc4_3')}</p>
              </div>
            </div>
            <div style={{width: "100%"}}>{/*right cont*/}
              <div>
                <p className='tour_left_column_header'>{t('program')}</p>
              </div>
              <div className='tour_right_column_text'>
                <ul style={{fontWeight: "500", marginBottom: "1%"}}>
                  <li>{t('schedule4-1')}</li>
                  <li>{t('schedule4-2')}</li>
                  <li>{t('schedule4-3')}</li>
                  <li>{t('schedule4-4')}</li>
                  <li>{t('schedule4-5')}</li>
                  <li>{t('schedule4-6')}</li>
                </ul>
              </div>
              <div style={{display: "flex", gap: "2.2%", marginRight: "3%", alignItems: 'flex-start'}}>
                <p className='tour_right_column_icons_text'>
                  <img src='/eat.png' alt="eat" style={{backgroundColor: "#32a848", borderRadius: "8px"}} className='tour_right_column_icons'/>{t('icon1')}
                </p>
                <p className='tour_right_column_icons_text'>
                  <img src='/wifi.png' alt="wifi" style={{backgroundColor: "#32a848", borderRadius: "8px"}} className='tour_right_column_icons'/>3g/4g
                </p>
                <p className='tour_right_column_icons_text'>
                  <img src='/shower.png' alt="shower" style={{backgroundColor: "#32a848", borderRadius: "8px"}} className='tour_right_column_icons'/>{t('icon4')}
                </p>
                <p className='tour_right_column_icons_text'>
                  <img src='/bulb.png' alt="bulb" style={{backgroundColor: "#32a848", borderRadius: "8px"}} className='tour_right_column_icons'/>{t('icon5')}
                </p>
                <p className='tour_right_column_icons_text'>
                  <img src='/battery.png' alt="battery" style={{backgroundColor: "#32a848", borderRadius: "8px"}} className='tour_right_column_icons'/>{t('icon3')}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div style={{ marginBottom: "5%"}}> {/*удалить отсуп снизу*/}
          <div style={{position: 'relative'}}>
            <img
              src='/cet5.jpg'
              alt='Ulaanbaatar'
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
          <div style={{display: "flex", padding: "2%", backgroundColor: "#f6f5ff"}}>
            <div style={{width: "100%", marginRight: "8%"}}>{/*left cont*/}
              <div>
                <p className='tour_left_column_header'>{t('day5')}</p>
              </div>
              <div>
                <p className='tour_left_column_text'>{t('day5text')}</p>
              </div>
              <div>
                <p className='tour_left_column_subheader' style={{ visibility: 'hidden' }}> text</p>
                <p className='tour_left_column_text_sec' style={{ visibility: 'hidden' }}> text</p>
              </div>
            </div>
            <div style={{width: "100%"}}>{/*right cont*/}
              <div>
                <p className='tour_left_column_header'>{t('program')}</p>
              </div>
              <div className='tour_right_column_text'>
                <ul style={{fontWeight: "500", marginBottom: "1%"}}>
                  <li>{t('schedule5-1')}</li>
                  <li>{t('schedule5-2')}</li>
                  <li>{t('schedule5-3')}</li>
                  <li>{t('schedule5-4')}</li>
                </ul>
              </div>
              <div style={{display: "flex", gap: "2.2%", marginRight: "3%", alignItems: 'flex-start'}}>
                <p className='tour_right_column_icons_text'>
                  <img src='/eat.png' alt="eat" style={{backgroundColor: "#32a848", borderRadius: "8px"}} className='tour_right_column_icons'/>{t('icon1')}
                </p>
                <p className='tour_right_column_icons_text'>
                  <img src='/wifi.png' alt="wifi" style={{backgroundColor: "#32a848", borderRadius: "8px"}} className='tour_right_column_icons'/>3g/4g
                </p>
                <p className='tour_right_column_icons_text'>
                  <img src='/shower.png' alt="shower" style={{backgroundColor: "#32a848", borderRadius: "8px"}} className='tour_right_column_icons'/>{t('icon4')}
                </p>
                <p className='tour_right_column_icons_text'>
                  <img src='/bulb.png' alt="bulb" style={{backgroundColor: "#32a848", borderRadius: "8px"}} className='tour_right_column_icons'/>{t('icon5')}
                </p>
                <p className='tour_right_column_icons_text'>
                  <img src='/battery.png' alt="battery" style={{backgroundColor: "#32a848", borderRadius: "8px"}} className='tour_right_column_icons'/>{t('icon3')}
                </p>
              </div>
              <div style={{marginTop: "2%", bottom: 0}}>
                <Link href="/contacts/#targetBlock" className='myButton'>
                  {t('button')}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Central