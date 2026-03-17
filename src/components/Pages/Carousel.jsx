import { useState } from "react";
import CarouselImage from "../../assets/SlideImage";

const slidesData = CarouselImage.map((imgUrl, index) => ({
  id: index + 1,
  imgUrl: imgUrl
}));

const Carousel = () => {
  const [data, setData] = useState(slidesData);

  return (
    <div className="flex justify-center items-center  px-2 md:px-5">
      <div className="carousel w-full md:w-[80vw] lg:w-[70vw] h-[40vh] md:h-[60vh] lg:h-[70vh] rounded-lg">
        {data.map((slide, index) => (
          <div
            key={slide.id}
            id={`slide${index + 1}`}
            className="carousel-item relative w-full h-full"
          >

            <img
              src={slide.imgUrl}
              alt={slide.title}
              className="w-full h-full object-cover  rounded-lg"
            />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-3 right-3 md:left-5 md:right-5 top-1/2">
              <a
                href={`#slide${index === 0 ? data.length : index}`}
                className="btn btn-circle btn-sm md:btn-md"
              >
                ❮
              </a>
              <a
                href={`#slide${index === data.length - 1 ? 1 : index + 2}`}
                className="btn btn-circle btn-sm md:btn-md"
              >
                ❯
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
