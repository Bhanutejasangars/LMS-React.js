import React from "react";
import { DashBoardComponent } from "../../components";
import "./DashBoardPage.css";
import newDAtaArray from "../../data/apiData";
const DashBoardPage = () => {
  return (
    <>
      <section className="dashboard_container">
        <div className="dashboard_sideHeading">Dashboard:</div>
        <div className="grid_container">
          <div className="dashboard_grid_box">
            {newDAtaArray.map((item, index) => (
              <div className="component_box" key={index}>
                <DashBoardComponent item={item} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default DashBoardPage;
