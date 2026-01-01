import { DatabaseOutlined, CodeOutlined, LaptopOutlined, CloudOutlined, LinkOutlined } from '@ant-design/icons';
import Image from 'next/image';
export default function PublicationsComponent() {
    return (< div className=''>
        <div className="limited-box">
            <div className='uppercase text-lg font-semibold pb-3 pl-5' style={{ color: 'var(--primary-color)' }}>
                Publications
            </div>
            <ul className='px-5'>
                <li className='border-t border-slate-700 rounded pb-3'>
                    <div className='mt-3'>
                        <p className='my-2'><label style={{color:'var(--primary-color)'}}>Koushikur Islam Shohag</label>, Guilherme da Cunha Rodrigues, Bahman Javadi, Rodrigo N. Calheiros</p>
                        <p className='mr font-semibold text-lg'>MicroIntent: Intent-Based Placement Strategy for Microservice Application in the Compute Continuum Using LLMs <br /> 
                        <label className='italic font-normal text-base'>The 9th IEEE International Conference on Smart Internet of Things (SmartIoT 2025), Sydney, Australia</label></p>
                        <p className=' mb-3 mt-2'>DOI: Accepted - <a className='underline'  target='_blank' href="/publications/micro-intent.pdf">[PDF]</a></p>
                        <p className="research-item">IEEE</p>
                        <p className="research-item">Conference</p>
                        <p className="research-item">SmartIoT</p>
                    </div>
                </li>

                <li className='border-t border-slate-700 rounded pb-3'>
                    <div className='mt-3'>
                        <p className='my-2'>Fabio Diniz Rossi, <label style={{color:'var(--primary-color)'}}>Koushikur Islam Shohag</label>, Rodrigo Neves Calheiros</p>
                        <p className='mr font-semibold text-lg'>Agent-Based LSTM Forecasting for Efficient Resource Allocation in Edge Infrastructures <br /> 
                        <label className='italic font-normal text-base'>Springer Nature Compting</label></p>
                        <p className=' mb-3 mt-2'>DOI: Under Review - <a className='underline' target='_blank' href="/publications/agentic-edge.pdf">[PDF]</a></p>
                        <p className="research-item">Springer Nature</p>
                        <p className="research-item">Journal</p>
                        <p className="research-item">Computing</p>
                    </div>
                </li>
            </ul>
        </div>
    </div >)
}