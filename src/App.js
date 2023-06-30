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
import Aboutpages from "./Pages/Aboutpages";
import Loadingpage from "./Pages/Loadingpage";
import NoFoundPage from "./Pages/NoFoundPage";
import Adminstrationpage from "./Pages/Adminstrationpage";
import Downloadpage from "./Pages/Downloadpage";
import { useRef } from "react";
import RegstralofficeContact from "./Pages/RegstralofficeContact";
import Pagesunderconstraction from "./Pages/Pagesunderconstraction";
import ScrollToTop from "./Pages/Scrolltotop";

function App() {
  const headerRef = useRef(null); // Create a ref for the header

  const scrollToBottom = () => {
    if (headerRef.current) {
      headerRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Header click={scrollToBottom} />
        <ScrollToTop />
        <Routes>
          <Route exact path="/" element={<HomeScreen />} />
          <Route path="home" element={<HomeScreen />} />

          <Route exact path="/:Collages" element={<Collegescreen />} />
          <Route
            path=":Collages/facilities"
            element={<CollageFacility name={"Collage of Enginnering"} />}
          />
          <Route path="AcadamicCalander" element={<Calanderpage />} />

          <Route
            path=":Collages/Adminstration"
            element={<CollageAdminstartion />}
          />
          <Route
            path="/admissioncontact"
            element={<Pagesunderconstraction />}
          />

          <Route path="latest-announcement" element={<Announcmentpage />} />
          <Route path="Administration" element={<Adminstrationpage />} />
          <Route path="latest-news" element={<Newspage />} />
          <Route path="Downloads" element={<Downloadpage />} />

          <Route path="*" element={<NoFoundPage />} />
          <Route path="about" element={<Aboutpages />} />
          <Route path="/latest-news/:id" element={<Newsdetailpages />} />
          <Route path="research-project" element={<Pagesunderconstraction />} />
          <Route
            path="research-Community"
            element={<Pagesunderconstraction />}
          />

          <Route path="Admission" element={<Admissionpage />} />
          <Route path="Latest-Research" element={<Pagesunderconstraction />} />
          <Route element={<NoFoundPage />} />
        </Routes>
        <div ref={headerRef}>
          <Footer />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
