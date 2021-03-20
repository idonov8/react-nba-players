import React from 'react'
import PlayerCard, { Player } from './PlayerCard'

interface Props {
    items: Array<Player>;
}
const List: React.FC<Props> = ({items}) => {
    const listItems = items.map(
        (item) => <PlayerCard player={item}/>
        )
    return (
        <div>
            <ul>
                {listItems}
            </ul>
        </div>
    )
}

export default List