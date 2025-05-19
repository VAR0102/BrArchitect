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
    <div>
      <header>
        <div>
          <h3 className="border-b border-[#f1f1f1] !px-5 !py-4 font-normal !my-5 text-[25px] leading-[1.5]">About</h3>
          <p className="!px-6 !py-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>
      </header>
      <div className="flex flex-start wrap g-4flex justify-start flex-wrap gap-4">
        {projectDatas.map((projectData) => {
          return (
            <div key={projectData.id} style={{ width: "24%" }}>
              <ProjectAbout image={projectData.image} name={projectData.name} position={projectData.position}/>
            <p className="!px-5 !py-5 leading-[1.5]">
              Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.
              </p>
              <button className="text-black bg-[#f1f1f1] w-full !px-[18px] !py-2 text-[15px] leading-[1.5] cursor-pointer ">Contact</button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
