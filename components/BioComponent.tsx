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

                <h1 className="font-semibold text-2xl mt-4 overflow-hidden" style={{ color: 'var(--primary-color)' }}>
                    Koushikur Islam
                </h1>
                <h2 className="text-lg pt-2 my-6">
                    Sessional Lecturer and Research Assistant at Western Sydney Unversity, Australia
                </h2>

                <SocialComponent />
            </div>

            <div className='px-3 mt-10 pt-7 md:mt-3'>
                <div className='uppercase text-lg font-semibold pb-3' style={{ color: 'var(--primary-color)' }}>
                    Bio
                </div>
                <p>
                    I’m a Sessional Lecturer (Casual Academic) within the School of Computer, Data and Mathematical Sciences at Western Sydney University, Australia. I also work as a Research Assistant at the Smart and Distributed Computing (SDC) Lab under the guidance of Prof. Bahman Javadi and Associate Prof. Rodrigo N. Calheiros.

                    <br/>
                    <br/>
                    
                    My research interests lie in improving resource management within the edge–cloud continuum using adaptive and autonomous solutions. I envision a fully operational, autonomous, and self-healing distributed system that adapts to real-time variability in the compute continuum to deliver optimal resource allocation.
                </p>

                <ResearchComponent />
            </div>
        </div>
    </div>)
}