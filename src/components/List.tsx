import React, { useState } from 'react'
import PlayerCard, { Player } from './PlayerCard'

interface Props {
    items: Array<Player>;
}
const List: React.FC<Props> = ({items}) => {
    const [searchField, setSearchField] = useState('')
    const listItems = items
                        .filter(item => (item.first_name+" "+item.last_name).toLowerCase().includes(searchField.toLowerCase()))
                        .map(
                            (item) => <PlayerCard player={item}/>
                            )
    return (
        <div>
            <label htmlFor="search">Search: </label>
            <input type="text" name="search" value={searchField} onChange={e => setSearchField(e.target.value)}/>
            <ul>
                {listItems}
            </ul>
        </div>
    )
}

export default List