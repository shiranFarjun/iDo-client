import APILocation from '../apiLocation/APILocation';

const getAllLocations = async () => {
    return await APILocation.get(`/location`);
};

const getLocation = async (id) => {
    return await APILocation.get(`/location/${id}`);
};

const createLocation = async (data) => {
    return APILocation.post(`/location`, data);
};
const updateLocation = async (id, data) => {
    return APILocation.put(`/location/${id}`, data);
};

const removeLocation = async (id) => {
    return await APILocation.delete(`/location/${id}`);
};

const removeAllLocation = async () => {
    return await APILocation.delete(`/location`);
};

const findByCity = async ( name) => {
    return await APILocation.get(`/location/`, {
        params: { 'city': name }
    });
};

export default {
    getAllLocations ,
    getLocation,
    createLocation,
    updateLocation,
    removeLocation,
    removeAllLocation,
    findByCity
};