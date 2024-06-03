import { FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="footer footer-center p-10 bg-base-200 text-base-content rounded">
            <nav className="grid grid-flow-col gap-4">
                <a className="link link-hover">About us</a>
                <a className="link link-hover">Contact</a>
                <a className="link link-hover">Jobs</a>
                <a className="link link-hover">Press kit</a>
            </nav>
            <nav>
                <div className="grid grid-flow-col gap-4">
                    <FaTwitter className="text-2xl" />
                    <FaFacebook className="text-2xl"></FaFacebook>
                    <FaYoutube className="text-2xl"></FaYoutube>
                </div>
            </nav>
            <aside>
                <p>Copyright © 2024 - All right reserved by ACME Industries Ltd</p>
            </aside>
        </footer>
    );
};

export default Footer;