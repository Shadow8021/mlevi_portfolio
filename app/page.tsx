import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
export default function Home() {
  return (
    <div className="flex min-h-screen flex-col justify-center bg-zinc-50 font-sans dark:bg-black">
      <Navbar />
      <Hero />
    </div>
  );
}
