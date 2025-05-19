

import Image from "next/image";
import BrArchitect from "../../../../public/architect.jpg";
import "tailwindcss"

export default function Main() {
  return (
    <div className="w-full">
      <div className="w-full  relative px-5">
        <Image
          src={BrArchitect}
          alt="Architect"
          className="w-full block"
          
        />
        <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 mt-4 text-center tracking-[4px] font-verdana text-[15px] leading-[1.5">
          <span className=" bg-black  text-white  !px-4 !py-2 text-[36px]   opacity-75 ">BR</span>
          <span className="text-[#f1f1f1] text-[36px]  font-bold ml-2">Architects</span>
        </h1>
      </div>
    </div>
  );
}

