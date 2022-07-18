import React from "react";
import "swiper/css";
import "swiper/css/navigation";
import styled from "styled-components";
import { Carousel } from "react-responsive-carousel";
import { devices } from "../../utils/screen_sizes";

export const StyledCarousel = styled(Carousel)`
  .carousel .slide img {
    width: 100%;

    height: 470px;
    object-fit: cover;
    object-position: center;
    @media ${devices.mobileM} {
      height: 350px;
      object-fit: cover;
    }
    @media ${devices.laptop} {
      height: 550px;
      object-fit: cover;
    }
  }
`;

const SliderComponent = () => {

  return (
    <StyledCarousel showArrows={false} showThumbs={false}>
      <div>
        <img src="/assets/images/placeholders/maths-fun.jpeg" alt="slider" />
      </div>
      <div>
        <img src="/assets/images/placeholders/science.jpeg" alt="slider"  />
      </div>
    </StyledCarousel>
  );
};

export default SliderComponent;
