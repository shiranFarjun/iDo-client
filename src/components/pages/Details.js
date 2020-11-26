import React from "react";

import './details.css'

const Details = (props) => {
    const obj = {
        companyName: props.location.param2,
        phone: props.location.param3,
        address: props.location.param4,
        desc: props.location.param6,
    };
    const galleryStyle = {
        width: '1024px',
        background: '#ddd',
        padding: '13px',
        margin: '4px auto',
        display: 'flex'
    }
    const leftSide = {
        display: 'gride',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gridTemplateRows: 'repeat(4, 5vw)',
    }
    const arrayImages = ["https://i.ibb.co/Bz9D5LG/k19-640x427.jpg"
        , "https://i.ibb.co/Bz9D5LG/k19-640x427.jpg"
        , "https://i.ibb.co/Bz9D5LG/k19-640x427.jpg"]//props.location.param5;

    console.log('in view detailssssssssss', arrayImages, obj);
    return (
        <div style={galleryStyle}>
            {/*Left side */}
            <div >
                <div style={leftSide}>
                    {arrayImages.map((img, index) => (
                        <img style={{padding:'7px'}} src={img} key={index}></img>
                    ))}
                </div>
            </div>

            {/*Right side */}
            <div style={{ flex: 1, padding: '40px' }}>
                <h1>{obj.companyName}</h1>
                <h2>{obj.phone}</h2>
                <h3>{obj.address}</h3>
                <p>{obj.desc}</p>
            </div>
        </div>
    )
}
export default Details

