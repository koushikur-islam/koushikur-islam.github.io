import PublicationsComponent from "@/components/PublicationsComponent";
import Head from "next/head";

export default function PublicationsPage() {
    return (<>
        <Head>
            <title>
                Koushik | Publications
            </title>
        </Head>

        <div className="pt-10 mt-5">
            <PublicationsComponent />
        </div>
    </>)
}