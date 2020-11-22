import React from "react";

import './details.css'

const Details = (props) => {
    // console.log(props.location.param2);
    // console.log(props.location.param3);
    // console.log(props.location.param4);
    // console.log(props.location.param5);
    const obj = {
        companyName: props.location.param2,
        phone: props.location.param3,
        address: props.location.param4,
        desc: props.location.param6,
    };
    const arrayImages = props.location.param5;

    console.log('in view detailssssssssss',arrayImages,obj);
    return (
        <div>
            <h1>hoooooooooo</h1>
        </div>
    )
}
export default Details

