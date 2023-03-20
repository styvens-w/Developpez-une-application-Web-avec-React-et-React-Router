import Dropdowns from './Dropdowns';
import about_img from '../../assets/about_img.png';
import React from "react";

function AboutIndex() {
    return (
        <React.Fragment>
            <section className="about-img">
                <img src={about_img} alt="paysage"/>
            </section>

            <Dropdowns />
        </React.Fragment>
    )
}

export default AboutIndex