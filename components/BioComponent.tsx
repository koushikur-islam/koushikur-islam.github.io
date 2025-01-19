import { Image } from 'antd'
import SocialComponent from './SocialComponent'
import ResearchComponent from './ResearchInterestComponent'

export default function BioComponent() {
    return (<div className='py-10 mt-6'>
        <div className='limited-box'>
            <div className="text-center px-3 md:px-0 flex flex-col items-center">
                <div className="border-2 border-emerald-500 rounded-full w-64 h-64 p-2 flex items-center justify-center overflow-hidden">
                    <Image
                        src="./headshot.png"
                        alt="No profile image available."
                        className="w-full h-full object-cover"
                    />
                </div>

                <p className="font-semibold text-2xl mt-4 overflow-hidden" style={{ color: 'var(--primary-color)' }}>
                    Koushikur Islam
                </p>
                <p className="text-lg pt-2 mb-2">
                    Research Assistant at The Smart and Distributed Computing Lab
                </p>
                <p className="text-base mb-3 italic">
                    School of Computer, Data and Mathematical Sciences, Western Sydney University, Australia
                </p>

                <SocialComponent />
            </div>

            <div className='px-3 mt-10 pt-7 md:mt-3'>
                <div className='uppercase text-lg font-semibold pb-3' style={{ color: 'var(--primary-color)' }}>
                    Bio
                </div>
                <p>
                    Hi! I'm Koush, short for Koushikur. I'm a final-year postgraduate student at Western Sydney University, Australia, where I'm completing my Master of Information and Communications Technology with a focus on Edge and Cloud Computing.
                </p>
                <p className='mt-3'>
                    I currently work as a Research Assistant at the Smart and Distributed Computing Lab under the guidance of Associate Professor Rodrigo N. Calheiros. At the lab, I've contributed to several research projects, helping design experiments, analyze data, evaluate results, and co-author papers for peer-reviewed journals.

                    My latest work focuses on service placement in the edge-to-cloud continuum, exploring how high-level human intents can guide decision-making.


                </p>

                <ResearchComponent />
            </div>
        </div>
    </div>)
}