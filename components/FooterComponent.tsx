import Link from "next/link";
import SocialComponent from "./SocialComponent";
export default function FooterComponent() {
    return (<>
        <div className="text-center pt-8 sm:pb-5 mb-[45px] md:mb-0 border-t border-slate-700" >
            <div className="limited-box md:mb-0">
                <p className="text-2xl font-semibold mb-7 overflow-hidden" style={{ color: 'var(--primary-color)' }}>Koushikur Islam</p>
                <p className="mb-5" style={{ color: 'var(--primary-color)' }}><Link href=''>koushikur [AT] outlook [DOT] com</Link></p>
                <SocialComponent />
            </div>
            <p className="py-4">
                {/* ©{new Date()?.getFullYear()} All rights reserved. */}
                ©Koushikur Islam. All rights reserved.
            </p>
        </div>
    </>)
}