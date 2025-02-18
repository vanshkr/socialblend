import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ChevronLeft, ChevronRight } from "lucide-react";
  const CustomPrevArrow = (props) => {
    const { onClick } = props;
    return (
      <div
        className="absolute left-5 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer bg-black/50 rounded-full p-1 hover:bg-black/70"
        onClick={onClick}
      >
        <ChevronLeft className="text-white w-4 h-4" />
      </div>
    );
  };

  const CustomNextArrow = (props) => {
    const { onClick } = props;
    return (
      <div
        className="absolute right-5 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer bg-black/50 rounded-full p-1 hover:bg-black/70"
        onClick={onClick}
      >
        <ChevronRight className="text-white w-4 h-4" />
      </div>
    );
  };
export const StoryCarousel = ({ stories }) => {

  const settings = {
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 8,
    slidesToScroll: 2,
    arrows: true,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
        },
      },
    ],
  };

  return (
    <div className="w-full border-2 border-gray-200 relative overflow-hidden">
      <Slider {...settings}>
        {stories.map((story, index) => (
          <div className="relative" key={index}>
            <div className="flex flex-col text-center w-full items-center justify-center px-2">
              <div className="w-16 h-16 rounded-full border-2 border-amber-500">
                <img
                  src={story.image}
                  alt={`Story ${index + 1}`}
                  className="w-full h-full"
                />
              </div>
              <p className="text-sm mt-auto truncate w-full">
                {story.username}
              </p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};
