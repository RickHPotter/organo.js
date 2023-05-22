import { useState } from "react";
import "./App.css";

import Banner from "./components/Banner/";
import Form from "./components/Form";
import Squad from "./components/Squad";
import { Footer } from "./components/Footer/Footer";

function App() {
  const squads = [
    {
      name: "att whore",
      primaryColour: "#57C278",
      secondaryColour: "#D9F7E9",
    },
    {
      name: "simp king",
      primaryColour: "#82CFFA",
      secondaryColour: "#E8F8FF",
    },
    {
      name: "redpill chad",
      primaryColour: "#A6D157",
      secondaryColour: "#F0F8E2",
    },
    {
      name: "lol-player (lacks vitamin D)",
      primaryColour: "#E06B69",
      secondaryColour: "#FDE7E8",
    },
    {
      name: "onlyFans entrepreneur",
      primaryColour: "#DB6EBF",
      secondaryColour: "#FAE9F5",
    },
    {
      name: "iphone owner communist",
      primaryColour: "#FFBA05",
      secondaryColour: "#FFF5D9",
    },
    {
      name: "flat-earther anti-vaxxer",
      primaryColour: "#FF8A29",
      secondaryColour: "#FFEEDF",
    },
  ];

  const [collabs, setCollabs] = useState([
    {
      name: "RickHPotter",
      role: "FullStack Developer | Mobile Developer | ML Enthusiast",
      image: "https://github.com/RickHPotter.png",
      squad: squads[0].name,
    },
  ]);

  const newCollab = (collab) => {
    // debugger
    setCollabs([...collabs, collab]);
  };

  return (
    <div className="App">
      <Banner />
      <Form
        itens={squads.map((obj) => obj.name)}
        formSubmit={(collab) => newCollab(collab)}
      />

      {squads.map((squad) => (
        <Squad
          key={squad.name}
          name={squad.name}
          primaryColour={squad.primaryColour}
          secondaryColour={squad.secondaryColour}
          collabs={collabs.filter((collab) => collab.squad === squad.name)}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
