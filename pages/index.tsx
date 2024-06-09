import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Service from "@/components/Service";
import OurWay from "@/components/OurWay";
import Footer from "@/components/Footer";
import About from "@/components/About";


const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <Hero/>
      <Service/>
      <OurWay/>
      <About/>
      <Footer/>
    </div>
  );
}
