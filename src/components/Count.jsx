import React from "react";
import CountUp from "react-countup";
import "./Count.css";

const Count = () => {
  return (
    <div className="darkMasterContainer">
      <h1 className="futuristicHeader">Applications & Websites Developed</h1>

      <div className="cyberGrid">
        {/* Active Projects Section */}
        <div className="neonCard">
          <h2 className="titleText">Active Projects</h2>
          <div className="cyberCount">
            <CountUp
              key={Math.random()}
              start={0}
              end={3}
              enableScrollSpy={true}
            />
          </div>
          <p className="cyberDescription">Number of active projects</p>
        </div>

        {/* Apps Developed Section */}
        <div className="neonCard">
          <h2 className="titleText">Applications Developed</h2>
          <div className="cyberCount">
            <CountUp
              key={Math.random()}
              start={0}
              end={2}
              enableScrollSpy={true}
            />
          </div>
          <p className="cyberDescription">Number of applications developed</p>
        </div>

        {/* Websites Developed Section */}
        <div className="neonCard">
          <h2 className="titleText">Websites Developed</h2>
          <div className="cyberCount">
            <CountUp
              key={Math.random()}
              start={0}
              end={6}
              enableScrollSpy={true}
            />
          </div>
          <p className="cyberDescription">Number of websites developed</p>
        </div>
      </div>
    </div>
  );
};

export default Count;
