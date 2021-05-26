export const authReducer = (state = {}, action ) => {

    switch ( action.type ) {
        case 'ADD':
            return {
                ...action.payload,
                logged: true
            }

        case 'DELETE':
            return {
                logged: false
            }
    
        default:
            return state;
    }

}