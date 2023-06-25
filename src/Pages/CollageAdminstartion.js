import React from "react";
import Smallbanner from "./Smallbanner";
import Subheadercomponent from "../components/Subheader";
import { useLocation, useParams } from "react-router-dom";

function CollageAdminstartion() {
  const location = useLocation();
  const currentPath = location.pathname;
  const { Collages } = useParams();

  return (
    <div className="CollageAdminstartion">
      <Smallbanner name={Collages} />
      <Subheadercomponent />
      <div className="titles">
        <p>Adminstarion</p>
      </div>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc aliquet
        metus ac nunc hendrerit, et finibus justo mollis. Sed sed neque a ex
        aliquam feugiat. Donec tristique purus ut justo pharetra, ac commodo dui
        ullamcorper. Suspendisse potenti. Morbi lobortis aliquet volutpat.
        Aliquam dignissim nibh et mauris dictum, et dapibus mi tincidunt. Duis
        sit amet arcu id sem pulvinar fermentum. Integer auctor, nulla vel
        posuere lacinia, tortor urna eleifend ex, nec luctus elit turpis vitae
        eros. Sed at efficitur ex. In hac habitasse platea dictumst. Proin
        pellentesque ex eget quam pharetra semper. Vestibulum ante ipsum primis
        in faucibus orci luctus et ultrices posuere cubilia curae; Maecenas sed
        facilisis ligula. Sed varius faucibus nisi id vulputate. Phasellus
        mattis velit eu felis aliquam, ut dapibus nisi dapibus. Vivamus ut dolor
        euismod, eleifend felis a, fermentum tellus. Ut eget dapibus nisi.
        Aenean ut massa mauris. Fusce efficitur condimentum neque, ut dapibus
        mauris mollis ut. Pellentesque habitant morbi tristique senectus et
        netus et malesuada fames ac turpis egestas. Integer non vestibulum dui.
        Sed iaculis semper arcu id aliquam. Vestibulum ante ipsum primis in
        faucibus orci luctus et ultrices posuere cubilia curae; Cras nec
        consectetur ipsum.
      </p>
    </div>
  );
}

export default CollageAdminstartion;
