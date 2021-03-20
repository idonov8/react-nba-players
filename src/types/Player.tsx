export default interface Player {
    id: number,
    first_name: String,
    height_feet?: number,
    height_inches?: number,
    last_name: String,
    position: String,
    team: {
        id: number,
        abbreviation: String,
        city: String,
        conference:String ,
        division:String,
        full_name:String,
        name:String
    },
    weight_pounds?: number,
    favorite: boolean  
}