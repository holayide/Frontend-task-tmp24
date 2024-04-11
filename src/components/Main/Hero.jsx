import "./Hero.css";
import Details from "./Details";
import Cards from "./Cards";
import Refrence from "./Refrence";

export default function Main() {
  return (
    <div className="main">
      <div className="hero">
        <h1>Oh.studio</h1>
        <h3>Design studio</h3>
        <div className="details">
          <div>
            <span>🌐</span>
            <a href="#/">View Live</a>
          </div>
          <div>
            <span>📷</span>
            <a href="#/">Free Photo Assets</a>
          </div>
          <div>
            <span>⭐</span>
            <a href="#/">Open Source Icons</a>
          </div>
        </div>
      </div>

      <Details />

      <Cards />

      <Refrence />
    </div>
    // 01bcf2
  );
}
