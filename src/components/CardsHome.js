import React from 'react';
import './CardsHome.css';
import CardItem from './CardItem';
import img1 from '../img/k1.jpg'
import img2 from '../img/hopa.jpg'
import img3 from '../img/location.jpg'

function Cards() {
    return (
        <div className='cards'>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <CardItem
                            src={img2}
                            text='Excited '
                            label='Design'
                            path='/Design'
                        />
                        <CardItem
                            src={img1}
                            text='Eat'
                            label='Catering'
                            path='/Catering'
                        />
                        <CardItem
                            src={img3}
                            text='Fall in love'
                            label='Location'
                            path='/Location'
                        />

                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Cards;
