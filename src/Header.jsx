import LWSLogo from './assets/lws-logo-en.svg';
import RR_LOGO from './assets/RR_LOGO_2_rbg.png';

export default function Header() {
    return (
        <nav className="py-2 md:py-4 fixed top-0 w-full !bg-[#191D26] z-50">
            <div className="container mx-auto flex items-center justify-between gap-x-6">
                <a href="/">
                    <img
                        className="h-[55px]"
                        src={RR_LOGO}
                        alt="Lws"
                    />
                </a>
            </div>
        </nav>
    );
}
