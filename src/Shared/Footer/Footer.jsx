import { FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";
import logo from "../../../public/logo.png"

const Footer = () => {
  return (
    <div>
      <footer className="footer bg-base-200 text-base-content p-10 mt-10">
        <nav>
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </footer>
      <footer className="footer bg-black text-base-content border-base-300 border-t px-10 py-4">
        <aside className="grid-flow-col items-center gap-4">
          <img className="w-20" src={logo} alt="" />

          <p className="text-white text-xs">
            xcellinace Ltd.
            <br />
            Providing reliable tech since 1992
          </p>
        </aside>
        <nav className="md:place-self-center md:justify-self-end">
          <div className="flex">
            <a>
              <FaTwitter className="w-24 h-8 text-blue-600"></FaTwitter>
            </a>
            <a>
              <FaYoutube className="w-24 h-8 text-red-700"></FaYoutube>
            </a>
            <a> 
             <FaFacebook className="w-24 h-8 text-blue-600"></FaFacebook>
            </a>
          </div>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
