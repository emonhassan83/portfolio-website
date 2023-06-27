import './Footer.css'
import { AiOutlineInstagram } from 'react-icons/ai';
import { BsFacebook, BsTwitter } from 'react-icons/bs';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container container">
                <h1 className="footer__title">Emon</h1>

                <ul className="footer__list">
                    <li>
                        <a href="#about" className="footer__link">About</a>
                    </li>
                    <li>
                        <a href="#projects" className="footer__link">Projects</a>
                    </li>
                    <li>
                        <a href="#testimonial" className="footer__link">Testimonials</a>
                    </li>
                </ul>

                <div className="footer__social">
                <a href="https://web.facebook.com/emonhassan83/" className="footer__social-link" target="_blank" rel="noreferrer">
                    <BsFacebook/>
                </a>
                <a href="https://www.instagram.com/emonhassan50/" className="footer__social-link" target="_blank" rel="noreferrer">
                    <AiOutlineInstagram/>
                </a>
                <a href="https://twitter.com/emonhasan83" className="footer__social-link" target="_blank" rel="noreferrer">
                    <BsTwitter/>
                </a>
                </div>

                <span className='footer__copy'>&#169; Emon Hassan . All rights resolved</span>
            </div>
        </footer>
    );
};

export default Footer;