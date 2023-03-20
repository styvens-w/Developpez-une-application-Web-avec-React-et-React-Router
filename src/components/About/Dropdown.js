import { useState } from 'react';
import dropdown from '../../assets/dropdown.svg';

function Dropdown({title, description}) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="dropdown">
            <button onClick={() => setIsOpen(!isOpen)} className="dropdown-button">
                {title}
                {isOpen ?
                    <img src={dropdown} alt="dropdown"/> : <img style={{transform: 'rotate(180deg)'}} src={dropdown} alt="dropdown"/>
                }
            </button>

            {isOpen ?
                <p className="dropdown-description">
                    {description}
                </p> : false
            }

        </div>
    )
}

export default Dropdown

