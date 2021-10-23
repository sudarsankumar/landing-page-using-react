import React from 'react'
import FeatureBox from './FeatureBox'
import featureImage1 from '../images/feature_1.png'
import featureImage2 from '../images/feature_2.png'
import featureImage3 from '../images/feature_3.png'

function Feature() {
    return (
        <div id="features">
            <div className="a-container">
                <FeatureBox image={featureImage1} title='Development Course' />
                <FeatureBox image={featureImage2} title='Money Saving Services' />
                <FeatureBox image={featureImage3} title='User Interface' />
            </div>
        </div>
    )
}

export default Feature
