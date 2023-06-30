import React, { useEffect, useState, useRef } from "react";
import DepartmentCards from "./DepartmentCards";
import UseDepartmentFech from "../hooks/UseDepartmentFetch";
import { useMediaQuery } from "react-responsive";

function Slideshow({ id }) {
  const delay = 2500;
  const [index, setIndex] = useState(0);
  const { data: images, refetch } = UseDepartmentFech(id);
  const timeoutRef = useRef(null);
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1224px)",
  });

  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });

  useEffect(() => {
    const fetchDepartment = () => {
      refetch();
    };

    fetchDepartment();
  }, [id, refetch]);

  useEffect(() => {
    const resetTimeout = () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };

    resetTimeout();
    timeoutRef.current = setTimeout(() => {
      setIndex((prevIndex) =>
        prevIndex === images?.length - 1 ? 0 : prevIndex + 1
      );
    }, delay);

    return () => {
      resetTimeout();
    };
  }, [index, images]);

  return (
    <div
      className="slideshow"
      style={{ width: isDesktopOrLaptop ? 900 : "100vw" }}
    >
      <div
        className="slideshowSlider"
        style={{
          transform: isDesktopOrLaptop
            ? `translate3d(${-index * (images?.length || 0) * 2}%, 0, 0)`
            : `translate3d(${-index * (images?.length || 0) * 3}%, 0, 0)`,
        }}
      >
        {images?.map((department, idx) => (
          <div className="slide" key={idx}>
            <DepartmentCards
              image={department.photo}
              deparmentname={department.name}
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

export default Slideshow;
