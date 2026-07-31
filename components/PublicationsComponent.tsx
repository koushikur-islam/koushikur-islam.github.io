import { DatabaseOutlined, CodeOutlined, LaptopOutlined, CloudOutlined, LinkOutlined } from '@ant-design/icons';
import Image from 'next/image';
export default function PublicationsComponent() {
    var title = "publications"
    return (< div className=''>
        <div className="limited-box">
            <div className='uppercase text-lg font-semibold pb-3 pl-5' style={{ color: 'var(--primary-color)' }}>
                Publications
            </div>
            <ul className='px-5'>
                {/* 
                <li className='border-t border-slate-700 rounded pb-3'>
                    <div className='mt-3'>
                        <p className='mr font-semibold text-lg'>The Compliance Illusion: Runtime Intent Assurance for Edge–Cloud Microservices Placement</p>
                        <p className='my-2'> <label style={{ color: 'var(--primary-color)' }}>Koushikur Islam</label>, Manish Parashar</p>
                        <p><label className='italic font-normal text-base'>The 34th IEEE International Conference on Web Services (ICWS), UAE </label></p>
                        <p className=' mb-3 mt-2'>DOI:
                            <a className='underline mr-3' target='_blank' href="https://ieeexplore.ieee.org/document/11311632">10.1109/SmartIoT66867.2025.00026</a>
                            <a className='underline' style={{ color: 'var(--primary-color)' }} target='_blank' rel='noopener noreferrer' href='publications/SmartIoT2025.pdf'>[PDF] </a>
                        </p>
                        <p className="research-item">IEEE</p>
                        <p className="research-item">Conference</p>
                        <p className="research-item">ICWS</p>
                    </div>
                </li> */}

                {/* <li className='border-t border-slate-700 rounded pb-3'>
                    <div className='mt-3'>
                        <p className='mr font-semibold text-lg'>Assurance Interference in Intent-Driven Management: Vision and Challenges</p>
                        <p className='my-2'> <label style={{ color: 'var(--primary-color)' }}>Koushikur Islam</label>, Schahram Dustdar, Manish Parashar</p>
                        <p><label className='italic font-normal text-base'>IEEE Internet Computing </label></p>
                        <p className=' mb-3 mt-2'>DOI:
                            <a className='underline mr-3' target='_blank' href="https://ieeexplore.ieee.org/document/11311632">10.1109/SmartIoT66867.2025.00026</a>
                            <a className='underline' style={{ color: 'var(--primary-color)' }} target='_blank' rel='noopener noreferrer' href='publications/SmartIoT2025.pdf'>[PDF] </a>
                        </p>
                        <p className="research-item">IEEE</p>
                        <p className="research-item">Magazine</p>
                        <p className="research-item">Internet Computing</p>
                    </div>
                </li> */}

                <li className='border-t border-slate-700 rounded pb-3'>
                    <div className='mt-3'>
                        <p className='mr font-semibold text-lg'>Intent Engine: Natural-Language Intent Translation for Intent-Driven Orchestration in the Compute Continuum </p>
                        <p className='my-2'> <label style={{ color: 'var(--primary-color)' }}>Koushikur Islam</label>, Rodrigo N. Calheiros</p>
                        <p><label className='italic font-normal text-base'>Journal of Systems Architecture</label></p>
                        <p className=' mb-3 mt-2'>DOI:
                            <a className='underline ml-2 mr-4' target='_blank' href="https://doi.org/10.1016/j.sysarc.2026.103938 ">https://doi.org/10.1016/j.sysarc.2026.103938 </a>
                            <a className='' style={{ color: 'var(--primary-color)' }} target='_blank' rel='noopener noreferrer' href='publications/IntentEngine.pdf'>[PDF] </a>
                        </p>
                        <p className="research-item">Journal</p>
                        <p className="research-item">Elsevier</p>
                        <p className="research-item">JSA</p>
                    </div>
                </li>


                <li className='border-t border-slate-700 rounded pb-3'>
                    <div className='mt-3'>
                        <p className='mr font-semibold text-lg'>A Scalable Computing Continuum Framework for Ambient Assisted Living </p>
                        <p className='my-2'>Jahedul Anowar, <label style={{ color: 'var(--primary-color)' }}>Koushikur Islam</label>, Kanaka Sai Jagarlamudi , Bahman Javadi , Rodrigo N. Calheiros</p>
                        <p><label className='italic font-normal text-base'>The 26th IEEE International Symposium on Cluster, Cloud, and Internet Computing Workshop (CCGridW, 2026), Sydney, Australia</label></p>
                        <p className=' mb-3 mt-2'>DOI:
                            <a className='underline ml-2 mr-4' target='_blank' href="https://doi.org/10.1109/CCGridW69005.2026.00024">https://doi.org/10.1109/CCGridW69005.2026.00024</a>
                            <a className='' style={{ color: 'var(--primary-color)' }} target='_blank' rel='noopener noreferrer' href='publications/CCGrid2026.pdf'>[PDF] </a>
                        </p>
                        <p className="research-item">Conference</p>
                        <p className="research-item">IEEE</p>
                        <p className="research-item">CCGridW</p>
                    </div>
                </li>

                <li className='border-t border-slate-700 rounded pb-3'>
                    <div className='mt-3'>
                        <p className='mr font-semibold text-lg'>MicroIntent: Intent-Based Placement Strategy for Microservice Application in the Compute Continuum Using LLMs </p>
                        <p className='my-2'><label style={{ color: 'var(--primary-color)' }}>Koushikur Islam</label>, Guilherme da Cunha Rodrigues, Bahman Javadi, Rodrigo N. Calheiros</p>
                        <p><label className='italic font-normal text-base'>The 9th IEEE International Conference on Smart Internet of Things (SmartIoT 2025), Sydney, Australia</label></p>
                        <p className=' mb-3 mt-2'>DOI:
                            <a className='underline ml-2 mr-4' target='_blank' href="https://doi.org/10.1109/SmartIoT66867.2025.00026">https://doi.org/10.1109/SmartIoT66867.2025.00026</a>
                            <a className='' style={{ color: 'var(--primary-color)' }} target='_blank' rel='noopener noreferrer' href='publications/SmartIoT2025.pdf'>[PDF] </a>
                        </p>
                        <p className="research-item">Conference</p>
                        <p className="research-item">IEEE</p>
                        <p className="research-item">SmartIoT</p>
                    </div>
                </li>
            </ul>
        </div>
    </div >)
}