import React from "react";
import HomeServices from "./homesubcomponents/homeservices";
import HomeDrains from "./homesubcomponents/homedrains";
import ESLogo from "./svg/eminsifoniklogo.svg";
import Welcome from "./homesubcomponents/welcome";
import HomeContact from "./homesubcomponents/homecontact";
import HomeAbout from "./homesubcomponents/homeabout";
import HomeWhySiphonic from "./homesubcomponents/homewhysiphonic";
import HomeWhyUs from "./homesubcomponents/homewhyus.jsx";
import HMLogo from "../images/HydroMaxlogo.png";
import ScrollToTopOnMount from "./scrolltotoponmount";

const HomePage = () => {
  return (
    <main className="container-fluid">
      <ScrollToTopOnMount />
      <div className="row m-0 p-0">
        <div className="col-sm-5">
          <a href="http://www.hydromax.com">
            <img
              src={HMLogo}
              className="img-fluid p-4 d-block w-75 mx-auto my-auto"
              alt="HydroMax Sifonik Süzgeç logosu"
            />
          </a>
        </div>
        <div className="col-sm-7 my-auto">
          <img src={ESLogo} className="" alt="Emin Sifonik logosu" />
        </div>
      </div>
      <div className="row m-0 pb-3">
        <div className="col-md-5 home-box text-center">
          <Welcome />
        </div>
        <div className="col-md-7 home-box">
          <HomeDrains />
        </div>
      </div>
      <div className="row py-3 m-0 text-center">
        <div className="col-sm">
          <h2>Sifonik Yağmur Suyu Drenaj Sistemleri</h2>
        </div>
      </div>
      <div className="row py-3 fs-2 text-wrap text-center m-0">
        <div className="col-6 col-md g-0">
          <HomeContact />
        </div>
        <div className="col-6 col-md g-0">
          <HomeAbout />
        </div>
        <div className="col-6 col-md g-0">
          <HomeWhySiphonic />
        </div>
        <div className="col-6 col-md g-0">
          <HomeWhyUs />
        </div>
      </div>
      <div className="row py-3 m-0 text-center">
        <div className="col">
          <h2>Hizmetlerimiz</h2>
        </div>
      </div>
      <div className="row py-3 m-0 g-0">
        <div className="col">
          <HomeServices />
        </div>
      </div>
    </main>
  );
};

export default HomePage;
