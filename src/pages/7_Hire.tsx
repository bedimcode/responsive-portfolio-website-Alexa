import { HIRE } from "../config/Config"

export const Hire = () => {
    return (
        <section>
            {
                HIRE ?
                    <>
                        <section className="project section">
                            <h2 className="section__title">Hire me</h2>

                            <div className="project__bg">
                                <div className="project__container container grid">
                                    <div className="project__data">
                                        <h2 className="project__title">You have a new project</h2>
                                        <p className="project__description">Contact me now and get a 30% discount on your new project!</p>
                                        <a href="#contact" className="button button--flex button--white">
                                            Contact Me
                                            <i className="uil uil-message project__icon button__icon" />
                                        </a>
                                    </div>
                                    <img src={require('../config/assets/images/hire.png')} className="project__img" alt="project" />
                                </div>
                            </div>
                        </section>
                        {/*==================== TESTIMONIAL ====================*/}
                        <section className="testimonial section">
                            {/*=======This feature is skipped for now========*/}
                        </section>
                    </>
                    :
                    <></>
            }
        </section>
    )
}