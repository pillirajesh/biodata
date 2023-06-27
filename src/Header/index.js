import { Link } from "react-router-dom";
import "./index.css";

const Header = () => {
  return (
    <>
      <nav className="header-container  ">
        <Link to="/" className="link">
          <img
            src="https://pps.whatsapp.net/v/t61.24694-24/336253290_170388569191195_7934902760114985062_n.jpg?ccb=11-4&oh=01_AdRpnxn7Ar8-yx-ItCeAUaSLcgpmvisj8GTi97cX4XNw4w&oe=64A43312"
            alt="profile"
            className="pic"
          />
        </Link>
        <ul className="unordered-list">
          <Link className="link" to="/">
            <li className="list">Home</li>
          </Link>
          <Link className="link" to="/about">
            <li className="list">About</li>
          </Link>
          <Link className="link" to="/projects">
            <li className="list">Projects</li>
          </Link>
          <Link className="link" to="/contact">
            <li className="list">Contact</li>
          </Link>
        </ul>
      </nav>
      <nav class="navbar navbar-dark bg-black fixed-top">
        <div class="container-fluid">
          <Link to="/" className="link">
            <img
              src="https://pps.whatsapp.net/v/t61.24694-24/336253290_170388569191195_7934902760114985062_n.jpg?ccb=11-4&oh=01_AdRpnxn7Ar8-yx-ItCeAUaSLcgpmvisj8GTi97cX4XNw4w&oe=64A43312"
              alt="profile"
              className="pic"
            />
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            class="offcanvas offcanvas-end"
            tabindex="-1"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div class="offcanvas-header">
              <h4 class="offcanvas-title" id="offcanvasNavbarLabel">
                Pilli Rajesh
              </h4>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div class="offcanvas-body ">
              <ul class="navbar-nav justify-content-end  flex-grow-1 pe-3">
                <Link className="link" to="/">
                  <li class="nav-item">Home</li>
                </Link>
                <Link className="link" to="/about">
                  <li class="nav-item">About</li>
                </Link>
                <Link className="link" to="/projects">
                  <li class="nav-item">Projects</li>
                </Link>
                <Link className="link" to="/contact">
                  <li class="nav-item">Contact</li>
                </Link>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
