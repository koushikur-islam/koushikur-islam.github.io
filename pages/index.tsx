import BioComponent from "@/components/BioComponent";
import Head from "next/head";
import ExperienceComponent from "@/components/ExperienceComponent";

export default function Home() {
  return (
    <>
      <BioComponent />
      {/* <PublicationsComponent /> */}
      <ExperienceComponent />
      {/* <ResumeComponent /> */}
    </>
  )
}