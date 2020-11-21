import baseApi from './baseApi';

const signUp = async (data) => {
    return baseApi.post(`/users/signup`, data);
};
const login = async (data) => {
    return baseApi.post(`/users/login`, data);
};
const getAllUsers = async () => {
    return await baseApi.get(`/users`);
};
const getUserById = async (id) => {
    return await baseApi.get(`/users/${id}`);
};
const getCurrentUser = async () => {                  //user need before login to app
    return await baseApi.get(`users/me`);
};
const updateUserById = async (id, data) => {
    return baseApi.patch(`/users/${id}`, data);
};
const updateCurrentUser = async () => {
    return await baseApi.patch(`/users/me`);
};
const deleteCurrentUser = async () => {
    return await baseApi.delete(`/users/me`);
};
const removeUserById = async (id) => {
    return await baseApi.delete(`/users/${id}`);
};
const removeAllUses = async (idCategory) => {
    return await baseApi.delete(`/${idCategory}/cards-suppliers`);
};



///////  Password /////
const forgotPassword = async (email) => {
    return await baseApi.post(`/users/forgotPassword`, email);
};

const resetPassword = async (token, data) => {
    return await baseApi.patch(`/users/resetPassword/${token}`, data);
};

const updateMyPassword = async (data,token) => {
    return await baseApi.patch(`/users/updateMyPassword`, data, {
        headers: {
            Authorization: "Bearer " + token
        }
    });
};



export default {
    signUp,
    login,
    getAllUsers,
    getUserById,
    getCurrentUser,
    updateUserById,
    deleteCurrentUser,
    removeUserById,
    removeAllUses,
    updateCurrentUser,
    forgotPassword,
    resetPassword,
    updateMyPassword
};