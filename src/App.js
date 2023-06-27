import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Header";
import "./Home";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Projects from "./Projects";
import Video from "./Video";
import NotFound from "./NotFound";
import "./App.css";

const App = () => {
  return (
    <div className="app-container">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/projects" element={<Projects />} />
          <Route exact path="/video" element={<Video />} />
          <Route path="/not-found" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
