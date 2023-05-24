import { useState } from "react";
import "./App.css";

import Banner from "./components/Banner/";
import Form from "./components/Form";
import Squad from "./components/Squad";
import Footer from "./components/Footer";

import { v4 as uuid } from "uuid";

function App() {
  const [squads, setSquads] = useState([
    {
      id: uuid(),
      name: "att whore",
      primaryColour: "#57C278",
    },
    {
      id: uuid(),
      name: "simp king",
      primaryColour: "#82CFFA",
    },
    {
      id: uuid(),
      name: "redpill chad",
      primaryColour: "#A6D157",
    },
    {
      id: uuid(),
      name: "lol-player (lacks vitamin D)",
      primaryColour: "#E06B69",
    },
    {
      id: uuid(),
      name: "onlyFans entrepreneur",
      primaryColour: "#DB6EBF",
    },
    {
      id: uuid(),
      name: "iphone owner communist",
      primaryColour: "#FFBA05",
    },
    {
      id: uuid(),
      name: "flat-earther anti-vaxxer",
      primaryColour: "#FF8A29",
    },
  ]);

  const initCollabs = [
    {
      id: uuid(),
      name: "RickHPotter",
      role: "FullStack Developer | Mobile Developer | ML Enthusiast",
      image: "https://github.com/RickHPotter.png",
      squad: squads[0].name,
      favourite: true
    },
    {
      id: uuid(),
      name: "WebDevSimplified",
      role: "Senior Frontend Developer | Youtube Content Creator | Charisma 100",
      image: "https://github.com/WebDevSimplified.png",
      squad: squads[0].name,
      favourite: false
    },
    {
      id: uuid(),
      name: "RickHPotter",
      role: "FullStack Developer | Mobile Developer | ML Enthusiast",
      image: "https://github.com/RickHPotter.png",
      squad: squads[1].name,
      favourite: false
    },
    {
      id: uuid(),
      name: "Nicktoon21",
      role: "FullStack Developer | NodeJS, NestJS, ReactJS | Go Enthusiast",
      image: "https://github.com/nicktoon21.png",
      squad: squads[1].name,
      favourite: false
    },
    {
      id: uuid(),
      name: "RickHPotter",
      role: "FullStack Developer | Mobile Developer | ML Enthusiast",
      image: "https://github.com/RickHPotter.png",
      squad: squads[2].name,
      favourite: false
    },
    {
      id: uuid(),
      name: "Gisazx",
      role: "2D Modeller | Artist | Web Dev Student | Adobe Specialist",
      image: "https://github.com/Gisazx.png",
      squad: squads[2].name,
      favourite: false
    },
  ]

  const [collabs, setCollabs] = useState(initCollabs);

  const newCollab = (collab) => {
    collab.id = uuid()
    setCollabs([...collabs, collab]);
  };

  const deleteCollab = (id) => {
    setCollabs(collabs.filter((collab) => collab.id !== id))
  }

  const newSquad = (squad) => {
    setSquads([...squads, {...squad, id: uuid() }]);
  }

  const changeSquadColour = (id, colour) => {
    setSquads(squads.map(squad => {
      if (squad.id === id) {
        squad.primaryColour = colour
      }
      return squad
    }))
  }

  const favouriteCollab = (id) => {
    let collab = collabs.find((collab) => collab.id === id)
    if (collab) {
      collab.favourite = !collab.favourite
    }
    setCollabs([...collabs])
  }

  return (
    <div className="App">
      <Banner />
      <Form
        itens={squads.map((obj) => obj.name)}
        collabSubmit={(collab) => newCollab(collab)}
        squadSubmit={newSquad}
      />

      {squads.map((squad) => (
        <Squad
          key={squad.id}
          squad={squad}
          collabs={collabs.filter((collab) => collab.squad === squad.name)}
          onChangeColour={changeSquadColour}
          favouriteCollab={favouriteCollab}
          deleteCollab={deleteCollab}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
