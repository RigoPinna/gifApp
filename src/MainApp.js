import React, { useEffect, useReducer } from 'react'
import { GifContext } from './contextGif/GifContext'
import { gifReducer, initialState } from './contextGif/gifReducer';
import { AppRouter } from './router/AppRouter'

export const MainApp = () => {
   
    const [ gifFavorites, dispatch ] = useReducer( gifReducer,   initialState );
    return (
        <GifContext.Provider value= { [ gifFavorites, dispatch ] }>
            <AppRouter />
        </GifContext.Provider>
    )
}
