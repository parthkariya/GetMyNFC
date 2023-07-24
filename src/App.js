// import logo from './logo.svg';
import "./App.css";
import {
  BrowserRouter,
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import LandingPage from "./Pages/LandingPage";
import ErrorPage from "./Pages/ErrorPage";
import { useEffect } from "react";
import Home from "./Pages/home/Home";
import HttpsRedirect from "react-https-redirect";

function App() {
  const locationn = String(window.location);

  return (
    <>
      {/* <BrowserRouter basename="/admin"> */}
      <HttpsRedirect>
        <BrowserRouter>
          {/* <Navbar /> */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/:slug" element={<LandingPage />} />
            <Route path="*" element={<ErrorPage />} />
            {/* <Route path="/pinewoodsingle" element={<PinewoodResortSing />} /> */}
          </Routes>
        </BrowserRouter>
      </HttpsRedirect>
    </>
  );
}

export default App;
{
  /* <BrowserRouter basename="kk"> */
}
