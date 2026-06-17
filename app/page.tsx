import Image from "next/image";
import Hero from "./components/Hero";
import AiFeature from "./components/AiFeature";
import Profile from "./components/Profile";
import CTA from "./components/CTA";

export default function Home() {
  return (
  <main>
    <Hero/>
    <AiFeature/>
    <Profile/>
     <CTA/>
  </main>
  );
}
