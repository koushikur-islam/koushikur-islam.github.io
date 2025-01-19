import BottomNavComponent from "./BottomNavComponent";
import FooterComponent from "./FooterComponent";
import HeaderComponent from "./HeaderComponent";
import Image from 'next/image';
import Link from 'next/link';
import { HomeOutlined, FileTextOutlined, UserOutlined, CodeOutlined, BranchesOutlined, FormOutlined, CloseOutlined } from '@ant-design/icons';
import { useRouter } from 'next/router';


export default function Layout({ children }: any) {
    const router = useRouter()

    const hideSidebar = () => {
        document.getElementById('sidebar')?.classList?.remove('active');
    }

    return (<>
        <HeaderComponent />
        <div id='sidebar' className="border-l border-slate-700 w-[60%] z-40 backdrop-blur-3xl backdrop-saturate-10 backdrop-opacity-100 bg-dark/90 transition-colors ">
            <div className="text-right pr-5 pt-5 mb-3">
                <button onClick={hideSidebar}><CloseOutlined style={{ fontSize: 20, color: 'var(--primary-color)' }} /></button>
            </div>
            <ul className="list-none">
                <Link href='/' className='shadow-none outline-none' onClick={hideSidebar}>
                    <li className={`border-b border-slate-700 sidebar-item ${router?.asPath == '/' ? `sidebar-item-active` : ``} `}>Bio</li>
                </Link>

                <Link href='/publications' onClick={hideSidebar}>
                    <li className={`border-b border-slate-700 sidebar-item ${router?.asPath == '/skills' ? `sidebar-item-active` : ``} `}>Publications</li>
                </Link>

                <Link href='/experience' onClick={hideSidebar}>
                    <li className={`border-b border-slate-700 sidebar-item ${router?.asPath == '/about' ? `sidebar-item-active` : ``} `}>Experience</li>
                </Link>

                <Link href='/projects' onClick={hideSidebar}>
                    <li className={`border-b border-slate-700 sidebar-item ${router?.asPath == '/projects' ? `sidebar-item-active` : ``} `}>Projects</li>
                </Link>

                <Link href='/resume' onClick={hideSidebar}>
                    <li className={`border-b border-slate-700 sidebar-item ${router?.asPath == '/resume' ? `sidebar-item-active` : ``} `}>Resume</li>
                </Link>
            </ul>
        </div>
        <div style={{ minHeight: '62vh', marginTop: 50 }}>{children}</div>
        <FooterComponent />
    </>);
}