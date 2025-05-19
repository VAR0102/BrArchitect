import { StaticImageData } from "next/image";
import "./styel.css";

function ProjectAbout({
  image,
  name,
  position,
}: {
  image: StaticImageData;
  name: string;
  position: string;
}) {
  return (
    <div className="project-item">
      <img src={image.src} alt={name} width="100%" height="100%" />
      <div>
        <h4 className="name">{name}</h4>
        <p className="project-position">{position}</p>
      </div>
    </div>
  );
}

export default ProjectAbout;



