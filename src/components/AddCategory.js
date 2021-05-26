import React, { useState } from 'react'
import PropTypes from 'prop-types'

export const AddCategory = ( { setCategories } ) => {
    const [inputValue, setInputValue] = useState('');

    const handleChange = ( e ) => {
            setInputValue( e.target.value )       
    }
    const handleSubmit = ( e ) => {
        setCategories( [inputValue])
       
        e.preventDefault()
    }
    return (
        <form onSubmit={ handleSubmit } >
            <input onChange={ handleChange } value={ inputValue } type='text' placeholder='Buscar Gif'/>
        </form>
    )
}
AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired,
}
