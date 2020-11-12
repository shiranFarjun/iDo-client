import React, { useState, useEffect } from "react";
import serviceSupplier from '../../api/serviceSupplier';
import CardDisplayInfo from '../UI/CardDisplayInfo';
import '../UI/card-style.css'

import productFuncAPI from '../../api/productFuncAPI'

const Catering = () => {
    const [CateringList, setCateringList] = useState([]);
    // const [currentCardCatering, setCurrentCardCatering] = useState(null);
    // const [currentIndex, setCurrentIndex] = useState(-1);
    const [searchByCompany, setSearchByCompany] = useState("");

    useEffect(() => {
        retrieveCatering();
    }, []);

    const onChangeSearch = e => {
        const searchCompany = e.target.value;
        console.log('searchCompany', searchCompany);
        setSearchByCompany(searchCompany);
    };

    const retrieveCatering = () => {
        productFuncAPI.getProductByCategory('Food')                 //1  == caring category
            .then(response => {
                setCateringList(response.data.productsByCategory);
                console.log('Catering List aet all', response.data.productsByCategory);
            })
            .catch(e => {
                console.log(e);
            });
    };

    // const refreshList = () => {
    //     retrieveCatering();
    //     setCurrentCardCatering(null);
    //     setCurrentIndex(-1);
    // };

    // const setActiveCatering = (cardCatering, index) => {
    //     setCurrentCardCatering(cardCatering);
    //     setCurrentIndex(index);
    // };


    const findByCompany = () => {
        console.log('in find by', searchByCompany)
        serviceSupplier.findByCompany(1, searchByCompany)
            .then(response => {
                setCateringList(response.data);
                console.log('findByCompany', response.data);
            })
            .catch(e => {
                console.log(e);
            });
    };

    return (
        <div className="list row">
            <div className="container-search">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Search by company name"
                    value={searchByCompany}
                    onChange={onChangeSearch}
                />
                <div className="button-search">
                    <button
                        type="button"
                        onClick={findByCompany}
                    >Search</button>
                </div>
            </div>
            <h1 className="header-view-products"> Catering List</h1>
            <div className="container-fluid d-flex justify-content-center">
                <ul className="row">
                    {CateringList &&   //onClick={() => setActiveCatering(catering, index)}
                        CateringList.map((catering, index) => (
                            <li className="col-md-4"  key={index}>  
                                <CardDisplayInfo company={catering.companyName}  phone={catering.phone} img={catering.imageCover} desc={catering.description}/>
                            </li>
                        ))}
                </ul>
            </div>
        </div>
    )
};

export default Catering;
