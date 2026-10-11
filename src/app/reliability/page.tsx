import Hero from "@/components/Hero";
import ReliabilityImage from "@/../public/images/pexels-sebastianpichard-18776098.jpg";

const page = () => {
  return (
    <div>
      <Hero
        Image={ReliabilityImage}
        ImageAlt="Best Performance"
        Title="Reliability of Web Development"
      />
    </div>
  );
};

export default page;
