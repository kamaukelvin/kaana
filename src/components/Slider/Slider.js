import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
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
  const [startSwiper, setStartSwiper] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setStartSwiper(true);
    }, 500);
  }, []);
  return (
    <StyledCarousel showArrows={false} showThumbs={false}>
      <div>
        <img src="/assets/images/placeholders/maths-fun.jpeg" />
      </div>
      <div>
        <img src="/assets/images/placeholders/science.jpeg" />
      </div>
    </StyledCarousel>
  );
};

export default SliderComponent;
