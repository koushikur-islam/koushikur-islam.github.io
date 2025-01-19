import { LinkOutlined } from "@ant-design/icons";
import Image from "next/image";

export default function ProjectComponent() {
    return (<div className='py-10'>
        <div className="limited-box">
            <div className='uppercase text-lg font-semibold pb-3 pl-5' style={{ color: 'var(--primary-color)' }}>
                Projects
            </div>
            <ul className="px-5">
                <li className='border-t border-slate-700 rounded py-3 px-2'>
                    <p className="text-xl font-semibold">Intent-Based Microservice Application Placement in the Compute Continuum  <a href="https://digitalx.net.au/h2x.html" target="_blank" className="ml-3" style={{ color: "var(--primary-color)" }}><LinkOutlined /></a></p>

                    <p className="italic mt-2">2024, Sydney, Australia</p>

                    <p className="my-3">
                        Researched and developed a high-level intent-based microservice application deployment recommendation tool for the computing continuum.
                        Designed an algorithm to map user intents to application placement strategies, enhancing deployment efficiency.
                        Gained practical experience with Natural Language Processing libraries and advanced tools such as Mininet, OpenAI, Docker, and Python.
                        Currently preparing to publish the research findings in upcoming conference papers to contribute valuable insights to the field and encourage collaboration among researchers.
                    </p>
                    <p className="research-item">Mininet</p>
                    <p className="research-item">Python</p>
                    <p className="research-item">NLP</p>
                    <p className="research-item">LLM</p>
                    <p className="research-item">Docker</p>
                </li>

                <li className='border-t border-slate-700 rounded py-3 px-2'>
                    <p className="text-xl font-semibold">DigitalX Assisted Living Solutions - OpenAIoT  <a href="https://digitalx.net.au/h2x.html" target="_blank" className="ml-3" style={{ color: "var(--primary-color)" }}><LinkOutlined /></a></p>

                    <p className="italic mt-2">2024, Sydney, Australia</p>

                    <p className="my-3">
                        Worked on a smart assisted living solution for elderly individuals with physical challenges using the OpenAIoT platform.
                        Integrated various sensors, including fall detection, door monitoring, smoke alarms, and intrusion cameras, to enhance home safety, utilizing an MQTT server, file storage server, and Kafka messaging service.
                        Analyzed behavior patterns using sensor data processed through MQTT servers, NumPy, and edge devices.
                        Prepared technical documentation to support future researchers in continuing the project.
                    </p>
                    <p className="research-item">OpenAIoT</p>
                    <p className="research-item">MQTT</p>
                    <p className="research-item">HomeAssistant</p>
                    <p className="research-item">Docker</p>
                </li>

                <li className='border-t border-slate-700 rounded py-3 px-2'>
                    <p className="text-xl font-semibold">ABS Trafikskola <a href="https://abstrafikskola.se/" target="_blank" className="ml-3" style={{ color: "var(--primary-color)" }}><LinkOutlined /></a></p>

                    <p className="italic text-lg mt-2">2024, Sydney, Australia</p>

                    <p className="my-3">
                        Served as Full-Stack Software Developer for ABS Trafikskola, one of the largest driving schools in Stockholm, Sweden, contributing to the development of a booking system for driving lessons, a content management portal, and an ERP system.
                        Supported junior developers through code reviews on Bitbucket and one-on-one guidance to ensure the team delivered a quality product.
                    </p>
                    <p className="research-item">.NET Core</p>
                    <p className="research-item">AWS SNS</p>
                    <p className="research-item">AWS Lambda</p>
                    <p className="research-item">React.js</p>
                    <p className="research-item">Next.js</p>
                    <p className="research-item">Redis</p>
                </li>

                <li className='border-t border-slate-700 rounded py-3 px-2'>
                    <p className="text-xl font-semibold">EMC Technologies <a href="https://www.emctech.com.au/" target="_blank" className="ml-3" style={{ color: "var(--primary-color)" }}><LinkOutlined /></a></p>

                    <p className="italic text-lg mt-2">2023, Dhaka, Bangladesh</p>

                    <p className="my-3">
                        Contributed to the ERP system of EMC Technologies, Australia's largest product testing and certification company, optimizing their process flow.
                        Served as a Full Stack Developer to plan, architect, and deliver cloud-based business solutions using AWS, .NET Core, Redis, Kafka, and Next.js.
                        Developed and implemented multiple microservices, including bulk email service, payment service, payroll service, and identity service.
                    </p>
                    <p className="research-item">.NET Core</p>
                    <p className="research-item">AWS Lambda</p>
                    <p className="research-item">AWS SQS</p>
                    <p className="research-item">React.js</p>
                    <p className="research-item">Next.js</p>
                    <p className="research-item">PostgreSQL</p>
                    <p className="research-item">Redis</p>
                </li>

                <li className='border-t border-slate-700 rounded py-3 px-2'>
                    <p className="text-xl font-semibold">Transcom Digital <a href="https://transcomdigital.com/" target="_blank" className="ml-3" style={{ color: "var(--primary-color)" }}><LinkOutlined /></a></p>

                    <p className="italic text-lg mt-2">2022, Dhaka, Bangladesh</p>

                    <p className="my-3">
                        Worked as a Full Stack Software Engineer on Transcom Digital, the largest e-commerce platform in Bangladesh, building a highly scalable, robust, and efficient system.
                        Responsibilities included gathering client requirements, planning and designing scalable application modules, managing deployments with CI/CD tools, and preparing comprehensive project documentation.
                    </p>
                    <p className="research-item">Microservices</p>
                    <p className="research-item">GrandNode</p>
                    <p className="research-item">ASP.NET Core</p>
                    <p className="research-item">AWS EC2</p>
                    <p className="research-item">Apache Kafka</p>
                    <p className="research-item">React.js</p>
                    <p className="research-item">Next.js</p>
                    <p className="research-item">MongoDB</p>
                </li>
            </ul>
        </div>
    </div>)
}