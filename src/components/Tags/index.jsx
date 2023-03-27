import '../../styles/Tags.css';

function Tags({ tags }) {
  return (
    <p className="tags">
      {tags.map((tag) => {
        return (
          <span key={tag} className="tag">
            {tag}
          </span>
        );
      })}
    </p>
  );
}

export default Tags;
