import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import List from "./components/list";
import AddToList from "./components/AddToLis";

export interface IState {
  people: {
    name: string;
    age: number;
    url: string;
    note?: string;
  }[];
}

function App() {
  const [people, setPeople] = useState<IState["people"]>([
    {
      name: "Messi",
      age: 30,
      url: "https://sportbild.bild.de/fotos-skaliert/der-aktuelle-vertrag-von-lionel-messi-beim-fc-barcelona-laeuft-am-1-juli-2021-aus-fd9442bf1b6445a08cebfa28decfb697-76932054/8,w=993,c=0.sport.jpg",
      note: "random note",
    },
  ]);

  return (
    <div className="App">
      <h1>List of People</h1>
      <List people={people} />
      <AddToList people={people} setPeople={setPeople} />
    </div>
  );
}

export default App;
