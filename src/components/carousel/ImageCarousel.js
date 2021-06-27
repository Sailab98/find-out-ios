// import "pure-react-carousel/dist/react-carousel.es.css";
// import {
//   CarouselProvider,
//   Image,
//   Slide,
//   Slider,
//   ButtonBack,
//   ButtonNext
// } from "pure-react-carousel";
import { Image } from "semantic-ui-react";
import React, { Component } from "react";
import { Divider } from "semantic-ui-react";
// import CustomDotGroup from "./CustomDotGroup";
import Slider from "react-slick";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return <div className={className} style={{ ...style, display: "absolute" }} onClick={onClick} />;
}

function SamplePrevArrow(props) {
  debugger;

  const { className, style, onClick } = props;
  return <div className={className} style={{ ...style, display: "absolute" }} onClick={onClick} />;
}
const ImageCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow className="slick-prev" />,
    prevArrow: <SamplePrevArrow />
  };
  return (
    <>
      <div className="slides">
        <Slider {...settings}>
          <div>
            <Image src="/assets/blog-6-410x250.jpg" />
          </div>
          <div>
            <Image src="/assets/image-13-copyright-min-410x250.jpg" />
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
        </Slider>
      </div>
    </>
  );
};

export default ImageCarousel;
