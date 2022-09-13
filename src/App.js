import { useState } from "react";
import Banner from "./components/Banner";
import Form from "./components/Form";
import Team from "./components/Team";

function App() {
  const teams = [
    {
      name: "Development",
      primaryColor: "#57C278",
      secondaryColor: "#D9F7E9",
    },
    {
      name: "Operations",
      primaryColor: "#82CFFA",
      secondaryColor: "#E8F8FF",
    },
    {
      name: "Marketing",
      primaryColor: "#A6D157",
      secondaryColor: "#F0F8E2",
    },
    {
      name: "Customer Success",
      primaryColor: "#E06B69",
      secondaryColor: "#FDE7E8",
    },
    {
      name: "Design",
      primaryColor: "#DB6EBF",
      secondaryColor: "#FAE9F5",
    },
  ];

  const [collaborators, setCollaborators] = useState([]);

  const onNewAddedCollaborator = (collaborator) => {
    console.log(collaborator);

    setCollaborators([...collaborators, collaborator]);
  };

  return (
    <div className="App">
      <Banner />
      <Form
        teams={teams.map((team) => team.name)}
        onRegisterCollaborator={(collaborator) =>
          onNewAddedCollaborator(collaborator)
        }
      />
      {}
      {teams.map((team) => (
        <Team
          key={team.name}
          name={team.name}
          background={team.primaryColor}
          title={team.secondaryColor}
          collaborators={collaborators.filter(
            (collaborator) => collaborator.team === team.name
          )}
        />
      ))}
    </div>
  );
}

export default App;
