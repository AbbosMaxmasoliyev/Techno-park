import React from 'react'

const Google = () => {
  return (
    <div className='google'>
        <p className='title'>Bizning manzilimiz xaritada</p>
        <div className='google_block'>
            <div>
                <iframe width="600" height="342" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0" id="gmap_canvas" src="https://maps.google.com/maps?width=413&amp;height=242&amp;hl=en&amp;q=%20Samarkand%20viloyat%20yoshlar%20texnoparki+(Yoshlar%20texnoparki)&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>  <script type='text/javascript' src='https://embedmaps.com/google-maps-authorization/script.js?id=7225bdb35fe810cb1158c163529d4a0b08aed61b'></script>
            </div>
            <div>
            <iframe width="600" height="342" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" id="gmap_canvas" src="https://maps.google.com/maps?width=413&amp;height=242&amp;hl=en&amp;q=%20Samarkand%20viloyat%20yoshlar%20texnoparki+(Yoshlar%20texnoparki)&amp;t=h&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe> <script type='text/javascript' src='https://embedmaps.com/google-maps-authorization/script.js?id=073e50fc606fb1fd7805ca406f3701dff17292e9'></script>
            </div>
        </div>
    </div>
)
}

export default Google