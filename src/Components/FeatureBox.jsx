import React from 'react'

function FeatureBox({image,title}) {
    return (
        <div className="a-box">
            <div className="a-b-img">
                <img src={image} alt="" />
            </div>
            <div className="s-b-text">
                <h2>{title}</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, vel?</p>
            </div>
        </div>
    )
}

export default FeatureBox
