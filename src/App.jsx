import React from 'react';
import './Layout/MyNavbar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route, Navigate  } from "react-router-dom";
import MyNavbar from "../src/Layout/MyNavbar";
import Katalog from "./Layout/Katalog";
import Proekti from "./Page2/Proekti";
import Aksiyalar from "./Page3/Aksii";
import Izohlar from "./Page4/Otzivi";
import Kalkulyator from "./Page7/Kalkulator";
import Korzina from "./Page8/Korzina";
import Profil from "./Page9/Profil";

function App() {
  return (
    <Router>
      <MyNavbar />
      <Routes>
        <Route path="/" element={<Navigate to="/katalog" />} />
        <Route path="/katalog" element={<Katalog />} />
        <Route path="/proekti" element={<Proekti />} />
        <Route path="/aksiyalar" element={<Aksiyalar />} />
        <Route path="/izohlar" element={<Izohlar />} />
        <Route path="/kalkulyator" element={<Kalkulyator />} />
        <Route path="/korzina" element={<Korzina />} />
        <Route path="/profil" element={<Profil />} />
      </Routes>
    </Router>
  );
}
export default App;