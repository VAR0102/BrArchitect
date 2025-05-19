import {StaticImageData} from "next/image";
import './styel.css'

function ProjectItem({image, text}: { image: StaticImageData, text: string }) {
  return (<div className="project-item">
    <img src={image.src} alt={text} width="100%" height="100%" />
    <div className="overlay-text">{text}</div>
  </div>);
}

export default ProjectItem;