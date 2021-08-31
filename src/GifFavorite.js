import React, { useContext } from 'react'
import { GifGridItem } from './components/GifGridItem';
import { NavBar } from './components/NavBar'
import { GifContext } from './contextGif/GifContext';

export const GifFavorite = ( ) => {
    const  [ gifFavorites ] = useContext( GifContext );
    console.log( gifFavorites)

    return (
        <>
        <NavBar />
        <div className="wrapperApp">
            <h1>Mis gifs favoritos</h1>
            <div className="card-grid">
                { gifFavorites.map( ( gif ) => {
                    return <GifGridItem key={ gif.id } {...gif}/>
                })
                }
            </div> 
        </div>
        </>
    )
}
