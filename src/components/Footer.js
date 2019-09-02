import React from 'react'

export default function Footer(props) {
    return (
        <footer>

            <div className="row">

                <div className="twelve columns">

                    <ul className="social-links">
                    <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                    <li><a href="https://instagram.com/ruanshiron"><i className="fa fa-instagram"></i></a></li>
                    <li><a href="https://github.com/ruanshiron"><i className="fa fa-github"></i></a></li>
                    </ul>

                    <ul className="copyright">
                    <li>&copy; Copyright 2014 CeeVee</li>
                    <li>Design by <a title="Styleshout" href="http://www.styleshout.com/">Styleshout</a></li>   
                    </ul>

                </div>

                <div id="go-top"><a className="smoothscroll" title="Back to Top" href="#home"><i className="icon-up-open"></i></a></div>

            </div>

        </footer>
    )
}