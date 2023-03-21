import '../../styles/Housing/Carrousel.css';
import arrowLeft from '../../assets/arrowLeft.svg';
import arrowRight from '../../assets/arrowRight.svg';
import {useParams} from 'react-router-dom';
import logements from '../../datas/logements.json';
import React, {useState} from 'react';


function Carrousel() {
    const {idLogement} = useParams();
    const [current, setCurrent] = useState(0);

    return (
        logements.map(({id, title, pictures}) => {
            const length = pictures.length;

            const nextPict = () => {
                setCurrent(current === length - 1 ? 0 : current + 1);
            }

            const prevPict = () => {
                setCurrent(current === 0 ? length - 1 : current - 1);
            }


            if (id === idLogement) {
                return (
                    <section key={`${title}-carrousel`} className="carrousel">
                        {length > 1 &&
                            <React.Fragment>
                                <img src={arrowLeft} alt="précédent" className="arrowLeft" onClick={prevPict}/>
                                <img src={arrowRight} alt="suivant" className="arrowRight" onClick={nextPict}/>
                                <p className="compteur-images">{`${current + 1}/${length}`}</p>
                            </React.Fragment>
                        }

                        {pictures.map((picture, index) => {
                            return (
                                <div key={index} className={index === current ? 'slide active' : 'slide'}>
                                    {index === current && (
                                        <img src={picture} alt={`${title}-${current + 1}`} className="carrousel-image"/>
                                    )}
                                </div>
                            )
                        })}

                    </section>
                );
            } else return null
        })
    );
}

export default Carrousel;


