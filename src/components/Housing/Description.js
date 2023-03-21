import { useState } from 'react';
import dropdown from '../../assets/dropdown.svg';
import '../../styles/Housing/Description.css';

function Description({description}) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="description">
            <button onClick={() => setIsOpen(!isOpen)} className="description-button">
                Description
                {isOpen ?
                    <img src={dropdown} alt="dropdown"/> : <img style={{transform: 'rotate(180deg)'}} src={dropdown} alt="dropdown"/>
                }
            </button>

            {isOpen ?
                <p className="description-texte">
                    {description}
                </p> : false
            }

        </div>
    )
}

export default Description