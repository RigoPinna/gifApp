import React from 'react'
import PropType from 'prop-types';
import { ButtonLike } from './ButtonLike';
export const GifGridItem = ({title,url, id}) => {

    return (
        <div className="card animate__animated animate__fadeInDown">
            <img src={url} alt={title}/>
            <p>{title}</p>
            <ButtonLike url={url} title={title} id={id}/>
        </div>
    )
}
GifGridItem.propTypes = {
    title: PropType.string.isRequired,
    url: PropType.string.isRequired,
};
