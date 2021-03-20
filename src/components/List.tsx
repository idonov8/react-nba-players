import React, { useState } from 'react'
import Player from '../types/Player'
import PlayerCard from './PlayerCard'

interface Props {
    items: Array<Player>
    handleFavorite: (id: number, checked: boolean) => void
}
const List: React.FC<Props> = ({ items, handleFavorite }) => {
    const [searchField, setSearchField] = useState('')
    const listItems = items
                        .filter(item => (item.first_name+" "+item.last_name).toLowerCase().includes(searchField.toLowerCase()))
                        .map((item) =><><PlayerCard player={item} handleFavorite={handleFavorite}/> <br/></>)
    return (
        <div style={{padding: '5%'}}>
            <label htmlFor="search">Search: </label>
            <input type="text" name="search" value={searchField} onChange={e => setSearchField(e.target.value)}/>
            <ul>
                {listItems}
            </ul>
        </div>
    )
}

export default List