import {StaticImageData} from "next/image";


function ProjectItem({image, text}: { image: StaticImageData, text: string }) {
  return (<div className="w-full relative">
    <img src={image.src} alt={text} width="100%" height="100%" />
    <span className="absolute top-0 left-0 bg-black text-white font-light text-[17px] !px-2 !py-1">{text}</span>
  </div>);
}

export default ProjectItem;