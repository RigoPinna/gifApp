import React, { useContext, useEffect, useState } from 'react'
import { GifContext } from '../contextGif/GifContext';
import { addGif, removeGif } from '../contextGif/gifReducer';

export const ButtonLike = ( { url, title, id: idRecived } ) => {
    const [ gifFavorites, dispatch ] = useContext( GifContext );
    
    const [ isBtnActiveFav, setBtnActive ] = useState( false );

    useEffect( () => {
        if ( gifFavorites.length > 0 ) {
            const isFavorite = gifFavorites.some( gif => gif.id === idRecived );
            setBtnActive( isFavorite );
        }
    }, [ gifFavorites ] );

    const handleLike = () => {
        const isAdded = gifFavorites.some( gif => gif.id === idRecived );
        ( isAdded ) 
            ? dispatch(removeGif( idRecived ))
            : dispatch( addGif(idRecived, title, url ) );
        setBtnActive( !isBtnActiveFav );
       
    }
    return (
        <button className={ isBtnActiveFav ? 'isBtnActive' : '' } onClick={ handleLike }>
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
        </button >
    )
}
