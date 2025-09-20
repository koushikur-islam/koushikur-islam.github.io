import BioComponent from "@/components/BioComponent";
import Head from "next/head";
import ExperienceComponent from "@/components/ExperienceComponent";
import PublicationsComponent from "@/components/PublicationsComponent";

export default function Home() {
  return (
    <>
      <Head>
        <title>
          Koush | Homepage
        </title>
      </Head>
      <BioComponent />
      <PublicationsComponent />
      <ExperienceComponent />
      {/* <ResumeComponent /> */}
    </>
  )
}