import { AiFillStar } from "react-icons/ai";

import "./index.css";
import Header from "../Header";

const About = () => {
  return (
    <>
      <Header />
      <div className="about-container">
        <div className="about">
          <div>
            <div className="profile-cont">
              <img
                src="https://res.cloudinary.com/djoz0tmyl/image/upload/v1684313904/photo_-_Copy_c7lkcw.jpg"
                alt="prof-pic"
                className="picture"
              />
              <div>
                <p id="profile-name">
                  <span className="special">Name:</span> Pilli Rajesh Sombabu
                </p>
                <p id="profile-name">
                  <span className="special">Profile:</span> Full stack developer
                </p>
                <p id="profile-name">
                  <span className="special">Email:</span> pillirajesh@ymail.com
                </p>
                <p id="profile-name">
                  <span className="special">Mobile:</span> 9028513324
                </p>
              </div>
            </div>
            <div className="skills">
              <h4>Skills</h4>
              <p>
                HTML{" "}
                <span>
                  <AiFillStar className="star" />{" "}
                  <AiFillStar className="star" />{" "}
                  <AiFillStar className="star" />{" "}
                  <AiFillStar className="star" />{" "}
                  <AiFillStar className="star" />
                </span>
              </p>
              <p>
                CSS{" "}
                <span>
                  <AiFillStar className="star" />{" "}
                  <AiFillStar className="star" />{" "}
                  <AiFillStar className="star" />{" "}
                  <AiFillStar className="star" />{" "}
                  <AiFillStar className="star" />
                </span>
              </p>
              <p>
                JavaScript{" "}
                <span>
                  <AiFillStar className="star" />{" "}
                  <AiFillStar className="star" />{" "}
                  <AiFillStar className="star" />{" "}
                  <AiFillStar className="star" />{" "}
                  <AiFillStar className="star" />
                </span>
              </p>
              <p>
                NodeJS{" "}
                <span>
                  <AiFillStar className="star" />{" "}
                  <AiFillStar className="star" />{" "}
                  <AiFillStar className="star" />{" "}
                  <AiFillStar className="star" /> <AiFillStar />{" "}
                </span>
              </p>
              <p>
                ReactJS{" "}
                <span>
                  <AiFillStar className="star" />{" "}
                  <AiFillStar className="star" />{" "}
                  <AiFillStar className="star" />{" "}
                  <AiFillStar className="star" />{" "}
                  <AiFillStar className="star" />{" "}
                </span>
              </p>
            </div>
          </div>
          <div className="description">
            <h4>About Me</h4>
            <p>
              I'm Web Developer with a passion for coding and problem-solving. I
              am well acquinted with HTML, CSS, JavaScript and JavaScript
              Technologies like ReactJS and NodeJS. I am an eager learner,
              constantly striving to improve my skills and stay ahead of latest
              trends in software development. I am also a team player and enjoy
              collecting in projects. During my studies i was consistantly top
              of my academics. I have also completed my Full Stack Web
              Development Course. I am also a problem solver & I have the
              ability to quickly find efficient solution to any problem. I am
              good at communication & presentation skills that my core strength.
              I Completed my B.tech in Mechanical Engineering from Maulana Abul
              Kalam Azad University of Technology.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
