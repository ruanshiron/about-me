import React from 'react'
import ImageGallery from 'react-image-gallery'


export default function Portfolio(props) {

    var i = 0

    return (
        <section id="portfolio">

            <div className="row">

                <div className="twelve columns collapsed">

                    <h1>I don't have much things to show here</h1>

                    <div id="portfolio-wrapper" className="bgrid-thirds s-bgrid-thirds cf">
                    {
                        props.data.projects.map((p, i) => {
                            return (
                                <div className="columns portfolio-item">
                                    <div className="item-wrap">
            
                                        <a href={"#modal-"+i} title="">
                                            <img alt="" src={p.img}/>
                                            <div className="overlay">
                                                <div className="portfolio-item-meta">
                                                    <h5>{p.name}</h5>
                                                    <p>{p.desciption}</p>
                                                </div>
                                            </div>
                                            <div className="link-icon"><i className="icon-plus"></i></div>
                                        </a>
            
                                    </div>
                                </div> 
                            )
                        })
                    }
                    </div> 

                </div> 
                {
                    props.data.projects.map((p, i) => {
                        return (
                            <div id={"modal-"+i} className="popup-modal mfp-hide">

                                <ImageGallery
                                    items={p.images}
                                    showFullscreenButton={false}
                                    showPlayButton={false}
                                    showNav={false}
                                />

                                <div className="description-box">
                                    <h4>{p.name}</h4>
                                    <p>{p.detail}</p>
                                <span className="categories"><i className="fa fa-tag"></i>{p.theme}</span>
                                </div>

                                <div className="link-box">
                                <a target="_blank" rel="noopener noreferrer"  href={p.github}>github</a>
                                    <a className="popup-modal-dismiss">Close</a>
                                </div>

                            </div>
                        )
                    })
                }

            </div> 

        </section>
    )
}