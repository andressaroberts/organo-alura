import "./Collaborator.css";

const Collaborator = ({ name, image, position, cardBackground }) => {
  return (
    <div className="collaborator">
      <div className="header" style={{ backgroundColor: cardBackground }}>
        <img src={image} alt={name} />
      </div>
      <div className="footer">
        <h4>{name}</h4>
        <h5>{position}</h5>
      </div>
    </div>
  );
};

export default Collaborator;
