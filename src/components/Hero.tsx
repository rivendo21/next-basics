import type { StaticImageData } from "next/image";
import Image from "next/image";

interface Hero {
  Image: StaticImageData;
  Title: string;
  ImageAlt: string;
}

const Hero = (props: Hero) => {
  return (
    <div>
      <div className="absolute inset-0 -z-10">
        <Image fill src={props.Image} alt={props.ImageAlt} />
      </div>
      <div className="absolute inset-0 bg-linear-to-r from-slate-900 -z-1"></div>
      <div className="pt-48 flex justify-center items-center text-3xl">
        <h1 className="text-white text-6xl">{props.Title}</h1>
      </div>
    </div>
  );
};

export default Hero;
