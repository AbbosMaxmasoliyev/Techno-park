import "react-alice-carousel/lib/alice-carousel.css";

import img1 from "../images/gallery/img1.png"
import img2 from "../images/gallery/img2.png"
import img3 from "../images/gallery/img3.png"
import img4 from "../images/gallery/img4.png"
import img5 from "../images/gallery/img5.png"
import img6 from "../images/gallery/img6.png"
import img7 from "../images/gallery/img7.png"
import img8 from "../images/gallery/img8.png"




import React from 'react';
import AliceCarousel from 'react-alice-carousel';

class Carousel2 extends React.Component {



  render() {
    const responsive = {
      0: {
        items: 1
      },
      600: {
        items: 2
      },
      1024: {
        items: 2
      },
      1440:{
        items:3
      }

    };

    return (
      <AliceCarousel
        duration={3000}
        autoPlay={true}
        startIndex = {8}
        fadeOutAnimation={true}
        mouseDragEnabled={false}
        autoPlayControls = {false}
        playButtonEnabled={false}
        responsive={responsive}
        autoPlayInterval={3000}
        autoPlayDirection="ltr"
        autoPlayActionDisabled={true}
        onSlideChange={this.onSlideChange}
        onSlideChanged={this.onSlideChanged}
        disableDotsControls={true}
        disableButtonsControls={true}
        infinite = {true}
  

      >
        <div className="yours-custom-class"><img src={img1} alt="" /></div>
        <div className="yours-custom-class"><img src={img2} alt="" /></div>
        <div className="yours-custom-class"><img src={img3} alt="" /></div>
        <div className="yours-custom-class"><img src={img4} alt="" /></div>
        <div className="yours-custom-class"><img src={img5} alt="" /></div>
        <div className="yours-custom-class"><img src={img6} alt="" /></div>
        <div className="yours-custom-class"><img src={img7} alt="" /></div>
        <div className="yours-custom-class"><img src={img8} alt="" /></div>
      </AliceCarousel>
    );
  }
}

export default Carousel2