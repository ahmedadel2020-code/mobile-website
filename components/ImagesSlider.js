import Image from "next/image";
import sliderStyles from "../styles/ImagesSlider.module.css";
import ArrowLeft from "../asset/images/ArrowLeft.svg";
import ArrowRight from "../asset/images/ArrowRight.svg";
import { useEffect, useState } from "react";

const ImagesSlider = ({ images }) => {
  const [imgIndex, setImgIndex] = useState(0);
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      function handleResize() {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }

      window.addEventListener("resize", handleResize);

      handleResize();

      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  const handleImage = (direction) => {
    const imgsLength = images.length - 1;
    if (direction === "left") {
      if (imgIndex === 0) {
        setImgIndex(imgsLength);
      } else {
        setImgIndex(imgIndex - 1);
      }
    } else {
      if (imgIndex >= imgsLength) {
        setImgIndex(0);
      } else {
        setImgIndex(imgIndex + 1);
      }
    }
  };

  const handleDots = (index) => {
    setImgIndex(index);
  };

  return (
    <div className={sliderStyles.container}>
      <div
        className={`${sliderStyles.arrow} ${sliderStyles.left}`}
        onClick={() => handleImage("left")}
      >
        <Image src={ArrowLeft} alt="left arrow" />
      </div>
      {windowSize.width > 400 ? (
        <Image
          src={images[imgIndex].img}
          alt={`${images[imgIndex].id}`}
          className={sliderStyles.sliderImg}
          width="1920"
          height="494"
        />
      ) : (
        <Image
          src={images[imgIndex].img}
          alt={`${images[imgIndex].id}`}
          className={sliderStyles.sliderImg}
          width="374"
          height="220px"
        />
      )}

      <div
        className={`${sliderStyles.arrow} ${sliderStyles.right}`}
        onClick={() => handleImage("right")}
      >
        <Image src={ArrowRight} alt="right arrow" />
      </div>
      <div className={sliderStyles.dots_wrapper}>
        {images.map((img, index) => (
          <div
            key={img.id}
            className="dot"
            onClick={() => handleDots(index)}
          ></div>
        ))}
      </div>

      <style jsx>
        {`
          .dot {
            width: 8px;
            height: 8px;
            border-radius: 50%;
            background-color: #d1d3d4;
            cursor: pointer;
          }
          .dot:nth-child(${imgIndex + 1}) {
            background-color: #a7a9ac;
            transition: 0.5s ease;
          }
          @media only screen and (max-width: 400px) {
            .dot {
              width: 3px;
              height: 3px;
            }
          }
        `}
      </style>
    </div>
  );
};

export default ImagesSlider;
