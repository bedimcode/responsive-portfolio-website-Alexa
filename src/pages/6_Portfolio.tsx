// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Navigation } from "swiper";
import { Pagination } from "swiper";
import { PORTFOLIO } from "../config/Config";


export const Portfolio = () => {
    return (
        <div>
            {/*==================== PORTFOLIO ====================*/}
            <section className="portfolio section" id="portfolio">
                <h2 className="section__title">Portfolio</h2>
                <span className="section__subtitle">Most Recent Work</span>
                <div className="portfolio__container container swiper-container">


                    <Swiper
                        pagination={{
                            dynamicBullets: true,
                        }}
                        navigation={true}
                        modules={[Pagination, Navigation]}
                        className="mySwiper">
                        {
                            PORTFOLIO.map((project, index) => (
                                <SwiperSlide key={index}>
                                    <div className="portfolio__content grid swiper-slide" key={index}>
                                        <img src={project.image} className="portfolio__img" alt="portfolio" />
                                        <div className="portfolio__data">
                                            <h3 className="portfolio__title">{project.name}</h3>
                                            <p className="portfolio__description">{project.description}</p>
                                            {
                                                project.demo == "null" ?
                                                    null
                                                    :
                                                    <a href={project.demo} target="_blank" className="button button--flex button--small portfolio__button" style={{ 'marginRight': '10px' }}>
                                                        Demo
                                                        <i className="uil uil-arrow-right button__icon" />
                                                    </a>
                                            }
                                            {
                                                project.github == "null" ?
                                                    null
                                                    :
                                                    <a href={project.github} target="_blank" className="button button--flex button--small portfolio__button github">
                                                        Github
                                                        <i className="uil uil-arrow-right button__icon" />
                                                    </a>
                                            }
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>
                </div>
            </section>
        </div>
    )
}