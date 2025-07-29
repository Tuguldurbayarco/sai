import {getTranslations} from 'next-intl/server';
import {unstable_setRequestLocale} from 'next-intl/server';

const Terms = async ({params: {locale}}: {params: {locale: string}}) => {
  unstable_setRequestLocale(locale);
  const t = await getTranslations('Terms');
  return (
    <div style={{marginTop: "8%"}}>
      <div style={{width: "100%", height: "250px", backgroundColor: "#3d3d3b", color: '#fff'}}>
        <h1 style={{fontSize: "200%", fontWeight: "bolder", marginLeft: "15%", paddingTop: "4.5%"}}>TERMS & CONDITIONS</h1>
        <p style={{ marginLeft: "15%"}}>________________________</p>
      </div>
      <div className='visibility_area' style={{textAlign: "justify"}}>
        <h2>YOUR HOLIDAY CONTRACT</h2>
        <p>When you book a tour or other travel arrangements our contract with you takes effect when we send you a written Booking Confirmation / Invoice by email. Once the contract is made we are responsible for providing you with the tour you have booked and you are responsible to pay us for it, in each case subject to terms and conditions.</p>
        <h2 style={{marginTop: "5%"}}>PLEASE NOTE</h2>
        <p>It is important to check carefully the Booking Confirmation and the Itinerary of your tour when you receive it that all the details are exactly as you requested. Our responsibility is to provide you with the services you have booked as described in the itinerary and as confirmed to you. If your group consists of two or more people traveling together, the person who makes the tour booking by signing our booking form or otherwise contracting with us accepts the responsibility for making all payments to us for all members of the party. We will send all the documents and other relevant information to the lead guest, and the lead guest is responsible for ensuring that the other members of the party are kept fully informed. If you are aged under 18 /on the departure date/ and your parents or guardians are not traveling with you, we must have their written consent to proceed with the booking.</p>
      </div>
    </div>
  )
}

export default Terms