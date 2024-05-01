import Image from "next/image";

const Bulb = () => {
  return <div className="absolute -left-36 -bottom-12 
  rotate mix-blend-color-dodge animate-pulse duration-75 z-10 w-[200px] xl:w-[260px]">
    <Image 
    src={'/builb.png'} 
    width={260} height={200} 
    className="w-full h-full" alt="" />
  </div>;
};

export default Bulb;
