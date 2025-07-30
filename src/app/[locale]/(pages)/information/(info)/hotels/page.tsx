import {unstable_setRequestLocale} from 'next-intl/server';
import {getTranslations} from 'next-intl/server';
import '../../../../globals.css';

const Hotels = async ({params: {locale}}: {params: {locale: string}}) => {
  unstable_setRequestLocale(locale);
  const t = await getTranslations('Accommodation')
  return (
    <div className='visibility_area'>
      <div className='hotels_display hotels_top_margin'>
        <div className='hotel_image hotels_container_display'>
          <a href='https://www.shangri-la.com/en/ulaanbaatar/shangrila/' target="_blank">
            <img
              src='/shangri.jpg'
              alt='hotel'
            />
          </a>
          <a className='hotels_container_text shangri_la_hotel' href='https://www.shangri-la.com/en/ulaanbaatar/shangrila/' target="_blank">{t(`hotels.${0}.title`)}</a>
        </div>
        <div className='hotel_image hotels_container_display'>
          <a href='https://hotelbluesky.mn/' target="_blank">
            <img
              src='/blue-sky.jpg'
              alt='hotel'
            />
          </a>
          <a className='hotels_container_text blue_sky_hotel' href='https://hotelbluesky.mn/' target="_blank" >{t(`hotels.${1}.title`)}</a>
        </div>
        <div className='hotel_image hotels_container_display'>
          <a href='https://www.ramadaub.mn/' target="_blank">
            <img
              src='/ramada.jpg'
              alt='hotel'
            />
          </a>
          <a className='hotels_container_text ramada_hotel' href='https://www.ramadaub.mn/' target="_blank">{t(`hotels.${2}.title`)}</a>
        </div>
      </div>
      <div className='hotels_display'>
      <div className='hotel_image hotels_container_display'>
          <a href='https://www.edelweiss.mn/#section-0' target="_blank">
            <img
              src='/edel.jpg'
              alt='hotel'
            />
          </a>
          <a className='hotels_container_text edelweiss_hotel' href='https://www.edelweiss.mn/#section-0' target="_blank">{t(`hotels.${3}.title`)}</a>
        </div>
        <div className='hotel_image hotels_container_display'>
          <a href='https://www.kempinski.com/en' target="_blank">
            <img
              src='/kemp.jpg'
              alt='hotel'
            />
          </a>
          <a className='hotels_container_text kempinski_hotel' href='https://www.kempinski.com/en' target="_blank" >{t(`hotels.${4}.title`)}</a>
        </div>
        <div className='hotel_image hotels_container_display'>
          <a href='https://mika.mn/' target="_blank">
            <img
              src='/mika.jpg'
              alt='hotel'
            />
          </a>
          <a className='hotels_container_text mika_hotel' href='https://mika.mn/' target="_blank">{t(`hotels.${5}.title`)}</a>
        </div>
      </div>
      <div className='hotels_display'>
      <div className='hotel_image hotels_container_display'>
          <a href='https://ubcontinentalhotel.com/' target="_blank">
            <img
              src='/cont.jpg'
              alt='hotel'
            />
          </a>
          <a className='hotels_container_text continental_hotel' href='https://ubcontinentalhotel.com/' target="_blank">{t(`hotels.${6}.title`)}</a>
        </div>
        <div className='hotel_image hotels_container_display'>
          <a href='https://www.booking.com/hotel/mn/khongor-guest-house-amp-tours.en-gb.html?aid=397607&label=gog235jc-1FCAEoggI46AdIM1gDaJYBiAEBmAEJuAEXyAEM2AEB6AEB-AEMiAIBqAIDuAKzoauvBsACAdICJDljYWU5NzBkLTlkNzMtNDA2Mi04YWJhLWJjMzY3ZGE4NzkwYdgCBuACAQ&sid=02ef0e93167b364c6709feaed54be1c4&dest_id=-2353539&dest_type=city&dist=0&group_adults=2&group_children=0&hapos=9&hpos=9&no_rooms=1&req_adults=2&req_children=0&room1=A%2CA&sb_price_type=total&sr_order=popularity&srepoch=1709887706&srpvid=f4b73ddfe12900eb&type=total&ucfs=1&activeTab=main' target="_blank">
            <img
              src='/khon.jpg'
              alt='guesthouse'
            />
          </a>
          <a className='hotels_container_text khongor_guesthouse' href='https://www.booking.com/hotel/mn/khongor-guest-house-amp-tours.en-gb.html?aid=397607&label=gog235jc-1FCAEoggI46AdIM1gDaJYBiAEBmAEJuAEXyAEM2AEB6AEB-AEMiAIBqAIDuAKzoauvBsACAdICJDljYWU5NzBkLTlkNzMtNDA2Mi04YWJhLWJjMzY3ZGE4NzkwYdgCBuACAQ&sid=02ef0e93167b364c6709feaed54be1c4&dest_id=-2353539&dest_type=city&dist=0&group_adults=2&group_children=0&hapos=9&hpos=9&no_rooms=1&req_adults=2&req_children=0&room1=A%2CA&sb_price_type=total&sr_order=popularity&srepoch=1709887706&srpvid=f4b73ddfe12900eb&type=total&ucfs=1&activeTab=main' target="_blank" > {t(`hotels.${7}.title`)}</a>
        </div>
        <div className='hotel_image hotels_container_display'>
          <a href='https://www.booking.com/hotel/mn/nomuun-town.en-gb.html?aid=356980&label=gog235jc-1DCAsolgFCC25vbXV1bi10b3duSDNYA2iWAYgBAZgBCbgBF8gBDNgBA-gBAYgCAagCA7gCprrPrwbAAgHSAiQ4ZjIxMzAyOC04ZTE2LTRjYTktYmViZS1hYzM5MGNmOGM5ZmLYAgTgAgE&sid=02ef0e93167b364c6709feaed54be1c4&dist=0&keep_landing=1&sb_price_type=total&type=total&' target="_blank">
            <img
              src='/mash.jpg'
              alt='guesthouse'
            />
          </a>
          <a className='hotels_container_text mash_guesthouse' href='https://www.booking.com/hotel/mn/nomuun-town.en-gb.html?aid=356980&label=gog235jc-1DCAsolgFCC25vbXV1bi10b3duSDNYA2iWAYgBAZgBCbgBF8gBDNgBA-gBAYgCAagCA7gCprrPrwbAAgHSAiQ4ZjIxMzAyOC04ZTE2LTRjYTktYmViZS1hYzM5MGNmOGM5ZmLYAgTgAgE&sid=02ef0e93167b364c6709feaed54be1c4&dist=0&keep_landing=1&sb_price_type=total&type=total&' target="_blank">{t(`hotels.${8}.title`)}</a>
        </div>
      </div>
    </div>
  )
}

export default Hotels