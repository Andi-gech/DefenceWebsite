import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname.includes("Adminstration")) {
      return;
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);
}
export default ScrollToTop;
