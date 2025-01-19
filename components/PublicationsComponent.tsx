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
                        <p className='mr font-semibold text-lg'>Intent-Based Microservice Application Placement in the Compute Continuum, <label className='italic font-normal text-base'>2025 IEEE 25th International Symposium on Cluster, Cloud and Internet Computing (CCGrid)</label></p>
                        <p className='italic underline mb-3 mt-2'>DOI: <a href="https://doi.org/10.1016/j.iot.2024.101481">https://doi.org/10.1016/j.iot.2024.101481</a></p>
                        <p className="research-item">IEEE</p>
                        <p className="research-item">Conference</p>
                        <p className="research-item">CCGrid</p>
                    </div>
                </li>

                <li className='border-t border-slate-700 rounded pb-3'>
                    <div className='mt-3'>
                        <p className='my-2'>Guilherme da Cunha Rodrigues, <label style={{color:'var(--primary-color)'}}>Koushikur Islam Shohag</label>, Bahman Javadi, Rodrigo N. Calheiros</p>
                        <p className='mr font-semibold text-lg'>Intent-Based Microservice Application Placement in the Compute Continuum, <label className='italic font-normal text-base'>2025 IEEE 25th International Symposium on Cluster, Cloud and Internet Computing (CCGrid)</label></p>
                        <p className='italic underline mb-3 mt-2'>DOI: <a href="https://doi.org/10.1016/j.iot.2024.101481">https://doi.org/10.1016/j.iot.2024.101481</a></p>
                        <p className="research-item">IEEE</p>
                        <p className="research-item">Conference</p>
                        <p className="research-item">CCGrid</p>
                    </div>
                </li>
            </ul>
        </div>
    </div >)
}