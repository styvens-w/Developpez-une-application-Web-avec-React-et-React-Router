import '../../styles/Housing/Host.css';
import starFull from "../../assets/starFull.svg";
import starEmpt from "../../assets/starEmpt.svg";
import React from "react";

function Host({ host, rating }) {
    const range = [1, 2, 3, 4, 5];

    return (
        <div className="host">
            <div className="host-profil">
                <p className="host-name">{host.name}</p>
                <img src={host.picture} alt={host.name} className="host-photo"/>
            </div>

            <div className="host-rating">
                {range.map((rangeElem) =>
                    rating >= rangeElem ? <img key={`star-${rangeElem}`} src={starFull} alt={`Étoile-${rangeElem}`} /> : <img key={`star-${rangeElem}`} src={starEmpt} alt={`Étoile-${rangeElem}`} />
                )}
            </div>
        </div>
    )
}

export default Host