import React, { useContext, useEffect, useState } from 'react'
import { GifContext } from '../contextGif/GifContext';

export const ButtonLike = ( { url, title, id: idRecived } ) => {
    const { gifFavorite, setGifFavorite } = useContext( GifContext );
    
    const [ isBtnActiveFav, setBtnActive ] = useState( true );

    useEffect( () => {
        setBtnActive( !isBtnActiveFav );
    }, [ gifFavorite ] );

    const handleLike = () => {
        localStorage.setItem('myGifs',JSON.stringify([...gifFavorite, ...[ {id:idRecived, url, title } ]]));
        setGifFavorite([...gifFavorite, ...[ {id:idRecived, url, title } ]])
        setBtnActive(true);
       
    }
    return (
        <button className={ isBtnActiveFav ? 'isBtnActive' : '' } onClick={ handleLike }>
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
        </button >
    )
}
