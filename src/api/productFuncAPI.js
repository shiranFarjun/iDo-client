import baseApi from './baseApi';

const getAllProduct = async () => {
    return await baseApi.get(`/product/`);
};
const getProductById = async (id) => {
    return await baseApi.get(`/product/${id}`);
};
const getProductByIdUser = async (id) => {
    return await baseApi.get(`/product/getByUserId/${id}`);
};


const getProductByCategory = async (category) => {                  //user need before login to app
    return await baseApi.get(`/product/getByCategory?category=${category}`);
};


const updateProductById = async (id, data, token) => {
    console.log('in updateProductById');
    return baseApi.patch(`/product/${id}`, data, {
        headers: {
            Authorization: "Bearer " + token
        }
    });
};
const createNewProduct = async (data, token) => {
    return await baseApi.post(`/product/`, data, {
        headers: {
            Authorization: "Bearer " + token
        }
    });
};

const removeProductByIdAuth = async (id, token) => {
    return await baseApi.delete(`/product/${id}`, {
        headers: {
            Authorization: "Bearer " + token
        }
    });
};

export default {
    createNewProduct,
    getAllProduct,
    getProductByIdUser,
    getProductById,
    getProductByCategory,
    updateProductById,
    removeProductByIdAuth
}