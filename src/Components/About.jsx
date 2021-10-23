import React from 'react'

function About({image, title, button}) {
    return (
        <div id="about">
            <div className="about-image">
                <img src={image} alt="" />
            </div>
            <div className="about-text">
                <h2>{title}</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, esse accusamus. Numquam beatae, obcaecati est culpa consequatur itaque aliquid eaque corporis dolore sunt ut? Maxime cumque excepturi officiis at saepe.</p>
                <button>{button}</button>
            </div>
        </div>
    )
}

export default About