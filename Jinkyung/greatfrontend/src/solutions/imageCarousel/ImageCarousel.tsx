import { useState } from "react";
export default function ImageCarousel({
  images,
}: Readonly<{
  images: ReadonlyArray<{ src: string; alt: string }>;
}>) {
  const [showIndex, setShowIndex] = useState(0);
  return (
    <div>
      {showIndex !== null && showIndex >= 0 && (
        <div className="img-wrapper">
          <img
            key={showIndex}
            alt={images[showIndex].alt}
            src={images[showIndex].src}
            width="100%"
          />
          <button
            className="leftBtn"
            onClick={(e) => {
              e.preventDefault();
              let prevIndex = showIndex - 1;
              if (prevIndex < 0) prevIndex = images.length - 1;
              setShowIndex(prevIndex);
            }}
          >
            {"<"}
          </button>
          <button
            className="rightBtn"
            onClick={(e) => {
              e.preventDefault();
              setShowIndex((showIndex + 1) % images.length);
            }}
          >
            {">"}
          </button>
          <div className="pagination">
            {images.map((_, i) => (
              <button key={i}
                className="pagination__button"
                style={{ backgroundColor: showIndex == i ? "#e6e6e6" : "" }}
                onClick={(e) => {
                  e.preventDefault();
                  setShowIndex(i);
                }}
              ></button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
