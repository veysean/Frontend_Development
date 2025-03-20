import React from "react";
import { useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

export const Carousel = ({ images }) => {
  /* You will need to  use  state to mnage the current image */
  const [currentImage, setCurrentImage] = useState(0);
  const [isLeftArrowVisible, setIsLeftArrowVisible] = useState(false);
  const [isRightArrowVisible, setIsRightArrowVisible] = useState(true);
  const [isFirstImage, setIsFirstImage] = useState(true);
  const [isLastImage, setIsLastImage] = useState(false);

  /* You will need to hanle the click on left and right button */
  function handleLeftArrowClick() {
    checkImage(currentImage);
    setCurrentImage(currentImage - 1);
  }
  function handleRightArrowClick() {
    checkImage(currentImage);
    setCurrentImage(currentImage + 1);
  }

  /* You will need to manage the cases when we are on the last image or first image*/
  function checkImage(currentImage) {
    if (currentImage === 0) {
      setIsFirstImage(true);
    }
    if (currentImage === images.length - 1) {
      setIsLastImage(true);
    }
    if (currentImage !== 0) {
      setIsFirstImage(false);
    }
    if (currentImage !== images.length - 1) {
      setIsLastImage(false);
    }
  }

  return (
    <div className="carousel">
      <BsArrowLeftCircleFill className="arrow arrow-left" onClick={handleLeftArrowClick}/>

      {/* YOu will need to display the current image, not the first one.. */}
      
      <img src={images[currentImage].src} alt={images[currentImage].alt} className="slide" />

      <BsArrowRightCircleFill className="arrow arrow-right" onClick={handleRightArrowClick} />
    </div>
  );
};
