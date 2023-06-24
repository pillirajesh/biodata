import "./index.css";

const Home = () => {
  return (
    <div className="middle-container">
      <h1 className="profile-name">
        I'm{" "}
        <span style={{ fontStyle: "italic", color: "yellow" }}>
          Pilli Rajesh Sombabu
        </span>
      </h1>
      <p className="job-description">Full Stack Developer</p>
    </div>
  );
};

export default Home;
