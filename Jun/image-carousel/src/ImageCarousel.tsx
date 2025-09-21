import { useState, useCallback } from "react";

export default function ImageCarousel({
  images,
}: Readonly<{
  images: ReadonlyArray<{ src: string; alt: string }>;
}>) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { alt, src } = images[currentIndex];

  const onPrevClickHandler = useCallback(() => {
    setCurrentIndex((state: number) => {
      if (state === 0) {
        return images.length - 1;
      }
      return state - 1;
    });
  }, [images.length]);

  const onNextClickHandler = useCallback(() => {
    setCurrentIndex((state: number) => {
      if (state === images.length - 1) {
        return 0;
      }
      return state + 1;
    });
  }, [images.length]);

  const onNavigationButtonClick = useCallback((index: number) => {
    setCurrentIndex(index);
  }, []);

  return (
    <div className="carousel">
      <button className="left" onClick={onPrevClickHandler}>
        {"<"}
      </button>
      <div className="img-wrapper">
        <img alt={alt} src={src} width="100%" />
      </div>
      <button className="right" onClick={onNextClickHandler}>
        {">"}
      </button>
      <div className="navigation">
        {images.map((_image, index) => {
          const isCurrent = currentIndex === index;
          return (
            <button
              disabled={isCurrent}
              key={index}
              className={isCurrent ? "current" : ""}
              onClick={() => onNavigationButtonClick(index)}
            ></button>
          );
        })}
      </div>
    </div>
  );
}
