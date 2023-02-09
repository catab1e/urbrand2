import React from 'react';
import Finder from '../forms/finder/Finder';
import CardItem from './CardItem';
import "./cards.css"

const Cards = () => {
    return (
        <div className='cards'>
            <Finder />
            <div className='cards__inner'>
                <CardItem description="test" />
                <CardItem description="test"/>
                <CardItem description="test"/>
                <CardItem description="test"/>
                <CardItem description="test"/>
                <CardItem description="test"/>
                <CardItem description="test"/>
                <CardItem description="test"/>
                <CardItem description="test"/>
                <CardItem description="test"/>
            </div>
        </div>
    );
};

export default Cards;