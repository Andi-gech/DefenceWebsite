import React, { useEffect, useState } from "react";
import Smallbanner from "./Smallbanner";
import Subheadercomponent from "../components/Subheader";
import { useParams } from "react-router-dom";
import UseCollageFech from "../hooks/UseCollageFech";
import banner from "../Assets/banner.jpg";
import Loadingpage from "./Loadingpage";
import WellcomeMessage from "../components/WellcomeMessage";
import { FaFacebook, FaLinkedin, FaMailBulk, FaPhone } from "react-icons/fa";

function CollageAdminstartion() {
  const { Collages } = useParams();
  const { data: collage } = UseCollageFech();
  const college = collage?.find((college) => college.pathname === Collages);

  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const handleImageLoad = () => {
      setImageLoaded(true);
    };

    if (college) {
      const img = new Image();
      img.src = college.bannerimage;
      img.onload = handleImageLoad;

      return () => {
        img.onload = null;
      };
    }
  }, [college]);

  return (
    <>
      <div
        className="CollageAdminstartion"
        style={{ display: imageLoaded ? "flex" : "none" }}
      >
        <Smallbanner
          name={college?.name}
          image={college?.bannerimage}
          onImageLoad={() => setImageLoaded(true)}
        />
        <Subheadercomponent />
        <div className="CollageAdminstartionbody">
          <div className="adminofficetitles">
            <p>Office</p>
          </div>
          <div className="AdminSides">
            <div className="messagehead">
              <div className="admin-message">
                <div className="admin-pic">
                  <img src={banner} />
                  <h3>Dr bisrat</h3>
                  <p>College Dean</p>
                </div>

                <div className="messagetext">
                  <p>
                    {" "}
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    nec quam ac dui eleifend scelerisque. Nullam ut mauris eget
                    sem bibendum volutpat. Sed commodo, nulla nec pharetra
                    commodo, diam ligula mollis justo, sed hendrerit eros mi sed
                    nisi. Pellentesque habitant morbi tristique senectus et
                    netus et malesuada fames ac turpis egestas. Morbi vulputate
                    aliquam orci, non consectetur metus feugiat ac. Sed interdum
                    dui vitae mi malesuada consectetur. Aenean volutpat est et
                    nisi efficitur, eu feugiat lorem lobortis. Curabitur
                    vestibulum elit mi, a sollicitudin mi euismod vel. Etiam
                    feugiat dapibus lectus, ac tempus dui iaculis a. Mauris
                    tempus, libero sit amet rhoncus venenatis, mauris tellus
                    laoreet orci, a pretium sapien nunc eu nisl. Sed
                    ullamcorper, nunc nec tempus fermentum, mi mi sodales justo,
                    nec auctor mauris tellus eu tortor. Vestibulum ante ipsum
                    primis in faucibus orci luctus et ultrices posuere cubilia
                    Curae; Curabitur at interdum justo. Nulla facilisi. Sed
                    consequat sagittis nibh, sed semper ante ultricies sed.
                    Vestibulum ante ipsum primis in faucibus orci luctus et
                    ultrices posuere cubilia Curae; Donec elementum, turpis sit
                    amet semper volutpat, arcu risus vestibulum mi, a elementum
                    dui turpis in massa. Donec ut sapien vehicula, ultricies
                    lectus in, accumsan dolor. Maecenas lacinia vulputate
                    tortor, id semper mi convallis nec. Duis pellentesque ligula
                    at bibendum condimentum. Vestibulum condimentum purus eget
                    metus dictum varius. Vestibulum in erat quis urna ultrices
                    faucibus non ac massa. Curabitur mattis ligula quis
                    consequat malesuada. Sed ullamcorper, leo vitae volutpat
                    scelerisque, velit velit ullamcorper orci, vitae aliquam
                    ligula libero at nulla. Donec pulvinar pretium libero, et
                    posuere nulla porta vitae. Quisque porttitor cursus
                    elementum. Etiam sodales elit a aliquet ultrices. Vestibulum
                    cursus nisi in fringilla rutrum. Fusce faucibus tellus nunc,
                    et efficitur nisl tincidunt at. Sed pulvinar pulvinar
                    luctus. Vestibulum ut mauris non urna malesuada
                    sollicitudin. Donec scelerisque volutpat ante at lacinia.
                  </p>
                </div>
              </div>
              <div className="Contact-links">
                <div className="links">
                  <FaPhone size={20} />
                </div>
                <div className="links">
                  <FaFacebook size={20} />
                </div>
                <div className="links">
                  <FaMailBulk size={20} />
                </div>
                <div className="links">
                  <FaLinkedin size={20} />
                </div>
              </div>
              <div className="background">
                <div className="adminofficetitles">
                  <p>Bio graph</p>
                </div>
                <div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    nec quam ac dui eleifend scelerisque. Nullam ut mauris eget
                    sem bibendum volutpat. Sed commodo, nulla nec pharetra
                    commodo, diam ligula mollis justo, sed hendrerit eros mi sed
                    nisi. Pellentesque habitant morbi tristique senectus et
                    netus et malesuada fames ac turpis egestas. Morbi vulputate
                    aliquam orci, non consectetur metus feugiat ac. Sed interdum
                    dui vitae mi malesuada consectetur. Aenean volutpat est et
                    nisi efficitur, eu feugiat lorem lobortis. Curabitur
                    vestibulum elit mi, a sollicitudin mi euismod vel. Etiam
                    feugiat dapibus lectus, ac tempus dui iaculis a. Mauris
                    tempus, libero sit amet rhoncus venenatis, mauris tellus
                    laoreet orci, a pretium sapien nunc eu nisl. Sed
                    ullamcorper, nunc nec tempus fermentum, mi mi sodales justo,
                    nec auctor mauris tellus eu tortor. Vestibulum ante ipsum
                    primis in faucibus orci luctus et ultrices posuere cubilia
                    Curae; Curabitur at interdum justo. Nulla facilisi. Sed
                    consequat sagittis nibh, sed semper ante ultricies sed.
                    Vestibulum ante ipsum primis in faucibus orci luctus et
                    ultrices posuere cubilia Curae; Donec elementum, turpis sit
                    amet semper volutpat, arcu risus vestibulum mi, a elementum
                    dui turpis in massa. Donec ut sapien vehicula, ultricies
                    lectus in, accumsan dolor. Maecenas lacinia vulputate
                    tortor, id semper mi convallis nec. Duis pellentesque ligula
                    at bibendum condimentum. Vestibulum condimentum purus eget
                    metus dictum varius. Vestibulum in erat quis urna ultrices
                    faucibus non ac massa. Curabitur mattis ligula quis
                    consequat malesuada. Sed ullamcorper, leo vitae volutpat
                    scelerisque, velit velit ullamcorper orci, vitae aliquam
                    ligula libero at nulla. Donec pulvinar pretium libero, et
                    posuere nulla porta vitae. Quisque porttitor cursus
                    elementum. Etiam sodales elit a aliquet ultrices. Vestibulum
                    cursus nisi in fringilla rutrum. Fusce faucibus tellus nunc,
                    et efficitur nisl tincidunt at. Sed pulvinar pulvinar
                    luctus. Vestibulum ut mauris non urna malesuada
                    sollicitudin. Donec scelerisque volutpat ante at lacinia.
                  </p>
                </div>
                <div className="Detailprofile">
                  <div className="adminofficetitles">
                    <p>Detail Info</p>
                  </div>
                  <div>
                    <table>
                      <tr>
                        <th>Full name</th>
                        <td>Maria Anders</td>
                      </tr>
                      <tr>
                        <th>Academic Rank</th>
                        <td>Assistant Professor</td>
                      </tr>
                      <tr>
                        <th>Working for DU-COE</th>
                        <td>Since 2001</td>
                      </tr>
                      <tr>
                        <th>Education Attended</th>
                        <td>
                          ⦁ Doctor of Philosophy (Ph.D.) in Mechanical
                          Engineering, Specialized in Combustion Science and
                          Technology, from Indian Institute of Technology,
                          New-Delhi, India, 2017. ⦁ Master of Technology
                          (M.Tech.) in Mechanical Engineering, specialized in
                          Internal Combustion Engines and Gas Turbines, From
                          Indian Institute of Technology, Madras, India, 2005 ⦁
                          Bachelor of Technology Degree (B.Tech.) in Mechanical
                          Engineering specialized in Automotive/Tank Technology,
                          From Defence University College of Engineering,
                          Bishoftu, Ethiopia, 2001
                        </td>
                      </tr>
                      <tr>
                        <th>Administrative Positions Held</th>
                        <td>
                          ⦁ Academic Dean of DU-COE: From 21st Jan. 2021 –
                          present ⦁ Head of Motor Vehicle Engineering Department
                          From 25th Sep. 2016 – 20th Jan. 202, from 7th Sep.
                          2010 -5 Jun 2011
                        </td>
                      </tr>
                      <tr>
                        <th>Research interest</th>
                        <td>
                          {" "}
                          ⦁ Thermal Engineering: Combustion of low calorific
                          value gases, diffusion flame structure and stability,
                          Industrial burners ⦁ Automotive Engineering:
                          Alternative fuels, Dynamics of vehicle system,
                          Composite vehicle structure, aerodynamics of vehicle
                        </td>
                      </tr>
                      <tr>
                        <th>Working for DU-COE</th>
                        <td>Since 2001</td>
                      </tr>
                      <tr>
                        <th>Working for DU-COE</th>
                        <td>Since 2001</td>
                      </tr>
                    </table>
                  </div>
                  <div className="profile-list">
                    <p>Staff Members</p>
                    <div className="listbox">
                      <img src={banner} />
                      <img src={banner} />
                      <img src={banner} />
                      <img src={banner} />
                      <img src={banner} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="sideoffices-container">
              <p>OFFICE</p>
              <div className="Officebutton">Office one</div>
              <div className="Officebutton">Office one</div>
              <div className="Officebutton">Office one</div>
              <div className="Officebutton">Office one</div>
            </div>
          </div>
        </div>
      </div>
      <div style={{ display: !imageLoaded ? "block" : "none" }}>
        <Loadingpage />
      </div>
    </>
  );
}

export default CollageAdminstartion;
