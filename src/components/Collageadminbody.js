import React from "react";
import WellcomeMessage from "../components/WellcomeMessage";
import { FaFacebook, FaLinkedin, FaMailBulk, FaPhone } from "react-icons/fa";
import UseofficesFech from "../hooks/UseOfficefechhook";
import UseStafmemberFech from "../hooks/UseUserfechhook";
import ImageCircle from "../components/ImageCircle";
import { Link, useParams } from "react-router-dom";
import Loadingpage from "../Pages/Loadingpage";
import { TailSpin } from "react-loader-spinner";
function Collageadminbody({ offices, path, college }) {
  const { data, isFetching, isRefetching } = UseofficesFech(college?.id);

  const officess = data?.find((office) => office?.name === offices);
  const {
    data: user,
    refetch: usrrefech,
    isRefetching: isuserrefechung,
  } = UseStafmemberFech();
  const leader = user?.find((user) => user.id === officess?.leaderuser);

  return (
    <>
      {!isFetching && (
        <div className="CollageAdminstartionbody">
          <div className="adminofficetitles">
            <p>Office</p>
          </div>
          <div className="AdminSides">
            <div className="messagehead">
              <div className="admin-message">
                <div className="admin-pic">
                  <img src={leader?.image} />
                  <h3>{leader?.name}</h3>
                  <p>{user?.leader_role}</p>
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
                        <td>{user?.name}</td>
                      </tr>
                      <tr>
                        <th>Academic Rank</th>
                        <td>{user?.academicRank}</td>
                      </tr>
                      <tr>
                        <th>Working for DU-COE</th>
                        <td>{user?.academicRank}</td>
                      </tr>
                      <tr>
                        <th>Education Attended</th>
                        <td>{user?.educationAttended}</td>
                      </tr>
                      <tr>
                        <th>Administrative Positions Held</th>
                        <td>{user?.leader_role}</td>
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
                    </table>
                  </div>
                </div>
                <div className="profile-list">
                  <p>Staff Members</p>
                  <div className="listbox">
                    {officess?.staffmembers.map((id) => {
                      <ImageCircle id={id} />;
                    })}
                  </div>
                </div>
              </div>
            </div>
            <div className="sideoffices-container">
              <p>OFFICE</p>
              {data?.map((office) => {
                return (
                  <Link
                    to={`/${path}/Adminstration/${office.name}`}
                    className="Officebutton"
                  >
                    {office.name}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      )}
      {isFetching && (
        <div className="Loadingoffice">
          <TailSpin
            height="80"
            width="80"
            color="black"
            ariaLabel="tail-spin-loading"
            radius="1"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
          />
        </div>
      )}
    </>
  );
}

export default Collageadminbody;
