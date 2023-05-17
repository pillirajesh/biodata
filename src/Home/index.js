import "./index.css";
import Header from "../Header";

const Home = () => {
  return (
    <div className="home-container">
      <Header />
      <div className="middle-container">
        <h1 className="profile-name">I am Pilli Rajesh Sombabu</h1>
        <p className="job-description">Full Stack Developer |</p>
      </div>
    </div>
  );
};

export default Home;
