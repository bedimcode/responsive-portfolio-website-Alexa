import { SKILLS } from "../config/Config"

export const Skills = () => {
    return (
        <div>
            {/*==================== SKILLS ====================*/}
            <section className="skills section" id="skills">
                <h2 className="section__title">Skills</h2>
                <span className="section__subtitle">My technical level</span>
                <div className="skills__container container grid">
                    <div>
                        {
                            SKILLS.map((SubSkill, index) => (
                                <div key={index}>
                                    <div className="skills__header">
                                        <i className="uil uil-brackets-curly skills__icon" />
                                        <div>
                                            <h1 className="skills__title">{SubSkill.name}</h1>
                                            <span className="skills__subtitle">{SubSkill.description}</span>
                                        </div>
                                        <i className="uil uil-angle-down skills__arrow" />
                                    </div>

                                    {SubSkill.SubSkill?.map((core, index) => (
                                        <div className="skills__list grid " key={index}>
                                            <div className="skills__data">
                                                <div className="skills__titles">
                                                    <h3 className="skills__name">{core.name}</h3>
                                                    <div className="skills__number">{core.level}%</div>
                                                </div>
                                                {core.level == "100" ?
                                                    <div className="skills__bar">
                                                        <div className="skills__percentage skills__100" />
                                                    </div>
                                                    : core.level == "90" ?
                                                        <div className="skills__bar">
                                                            <div className="skills__percentage skills__90" />
                                                        </div>
                                                        : core.level === "80" ?
                                                            <div className="skills__bar">
                                                                <div className="skills__percentage skills__80" />
                                                            </div>
                                                            : core.level === "70" ?
                                                                <div className="skills__bar">
                                                                    <div className="skills__percentage skills__70" />
                                                                </div>
                                                                : core.level === "60" ?
                                                                    <div className="skills__bar">
                                                                        <div className="skills__percentage skills__60" />
                                                                    </div>
                                                                    : core.level === "50" ?
                                                                        <div className="skills__bar">
                                                                            <div className="skills__percentage skills__50" />
                                                                        </div>
                                                                        : core.level === "40" ?
                                                                            <div className="skills__bar">
                                                                                <div className="skills__percentage skills__40" />
                                                                            </div>
                                                                            : core.level === "30" ?
                                                                                <div className="skills__bar">
                                                                                    <div className="skills__percentage skills__30" />
                                                                                </div>
                                                                                : core.level === "20" ?
                                                                                    <div className="skills__bar">
                                                                                        <div className="skills__percentage skills__20" />
                                                                                    </div>
                                                                                    : core.level === "10" ?
                                                                                        <div className="skills__bar">
                                                                                            <div className="skills__percentage skills__10" />
                                                                                        </div>
                                                                                        : null
                                                }
                                            </div>
                                        </div>
                                    ))
                                    }
                                </div>
                            ))
                        }
                    </div>
                </div>
            </section>

        </div>
    )
}