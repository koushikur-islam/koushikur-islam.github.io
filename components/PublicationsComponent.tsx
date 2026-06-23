import { DatabaseOutlined, CodeOutlined, LaptopOutlined, CloudOutlined, LinkOutlined } from '@ant-design/icons';
import Image from 'next/image';
export default function PublicationsComponent() {
    return (< div className=''>
        <div className="limited-box">
            <div className='uppercase text-lg font-semibold pb-3 pl-5' style={{ color: 'var(--primary-color)' }}>
                Publications
            </div>
            <ul className='px-5'>
                {/* <li className='border-t border-slate-700 rounded pb-3'>
                    <div className='mt-3'>
                        <p className='mr font-semibold text-lg'>Beyond SLAs: Drift-Aware Intent Assurance for Edge–Cloud Microservices Placement</p>
                        <p className='my-2'> <label style={{ color: 'var(--primary-color)' }}>Koushikur Islam</label>, Jahedoul Anowar, Kanaka Sai Jagarlamudi, Manish Parashar, Rodrigo N. Calheiros</p>
                        <p><label className='italic font-normal text-base'>The 19th IEEE International Conference on Utility and Cloud Computing (UCC 2026)</label></p>
                        <p className=' mb-3 mt-2'>DOI:
                            <a className='underline mr-3' target='_blank' href="https://ieeexplore.ieee.org/document/11311632">10.1109/SmartIoT66867.2025.00026</a>
                            <a className='underline' style={{ color: 'var(--primary-color)' }} target='_blank' rel='noopener noreferrer' href='publications/SmartIoT2025.pdf'>[PDF] </a>
                        </p>
                        <p className="research-item">IEEE</p>
                        <p className="research-item">Conference</p>
                        <p className="research-item">UCC</p>
                    </div>
                </li> */}

                <li className='border-t border-slate-700 rounded pb-3'>
                    <div className='mt-3'>
                        <p className='mr font-semibold text-lg'>Intent Engine: Natural-Language Intent Translation for Intent-Driven Orchestration in the Compute Continuum </p>
                        <p className='my-2'> <label style={{ color: 'var(--primary-color)' }}>Koushikur Islam</label>, Rodrigo N. Calheiros</p>
                        <p><label className='italic font-normal text-base'>Preprint</label></p>
                        <p className=' mb-3 mt-2'>DOI:
                            <a className='underline mr-3' target='_blank' href="">TBD</a>
                            <a className='underline' style={{ color: 'var(--primary-color)' }} target='_blank' rel='noopener noreferrer' href='publications/IntentEngine.pdf'>[PDF] </a>
                        </p>
                        <p className="research-item">Elsevier</p>
                        <p className="research-item">Journal</p>
                        <p className="research-item">Preprint</p>
                    </div>
                </li>

                <li className='border-t border-slate-700 rounded pb-3'>
                    <div className='mt-3'>
                        <p className='mr font-semibold text-lg'>A Quality and Privacy-Aware Edge–Cloud Continuum Frameworkfor Internet of Things Applications </p>
                        <p className='my-2'> Kanaka Sai Jagarlamudi, Jahedul Anowar, <label style={{ color: 'var(--primary-color)' }}>Koushikur Islam</label>, Fatemeh Mirhakimi, Rodrigo N. Calheiros, Bahman Javadi</p>
                        <p><label className='italic font-normal text-base'>Internet of Things (IoT)</label></p>
                        <p className=' mb-3 mt-2'>DOI: <a className='underline' target='_blank' href="https://doi.org/10.2139/ssrn.6754128">10.2139/ssrn.6754128</a> </p>
                        <p className="research-item">Elsevier</p>
                        <p className="research-item">Journal</p>
                        <p className="research-item">IoT</p>
                    </div>
                </li>

                <li className='border-t border-slate-700 rounded pb-3'>
                    <div className='mt-3'>
                        <p className='mr font-semibold text-lg'>A Scalable Computing Continuum Framework for Ambient Assisted Living </p>
                        <p className='my-2'>Jahedul Anowar, <label style={{ color: 'var(--primary-color)' }}>Koushikur Islam</label>, Kanaka Sai Jagarlamudi , Bahman Javadi , Rodrigo N. Calheiros</p>
                        <p><label className='italic font-normal text-base'>The 26th IEEE International Symposium on Cluster, Cloud, and Internet Computing Workshop (CCGridW, 2026), Sydney, Australia</label></p>
                        <p className=' mb-3 mt-2'>DOI:
                            <a className='underline mr-3' target='_blank' href=""> TBD</a>
                            <a className='underline' style={{ color: 'var(--primary-color)' }} target='_blank' rel='noopener noreferrer' href='publications/CCGrid2026.pdf'>[PDF] </a>
                        </p>
                        <p className="research-item">IEEE</p>
                        <p className="research-item">Conference</p>
                        <p className="research-item">CCGridW</p>
                    </div>
                </li>

                <li className='border-t border-slate-700 rounded pb-3'>
                    <div className='mt-3'>
                        <p className='mr font-semibold text-lg'>MicroIntent: Intent-Based Placement Strategy for Microservice Application in the Compute Continuum Using LLMs </p>
                        <p className='my-2'><label style={{ color: 'var(--primary-color)' }}>Koushikur Islam</label>, Guilherme da Cunha Rodrigues, Bahman Javadi, Rodrigo N. Calheiros</p>
                        <p><label className='italic font-normal text-base'>The 9th IEEE International Conference on Smart Internet of Things (SmartIoT 2025), Sydney, Australia</label></p>
                        <p className=' mb-3 mt-2'>DOI:
                            <a className='underline mr-3' target='_blank' href="https://ieeexplore.ieee.org/document/11311632">10.1109/SmartIoT66867.2025.00026</a>
                            <a className='underline' style={{ color: 'var(--primary-color)' }} target='_blank' rel='noopener noreferrer' href='publications/SmartIoT2025.pdf'>[PDF] </a>
                        </p>
                        <p className="research-item">IEEE</p>
                        <p className="research-item">Conference</p>
                        <p className="research-item">SmartIoT</p>
                    </div>
                </li>
            </ul>
        </div>
    </div >)
}