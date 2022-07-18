import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import styled from "styled-components";

export const StyledCarousel = styled(Carousel)`
  /* .carousel .slide {
    height: 500px;
  } */
`;

const CarouselComponent = () => {
  return (
    <StyledCarousel showThumbs={false}>
      <div>
        <img src="/assets/images/placeholders/science.jpeg" />
        {/* <p className="legend">Legend 1</p> */}
      </div>
      <div>
        <img src="/assets/images/placeholders/drone.jpg" />
        {/* <p className="legend">Legend 2</p> */}
      </div>
      <div>
        <img src="/assets/images/placeholders/experiment-fun.jpg" />
        {/* <p className="legend">Legend 3</p> */}
      </div>
    </StyledCarousel>
  );
};

export default CarouselComponent;
