import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Bannercomponent from "./components/Bannercomponent";
import HomeScreen from "./Pages/HomeScreen";
import Footer from "./components/Footer";
import ACadamicReward from "./components/ACadamicReward";
import CommunityOutreach from "./components/CommunityOutreach";

function App() {
  return (
    <div className="App">
      <Header />
      <HomeScreen />
      <ACadamicReward />
      <CommunityOutreach />

      <Footer />
    </div>
  );
}

export default App;
