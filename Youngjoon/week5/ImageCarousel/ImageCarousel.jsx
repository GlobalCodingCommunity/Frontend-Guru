import React from "react";

export default function ImageCarousel({ images }) {
  const [currIdx, setCurrIdx] = React.useState(0);

  const handlePrev = () => {
    if (currIdx === 0) {
      setCurrIdx(images.length - 1);
    } else {
      setCurrIdx(prev => prev - 1);
    }
  };

  const handleNext = () => {
    if (currIdx === images.length - 1) {
      setCurrIdx(0);
    } else {
      setCurrIdx(prev => prev + 1);
    }
  };

  const handlePageClick = idx => {
    setCurrIdx(idx);
  };

  return (
    <>
      <div style={{ display: "flex" }}>
        <button onClick={handlePrev}>Prev</button>
        <img
          key={images[currIdx].src}
          alt={images[currIdx].alt}
          src={images[currIdx].src}
          width="50%"
        />
        <button onClick={handleNext}>Next</button>
      </div>
      <div>
        {images.map((_, idx) => (
          <button onClick={() => handlePageClick(idx)}>{idx + 1}</button>
        ))}
      </div>
    </>
  );
}
