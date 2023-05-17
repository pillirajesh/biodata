import { AiFillStar } from "react-icons/ai";

import "./index.css";
import Header from "../Header";

const About = () => {
  return (
    <div className="about-container">
      <Header />

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
          <div>
            <h4>Skills</h4>
            <p>
              HTML{" "}
              <span>
                <AiFillStar className="star" /> <AiFillStar className="star" />{" "}
                <AiFillStar className="star" /> <AiFillStar className="star" />{" "}
                <AiFillStar className="star" />
              </span>
            </p>
            <p>
              CSS{" "}
              <span>
                <AiFillStar className="star" /> <AiFillStar className="star" />{" "}
                <AiFillStar className="star" /> <AiFillStar className="star" />{" "}
                <AiFillStar className="star" />
              </span>
            </p>
            <p>
              JavaScript{" "}
              <span>
                <AiFillStar className="star" /> <AiFillStar className="star" />{" "}
                <AiFillStar className="star" /> <AiFillStar className="star" />{" "}
                <AiFillStar className="star" />
              </span>
            </p>
            <p>
              NodeJS{" "}
              <span>
                <AiFillStar className="star" /> <AiFillStar className="star" />{" "}
                <AiFillStar className="star" /> <AiFillStar className="star" />{" "}
                <AiFillStar />{" "}
              </span>
            </p>
            <p>
              ReactJS{" "}
              <span>
                <AiFillStar className="star" /> <AiFillStar className="star" />{" "}
                <AiFillStar className="star" /> <AiFillStar className="star" />{" "}
                <AiFillStar className="star" />{" "}
              </span>
            </p>
          </div>
        </div>
        <div className="description">
          <h4>About Me</h4>
          <p>
            I am web developer with a vast array of knowledge in many different
            front end and back end Languages, responsive frameworks, databases,
            and best code practices. My objective is simply to be the best web
            developer that i can be and to contribute to the technology industry
            all that i know and can do. I am dedicated to perfecting my craft by
            learning from more seasoned developers, remaining humble, and
            contineously making stride to learn all that i can about
            development.While a student in MAKAUT University, i studied
            Mechanical Engineering and I believe that my understanding of
            problem solving and analytical thinking are also skills that have
            and will continue to contribute to my overall success as developer.{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
