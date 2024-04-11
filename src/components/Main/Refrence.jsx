import refImage from "../Assets/C3-oh.webp";
import "./Ref.css";

export default function Refrence() {
  return (
    <div className="ref_wrapper">
      <h2>Reference image</h2>
      <div className="ref">
        <img src={refImage} alt="Refrence" />
      </div>
    </div>
  );
}
