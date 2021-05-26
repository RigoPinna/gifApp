import React, { useContext, useEffect, useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid'
import { NavBar } from './components/NavBar';


const GifExperApp = () => {
    const [ categories, setCategories ] = useState(['Big Data']);

    return (
        < >
            <NavBar />
            <div className="wrapperApp">
            <h2>Encuentra cualquier gif de tu preferencia</h2>
            <AddCategory setCategories={ setCategories }/>
            <hr/>
            <ol>
                {
                    categories.map( (category) => {
                        return <GifGrid key={ category } category={category}/>
                    })
                }
            </ol>

            </div>
            
        </>
    );
};
export default GifExperApp;