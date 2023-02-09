import React from 'react';
import "./cardItem.css"

const CardItem = (props) => {
    return (
        <div className='card'>
            <div className='card__img'>
                <img src="" alt="" />
            </div>
            <div className='card__descr'>
                {props.description}
            </div>
            
        </div>
    );
};

export default CardItem;