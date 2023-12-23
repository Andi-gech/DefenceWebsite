import React, { useEffect } from "react";
import { TailSpin } from "react-loader-spinner";

function Loadingpage() {
  return (
    <div className="Loadingpage">
      <TailSpin
        height="80"
        width="80"
        color="blue"
        ariaLabel="tail-spin-loading"
        radius="1"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
      <p>Loading..</p>
    </div>
  );
}

export default Loadingpage;
