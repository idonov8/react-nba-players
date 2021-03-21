import React, { useState, useEffect } from 'react';
import styled from 'styled-components'
import './App.css';
import List from './components/List'
import Player from './types/Player'

function App() {
const [players, setPlayers] = useState<Array<Player>>([])

useEffect(() => {
  console.log("Fetching data")
  fetch(`https://www.balldontlie.io/api/v1/players`)
  .then(res => res.json())
  .then(
    result => setPlayers(result.data.map((player: Player) => {
      return {...player, favorite: false}
    })),
    error => console.log(error)
  )
}, [])

const handleFavorite = (id: number, checked: boolean) => {
  setPlayers((prevPlayers) => { 
    let player = prevPlayers.find(player => player.id===id)
    if (player){
      prevPlayers[prevPlayers.indexOf(player)].favorite = checked
      console.log(prevPlayers);
    }
    return [...prevPlayers]
  })
}

return (
  <div className="App">
    <h1>NBA Players</h1>
    <ListsContatiner>
      <List title="Players:" items={players} handleFavorite={handleFavorite} />
      <List title="Favorites:" bgColors={['White', 'Teal', 'Yellow']} items={players.filter(player => player.favorite)} handleFavorite={handleFavorite} />
    </ListsContatiner>
  </div>
);
}
export default App;

const ListsContatiner = styled.div`
  display: flex;
  justify-content: center;
`