import React from 'react';
import { Link } from 'react-router-dom';


function CardDisplayInfo(props) {
    console.log("props.lat,props.lng", props.lat, props.lng);

    const InfoLink = {
        pathname: props.path,
        param1: [props.lng,props.lat],
        param2: props.company,
        param3:props.phone,
        param4:props.address,
        param5:props.imagesView
    };
    return (
        <>
            <div className="card text-center shadow">
                <div className="overflow">
                    <img src={props.img} alt="" className="card-img-top"></img>
                </div>
                <div className="card-body text-dark">
                    <h2 className="card-title">{props.company}</h2>
                    <h3 className="card-text text-secondary">{props.phone}</h3>
                    <p className="card-text text-secondary">{props.desc}</p>
                    <Link to={InfoLink} className='btn-mobile'>הצג פרטים</Link>
                </div>
            </div>
        </>
    )
}


export default CardDisplayInfo;

