import React from "react";

import './details.css'

const Details = (props) => {
    // console.log(props.indexArray, props.info, 'in pop');
    // const initialUser = {
    //     address: props.info[props.indexArray].address,
    //     companyName: props.info[props.indexArray].companyName,
    //     description: props.info[props.indexArray].description,
    //     maxGroupSize: props.info[props.indexArray].maxGroupSize,
    //     phone: props.info[props.indexArray].phone,
    //     category: props.info[props.indexArray].category,
    //     locationCoordinates: [],
    //     images: props.info[props.indexArray].images
    // };
    // // console.log(initialUser, 'initialUser in pop');
    // const [dataProduct, setDataProduct] = useState(initialUser);
    // const [selectedOption, setSelectedOption] = useState('')
    // const [radioSelect, setRadioSelect] = useState('');
    // const userToken=localStorage.getItem('token');


    // const handleChange = e => {
    //     const { name, value } = e.target;
    //     setDataProduct({ ...dataProduct, [name]: value });
    // }

    // const handleOptionChange = (event) => {
    //     setSelectedOption(event.target.id);
    //     setRadioSelect(event.target.value);
    // }

    // const onSubmit = async (e) => {
    //     e.preventDefault();
    //     let data = {
    //         address: dataProduct.address,
    //         companyName: dataProduct.companyName,
    //         description: dataProduct.description,
    //         maxGroupSize: dataProduct.maxGroupSize,
    //         phone: dataProduct.phone,
    //         category: radioSelect,
    //         locationCoordinates: [31.771959, 35.217018],
    //         images: '/need to import path for photo'
    //     }

    //     console.log('data on popup in submit', data);

    //     if (props.text === 'Create Product') {
    //         productFuncAPI.createNewProduct(data, userToken)
    //             .then(response => {
    //                 console.log(response.data);
    //                 console.log('active func from ded');
    //                 props.refresh();
    //             })
    //             .catch(e => {
    //                 console.log(e);
    //                 throw e;
    //             });
    //     } else {
    //         console.log('update in pop id of product', props.idOfProduct);
    //         productFuncAPI.updateProductById(props.idOfProduct, data, userToken)
    //             .then(response => {
    //                 console.log(response.data);
    //                 console.log('active func from ded');
    //                 props.refresh();
    //             })
    //             .catch(e => {
    //                 console.log(e);
    //                 throw e;
    //             });
    //     }
    //     props.closePopup();
    // };
console.log('in view detailssssssssss');
    return (
        <div>
          <h1>hoooooooooo</h1>
        </div>
    )
}
export default Details

