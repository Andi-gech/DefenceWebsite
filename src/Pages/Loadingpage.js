import React, { useEffect } from "react";
import { RingLoader } from "react-spinners";

function Loadingpage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="Loadingpage">
      <RingLoader
        color={"rgb(0, 217, 255)"}
        loading={true}
        size={70}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
      <p>Loading..</p>
    </div>
  );
}

export default Loadingpage;
