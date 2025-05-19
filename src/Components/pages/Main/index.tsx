import Image from "next/image";
import BrArchitect from "../../../../public/architect.jpg";
import "./style.css";

export default function Main() {
  return (
    <div className="row">
      <div className="hero-section">
        <Image
          src={BrArchitect}
          alt="Architect"
          className="custom-image"
          
        />
        <h1 className="brand">
          <span className="black-text">BR</span>
          <span className="white-text">Architects</span>
        </h1>
      </div>
    </div>
  );
}
