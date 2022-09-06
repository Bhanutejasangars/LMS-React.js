import React from "react";
import { useNavigate } from "react-router-dom";
import eating from "../../images/eating.jpg";
import "./Homepage.css";
import { loggedUserData } from "../../utils/userInfoApiData";

const HomePage = () => {
  const NavigateTo = useNavigate();
  const getStartedHandler = () => {
    const userLogged = loggedUserData();
    if (userLogged) {
      NavigateTo("/dashboard");
    } else {
      NavigateTo("/login");
    }
  };
  return (
    <>
      <section class="hero-section">
        <div class="hero">
          <div class="hero-img-box">
            <img src={eating} className="hero-img" alt="A lady eating Salad" />
          </div>

          <div class="hero-text">
            <h2 class="hero-heading">
              In learning you will teach, and in teaching you will learn.
            </h2>
            <p class="hero-para">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
              dolore possimus aspernatur asperiores quam? Qui iure dicta non
              cumque nihil, facilis eligendi obcaecati nesciunt deserunt optio
              exercitationem consequatur! Voluptatibus, accusantium?
            </p>
            <div class="hero-btn-container">
              <button className="btn btn-healthify" onClick={getStartedHandler}>
                Get Started
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
