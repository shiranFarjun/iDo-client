import React, { useState, useEffect } from "react";
import productFuncAPI from '../../api/productFuncAPI';
import './myProduct.css'
import Popup from './Popup'
import { useHistory } from 'react-router-dom'


const MyProduct = (props) => {
    const [showPopup, setShowPopup] = useState(false);
    const [arrayProductsInfo, setProductInfo] = useState([]);
    const [popText, setPopText] = useState('');
    const [index, setIndex] = useState('');
    const [idUser, setUserId] = useState(props.location.param1);
    const [idProduct, setIdProduct] = useState('')
    let history = useHistory();

    const userToken = localStorage.getItem('token');
    // let [userToken, setUserToken] = useState(localUser);

    useEffect(() => {
        getProductByIdUser();
    },[]);

    const toggle = () => {
        addProduct();
        setShowPopup(!showPopup);
    }


    ///////   A function that returns all the products created by the same user with the id "idUser"   ///////

    const getProductByIdUser = () => {
        productFuncAPI.getProductByIdUser(idUser)  //idUser-"5fac34cae3c64bc09c1e4a02"
            .then(response => {
                if(Object.keys(response.data.getProductByIdUser).length === 0){
                    console.log('you have not product yet');
                }else{
                    setProductInfo(response.data.getProductByIdUser);
                }
            }).catch(e => {
                console.log(e);
                throw e;
            });
    };

    const addProduct = () => {
        setPopText('Create Product')
        const newElement = {
            address: '',
            companyName: '',
            description: '',
            maxGroupSize: '',
            phone: '',
            category: '',
            locationCoordinates: '',
            images: ''
        }
        setProductInfo(prevArray => [...prevArray, newElement]);
        setIndex(arrayProductsInfo.length);
    }

    const editItem = (e) => {        
        setIndex(e.target.attributes.getNamedItem('data-index').value)
        setIdProduct(e.target.attributes.getNamedItem('data-id').value);
        setPopText('Edit Product');
        setShowPopup(!showPopup);
    }
    
    const deleteItem = (e) => {
        productFuncAPI.removeProductByIdAuth(e.target.attributes.getNamedItem('data-id').value, userToken)
            .then(response => {
                console.log('delete product');
                getProductByIdUser();
            }).catch(e => {
                console.log(e);
                throw e;
            });
        getProductByIdUser();
    }

    return (
        <div className="container-product">
            <h2>Advertising Products</h2>
            {arrayProductsInfo && arrayProductsInfo.map((product, index) => (
                <div className="prod" key={index}>
                    <div> {product.category + '-'} {product.companyName}    </div>
                    <div>
                        <div className="far fa-edit" onClick={editItem} data-id={product._id} data-index={index}></div>
                        <div className="fas fa-trash-alt" onClick={deleteItem} data-id={product._id} data-index={index}></div>
                    </div>
                </div>
            ))
            }
            <div className="fas fa-cart-plus" onClick={toggle}> Add product</div>
            {showPopup ?
                <Popup
                    indexArray={index}
                    info={arrayProductsInfo}
                    text={popText}
                    idOfProduct={idProduct}
                    closePopup={e=>setShowPopup(!showPopup)}
                    refresh={getProductByIdUser}
                />
                : null
            }
        </div>
    )
}
export default MyProduct

