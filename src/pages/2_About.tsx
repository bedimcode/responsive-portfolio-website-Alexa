import { COMPANIES, DETAILED, EXPERIENCE, PROJECTS, RESUME } from "../config/Config"

export const About = () => {
    return (
        <section className="about section" id="about">
            <h1 className="section__title"> About Me</h1>
            <span className="section__subtitle">My introduction</span>
            <div className="about__container container grid">
                <img src={require('../config/assets/images/about.png')} className="about__img" alt="about" />
                <div className="about__data">
                    <p className="about__description">
                        {DETAILED}
                    </p>
                    <div className="about__info">
                        <div>
                            <span className="about__info-title">{EXPERIENCE}</span>
                            <span className="about__info-name">Years <br /> experience </span>
                        </div>
                        <div>
                            <span className="about__info-title">{COMPANIES}</span>
                            <span className="about__info-name">Companies <br /> worked </span>
                        </div>
                        <div>
                            <span className="about__info-title">{PROJECTS}</span>
                            <span className="about__info-name">Completed <br /> projects </span>
                        </div>
                    </div>
                    <div className="about__buttons">
                        <a download href={RESUME} className="button button--flex">
                            Download CV <i className="uil uil-download-alt button__icon" />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}