import { DatabaseOutlined, CodeOutlined, LaptopOutlined, CloudOutlined, FileMarkdownOutlined, SettingOutlined } from '@ant-design/icons';
import Image from 'next/image';
export default function SkillComponent() {
    return (< div className='pt-10'>
        <div className="limited-box">

            <div className="pl-7 text-xl font-semibold mt-3 overflow-hidden">
                Skills
            </div>


            <div className="px-3 ml-4">
                <div className="my-5">
                    <div className="text-lg pb-2 border-b border-slate-700"><CodeOutlined /> Programming and Scripting Languages</div>
                    <ul className='mt-3'>
                        <li className="skill-item">
                            <div className='skill-image-container' style={{ paddingTop: 16 }}>
                                <Image src='/python.png' width={130} height={130} alt='n' />
                            </div>
                            Python
                        </li>

                        <li className="skill-item">
                            <div className='skill-image-container' style={{ paddingTop: 15 }}>
                                <Image src='/r.png' width={100} height={100} alt='n' />
                            </div>
                            R
                        </li>

                        <li className="skill-item">
                            <div className='skill-image-container' style={{ paddingTop: 16 }}>
                                <Image src='/java.png' width={130} height={130} alt='n' />
                            </div>
                            Java
                        </li>

                        <li className="skill-item">
                            <div className='skill-image-container' style={{ paddingTop: 16 }}>
                                <Image src='/csharp.png' width={130} height={130} alt='n' />
                            </div>
                            C#
                        </li>

                        <li className="skill-item">
                            <div className='skill-image-container' style={{ paddingTop: 16 }}>
                                <Image src='/bash.png' width={130} height={130} alt='n' />
                            </div>
                            Bash
                        </li>
                    </ul>
                </div>
                <div className="my-5">
                    <div className="text-lg pb-3 border-b border-slate-700"><LaptopOutlined /> Frameworks</div>
                    <ul className='mt-3'>
                        <li className="skill-item">
                            <div className='skill-image-container' style={{ paddingTop: 15 }}>
                                <Image src='/kafka.png' width={100} height={100} alt='n' />
                            </div>
                            Apache Kafka
                        </li>
                        <li className="skill-item">
                            <div className='skill-image-container' style={{ paddingTop: 15 }}>
                                <Image src='/kubernetes.png' width={100} height={100} alt='n' />
                            </div>
                            Kubernetes
                        </li>
                        <li className="skill-item">
                            <div className='skill-image-container' style={{ paddingTop: 15 }}>
                                <Image src='/mininet.png' width={100} height={100} alt='n' />
                            </div>
                            Mininet
                        </li>
                    </ul>
                </div>
                <div className="my-5">
                    <div className="text-lg pb-2 border-b border-slate-700"><CloudOutlined /> Cloud and Containerization</div>
                    <ul className='my-3'>
                        <li className="skill-item">
                            <div className='skill-image-container' style={{ paddingTop: 19 }}>
                                <Image src='/aws.png' width={100} height={100} alt='n' />
                            </div>
                            AWS
                        </li>
                        <li className="skill-item">
                            <div className='skill-image-container' style={{ paddingTop: 15 }}>
                                <Image src='/docker.png' width={150} height={150} alt='n' />
                            </div>
                            Docker
                        </li>
                        <li className="skill-item">
                            <div className='skill-image-container' style={{ paddingTop: 15 }}>
                                <Image src='/git.png' width={100} height={100} alt='n' />
                            </div>
                            Git
                        </li>
                    </ul>
                </div>

                <div className="my-5">
                    <div className="text-lg pb-2 border-b border-slate-700"><DatabaseOutlined /> Databases</div>
                    <ul className='mt-3'>
                        <li className="skill-item">
                            <div className='skill-image-container' style={{ paddingTop: 20 }}>
                                <Image src='/postgresql.svg' width={100} height={100} alt='n' />
                            </div>
                            PostgresSQL
                        </li>
                        <li className="skill-item">
                            <div className='skill-image-container' style={{ paddingTop: 20 }}>
                                <Image src='/mysql.svg' width={150} height={150} alt='n' />
                            </div>
                            MySQL
                        </li>
                        <li className="skill-item">
                            <div className='skill-image-container' style={{ paddingTop: 15 }}>
                                <Image src='/mongo.svg' width={150} height={150} alt='n' />
                            </div>
                            MongoDB
                        </li>
                        <li className="skill-item">
                            <div className='skill-image-container' style={{ paddingTop: 15 }}>
                                <Image src='/dynamodb.png' width={150} height={150} alt='n' />
                            </div>
                            DynamoDB
                        </li>
                        <li className="skill-item">
                            <div className='skill-image-container' style={{ paddingTop: 20 }}>
                                <Image src='/redis.svg' width={100} height={100} alt='n' />
                            </div>
                            Redis
                        </li>
                    </ul>
                </div>

                <div className="my-5">
                    <div className="text-lg pb-2 border-b border-slate-700"><FileMarkdownOutlined /> Documentation Tools</div>
                    <ul className='mt-3'>
                        <li className="skill-item">
                            <div className='skill-image-container' style={{ paddingTop: 15 }}>
                                <Image src='/latex.png' width={100} height={100} alt='n' />
                            </div>
                            LaTex
                        </li>
                        <li className="skill-item">
                            <div className='skill-image-container' style={{ paddingTop: 15 }}>
                                <Image src='/overleaf.png' width={100} height={100} alt='n' />
                            </div>
                            Overleaf
                        </li>
                    </ul>
                </div>

                <div className="my-5">
                    <div className="text-lg pb-2 border-b border-slate-700"><SettingOutlined /> Operating Systems</div>
                    <ul className='mt-3'>
                        <li className="skill-item">
                            <div className='skill-image-container' style={{ paddingTop: 15 }}>
                                <Image src='/linux.png' width={100} height={100} alt='n' />
                            </div>
                            Linux
                        </li>

                        <li className="skill-item">
                            <div className='skill-image-container' style={{ paddingTop: 15 }}>
                                <Image src='/macOs.png' width={100} height={100} alt='n' />
                            </div>
                            MacOS
                        </li>

                        <li className="skill-item">
                            <div className='skill-image-container' style={{ paddingTop: 15 }}>
                                <Image src='/windows.png' width={100} height={100} alt='n' />
                            </div>
                            Windows
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div >)
}