import { DESIGNATION, FACEBOOK, INSTAGRAM, LINKEDIN, NAME } from "../config/Config"

export const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__bg">
                <div className="footer__container container grid">
                    <div>
                        <h1 className="footer__title">{NAME}</h1>
                        <span className="footer__subtitle">{DESIGNATION}</span>
                    </div>

                    <ul className="footer__links">
                        <li>
                            <a href="#services" className="footer__link">Services</a>
                        </li>
                        <li>
                            <a href="#portfolio" className="footer__link">Portfolio</a>
                        </li>
                        <li>
                            <a href="#contact" className="footer__link">Contact Me</a>
                        </li>
                    </ul>

                    <div className="footer__socials">
                        {
                            FACEBOOK.length == 0 ||
                            <a href={"https://www.facebook.com/" + FACEBOOK} className="footer__social" target="_blank">
                                <i className="uil uil-facebook-f" />
                            </a>
                        }
                        {
                            INSTAGRAM.length == 0 ||
                            <a href={"https://www.instagram.com/" + INSTAGRAM} target="_blank" className="footer__social">
                                <i className="uil uil-instagram" />
                            </a>
                        }
                        {
                            LINKEDIN.length == 0 ||
                            <a href={"https://www.linkedin.com/in/" + LINKEDIN} target="_blank" className="footer__social">
                                <i className="uil uil-linkedin-alt" />
                            </a>
                        }
                    </div>
                </div>
                <p className="footer__copy">© {NAME}. All rights reserved.</p>
            </div>
        </footer>
    )
}