import React from 'react'

export default function About(props) {
    return (
        <section id="about">

            <div className="row">

                <div className="three columns">

                    <img className="profile-pic"  src="images/profilepic.jpg" alt="" />

                </div>

                <div className="nine columns main-col">

                    <h1>About Me</h1>

                    <p className="lead add-bottom">
                        {props.data.someWords}
                    </p>

                </div> 

            </div>

        </section>
    )
}