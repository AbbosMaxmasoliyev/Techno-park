import React, {Component, useState} from 'react'



const Google = () => {
    // const [ekran1, setEkran]= useState();
 
    // document.getElementById("map1").setAttribute("width", ekran) ;
    // console.log(ekran);
    // setEkran(ekran);
  return (
    <div className='google'>
        <p className='title'>Bizning manzilimiz xaritada</p>
        <div className='google_block'>
            <div className='map'>
                <iframe  width="100%" height="342" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0" id="gmap_canvas" src="https://maps.google.com/maps?width=413&amp;height=242&amp;hl=en&amp;q=%20Samarkand%20viloyat%20yoshlar%20texnoparki+(Yoshlar%20texnoparki)&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>  <script type='text/javascript' src='https://embedmaps.com/google-maps-authorization/script.js?id=7225bdb35fe810cb1158c163529d4a0b08aed61b'></script>
            </div>
            <div className='map'>
            <iframe width="100%" height="342" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0" id="gmap_canvas" src="https://maps.google.com/maps?width=413&amp;height=242&amp;hl=en&amp;q=%20Samarkand%20viloyat%20yoshlar%20texnoparki+(Yoshlar%20texnoparki)&amp;t=h&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe> <script type='text/javascript' src='https://embedmaps.com/google-maps-authorization/script.js?id=073e50fc606fb1fd7805ca406f3701dff17292e9'></script>
            </div>
        </div>
    </div>
)
}

export default Google

// import React from 'react'

// const Google = () => {
//   return (
//     <div>Google</div>
//   )
// }

// export default Google
// import React from 'react';
// import { YMaps, Map, GeoObject, Placemark } from 'react-yandex-maps';


// const mapState = { center: [39.65, 66.97], zoom: 15 };

// const Google = () =>
//   <YMaps>
//     <Map state={mapState}>
//       {/* Creating a geo object with the "Point" geometry type. */}
//       <GeoObject
//         // The geometry description.

    
//         // Options.
//         options={{
//           // The placemark's icon will stretch to fit its contents.
//           preset: 'islands#',
//           // The placemark can be moved.
//           draggable: false,
//         }}
//       />

// <Placemark geometry={[39.644306, 66.96233]} />

//     </Map>
//   </YMaps>;

// export default Google;


