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
            <p>{offices}</p>
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
                  <p>{officess?.about}</p>
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
                  <p>{leader?.biography}</p>
                </div>
                <div className="Detailprofile">
                  <div className="adminofficetitles">
                    <p>Detail Info</p>
                  </div>
                  <div>
                    <table>
                      <tr>
                        <th>Full name</th>
                        <td>{leader?.name}</td>
                      </tr>
                      <tr>
                        <th>Academic Rank</th>
                        <td>{leader?.academicRank}</td>
                      </tr>
                      <tr>
                        <th>Working for DU-COE</th>
                        <td>{leader?.academicRank}</td>
                      </tr>
                      <tr>
                        <th>Education Attended</th>
                        <td>{leader?.educationAttended}</td>
                      </tr>
                      <tr>
                        <th>Administrative Positions Held</th>
                        <td>{leader?.leader_role}</td>
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
