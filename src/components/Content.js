import React from "react";
import ImageOne from "../images/meat.jpg";
import ImageTwo from "../images/meat-2.jpg";
import ImageThree from "../images/meat-3.jpg";

const Content = () => {
  return (
    <>
      <div className="menu-card">
        <img src={ImageOne} alt="" className="h-full rounded mb-20 shadow" />
        <div className="center-content">
          <h2 className="text-2xl mb-2">Meat</h2>
          <p className="mb-2">Descrition</p>
          <span>$16</span>
        </div>
      </div>
      <div className="menu-card">
        <img src={ImageTwo} alt="" className="h-full rounded mb-20 shadow" />
        <div className="center-content">
          <h2 className="text-2xl mb-2">Meat</h2>
          <p className="mb-2">Descrition</p>
          <span>$16</span>
        </div>
      </div>
      <div className="menu-card">
        <img src={ImageThree} alt="" className="h-full rounded mb-20 shadow" />
        <div className="center-content">
          <h2 className="text-2xl mb-2">Meat</h2>
          <p className="mb-2">Descrition</p>
          <span>$16</span>
        </div>
      </div>
    </>
  );
};

export default Content;
