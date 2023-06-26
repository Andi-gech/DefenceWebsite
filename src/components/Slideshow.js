import React from "react";
import DepartmentCards from "./DepartmentCards";
export function Slideshow({ images }) {
  const delay = 2500;
  const [index, setIndex] = React.useState(0);
  const timeoutRef = React.useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }
  console.log(images);

  React.useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === images?.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
    <div className="slideshow">
      <div
        className="slideshowSlider"
        style={{
          transform: `translate3d(${-index * (images?.length - 1) * 2}%, 0, 0)`,
        }}
      >
        {images?.map((backgroundColor, index) => (
          <div className="slide">
            <DepartmentCards
              image={backgroundColor.photo}
              deparmentname={backgroundColor.name}
            />
          </div>
        ))}
      </div>

      <div className="slideshowDots">
        {images?.map((_, idx) => (
          <div
            key={idx}
            className={`slideshowDot${index === idx ? " active" : ""}`}
            onClick={() => {
              setIndex(idx);
            }}
          ></div>
        ))}
      </div>
    </div>
  );
}
