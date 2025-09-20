
export default function ResearchComponent() {
    return (<div className=' pt-5'>
        <div className='limited-box'>
            <div className='text-lg font-semibold pb-5 uppercase' style={{ color: 'var(--primary-color)' }}>
                Research Interests
            </div>

            <div className="md:flex">
                <ul className="m-0 p-0">
                    <li className="research-item">Distributed Computing</li>
                    <li className="research-item">High Performance Computing</li>
                    <li className="research-item">Edge Computing</li>
                    <li className="research-item">Cloud Computing</li>
                    <li className="research-item">Internet of Things (IoT)</li>
                </ul>
            </div>
        </div>
    </div>)
}