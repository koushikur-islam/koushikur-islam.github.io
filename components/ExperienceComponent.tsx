import { LinkOutlined } from "@ant-design/icons";
import { Button } from "antd";
import Link from "next/link";

export default function ExperienceComponent() {
    return (<div className='py-10'>
        <div className='limited-box md:flex'>
            <div className='flex-1'>
                <div className='uppercase text-lg font-semibold pb-3 pl-5' style={{ color: 'var(--primary-color)' }}>
                    Experience
                </div>

                <ul
                    className="relative m-0 w-full list-none overflow-hidden p-0 transition-[height] duration-200 ease-in-out"
                    data-te-stepper-init
                    data-te-stepper-type="vertical">

                    <li
                        data-te-stepper-step-ref
                        className="relative h-fit overflow-hidden after:absolute after:left-[2.05rem] after:top-[1.2rem] after:mt-px after:h-[calc(100%-0rem)] after:w-px after:bg-[#72e2ae] after:content-[''] dark:after:bg-[#72e2ae]">
                        <div
                            data-te-stepper-head-ref
                            className="flex items-center px-6 pt-3 leading-[0.5 rem] no-underline after:content-['']">
                            <span
                                data-te-stepper-head-icon-ref
                                className="mr-3 flex h-[1.2rem] w-[1.2rem] items-center justify-center rounded-full text-sm font-medium" style={{ backgroundColor: 'var(--primary-color)' }}>
                            </span>
                            <span
                                data-te-stepper-head-text-ref
                                className="after:absolute after:flex after:text-[0.8rem] after:content-[data-content] text-lg font-semibold">
                                Research Assistant
                            </span>
                        </div>
                        <div
                            data-te-stepper-content-ref
                            className="transition-[height, margin-bottom, padding-top, padding-bottom] left-0 overflow-hidden pb-4 pl-[3.75rem] pr-6 duration-300 ease-in-out">
                            <div className="text-md font-medium">
                                The Smart and Distributed Computing (SDC) Lab - Western Sydney University <Link href='https://sdclab.cdms.westernsydney.edu.au/' target='_blank' ><Button type='link' icon={<LinkOutlined style={{ color: 'var(--primary-color)' }} />}></Button></Link>
                            </div>
                            <ul className="list-disc list-inside mt-4 mb-2">
                                <li>Collaborated on multiple research projects with faculty members and other researchers in the team. Assisted in designing experiments using smart technologies (HomeAssistant, MQTT server, PahoMQTT, Raspberry Pi,
                                    Mininet , OpenAI and Docker). Collected and analyzed data using statistical tools (Python, R, MQTTX) to evaluate research objective and support the
                                    hypothesis. Co-authored research paper using LaTeX for publication in peer-reviewed conference, enhancing skills in scientific writing
                                    and critical analysis. Prepared documentations with research process and findings to ensure the reproducible and clarity for future research.</li>
                                <li>January, 2024 - Present</li>
                                <li>Onsite</li>
                                <li>Sydney, Australia</li>
                            </ul>
                        </div>
                    </li>


                    <li
                        data-te-stepper-step-ref
                        className="relative h-fit overflow-hidden after:absolute after:left-[2.05rem] after:top-[-1.0rem] after:mt-px after:h-[calc(108%-0rem)] after:w-px after:bg-[#72e2ae] after:content-[''] dark:after:bg-[#72e2ae]">
                        <div
                            data-te-stepper-head-ref
                            className="flex items-center px-6 pt-3 leading-[0.5 rem] no-underline after:content-['']">
                            <span
                                data-te-stepper-head-icon-ref
                                className="mr-3 flex h-[1.2rem] w-[1.2rem] items-center justify-center rounded-full text-sm font-medium" style={{ backgroundColor: 'var(--primary-color)' }}>
                            </span>
                            <span
                                data-te-stepper-head-text-ref
                                className="after:absolute after:flex after:text-[0.8rem] after:content-[data-content] text-lg font-semibold">
                                Full Stack Engineer
                            </span>
                        </div>
                        <div
                            data-te-stepper-content-ref
                            className="transition-[height, margin-bottom, padding-top, padding-bottom] left-0 overflow-hidden pb-6 pl-[3.75rem] pr-6 duration-300 ease-in-out">
                            <div className="text-md font-medium">
                                ABS Trafikskola <Link href='https://abstrafikskola.se/' target='_blank' ><Button type='link' icon={<LinkOutlined style={{ color: 'var(--primary-color)' }} />}></Button></Link>
                            </div>
                            <ul className="list-disc list-inside mt-4 mb-2">
                                <li>Led the development of enterprise resource planning and lesson booking systems for the one of the largest driving schools
                                    in Stockholm, Sweden following microservice architecture using ASP.NET, Next.js, AWS, Docker and Kubernetes. Implemented continuous integration and continuous deployment (CI/CD) strategy to test and automate faster application
                                    deployment and releases in each sprints.</li>
                                <li>June, 2024 - Present</li>
                                <li>Remote, Contractual</li>
                                <li>Stockholm, Sweden</li>
                            </ul>
                        </div>
                    </li>

                    <li
                        data-te-stepper-step-ref
                        className="relative h-fit overflow-hidden after:absolute after:left-[2.05rem] after:top-[-2.5rem] after:mt-px after:h-[calc(116%-0rem)] after:w-px after:bg-[#72e2ae] after:content-[''] dark:after:bg-[#72e2ae]">
                        <div
                            data-te-stepper-head-ref
                            className="flex items-center px-6 pt-3 leading-[0.5 rem] no-underline after:content-['']">
                            <span
                                data-te-stepper-head-icon-ref
                                className="mr-3 flex h-[1.2rem] w-[1.2rem] items-center justify-center rounded-full text-sm font-medium" style={{ backgroundColor: 'var(--primary-color)' }}>
                            </span>
                            <span
                                data-te-stepper-head-text-ref
                                className="after:absolute after:flex after:text-[0.8rem] after:content-[data-content] text-lg font-semibold">
                                Software Engineer I
                            </span>
                        </div>
                        <div
                            data-te-stepper-content-ref
                            className="transition-[height, margin-bottom, padding-top, padding-bottom] left-0 overflow-hidden pb-6 pl-[3.75rem] pr-6 duration-300 ease-in-out">
                            <div className="text-md font-medium">
                                Astha IT <Link href='https://www.asthait.com/' target='_blank' ><Button type='link' icon={<LinkOutlined style={{ color: 'var(--primary-color)' }} />}></Button></Link>
                            </div>
                            <ul className="list-disc list-inside mt-4 mb-2">
                                <li>Engaged directly with clients to collect requirements, plan, design, implement and deliver highly scalable and robust
                                    software solutions primarily using ASP.NET, React.js and AWS following agile method and microservices architecture
                                    in various domains including e-commerce, enterprise resource planning systems and gaming. Involved in code review process using Bitbucket and Jira along with preparing API documentations for improving new
                                    on boarding process and stronger team collaboration.</li>
                                <li>October, 2021 - February, 2023</li>
                                <li>On Site, Full time</li>
                                <li>Dhaka, Bangladesh</li>
                            </ul>
                        </div>
                    </li>

                    <li
                        data-te-stepper-step-ref
                        className="relative h-fit overflow-hidden after:absolute after:left-[2.05rem] after:top-[-1.0rem] after:mt-px after:h-[calc(100%-0.0rem)] after:w-px after:bg-[#72e2ae] after:content-[''] dark:after:bg-[#72e2ae]">
                        <div
                            data-te-stepper-head-ref
                            className="flex items-center px-6 leading-[0.0 rem] no-underline after:content-['']">
                            <span
                                data-te-stepper-head-icon-ref
                                className="mr-3 flex h-[1.2rem] w-[1.2rem] items-center justify-center rounded-full text-sm font-medium" style={{ backgroundColor: 'var(--primary-color)' }}>
                            </span>
                            <span
                                data-te-stepper-head-text-ref
                                className="after:absolute after:flex after:text-[0.8rem] after:content-[data-content] text-lg font-semibold">
                                Teaching Assistant
                            </span>
                        </div>
                        <div
                            data-te-stepper-content-ref
                            className="transition-[height, margin-bottom, padding-top, padding-bottom] left-0 overflow-hidden pb-6 pl-[3.75rem] pr-6 duration-300 ease-in-out">
                            <div className="text-md">
                                American International University - Bangladesh
                                <Link href='https://www.aiub.edu/' target='_blank' ><Button type='link' icon={<LinkOutlined style={{ color: 'var(--primary-color)' }} />}></Button></Link>
                            </div>
                            <ul className="list-disc list-inside mt-4 mb-2">
                                <li>Assisted instructor to organize course materials and conduct class tests for the courses Web Technologies and Advanced
                                    Programming in Web Technologies. Guided students during the lab sessions and helped them understanding the key concepts in web technologies using
                                    PHP, Laravel, JavaScript, jQuery, MySQL and Apache server. Provided students consultations sessions to address their difficulties and challenges related to the coursework and as-
                                    signments. Graded assignments, class tests and exams to provide constructive feedback to the students for improving their skills and understanding related to web technologies.</li>
                                <li>January, 2021 - May 2021</li>
                                <li>On Site, Part time</li>
                                <li>Dhaka, Bangladesh</li>
                            </ul>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>)
}