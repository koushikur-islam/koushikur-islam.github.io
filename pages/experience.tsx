import ExperienceComponent from "@/components/ExperienceComponent";
import Head from "next/head";

export default function ExperiencePage() {
    return (<>
        <Head>
            <title>
                Koush | Experience
            </title>
        </Head>

        <div className="pt-5">
            <ExperienceComponent />
        </div>

    </>)
}