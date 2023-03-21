import '../../styles/Housing/Card.css';
import logements from '../../datas/logements.json';
import {useParams} from 'react-router-dom';
import React from "react";
import Title from "./Title";
import Host from "./Host";
import Description from "./Description";
import Equipements from "./Equipements";

function Card() {
    const {idLogement} = useParams();

    return (
        logements.map(({id, title, host, location, rating, tags, description, equipments}) => {

            if (id === idLogement) {
                return (
                    <section key={id} className="card-housing">
                        <Title key={title} title={title} location={location} tags={tags} />
                        <Host key={host.name} host={host} rating={rating} />
                        <Description key={description} description={description} />
                        <Equipements key={equipments[0]} equipments={equipments} />
                    </section>
                );
            } else return null
        })
    );
}

export default Card