import '../../styles/Housing/Title.css';

function Title({ title, location, tags }) {
    return (
        <div className="title">
            <h1 className="name">{title}</h1>
            <p className="location">{location}</p>
            <p className="tags">
                {tags.map((tag) => {
                    return <span key={tag} className="tag">{tag}</span>
                })}
            </p>
        </div>
    )
}

export default Title