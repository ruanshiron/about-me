import React from 'react'

function Header(props) {
    const data = props.data
    console.log(data)
    return (
        <header id="home">
            <nav id="nav-wrap">

                <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
                <a className="mobile-btn" href="#" title="Hide navigation">Hide navigation</a>

                <ul id="nav" className="nav">
                    <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
                    {/* <li><a className="smoothscroll" href="#about">About</a></li> */}
                    <li><a className="smoothscroll" href="#resume">Resume</a></li>
                    <li><a className="smoothscroll" href="#portfolio">Projects</a></li>
                </ul> 

            </nav> 

            <div className="row banner">
                <div className="banner-text">
                    <h1 className="responsive-headline">{data.name}</h1>
                    <h3>{data.someWords}</h3>
                    <hr />
                    <ul className="social">
                    <li><a href={data.facebook}><i className="fa fa-facebook"></i></a></li>
                    <li><a href={data.instagram}><i className="fa fa-instagram"></i></a></li>
                    <li><a href={data.github}><i className="fa fa-github"></i></a></li>
                    </ul>
                </div>
            </div>

            <p className="scrolldown">
                <a className="smoothscroll" href="#resume"><i className="icon-down-circle"></i></a>
            </p>

        </header>
    )
}

export default Header