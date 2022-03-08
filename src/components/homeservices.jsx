import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import TerraceDrainPic from "../images/services/terrace_drain.jpg";
import HydroTechnicPic from "../images/services/hydrotechnic.jpg";
import UygulamaPic from "../images/services/uygulama.jpg";

const HomeServices = () => {
  return (
    <div className="container">
      <div className="row m-0">
        <div className="col-sm p-0 border border-white">
          <div className="overlay-container">
            <img
              src={TerraceDrainPic}
              alt="Teras Süzgeci"
              HydroTechnicPic
              from
              className="img-fluid w-100"
            />
            <div className="overlay">
              <NavLink className="nav-link overlay" to="/suzgecler">
                <div className="text">Sifonik Süzgeçler</div>
              </NavLink>
            </div>
          </div>
        </div>
        <div className="col-sm p-0 border border-white">
          <div className="overlay-container">
            <img
              src={HydroTechnicPic}
              alt="HydroTechnic"
              className="img-fluid w-100"
            />
            <div className="overlay">
              <NavLink className="nav-link overlay" to="/projelendirme">
                <div className="text">Sifonik Sistem Çözümü</div>
              </NavLink>
            </div>
          </div>
        </div>
        <div className="col-sm p-0 border border-white">
          <div className="overlay-container">
            <img src={UygulamaPic} alt="Uygulama" className="img-fluid w-100" />
            <div className="overlay">
              <NavLink className="nav-link overlay" to="/uygulama">
                <div className="text">Uygulama</div>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeServices;