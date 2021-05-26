import React from 'react'
import { useFetchGifts } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';
import PropType from 'prop-types';
export const GifGrid = ( { category } ) => {

    const { data, loading } = useFetchGifts( category );
    
    return (
    <>
    <h5>{ category }</h5>
    { loading && <p>Cargando...</p> }
     <div className="card-grid">
        { data.map( ( gif ) => {
            return <GifGridItem key={ gif.id } {...gif}/>//Se envia la props con el objeto 
        })
        }
    </div> 
    </>
    );
}
GifGrid.propTypes = {
    category: PropType.string.isRequired,
}
