import Hero from "@/components/Hero";
import PerformanceImage from "@/../public/images/pexels-bertellifotografia-34552810.jpg";
const page = () => {
  return (
    <div>
      <Hero
        Image={PerformanceImage}
        ImageAlt="High Speed Performance"
        Title="High Speed Performance for SEO"
      />
    </div>
  );
};

export default page;
