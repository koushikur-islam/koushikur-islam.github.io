
export default function ResearchComponent() {
    return (<div className=' pt-5'>
        <div className='limited-box'>
            <div className='text-lg font-semibold pb-5 uppercase' style={{ color: 'var(--primary-color)' }}>
                Research Interests
            </div>

            <div className="md:flex">
                <ul className="m-0 p-0">
                    <li className="research-item">Distributed Systems</li>
                    <li className="research-item">Edge-Cloud Computing</li>
                    <li className="research-item">Edge Intelligence</li>
                    <li className="research-item">AI/ML Systems</li>
                    <li className="research-item">Large Language Model (LLM)</li>
                </ul>
            </div>
        </div>
    </div>)
}