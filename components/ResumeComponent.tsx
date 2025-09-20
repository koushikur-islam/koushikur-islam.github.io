import { LinkOutlined } from '@ant-design/icons';
import { Button } from "antd";
import Link from 'next/link';
import SkillComponent from './SkillComponent';

export default function ResumeComponent() {
    const downloadCV = () => {
        console.log('downloadCV');
    }

    return (<div className='pt-10'>
        <div className="limited-box">
            <div className='uppercase text-lg font-semibold pb-3 pl-5 pt-5' style={{ color: 'var(--primary-color)' }}>
                Resume
            </div>
            <div className="">
                <ul
                    className="relative m-0 w-full list-none overflow-hidden p-0 transition-[height] duration-200 ease-in-out"
                    data-te-stepper-init
                    data-te-stepper-type="vertical">

                    <li
                        data-te-stepper-step-ref
                        className="relative h-fit overflow-hidden after:absolute after:left-[2.05rem] after:top-[1.4rem] after:mt-px after:h-[calc(100%-1.2rem)] after:w-px after:bg-[#72e2ae] after:content-[''] dark:after:bg-[#72e2ae]">
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
                                KOUSHIKUR ISLAM SHOHAG
                            </span>
                        </div>
                        <div
                            data-te-stepper-content-ref
                            className="transition-[height, margin-bottom, padding-top, padding-bottom] left-0 overflow-hidden pb-6 pl-[3.75rem] pr-6 duration-300 ease-in-out">
                            <ul className="list-disc list-inside pl-0 mt-4 mb-2">
                                <li>Research Assistant</li>
                                <li style={{ color: 'var(--primary-color)' }}><Link href=''>koushikur [AT] outlook [DOT] com</Link></li>
                                <li>Sydney, New South Wales, Australia</li>
                            </ul>
                        </div>
                    </li>
                </ul>


                <div className="pl-7 text-xl font-semibold mt-10 overflow-hidden">
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
                                ABS Trafikskola <Link href='https://staging.bteori.se/' target='_blank' ><Button type='link' icon={<LinkOutlined style={{ color: 'var(--primary-color)' }} />}></Button></Link>
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

                <div className="pl-7 text-xl font-semibold mt-10 overflow-hidden">
                    Education
                </div>
                <ul
                    className="relative m-0 w-full list-none overflow-hidden p-0 transition-[height] duration-200 ease-in-out"
                    data-te-stepper-init
                    data-te-stepper-type="vertical">

                    <li
                        data-te-stepper-step-ref
                        className="relative h-fit overflow-hidden after:absolute after:left-[2.05rem] after:top-[2.0rem] after:mt-px after:h-[calc(115%-0rem)] after:w-px after:bg-[#72e2ae] after:content-[''] dark:after:bg-[#72e2ae]">
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
                                Master of Information and Communication Technology
                            </span>
                        </div>
                        <div
                            data-te-stepper-content-ref
                            className="transition-[height, margin-bottom, padding-top, padding-bottom] left-0 overflow-hidden pb-6 pl-[3.75rem] pr-6 duration-300 ease-in-out">
                            <div className="text-md">
                                Western Sydney University
                                <Link href='https://www.westernsydney.edu.au/' target='_blank' ><Button type='link' icon={<LinkOutlined style={{ color: 'var(--primary-color)' }} />}></Button></Link>
                            </div>
                            <ul className="list-disc list-inside mt-4 mb-2">
                                {/* <li>CGPA: 5.75 out of 7.00</li> */}
                                <li>Passing year: 2024</li>
                                <li>School of Computer, Data and Mathematical Sciences</li>
                                <li>Sydney, NSW, Australia</li>
                            </ul>
                        </div>
                    </li>

                    <li
                        data-te-stepper-step-ref
                        className="relative h-fit overflow-hidden after:absolute after:left-[2.05rem] after:top-[-1.0rem] after:mt-px after:h-[calc(100%)] after:w-px after:bg-[#72e2ae] after:content-[''] dark:after:bg-[#72e2ae]">
                        <div
                            data-te-stepper-head-ref
                            className="flex items-center px-6 leading-[0.5 rem] no-underline after:content-['']">
                            <span
                                data-te-stepper-head-icon-ref
                                className="mr-3 flex h-[1.2rem] w-[1.2rem] items-center justify-center rounded-full text-sm font-medium" style={{ backgroundColor: 'var(--primary-color)' }}>
                            </span>
                            <span
                                data-te-stepper-head-text-ref
                                className="after:absolute after:flex after:text-[0.8rem] after:content-[data-content] text-lg font-semibold">
                                Bachelor of Science in Computer Science and Engineering
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
                                {/* <li>CGPA: 3.97 out of 4.00</li> */}
                                <li>Passing year: 2021</li>
                                <li>Faculty of Science and Technology</li>
                                <li>Dhaka, Bangladesh</li>
                            </ul>
                        </div>
                    </li>
                </ul>


                <div className="pl-7 text-xl font-semibold mt-10 overflow-hidden">
                    Acomplishments
                </div>
                <ul
                    className="relative m-0 w-full list-none overflow-hidden p-0 transition-[height] duration-200 ease-in-out"
                    data-te-stepper-init
                    data-te-stepper-type="vertical">

                    <li
                        data-te-stepper-step-ref
                        className="relative h-fit overflow-hidden after:absolute after:left-[2.05rem] after:top-[2.0rem] after:mt-px after:h-[calc(100%-0rem)] after:w-px after:bg-[#72e2ae] after:content-[''] dark:after:bg-[#72e2ae]">
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
                                Postgraduate Computing Project Winner
                            </span>
                        </div>
                        <div
                            data-te-stepper-content-ref
                            className="transition-[height, margin-bottom, padding-top, padding-bottom] left-0 overflow-hidden pb-6 pl-[3.75rem] pr-6 duration-300 ease-in-out">
                            <div className="text-md">
                                Optimize 2023
                                <Link href='https://optimize2023.cdms.westernsydney.edu.au/' target='_blank' ><Button type='link' icon={<LinkOutlined style={{ color: 'var(--primary-color)' }} />}></Button></Link>
                            </div>
                            <ul className="list-disc list-inside mt-4 mb-2">
                                <li>Received award for submitting the best project in the computing category for postgraduate studies.</li>
                                <li>December, 2023</li>
                            </ul>

                        </div>
                    </li>

                    <li
                        data-te-stepper-step-ref
                        className="relative h-fit overflow-hidden after:absolute after:left-[2.05rem] after:top-[0rem] after:mt-px after:h-[calc(100%-0rem)] after:w-px after:bg-[#72e2ae] after:content-[''] dark:after:bg-[#72e2ae]">
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
                                Vice Chancellor's Academic Excellence Postgraduate Scholarship
                            </span>
                        </div>
                        <div
                            data-te-stepper-content-ref
                            className="transition-[height, margin-bottom, padding-top, padding-bottom] left-0 overflow-hidden pb-4 pl-[3.75rem] pr-6 duration-300 ease-in-out">
                            <div className="text-md">
                                Western Sydney University
                                <Link href='https://www.westernsydney.edu.au/international/applying/fees-and-costs/scholarships/academic-excellence-pg-scholarships' target='_blank' ><Button type='link' icon={<LinkOutlined style={{ color: 'var(--primary-color)' }} />}></Button></Link>
                            </div>
                            <ul className="list-disc list-inside mt-4 mb-2">
                                <li>To encourage exceptional academic achievements of international Postgraduate applicants, this Scholarship is awarded to short listed candidates which covers 50% of the cost of the tuition fees</li>
                                <li>March, 2023 - Present</li>
                            </ul>

                        </div>
                    </li>

                    <li
                        data-te-stepper-step-ref
                        className="relative h-fit overflow-hidden after:absolute after:left-[2.05rem] after:top-[-0.1rem] after:mt-px after:h-[calc(100%)] after:w-px after:bg-[#72e2ae] after:content-[''] dark:after:bg-[#72e2ae]">
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
                                Summa Cum Laude Award
                            </span>
                        </div>
                        <div
                            data-te-stepper-content-ref
                            className="transition-[height, margin-bottom, padding-top, padding-bottom] left-0 overflow-hidden pb-6 pl-[3.75rem] pr-6 duration-300 ease-in-out">
                            <div className="text-md">
                                American International University - Bangladesh
                                <Link href='https://www.aiub.edu/academic-regulations/graduation-academic-honors-and-awards' target='_blank' ><Button type='link' icon={<LinkOutlined style={{ color: 'var(--primary-color)' }} />}></Button></Link>
                            </div>
                            <ul className="list-disc list-inside mt-4 mb-2">
                                <li>Awarded with the highest academic excellence award for brilliant performance throughout the bachelors program.</li>
                                <li>April, 2023</li>
                            </ul>
                        </div>
                    </li>

                    <li
                        data-te-stepper-step-ref
                        className="relative h-fit overflow-hidden after:absolute after:left-[2.05rem] after:top-[0rem] after:mt-px after:h-[calc(100%-0rem)] after:w-px after:bg-[#72e2ae] after:content-[''] dark:after:bg-[#72e2ae]">
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
                                Dean's List Award
                            </span>
                        </div>
                        <div
                            data-te-stepper-content-ref
                            className="transition-[height, margin-bottom, padding-top, padding-bottom] left-0 overflow-hidden pb-6 pl-[3.75rem] pr-6 duration-300 ease-in-out">
                            <div className="text-md">
                                American International University - Bangladesh
                                <Link href='https://www.aiub.edu/academic-regulations/graduation-academic-honors-and-awards' target='_blank' ><Button type='link' icon={<LinkOutlined style={{ color: 'var(--primary-color)' }} />}></Button></Link>
                            </div>
                            <ul className="list-disc list-inside mt-4 mb-2">
                                <li>Received Deans' List Honors award twice for excellent academic performance for the semester's Fall, 2018-19, Spring 2018-19. Dean's List Honors award is given for an excellent academic result for a particular semester.</li>
                                <li>January, 2018 - April, 2021</li>
                            </ul>
                        </div>
                    </li>

                    <li
                        data-te-stepper-step-ref
                        className="relative h-fit overflow-hidden after:absolute after:left-[2.05rem] after:top-[-1rem] after:mt-px after:h-[calc(100%-0rem)] after:w-px after:bg-[#72e2ae] after:content-[''] dark:after:bg-[#72e2ae]">
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
                                Academic Scholarship
                            </span>
                        </div>
                        <div
                            data-te-stepper-content-ref
                            className="transition-[height, margin-bottom, padding-top, padding-bottom] left-0 overflow-hidden pb-6 pl-[3.75rem] pr-6 duration-300 ease-in-out">
                            <div className="text-md">
                                American International University - Bangladesh
                                <Link href='https://www.aiub.edu/academic-regulations/graduation-academic-honors-and-awards' target='_blank' ><Button type='link' icon={<LinkOutlined style={{ color: 'var(--primary-color)' }} />}></Button></Link>
                            </div>
                            <ul className="list-disc list-inside mt-4 mb-2">
                                <li>Enjoyed academic scholarship throughout the whole undergraduate period at American International University-Bangladesh for excellent academic performance.</li>
                                <li>January, 2018 - April, 2021</li>
                            </ul>
                        </div>
                    </li>
                </ul>
            </div>

            <SkillComponent />

            {/* <div className='mt-5 mb-10 text-center'>
                <button className='px-8 py-3 rounded-full shadow-none outline-none' style={{ backgroundColor: 'var(--primary-color)', color: 'var(--text-color)' }}>
                    <a href="/CV_Koushikur_Islam_2025.pdf" download="CV_Koushikur_Islam_2025">View Latest Resume</a>
                </button>
            </div> */}
        </div>
    </div>)
}