import React, { useState, useEffect } from 'react';
import './App.css';
import List from './components/List'


function App() {

const [players, setPlayers] = useState([])
useEffect(() => {
  fetch(`https://www.balldontlie.io/api/v1/players`)
  .then(res => res.json())
  .then(
    result => setPlayers(result.data),
    error => console.log(error)
  )
})
return (
  <div className="App">
    NBA Players
    <List items={players} />
  </div>
);
}

export default App;
