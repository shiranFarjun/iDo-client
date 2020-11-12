import suppliersAPI from './suppliersAPI';

const getAll = async (idCategory) => {
    return await suppliersAPI.get(`/${idCategory}/cards-suppliers`);
};

const get = async (idCategory, idChild) => {
    return await suppliersAPI.get(`/${idCategory}/cards-suppliers/${idChild}`);
};

const create = async (idCategory, data) => {
    return suppliersAPI.post(`/${idCategory}/cards-suppliers`, data);
};
const update = async (idCategory, idChild, data) => {
    return suppliersAPI.put(`/${idCategory}/cards-suppliers/${idChild}`, data);
};

const remove = async (idCategory, idChild) => {
    return await suppliersAPI.delete(`/${idCategory}/cards-suppliers/${idChild}`);
};

const removeAll = async (idCategory) => {
    return await suppliersAPI.delete(`/${idCategory}/cards-suppliers`);
};

const findByCompany = async (idCategory, name) => {
    return await suppliersAPI.get(`/${idCategory}/cards-suppliers/`, {
        params: { 'nameCompany': name }
    });
};

export default {
    getAll,
    get,
    create,
    update,
    remove,
    removeAll,
    findByCompany
};