import Header from "../Header";
import { MdLocationOn } from "react-icons/md";
import {
  BsFillTelephoneFill,
  BsFacebook,
  BsInstagram,
  BsTwitter,
  BsLinkedin,
} from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import "./index.css";
import { Link } from "react-router-dom";

const Contact = () => {
  const submitForm = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <Header />
      <div className="contact-container">
        <div className="message-container">
          <div className="message">
            <h5 className="mb-3">Send Message Us :</h5>
            <form onSubmit={submitForm}>
              <input
                type="text"
                id="name"
                placeholder="Your Name"
                className="input"
              />
              <br />

              <input
                type="text"
                id="name"
                placeholder="Your Email"
                className="input"
              />
              <br />

              <input
                type="text"
                id="name"
                placeholder="Subject"
                className="input"
              />
              <br />

              <input
                type="text"
                id="name"
                placeholder="Message"
                className="input"
              />
              <br />
              <button type="submit" className="button">
                Send
              </button>
            </form>
          </div>
          <div className="get-touch">
            <h5 className="mb-4">Get In Touch :</h5>
            <h6 className="mb-3">
              Any Further Queries Please Contact Us . . .{" "}
            </h6>

            <p>
              <span>
                <MdLocationOn className="icon" />
              </span>{" "}
              6/B/2, Railand Circular Road, Mahesh, Hooghly, West Bengal 712202.
            </p>
            <p>
              <span>
                <BsFillTelephoneFill className="icon" />
              </span>{" "}
              9028513324
            </p>
            <p>
              <span>
                <MdEmail className="icon" />
              </span>{" "}
              pillirajesh@ymail.com
            </p>
            <Link>
              <BsFacebook className="social-icon" />
            </Link>
            <Link>
              <BsInstagram className="social-icon" />
            </Link>
            <Link>
              <BsTwitter className="social-icon" />
            </Link>
            <Link to="https://www.linkedin.com/in/pillirajesh">
              <BsLinkedin className="social-icon" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
