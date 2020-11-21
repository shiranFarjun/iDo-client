import React, { useState, useEffect } from "react";
import serviceSupplier from '../../api/serviceSupplier';
import CardDisplayInfo from '../UI/CardDisplayInfo';
import '../UI/card-style.css'
import productFuncAPI from '../../api/productFuncAPI'





const Design = () => {
    const [DesignList, setDesignList] = useState([]);
    // const [currentCardDesign, setCurrentCardDesign] = useState(null);
    // const [currentIndex, setCurrentIndex] = useState(-1);
    const [searchByCompany, setSearchByCompany] = useState("");

    useEffect(() => {
        localStorage.clear();
        retrieveDesign();
    }, []);

    const onChangeSearch = e => {
        console.log('in onChangeSearch')
        const inputSearch = e.target.value;
        setSearchByCompany(inputSearch);
    };

    const retrieveDesign = () => {
        productFuncAPI.getProductByCategory('Design')            
            .then(response => {
                setDesignList(response.data.productsByCategory);
                console.log('Design List', response.data.productsByCategory);
                
            })
            .catch(e => {
                console.log(e);
            });
    };

    // const refreshList = () => {
    //     retrieveDesign();
    //     setCurrentCardDesign(null);
    //     setCurrentIndex(-1);
    // };

    // const setActiveDesign = (carDesign, index) => {
    //     setCurrentCardDesign(carDesign);
    //     setCurrentIndex(index);
    // };

 

    const findByCompany = () => {
        console.log('in find- searchByCompany',searchByCompany)
       

        serviceSupplier.findByCompany(2,searchByCompany)
            .then(response => {
                setDesignList(response.data);
                console.log('findByCompany', response.data);
                console.log('Design List', DesignList);

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
                        onClick={findByCompany}>Search</button>
                </div>
            </div>
            <h1 className="header-view-products"> Company Design</h1>
            <div className="container-fluid d-flex justify-content-center">
                <ul className="row">   
                    {DesignList && ///onClick={() => setActiveDesign(design, index)} 
                        DesignList.map((design, index) => (
                            <li className="col-md-4" key={index}>
                                <CardDisplayInfo 
                                company={design.companyName}  phone={design.phone} img={design.imageCover} desc={design.description}/>
                            </li>
                        ))}
                </ul>
            </div>

        </div>
    )
};

export default Design;
