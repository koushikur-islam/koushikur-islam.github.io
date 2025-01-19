import { HomeOutlined, FileTextOutlined, UserOutlined, CodeOutlined, BranchesOutlined, MailOutlined, FormOutlined, MessageOutlined } from '@ant-design/icons';
import Link from "next/link";
import { useRouter } from "next/router";

export default function BottomNavComponent() {
    const router = useRouter()

    return (<>
        <div className="bottom-nav">
            <ul className="list-none">
                <Link href='/'>
                    <li className={`navbar-item ${router?.asPath == '/' ? `navbar-active` : ``} `}>Bio</li>
                </Link>

                <Link href='/experience'>
                    <li className={`navbar-item ${router?.asPath == '/experience' ? `navbar-active` : ``} `}>Experience</li>
                </Link>

                <Link href='/publications'>
                    <li className={`navbar-item ${router?.asPath == '/publications' ? `navbar-active` : ``} `}>Publications</li>
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
    </>)
}