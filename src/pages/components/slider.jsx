import React from "react";
import { images } from "../../data/images";
import "@splidejs/react-splide/css";
import { Splide, SplideSlide } from "@splidejs/react-splide";

const Slider = () => {
  return (
    <div className="flex overflow-scroll">
      <Splide>
        {images.map((url) => {
          return (
            <SplideSlide>
              <img src={url} alt="" />
            </SplideSlide>
          );
        })}
      </Splide>
      {/* {images.map((url) => {
        return <img src={url} alt="url" key={url} />;
      })} */}
    </div>
  );
};

export default Slider;
