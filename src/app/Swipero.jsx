import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";

import ExerciseOne from "../components/ExerciseOne";
// Import Swiper styles
import "swiper/css";
// eslint-disable-next-line import/extensions
import "swiper/css/pagination";
import "swiper/css/navigation";

const Swipero = () => {
  return (
    <>
      <Swiper
        pagination={{
          type: "progressbar",
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper flex flex-col justify-between mt-52 gap-20"
      >
        <SwiperSlide className="text-center text-light mt-24">
        <ExerciseOne />
        </SwiperSlide>
        <SwiperSlide className="text-center text-light mt-40">
          Slide 2
        </SwiperSlide>
        <SwiperSlide className="text-center text-light mt-40">
          Slide 3
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Swipero;
