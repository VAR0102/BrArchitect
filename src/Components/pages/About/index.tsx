import "./style.css";

import about1 from "../../../../public/ab1.jpg";
import about2 from "../../../../public/ab2.jpg";
import about3 from "../../../../public/ab3.jpg";
import about4 from "../../../../public/ab4.jpg";

import ProjectAbout from "@/app/shared/ui/ProjectAbout";


export default function About() {
  const projectDatas = [
    { id: 1, image: about1, name: "John Doe", position: "CEO & Founder" },
    { id: 2, image: about2, name: "Jane Smith", position: "Architect" },
    { id: 3, image: about3, name: "Mike Ross", position: "Architect" },
    { id: 4, image: about4, name: "Dan Star", position: "Architect" },
  ];
  

  return (
    <div className="content">
      <header>
        <div className="col">
          <h3 className="project">About</h3>
          <p className="title-about">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>
      </header>
      <div className="project-items-container">
        {projectDatas.map((projectData) => {
          return (
            <div key={projectData.id} style={{ width: "24%" }}>
              <ProjectAbout image={projectData.image} name={projectData.name} position={projectData.position}/>
            <p className="coment">
              Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.
              </p>
              <button className="contact">Contact</button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
