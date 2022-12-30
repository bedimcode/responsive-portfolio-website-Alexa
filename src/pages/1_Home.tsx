import { ProfilePicture } from "../assets/ProfilePicture";
import { DESCRIPTION, DESIGNATION, GITHUB, LINKEDIN, NAME, STACKOVERFLOW } from "../config/Config";


export const Home = () => {
    return (
        <section className="home section" id="home">
            <div className="home__container container grid">
                <div className="home__content grid">
                    <div className="home__social">
                        <a href={"https://www.linkedin.com/in/" + LINKEDIN} target="_blank" rel="noreferrer" className="home__social-icon">
                            <i className="uil uil-linkedin-alt" />
                        </a>
                        <a href={STACKOVERFLOW} target="_blank" rel="noreferrer" className="home__social-icon">
                            <i className="fa fa-stack-overflow" />
                        </a>
                        <a href={"https://www.github.com/" + GITHUB} target="_blank" rel="noreferrer" className="home__social-icon">
                            <i className="uil uil-github-alt" />
                        </a>
                    </div>

                    <div className="home__img">
                        {ProfilePicture}
                    </div>


                    <div className="home__data">
                        <h1 className="home__title">Hello from {NAME},</h1>

                        <h3 className="home__subtitle">{DESIGNATION}</h3>
                        <p className="home__description">
                            {DESCRIPTION}
                        </p>
                        <a href="#contact" className="button button--flex move_i">
                            Contact Me <i className="uil uil-message button__icon" />
                        </a>
                    </div>
                </div>


                <div className="home_scroll">
                    <a href="#about" className="home__scroll-button button--flex">
                        <i className="uil uil-mouse-alt home__scroll-mouse" />
                        <span className="home__scroll-name">Scroll down</span>
                        <i className="uil uil-arrow-down homw__scroll-arrow" />
                    </a>
                </div>
            </div>
        </section>
    )
}