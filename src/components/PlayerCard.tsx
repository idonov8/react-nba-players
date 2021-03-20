import React from 'react'

export interface Player {
    id: Number,
    first_name: String,
    height_feet?: Number,
    height_inches?: Number,
    last_name: String,
    position: String,
    team: {
        id: Number,
        abbreviation: String,
        city: String,
        conference:String ,
        division:String,
        full_name:String,
        name:String
    },
    weight_pounds?: Number   
}

const PlayerCard: React.FC<{player: Player}> = ({player}) => {
    return (
        <div>
            Name: {player.first_name + " " + player.last_name} 
        </div>
    )
}

export default PlayerCard