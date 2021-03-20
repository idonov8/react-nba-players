import React, { useState } from 'react';
import './App.css';
import List from './components/List'


function App() {
const data: string = '[{ "id": 14,"first_name": "Ike","height_feet": null,"height_inches": null,"last_name": "Anigbogu","position": "C","team": {"id": 12,"abbreviation": "IND","city": "Indiana","conference": "East","division": "Central", "full_name": "Indiana Pacers", "name": "Pacers"},"weight_pounds": null}]'
const [players, setPlayers] = useState(JSON.parse(data))
return (
  <div className="App">
    NBA Players
    <List items={players} />
  </div>
);
}

export default App;
