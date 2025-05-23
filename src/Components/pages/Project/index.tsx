import "./style.css";
import ProjectItem from "@/app/shared/ui/ProjectItem";
import project1 from "../../../../public/prj1.jpg";
import project2 from "../../../../public/prj2.jpg";
import project3 from "../../../../public/prj3.jpg";
import project4 from "../../../../public/prj4.jpg";
import project5 from "../../../../public/prj5.jpg";
import project6 from "../../../../public/prj6.jpg";
import project7 from "../../../../public/prj7.jpg";
import project8 from "../../../../public/prj8.jpg";


export default function Project() {
  const projectDatas = [
    { id: 1, image: project1, text: "Summer House" },
    {
      id: 2,
      image: project2,
      text: "Brick House",
    },
    { id: 3, image: project3, text: "Renovated" },
    { id: 4, image: project4, text: "Barn House" },
    {
      id: 5,
      image: project5,
      text: "Summer House",
    },
    { id: 6, image: project6, text: "Brick House" },
    { id: 7, image: project7, text: "Renovated" },
    {
      id: 8,
      image: project8,
      text: "Barn House",
    },
  ];

  return (
    <div>
      <header>
        <div className="now">
          <h3 className="border-b border-[#f1f1f1] !px-5 !py-5 font-normal my-5 text-[25px] leading-[1.5]">Projects</h3>
        </div>
      </header>

      <div className="flex justify-between items-center flex-wrap gap-4">
        {projectDatas.map((projectData) => {
          return (
            <div key={projectData.id} className="w-[24%]">
              <ProjectItem image={projectData.image} text={projectData.text} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
