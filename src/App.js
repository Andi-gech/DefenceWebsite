import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Bannercomponent from "./components/Bannercomponent";
import HomeScreen from "./Pages/HomeScreen";
import Footer from "./components/Footer";
import ACadamicReward from "./components/ACadamicReward";
import CommunityOutreach from "./components/CommunityOutreach";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route index path="/" element={<HomeScreen />} />
          <Route path="home" element={<HomeScreen />} />
          <Route path="about" element={<h1 id="PAgesh1">about Page</h1>} />
          <Route
            path="DE"
            element={<h1 id="PAgesh1">DEfence Enginnering page</h1>}
          />
          <Route
            path="Drs"
            element={<h1 id="PAgesh1">DEfence Resource page</h1>}
          />
          <Route
            path="Dhe"
            element={<h1 id="PAgesh1">DEfence Health page</h1>}
          />
          <Route
            path="latest-announcement"
            element={<h1 id="PAgesh1">Defence announcement page</h1>}
          />
          <Route
            path="Adminstration"
            element={<h1 id="PAgesh1">Adminstarion page</h1>}
          />
          <Route
            path="latest-news"
            element={<h1 id="PAgesh1">Latest news page</h1>}
          />
          <Route
            path="Calander"
            element={<h1 id="PAgesh1">Calander page</h1>}
          />
          <Route path="Support" element={<h1 id="PAgesh1">Support page</h1>} />
          <Route path="*" element={<h1 id="PAgesh1"> page note found</h1>} />
          <Route path="about" element={<h1 id="PAgesh1">about page</h1>} />
          <Route
            path="admission-contact"
            element={<h1 id="PAgesh1">admission-contact page</h1>}
          />
          <Route
            path="research-project"
            element={<h1 id="PAgesh1">research-project page</h1>}
          />
          <Route
            path="research-Community"
            element={<h1 id="PAgesh1">research-Community page</h1>}
          />
          <Route
            path="AcadamicCalander"
            element={<h1 id="PAgesh1">AcadamicCalander page</h1>}
          />
          <Route
            path="Admmisson"
            element={<h1 id="PAgesh1">Admmisson page</h1>}
          />
          <Route
            path="Latest-Research"
            element={<h1 id="PAgesh1">Latest-Research page</h1>}
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
