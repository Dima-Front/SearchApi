import React from 'react';
import i from './cardItem.module.css'

function CardItem({watchers, star, name, html_url}) {
    return (
        <div className={i.item}>
            <div className={i.name}>
                <a href={html_url} target='_blank'><h3>{name} </h3></a>

            </div>
            <div className={i.star}>
                <h2> star: {star} </h2>
            </div>
            <div className={i.watchers}>
                <h2> watchers: {watchers} </h2>
            </div>


        </div>

    );
}

export default CardItem;