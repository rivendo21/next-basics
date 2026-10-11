import Hero from "@/components/Hero";
import ScalabilityImage from "@/images/pexels-chris-221718132-23952902.jpg";

const page = () => {
  return (
    <div>
      <Hero
        Image={ScalabilityImage}
        ImageAlt="scalable architecture"
        Title="Easy To Work with System"
      />
    </div>
  );
};

export default page;
