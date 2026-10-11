import Image from "next/image";
import homePage from "@/images/glenn-carstens-peters-npxXWgQ33ZQ-unsplash.jpg";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <>
      <Hero
        Image={homePage}
        ImageAlt="developing of nextjs"
        Title="SSR for better SEO"
      />
    </>
  );
}
