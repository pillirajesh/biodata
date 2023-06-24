import { Link } from "react-router-dom";
import "./index.css";

const Home = () => {
  return (
    <>
      <div className="middle-container">
        <img
          src="https://pps.whatsapp.net/v/t61.24694-24/336253290_170388569191195_7934902760114985062_n.jpg?ccb=11-4&oh=01_AdRpnxn7Ar8-yx-ItCeAUaSLcgpmvisj8GTi97cX4XNw4w&oe=64A43312"
          alt="profile"
          className="profile-pic"
        />
        <h1 className="profile-name">
          I'm{" "}
          <span style={{ fontStyle: "italic", color: "yellow" }}>
            Pilli Rajesh Sombabu
          </span>
        </h1>
        <p className="job-description">Full Stack Developer</p>
        <p className="job">
          I will bridge the gap between the both Front-End and Back-End
          Technologies . . .
        </p>
        <Link to="/contact" className="link">
          <button type="button" className="connect-button">
            Connect With Me
          </button>
        </Link>
      </div>
    </>
  );
};

export default Home;
