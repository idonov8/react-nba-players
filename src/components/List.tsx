import React, { useState } from 'react'
import Player from '../types/Player'
import PlayerCard from './PlayerCard'

interface Props {
    title?: string
    items: Array<Player>
    handleFavorite: (id: number, checked: boolean) => void
}
const List: React.FC<Props> = (props) => {
    const [searchField, setSearchField] = useState('')
    const listItems = props.items
                        .filter((item: Player) => (item.first_name+" "+item.last_name).toLowerCase().includes(searchField.toLowerCase()))
                        .map((item: Player) =><><PlayerCard player={item} handleFavorite={props.handleFavorite}/> <br/></>)
    return (
        <div style={{padding: '5px', alignItems: 'center'}}>
            <h2>{props.title}</h2>
            <label htmlFor="search">Search: </label>
            <input type="text" name="search" value={searchField} onChange={e => setSearchField(e.target.value)}/>
            <ul>
                {listItems}
            </ul>
        </div>
    )
}

export default List