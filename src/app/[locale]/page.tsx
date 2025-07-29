import Slider from "@/components/UI/Slider";
import Festivals from "@/components/UI/Festivals";
import Trips from "@/components/UI/Trips";
import Link from "next/link";
import {getTranslations} from 'next-intl/server';
import {unstable_setRequestLocale} from 'next-intl/server';
import IndividualTours from "@/components/UI/IndividualTours";
import Accommodation from "@/components/UI/Accomodation";

export default async function Index({params: {locale}}: {params: {locale: string}}) {
  unstable_setRequestLocale(locale);
  const t = await getTranslations('Index');
  return (
    <main>
      <div>
        <div>
          <Slider />
        </div>
        <div className="header_container_for_picture">
          <p className="mainpage_header_on_pictute">{t('title')} <br />{t('subtitle')}</p>
          <Link href="/contacts/#targetBlock" className="mainpage_link_on_pictute">
            {t('link')}
          </Link>
        </div>
      </div>
      <div className="visibility_area" >
        <h2 className="tour_items_header trocchi-regular">{t('header')}</h2>
        <div>
          <Festivals/>
        </div>
        <div>
          <Trips/>
        </div>
        <div>
          <IndividualTours/>
        </div>
        <div>
          <Accommodation params={{
            locale: ""
          }}/>
        </div>
      </div>
    </main>
  );
}
