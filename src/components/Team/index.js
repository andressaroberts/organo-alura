import Collaborator from "../Collaborator";
import "./Team.css";

const Team = (props) => {
  const css = { backgroundColor: props.title };

  return props.collaborators.length > 0 ? (
    <section className="team" style={css}>
      <h3 style={{ borderColor: props.background }}>{props.name}</h3>
      <div className="collaborators">
        {props.collaborators.map((collaborator) => (
          <Collaborator
            cardBackground={props.background}
            key={collaborator.name}
            name={collaborator.name}
            position={collaborator.position}
            image={collaborator.image}
          />
        ))}
      </div>
    </section>
  ) : (
    ""
  );
};

export default Team;
