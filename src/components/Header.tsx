import { NAME } from "../config/Config"
import { ThemeToggle } from "../utils/ThemeToggle"

export const Header = () => {

    const navMenu = document.getElementById('nav-menu'),
        navToggle = document.getElementById('nav-toggle'),
        navClose = document.getElementById('nav-close');

    /*===== MENU SHOW =====*/
    /* Validate if constant exists */
    if (navToggle) {
        navToggle.addEventListener('click', () => {
            navMenu?.classList.add('show-menu');
        })
    }

    /*===== MENU HIDDEN =====*/
    /* Validate if constant exists */
    if (navClose) {
        navClose.addEventListener('click', () => {
            navMenu?.classList.remove('show-menu');
        })
    }

    /*==================== REMOVE MENU MOBILE ====================*/
    const navLink = document.querySelectorAll('.nav__link');

    function linkAction() {
        const navMenu = document.getElementById('nav-menu');
        // When we click on each nav__link, we remove the show-menu class
        navMenu?.classList.remove('show-menu');
    }
    navLink.forEach(n => n.addEventListener('click', linkAction));


    return (
        <header className="header" id="header">
            <nav className="nav container">
                <a href="#" className="nav__logo">{NAME}</a>
                <div className="nav__menu" id="nav-menu">
                    <ul className="nav__list grid">
                        <li className="nav__item">
                            <a href="#home" className="nav__link active-link">
                                <i className="uil uil-estate nav__icon" /> Home
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#about" className="nav__link">
                                <i className="uil uil-user nav__icon" /> About
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#skills" className="nav__link">
                                <i className="uil uil-file-alt nav__icon" /> Skills
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#services" className="nav__link">
                                <i className="uil uil-briefcase-alt nav__icon" /> Services
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#portfolio" className="nav__link">
                                <i className="uil uil-scenery nav__icon" /> Portfolio
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#contact" className="nav__link">
                                <i className="uil uil-estate nav__icon" /> Contact Me
                            </a>
                        </li>
                    </ul>
                    <i className="uil uil-times nav__close" id="nav-close" />
                </div>
                <div className="nav__btns">
                    {/*Theme change button*/}
                    <ThemeToggle />
                </div>
            </nav>
        </header>
    )
}