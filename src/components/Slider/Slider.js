import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import styled from "styled-components";

export const StyledSwiper = styled(Swiper)`
  .swiper {
    width: 100%;
    height: 100%;
  }

  .swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #fff;

    /* Center slide text vertically */
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
  }
  .swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
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
    // <Slider {...settings}>
    //   <div>
    //     <img src="/assets/images/logo.png" alt="slider" />
    //   </div>
    //   <div>
    //     <img src="http://placekitten.com/g/400/200" />
    //   </div>
    //   <div>
    //     <img src="http://placekitten.com/g/400/200" />
    //   </div>
    //   <div>
    //     <img src="http://placekitten.com/g/400/200" />
    //   </div>
    // </Slider>
    <>
      {startSwiper ? (
        <StyledSwiper
          navigation={true}
          modules={[Navigation]}
          className="mySwiper"
          autoplayTimeout={3}
          height={300}
          autoplay={true}
        >
          <SwiperSlide>
            {" "}
            <img src="/assets/images/placeholders/experiment-fun.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <img src="http://placekitten.com/g/400/200" />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <img src="http://placekitten.com/g/400/200" />
          </SwiperSlide>
        </StyledSwiper>
      ) : null}
    </>
  );
};

export default SliderComponent;
