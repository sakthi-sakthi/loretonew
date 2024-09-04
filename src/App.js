import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import MainLayout from "./Layouts";
import History from "./SubPages/History/History";
import HousePrayer from "./SubPages/Pages/Houseofprayer";
import DelphineHart from "./SubPages/Pages/DelphinHart";
import TeresaBall from "./SubPages/Pages/TeresaBall";
import PionerMaryWard from "./SubPages/Pages/PionerMaryWard";
import Songs from "./SubPages/Pages/Songs";
import Fcra from "./SubPages/Pages/Fcra";
import ProvinceNewsLetter from "./SubPages/Pages/ProvinceNewsLetter";
import LoretoSister from "./SubPages/Pages/LoretoSister";
import ContactUs from "./SubPages/Pages/ContactUs";
import AllUpcomeEvent from "./SubPages/Pages/AllUpcomeEvent";
import BirthdayCalendar from "./SubPages/Pages/Calendar";
function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/*" element={<MainLayout />}>
            <Route path="aboutus" element={<History />}></Route>
            <Route path="institute-team" element={<History />}></Route>
            <Route path="province-team" element={<History />}></Route>
            <Route path="history" element={<History />}></Route>
            <Route path="loreto-india" element={<History />}></Route>
            <Route path="loreto-foundation-india" element={<History />}></Route>
            <Route path="archive" element={<History />}></Route>
            <Route path="spiritual" element={<History />}></Route>
            <Route path="mary-ward-spiritual" element={<History />}></Route>
            <Route path="ignation-spiritual" element={<History />}></Route>
            <Route path="education" element={<History />}></Route>
            <Route path="social-ministry" element={<History />}></Route>
            <Route path="spiritual-ministry" element={<History />}></Route>
            <Route path="loreto-global" element={<History />}></Route>
            <Route path="mary-ward-international" element={<History />}></Route>
            <Route path="lay-associates" element={<History />}></Route>
            <Route path="useful-links" element={<History />}></Route>
            <Route path="jpic" element={<History />}></Route>
            <Route path="become-loreto-sister" element={<History />}></Route>
            <Route path="house-prayers" element={<HousePrayer />}></Route>
            <Route path="pioneers-mary-ward" element={<PionerMaryWard />}></Route>
            <Route path="delphine-hart" element={<DelphineHart />}></Route>
            <Route path="teresaball" element={<TeresaBall />}></Route>
            <Route path="house-prayers" element={<HousePrayer />}></Route>
            <Route path="songs" element={<Songs />}></Route>
            <Route path="fcra" element={<Fcra />}></Route>
            <Route path="newsletter" element={<ProvinceNewsLetter />}></Route>
            <Route path="newsletter" element={<ProvinceNewsLetter />}></Route>
            <Route path="friends-mary-ward" element={<LoretoSister />}></Route>
            <Route path="contactus" element={<ContactUs />}></Route>
            <Route path="all-upcome-news" element={<AllUpcomeEvent />}></Route>
            <Route path="birthday-calendar" element={<BirthdayCalendar />}></Route>
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;