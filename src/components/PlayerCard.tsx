import React from 'react'
import styled from 'styled-components'
import Player from '../types/Player'

interface Props {
    player: Player
    handleFavorite: (id: number, checked: boolean) => void
}
const PlayerCard: React.FC<Props> = ({ player, handleFavorite }) => {
    return (<>
        <Wrapper>
            <b>Name: </b>{player.first_name + " " + player.last_name} 
            <br/>
            <b>Position: </b>{player.position}
            <br/>
            <label>Favorite: </label>
            <Favorite type="checkbox" checked={player.favorite} name="favorite" onChange={(e => handleFavorite(player.id, e.target.checked))}/>
        </Wrapper></>
    )
}
export default PlayerCard

const Wrapper = styled.section`
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    padding: 3%;
    text-align: left;
`

const Favorite = styled.input`
`