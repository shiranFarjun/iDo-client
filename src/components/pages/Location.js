
import React, { useState, useEffect } from "react";
import serviceLocation from '../../api/apiLocation/serviceLocation';
import CardDisplayInfo from '../UI/CardDisplayInfo';
import '../UI/card-style.css'
import Routes from '../../router/Routes'
import productFuncAPI from '../../api/productFuncAPI'


const Location = () => {
    const [LocationList, setLocationList] = useState([]);
    // const [currentCardLocation, setCurrentCardLocation] = useState(null);
    // const [currentIndex, setCurrentIndex] = useState(-1);
    const [searchByCity, setSearchByCity] = useState("");

    useEffect(() => {
        localStorage.clear();
        retrieveLocation();
    }, []);

    const onChangeSearch = e => {
        const searchCity = e.target.value;
        setSearchByCity(searchCity);
    };
    
    const retrieveLocation= () => {
        console.log(' on func at location')
        productFuncAPI.getProductByCategory('Location')
            .then(response => {
                console.log('Location List', response.data.productsByCategory);
                setLocationList( response.data.productsByCategory);
            })
            .catch(e => {
                console.log(e);
                throw e;
            });
    };
  
    // const setActiveLocation = (cardLocation, index) => {
    //     setCurrentCardLocation(cardLocation);
    //     setCurrentIndex(index);
    //     console.log('hi you clik on me ',index, cardLocation);
    // };


    const findByCity = () => {
        serviceLocation.findByCity(searchByCity)
            .then(response => {
                setLocationList(response.data);
                console.log('findByCity', response.data);
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
                    placeholder="Search by city name"
                    value={searchByCity}
                    onChange={onChangeSearch}
                />
                <div className="button-search">
                    <button
                        type="button"
                        onClick={findByCity}>Search</button>
                </div>
            </div>
            <h1 className="header-view-products"> Rental companies</h1>
            <div className="container-fluid d-flex justify-content-center">
                <ul className="row">
                    {LocationList &&    // onClick={() => setActiveLocation(place, index)}
                        LocationList.map((place, index) => (
                            <li className="col-md-4" key={index}>
                                <CardDisplayInfo company={place.companyName} img={place.imageCover} desc={place.description} 
                                address={place.address} phone={place.phone} path={Routes.viewLocation} lat={place.locationCoordinates[0]} lng={place.locationCoordinates[1]}/>
                            </li>
                        ))}
                </ul>
            </div>
        </div>

    )
};

export default Location;


