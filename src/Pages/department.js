import React from "react";
import "../App.css";
import UseCollageFech from "../hooks/UseCollageFech";
import UseDepartmentFech from "../hooks/UseDepartmentFetch";
import { useParams } from "react-router-dom";

function DepartmentPage() {
  const { Collages, id } = useParams();

  const { data, isLoading, isError } = UseCollageFech();

  const college = data?.find(
    (college) => college.pathname.toLowerCase() === Collages.toLowerCase()
  );
  const { data: departments, refetch } = UseDepartmentFech(college?.id);
  const department = departments?.find((dep) => dep.id == id);

  return (
    <div className="DepartmentPage">
      <div className="headline">
        <div className="mid-text">
          <p className="h-0">Welcome to Department of {department?.name}</p>
          <p className="h-2">
            Discover our outstanding department and the numerous sub-fields we
            offer. Our top-notch faculty is here to help you advance in your
            academic career. Join us today!
          </p>
        </div>
      </div>
      <div className="main">
        <div className="background">
          <div className="h-1">
            <p className="h1">Background</p>
          </div>
          <div className="content">
            <p className="h2">{department?.background}</p>
          </div>
        </div>
        <div className="history">
          <div className="h-1">
            <p className="h1">History</p>
          </div>
          <div className="content">
            <p className="h2">{department?.historyofdepartment}</p>
          </div>
        </div>
        <div className="scope">
          <div className="h-1">
            <p className="h1">Scope</p>
          </div>
          <div className="content">
            <p className="h2">{department?.scope}</p>
          </div>
        </div>
        <div className="objectives">
          <div className="h-1">
            <p className="h1">Acadamic Goals</p>
          </div>
          <div className="content">
            <p className="h2">{department?.academicgoals}</p>
          </div>
        </div>
        <div className="Programs">
          <div className="h-1">
            <p className="h1">AcadamicProgram</p>
          </div>
          <div className="content">
            <p className="h2">{department?.academicprogram}</p>
          </div>
        </div>
        <div className="requirements">
          <div className="h-1">
            <p className="h1">requirements</p>
          </div>
          <div className="content">
            <p className="h2">{department?.admissionrequirement}</p>
          </div>
        </div>
        <div className="partnership">
          <div className="h-1">
            <p className="h1">Partnership</p>
          </div>
          <div className="content">
            <p className="h2">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui,
              quia magnam animi quas, excepturi sunt possimus, culpa eius
              placeat nesciunt mollitia accusamus incidunt officiis error
              voluptatibus soluta voluptatem accusantium. Ratione.
            </p>
          </div>
        </div>
        <div className="facilities">
          <div className="h-1">
            <p className="h1">Facilities</p>
          </div>
          <div className="content">
            <p className="h2">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui,
              quia magnam animi quas, excepturi sunt possimus, culpa eius
              placeat nesciunt mollitia accusamus incidunt officiis error
              voluptatibus soluta voluptatem accusantium. Ratione.
            </p>
          </div>
        </div>
        <div className="staffProfiles">
          <div className="h-1">
            <p className="h1">Staff Profiles</p>
          </div>
          <div className="content">
            <p className="h2">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui,
              quia magnam animi quas, excepturi sunt possimus, culpa eius
              placeat nesciunt mollitia accusamus incidunt officiis error
              voluptatibus soluta voluptatem accusantium. Ratione.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DepartmentPage;
