import React, { useState } from "react";
import productFuncAPI from '../../api/productFuncAPI';
import './popup.css'

const Popup = (props) => {
    console.log(props.indexArray, props.info, 'in pop');
    const initialUser = {
        address: props.info[props.indexArray].address,
        companyName: props.info[props.indexArray].companyName,
        description: props.info[props.indexArray].description,
        maxGroupSize: props.info[props.indexArray].maxGroupSize,
        phone: props.info[props.indexArray].phone,
        category: props.info[props.indexArray].category,
        locationCoordinates: [],
        images: props.info[props.indexArray].images
    };
    // console.log(initialUser, 'initialUser in pop');
    const [dataProduct, setDataProduct] = useState(initialUser);
    const [selectedOption, setSelectedOption] = useState('')
    const [radioSelect, setRadioSelect] = useState('');
    const userToken=localStorage.getItem('token');


    const handleChange = e => {
        const { name, value } = e.target;
        setDataProduct({ ...dataProduct, [name]: value });
    }

    const handleOptionChange = (event) => {
        setSelectedOption(event.target.id);
        setRadioSelect(event.target.value);
    }

    const onSubmit = async (e) => {
        e.preventDefault();
        let data = {
            address: dataProduct.address,
            companyName: dataProduct.companyName,
            description: dataProduct.description,
            maxGroupSize: dataProduct.maxGroupSize,
            phone: dataProduct.phone,
            category: radioSelect,
            locationCoordinates: [31.771959, 35.217018],
            images:'https://i.ibb.co/XVMrPJ7/d14-480x640.jpg'
        }

        console.log('data on popup in submit', data);

        if (props.text === 'Create Product') {
            productFuncAPI.createNewProduct(data, userToken)
                .then(response => {
                    console.log(response.data);
                    console.log('active func from ded');
                    props.refresh();
                })
                .catch(e => {
                    console.log(e);
                    throw e;
                });
        } else {
            console.log('update in pop id of product', props.idOfProduct);
            productFuncAPI.updateProductById(props.idOfProduct, data, userToken)
                .then(response => {
                    console.log(response.data);
                    console.log('active func from ded');
                    props.refresh();
                })
                .catch(e => {
                    console.log(e);
                    throw e;
                });
        }
        props.closePopup();
    };

    return (
        <div className='popup'>
            <div className='popup_inner'>
                <div className='header-pop'>
                    <h1>{props.text}</h1>
                    <button className="close-pop" onClick={props.closePopup}>X</button>
                </div>
                <div>
                    <form className="popup-form" onSubmit={onSubmit} >
                        <div className="marg">
                            <label className="_label">Company Name</label>
                            <input className="_input" type="text" placeholder={dataProduct.companyName} name="companyName" onChange={handleChange} />
                        </div>
                        <div className="marg">
                            <label className="_label"> Address</label>
                            <input className="_input" type="text" placeholder={dataProduct.address} name="address" onChange={handleChange} />
                        </div>
                        <div className="marg">
                            <label className="_label">Description</label>
                            <input className="_input" type="text" placeholder={dataProduct.description} name="description" onChange={handleChange} />
                        </div>
                        <div className="marg">
                            <label className="_label">Phone</label>
                            <input className="_input" type="text" name="phone" onChange={handleChange} />
                        </div>
                        <div className="marg">
                            <label className="_label">Max Group Size</label>
                            <input className="_input" type="text" placeholder={dataProduct.maxGroupSize} name="maxGroupSize" onChange={handleChange} />
                        </div>
                        <div className="marg">
                            <div className="Category-option">
                                <div>Category</div>
                                <div className="radio">
                                    <input className="_input-radio" name='category' id='1' type="radio" value="Food"
                                        checked={selectedOption === '1'}
                                        onChange={handleOptionChange}
                                    />
                                    <label className="_label-radio" htmlFor="1">
                                        Food
                                    </label>
                                </div>
                                <div className="radio">
                                    <input className="_input-radio" name='category' id='2' type="radio" value="Location"
                                        checked={selectedOption === '2'}
                                        onChange={handleOptionChange}
                                    />
                                    <label className="_label-radio" htmlFor="2">
                                        Location
                                    </label>
                                </div>
                                <div className="radio">
                                    <input className="_input-radio" name='category' id='3' type="radio" value="Design"
                                        checked={selectedOption === '3'}
                                        onChange={handleOptionChange}
                                    />
                                    <label className="_label-radio" htmlFor="3">
                                        Design
                                    </label>
                                </div>

                            </div>
                        </div>

                        <button type="submit" className="btn-submit-popup">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default Popup


// <div className="marg">
// <label className="_label">locationCoordinates</label>
// <input className="_input" type="text" placeholder={dataProduct.locationCoordinates}name="locationCoordinates" onChange={handleChange} />
// </div>