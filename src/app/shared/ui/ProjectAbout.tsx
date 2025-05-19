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
    <div className="w-full relative md:bg-red-800 xsm:bg-red-400">
      <img src={image.src} alt={name} width="100%" height="100%" />
      <div>
        <h4 className="text-black font-normal text-[24px] my-[10px]">{name}</h4>
        <p className="opacity-60 font-[Verdana] text-[15px]">{position}</p>
      </div>
    </div>
  );
}

export default ProjectAbout;



