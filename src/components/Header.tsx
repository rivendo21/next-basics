import Link from "next/link";

const Header = () => {
  return (
    <div className="flex justify-between items-center pr-10 pl-10 pt-10">
      <div className="text-white text-2xl z-1">
        <Link href="/">nextjs</Link>
      </div>
      <div className="text-black flex gap-20 text-2xl bg-slate-900/50 p-5 rounded-full text-white">
        <Link href="/">Home</Link>
        <Link href="/performance">performance</Link>
        <Link href="/reliability">reliability</Link>
        <Link href="/scale">scale</Link>
      </div>
    </div>
  );
};

export default Header;
