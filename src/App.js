import "./App.css";
import Header from "./components/Header";

import HomeScreen from "./Pages/HomeScreen";
import Footer from "./components/Footer";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import Collegescreen from "./Pages/Collegescreen";

import CollageFacility from "./Pages/CollageFacility";
import CollageAdminstartion from "./Pages/CollageAdminstartion";
import Announcmentpage from "./Pages/Announcmentpage";
import Newspage from "./Pages/Newspage";
import Calanderpage from "./Pages/Calanderpage";
import Newsdetailpages from "./Pages/Newsdetailpages";
import Admissionpage from "./Pages/Admissionpage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/" element={<HomeScreen />} />
          <Route path="home" element={<HomeScreen />} />
          <Route path="about" element={<h1 id="PAgesh1">about Page</h1>} />
          <Route exact path="/:Collages" element={<Collegescreen />} />
          <Route
            path=":Collages/facilities"
            element={<CollageFacility name={"Collage of Enginnering"} />}
          />

          <Route
            path=":Collages/Adminstration"
            element={<CollageAdminstartion />}
          />
          <Route path="/admissioncontact" element={<p>ss</p>} />

          <Route path="latest-announcement" element={<Announcmentpage />} />
          <Route
            path="Adminstration"
            element={<h1 id="PAgesh1">Adminstarion page</h1>}
          />
          <Route path="latest-news" element={<Newspage />} />
          <Route
            path="Downloads"
            element={<h1 id="PAgesh1">no resources found</h1>}
          />
          <Route path="Support" element={<h1 id="PAgesh1">Support page</h1>} />
          <Route path="*" element={<h1 id="PAgesh1"> page note found</h1>} />
          <Route path="about" element={<h1 id="PAgesh1">about page</h1>} />
          <Route path="/latest-news/:id" element={<Newsdetailpages />} />
          <Route
            path="research-project"
            element={<h1 id="PAgesh1">research-project page</h1>}
          />
          <Route
            path="research-Community"
            element={
              <h1 id="PAgesh1">
                The College is rigorously working on research, and it has
                established an office and a managing editor to effectively carry
                out its research endeavors. To this end, there is a bi-annual
                journal, the Ethiopian Journal of Business and Economics, which
                publishes research contributions mainly from staff and also from
                the external multidisciplinary contributors.e
              </h1>
            }
          />
          <Route path="AcadamicCalander" element={<Calanderpage />} />

          <Route path="Admmisson" element={<Admissionpage />} />
          <Route
            path="Latest-Research"
            element={<h1 id="PAgesh1">Latest-Research page</h1>}
          />
          <Route element={<h1 id="PAgesh1">page not found </h1>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
