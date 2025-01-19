import BioComponent from "@/components/BioComponent";
import Head from "next/head";
import ExperienceComponent from "@/components/ExperienceComponent";

export default function Home() {
  return (
    <>
      <Head>
        <title>
          Koush | Bio
        </title>
      </Head>
      <BioComponent />
      {/* <PublicationsComponent /> */}
      <ExperienceComponent />
      {/* <ResumeComponent /> */}
    </>
  )
}