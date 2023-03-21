import { useState } from 'react';
import dropdown from '../../assets/dropdown.svg';
import '../../styles/Housing/Equipements.css';

function Equipements({equipments}) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="equipements">
            <button onClick={() => setIsOpen(!isOpen)} className="equipements-button">
                Équipements
                {isOpen ?
                    <img src={dropdown} alt="dropdown"/> : <img style={{transform: 'rotate(180deg)'}} src={dropdown} alt="dropdown"/>
                }
            </button>

            {isOpen ?
                <div className="equipements-texte">
                    {equipments.map((equipment) => {
                        return <p key={equipment} className="equipement">{equipment}</p>
                    })}
                </div> : false
            }

        </div>
    )
}

export default Equipements