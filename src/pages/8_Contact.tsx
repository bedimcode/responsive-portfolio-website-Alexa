import { ADDRESS, EMAIL, PHONE } from "../config/Config"

export const Contact = () => {
    return (
        <div>
            {/*==================== CONTACT ME ====================*/}
            <section className="contact section" id="contact">
                <h2 className="section__title">Contact Me</h2>
                <span className="section__subtitle">Get in touch</span>
                <div className="contact__container container grid">
                    <div>
                        <a href={"tel:" + PHONE} className="contact__information">
                            <i className="uil uil-phone contact__icon" />
                            <div>
                                <h3 className="contact__title">Call Me</h3>
                                <span className="contact__subtitle">{PHONE}</span>
                            </div>
                        </a>
                        <a href={"mailto:" + EMAIL} className="contact__information">
                            <i className="uil uil-envelope contact__icon" />
                            <div>
                                <h3 className="contact__title">Email</h3>
                                <span className="contact__subtitle">{EMAIL}</span>
                            </div>
                        </a>
                        <div className="contact__information">
                            <i className="uil uil-map-marker contact__icon" />
                            <div>
                                <h3 className="contact__title">Location</h3>
                                <span className="contact__subtitle">{ADDRESS}</span>
                            </div>
                        </div>

                        <form className="contact__form grid">
                            <div className="contact__inputs grid">
                                <div className="contact__content">
                                    <label htmlFor="name" className="contact__label">Name</label>
                                    <input type="text" id="name" className="contact__input" />
                                </div>
                                <div className="contact__content">
                                    <label htmlFor="email" className="contact__label">Email</label>
                                    <input type="email" id="email" className="contact__input" />
                                </div>
                            </div>
                            <div className="contact__content">
                                <label htmlFor="project-contact" className="contact__label">Project</label>
                                <input type="text" id="project-contact" className="contact__input" />
                            </div>
                            <div className="contact__content">
                                <label htmlFor="message-contact" className="contact__label">Message</label>
                                <textarea cols={0} rows={7} id="message-contact" className="contact__input" defaultValue={""} />
                            </div>
                            <div>
                                <a href="#" className="move_i button button--flex">
                                    Send Message
                                    <i className="uil uil-message button__icon" />
                                </a>
                            </div>
                        </form>
                    </div>
                </div>
            </section>

        </div>
    )
}