import Image from 'next/image';
import Link from 'next/link';
import { HomeOutlined, FileTextOutlined, UserOutlined, CodeOutlined, BranchesOutlined, FormOutlined, MenuOutlined } from '@ant-design/icons';
import { useRouter } from 'next/router';

export default function HeaderComponent() {
    const router = useRouter()

    const showSidebar = () => {
        document.getElementById('sidebar')?.classList?.add('active');
    }


    return (
        <div className="fixed top-0 w-full z-40 backdrop-blur-3xl backdrop-saturate-10 backdrop-opacity-100 bg-dark/90 transition-colors border-b border-slate-700">
            <div className="limited-box flex justify-between">
                <div className='ml-5 artistic-font pt-3 pb-1 overflow-hidden'>
                    <Link href='/' >
                        <label style={{ color: 'var(--primary-color)', fontSize: 32, fontWeight:'bold', cursor:'pointer' }}>Koush</label>
                    </Link>
                </div>
                <div className='inline-block sm:hidden mr-5 mt-6'>
                    <button onClick={showSidebar}><MenuOutlined style={{ fontSize: '20px', color: 'var(--primary-color)' }} /></button>
                </div>
                <div className='hidden sm:inline-block pt-5'>
                    <div className="navbar">
                        <ul className="list-none">
                            <Link href='/'>
                                <li className={`navbar-item ${router?.asPath == '/' ? `navbar-active` : ``} `}>Bio</li>
                            </Link>

                            {/* <Link href='/publications'>
                                <li className={`navbar-item ${router?.asPath == '/publications' ? `navbar-active` : ``} `}>Publications</li>
                            </Link> */}

                            <Link href='/experience'>
                                <li className={`navbar-item ${router?.asPath == '/experience' ? `navbar-active` : ``} `}>Experience</li>
                            </Link>

                            <Link href='/projects'>
                                <li className={`navbar-item ${router?.asPath == '/projects' ? `navbar-active` : ``} `}>Projects</li>
                            </Link>

                            <Link href='/resume'>
                                <li className={`navbar-item ${router?.asPath == '/resume' ? `navbar-active` : ``} `}>Resume</li>
                            </Link>

                            {/* <li>
                                <button className='px-7 py-2 rounded-full shadow-none outline-none' style={{ backgroundColor: 'var(--primary-color)', color: 'var(--text-color)' }}>Contact</button>
                            </li> */}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}