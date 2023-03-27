import { useState } from 'react';
import dropdown from '../../assets/dropdown.svg';

function Collapse({ button, text }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`collapse collapse-${button.toLowerCase()}`}>
      <button onClick={() => setIsOpen(!isOpen)} className="collapse-button">
        {button}

        {isOpen ? (
          <img
            style={{ transform: 'rotate(180deg)' }}
            src={dropdown}
            alt="dropdown"
          />
        ) : (
          <img src={dropdown} alt="dropdown" />
        )}
      </button>

      {
        isOpen ? (
          Array.isArray(text) ? (
            <div>{text.map((txt) => <p className='collapse-text'>{txt}</p>)}</div>
          ) : (
            <div><p className="collapse-text">{text}</p></div>
          )
        ) : false // prettier-ignore
      }
    </div>
  );
}

export default Collapse;
