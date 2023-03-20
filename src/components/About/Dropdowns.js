import abouts from '../../datas/abouts.json';
import Dropdown from './Dropdown';


function Dropdowns() {
    return (
        <section className="about-dropdown">
            {abouts.map(({title, description}) => (
                <Dropdown key={title} title={title} description={description}/>
            ))}
        </section>
    )
}

export default Dropdowns

