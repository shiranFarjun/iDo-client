import React, { useEffect } from 'react';
import mapboxgl from 'mapbox-gl';

import '../../app.css'

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN;

const ViewLocation = (props) => {

    // console.log('props.location.param1, props.location.param2+3', props.location.param1, props.location.param2, props.location.param3);

    useEffect(() => {
        const obj =[ {
            "city":props.location.param4,
            "nameCompany": props.location.param2,
            "phone": props.location.param3,
            "coordinates":props.location.param1
        }];
        // const locations = [
        //     {
        //         "_id": "5c88fa8cf4afda39709c2959",
        //         "description": "Lummus Park Beach",
        //         "type": "Point",
        //         "coordinates": [34.870766, 32.184448],
        //         "day": 1
        //     },
        //     {
        //         "_id": "5c88fa8cf4afda39709c2958",
        //         "description": "Islamorada",
        //         "type": "Point",
        //         "coordinates": [34.855499, 32.109333],
        //         "day": 2
        //     },
        //     {
        //         "_id": "5c88fa8cf4afda39709c2957",
        //         "description": "Sombrero Beach",
        //         "type": "Point",
        //         "coordinates": [34.809322, 31.894756],
        //         "day": 3
        //     }
        // ]
        const map = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/mapbox/streets-v11',
            // center: [-118.113491, 34.111745],
            zoom: -10,
            // interactive: false
        });

        const bounds = new mapboxgl.LngLatBounds();

        obj.forEach(loc => {
            // Create marker
            const el = document.createElement('div');
            el.className = 'marker';

            // Add marker
            new mapboxgl.Marker({
                element: el,
                anchor: 'bottom'
            })
                .setLngLat(loc.coordinates)
                .addTo(map);

            // Add popup
            new mapboxgl.Popup({
                offset: 20
            })
                .setLngLat(loc.coordinates)
                .setHTML(`<p> ${loc.city} <br>${loc.nameCompany} <br> ${loc.phone}</p>`)
                .addTo(map);

            // Extend map bounds to include current location
            bounds.extend(loc.coordinates);
        });

        map.fitBounds(bounds, {
            padding: {
                top: 150,
                bottom: 150,
                left: 10,
                right: 10
            }
        });

    }, []);

    return (
        <div>
            <div id="map" className="map-container" />
        </div>

    )

};

export default ViewLocation;








