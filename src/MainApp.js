import React, { useEffect, useState } from 'react'
import { GifContext } from './contextGif/GifContext'
import { AppRouter } from './router/AppRouter'

export const MainApp = () => {
   
    const [gifFavorite, setGifFavorite] = useState([]);
    useEffect(() => {
        const myGifs = localStorage.getItem('myGifs') ? JSON.parse(localStorage.getItem('myGifs')) : [];
        localStorage.setItem('myGifs',JSON.stringify(myGifs))
        setGifFavorite(myGifs)
    }, [])
    return (
        <GifContext.Provider value= { { gifFavorite, setGifFavorite } }>
            <AppRouter />
        </GifContext.Provider>
    )
}
