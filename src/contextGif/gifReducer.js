export const initialState = [];

export const addGif = ( id, title,url ) => ({
    type: 'ADD',
    payload: [{ 
        id, 
        title, 
        url
    }]

})
export const removeGif = ( id ) => ({
    type: 'REMOVE',
    payload: id
})
export const gifReducer = (state = [], action ) => {

    switch ( action.type ) {
        case 'ADD':
            alert('Se ha agregado el gif a tus favoritos')
            return [
                ...state,
                ...action.payload
            ]

        case 'REMOVE':
            alert('Se ha eliminado el gif de tus favoritos')
            return state.filter( gif => gif.id !== action.payload )
    
        default:
            return state;
    }

}