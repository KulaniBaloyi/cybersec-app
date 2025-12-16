import Image from "next/image";
import LandingPage from "./components/LandingPage";
import Metrics from "./components/Metrics";
import Banner from "./components/Banner";
import LearningCoverage from "./components/LearningCoverage";
import BentoGrid from "./components/BentoGrid";
import Newletter from "./components/Newletter";

export default function Home() {
  return (
   <>
    <LandingPage />
     <Metrics/>
    <LearningCoverage/>
    <BentoGrid/>
    <Newletter/>
   </>
  );
}
