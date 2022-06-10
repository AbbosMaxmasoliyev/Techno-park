import { Carousel } from '3d-react-carousal';
import React from 'react';
import circle from "../images/background/smallcircle.png"
let slides = [
    <div className='border'><iframe width="700" height="390" src="https://www.youtube.com/embed/BeSNZPr5ikU" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe></div>,
    <div className="border"><iframe width="700" height="390" src="https://www.youtube.com/embed/J4t8ztfqRb0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe></div>,
    <div className="border"><iframe width="700" height="390" src="https://www.youtube.com/embed/l4btJeJfL4E" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe></div>,
    <div className="border"><iframe width="700" height="390" src="https://www.youtube.com/embed/BeSNZPr5ikU" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe></div>,
    <div className="border"><iframe width="700" height="390" src="https://www.youtube.com/embed/mvc5x5RWOx8" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe></div>,
];



const callback = function(index){
        console.log("callback",index);
    }

const Carousel1 = () => {
  return (
    <div className='carusel'>
      <Carousel slides={slides} autoplay={false} interval={1500} onSlideChange={callback}/>
      <img src={circle} alt="" />
    </div>
  )
}

export default Carousel1