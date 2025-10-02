export interface Pokemon {
    abilities: [
        {
            ability: {
                name: string
                url: string
            }
            is_hidden: boolean,
            slot: number
        }
    ]
}