import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import { useQuery, gql } from "@apollo/client";
import { Link, useParams, NavLink } from "react-router-dom";
import ExerciseOne from "../components/ExerciseOne";
import ExerciseTwo from "../components/ExerciseTwo";
import ExerciseThree from "../components/ExerciseThree";
import "swiper/swiper.css";
import "swiper/swiper-bundle.css";
import ExerciseLayout from "../layouts/ExerciseLayout";
import xclose, {
  ReactComponent as XcloseIcon,
} from "../images/svg/X-close.svg";
import info, { ReactComponent as InfoIcon } from "../images/svg/Info.svg";

const Slider = () => {
  return (
    <ExerciseLayout>
      <Swiper
        modules={[Navigation, Pagination]}
        navigation={true}
        pagination={{
          type: "progressbar",
        }}
        speed={600}
        slidesPerView={1}
        loop={false}
        className="mySwiper h-full w-full mt-28"
      >
        <SwiperSlide>
          <p className="pt-56 pb-56 m-auto text-center">
            <ExerciseOne />
          </p>
        </SwiperSlide>
        <SwiperSlide>
          <p className="pt-56 pb-56 m-auto text-center">
            <ExerciseTwo />
          </p>
        </SwiperSlide>
        <SwiperSlide>
          <p className="pt-56 pb-56 m-auto text-center">
            <ExerciseThree />
          </p>
        </SwiperSlide>
      </Swiper>
    </ExerciseLayout>
  );
};

export default Slider;

/*  <div>
          <Link to="/browser" className="fixed top-5 right-5">
            <XcloseIcon />
          </Link>
          <ExerciseOne />
          <div className="fixed bottom-0 left-0 w-full z-50">
            <nav className="flex flex-row justify-end bg-dark40 py-2.5 mt-2 rounded-tl-3xl rounded-tr-3xl ">
              <NavLink to="/browser" className="mr-5">
                <InfoIcon />
              </NavLink>
            </nav>
          </div>
        </div> */
