import React, { useState, useEffect } from 'react';
import styled from 'styled-components'
import './App.css';
import PlayersList from './components/PlayersList'
import Player from './types/Player'
import { useAlert } from 'react-alert'

function App() {
const [players, setPlayers] = useState<Array<Player>>([])
const alert = useAlert()

useEffect(() => {
  console.log("Fetching data")
  alert.info('Loading...', {
    timeout: 1000
  })
  fetch(`https://www.balldontlie.io/api/v1/players`)
  .then(res => res.json())
  .then(
    result => setPlayers(result.data.map((player: Player) => {
      return {...player, favorite: false}
    })),
    error => alert.error('Error while fetching, try again')
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
      <PlayersList title="Players:" items={players} handleFavorite={handleFavorite} />
      <PlayersList title="Favorites:" bgColors={['White', 'Teal', 'Yellow']} items={players.filter(player => player.favorite)} handleFavorite={handleFavorite} />
    </ListsContatiner>
  </div>
);
}
export default App;

const ListsContatiner = styled.div`
  display: flex;
  justify-content: center;
`