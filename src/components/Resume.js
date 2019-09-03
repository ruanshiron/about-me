import React from 'react'

export default function Resume(props) {
    const data = props.data
    return (
        <section id="resume">

            <div className="row education">

                <div className="three columns header-col">
                    <h1><span>Education</span></h1>
                </div>

                <div className="nine columns main-col">
                    {
                        data.education.map((edu) => {
                            return (
                                <div className="row item">

                                    <div className="twelve columns">

                                        <h3>{edu.where}</h3>
                                        <p className="info">{edu.who} <span>&bull;</span> <em className="date">{edu.when}</em></p>

                                        <p>
                                            {edu.details}
                                        </p>

                                    </div>

                                </div> 
                            )
                        })
                    }

                </div> 

            </div> 

            <div className="row work">

                <div className="three columns header-col">
                    <h1><span>Intern & Work</span></h1>
                </div>

                <div className="nine columns main-col">
                {
                    data.intern.map((i) => {
                        return (
                            <div className="row item">

                            <div className="twelve columns">

                                <h3>{i.where}</h3>
                                <p className="info">{i.who} <span>&bull;</span> <em className="date">{i.when}</em></p>

                                <p>
                                {
                                    i.details
                                }
                                </p>

                            </div>

                            </div> 
                        )
                    })
                }
                </div> 

            </div> 

            <div className="row skill">

                <div className="three columns header-col">
                    <h1><span>Skills</span></h1>
                </div>

                <div className="nine columns main-col">

                        <div className="bars">

                        <ul className="skills">
                            <li><span className="bar-expand photoshop"></span><em>Photoshop</em></li>
                        <li><span className="bar-expand illustrator"></span><em>Illustrator</em></li>
                                <li><span className="bar-expand wordpress"></span><em>Wordpress</em></li>
                                <li><span className="bar-expand css"></span><em>CSS</em></li>
                                <li><span className="bar-expand html5"></span><em>HTML5</em></li>
                        <li><span className="bar-expand jquery"></span><em>jQuery</em></li>
                            </ul>

                        </div>

                </div> 

            </div> 

        </section>
    )
}