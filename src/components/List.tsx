import React, { useState } from 'react'
import Player from '../types/Player'
import PlayerCard from './PlayerCard'

interface Props {
    title?: string
    bgColors?: Array<string>
    items: Array<Player>
    handleFavorite: (id: number, checked: boolean) => void
}
const List: React.FC<Props> = (props) => {
    const [searchField, setSearchField] = useState('')
    const [bgColor, setBgColor] = useState('white')

    const listItems = props.items
                        .filter((item: Player) => (item.first_name+" "+item.last_name).toLowerCase().includes(searchField.toLowerCase()))
                        .map((item: Player) =><><PlayerCard player={item} handleFavorite={props.handleFavorite}/> <br/></>)
    return (
        <div style={{padding: '5px', alignItems: 'center', backgroundColor: bgColor}}>
            <h2>{props.title}</h2>
            <label htmlFor="search">Search: </label>
            <input type="text" name="search" value={searchField} onChange={e => setSearchField(e.target.value)}/>
            { 
                props.bgColors &&
                    <p>Background Color: 
                        {
                            props.bgColors.map(color => <button onClick={()=>setBgColor(color)}>{color}</button>)
                        }
                    </p>
            }
            <ul>
                {listItems}
            </ul>
        </div>
    )
}

export default List