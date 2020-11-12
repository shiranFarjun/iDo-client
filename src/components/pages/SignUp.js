import React, { useState } from "react";
import './signUp.css'
import userFuncAPI from '../../api/userFuncAPI';
import Routes from '../../router/Routes'
import { useHistory } from 'react-router-dom'

const SignUp = () => {
    const initialUser = {
        fullName: '',
        email: '',
        password: '',
        passwordConfirm: ''
    };
    
    const [image, setImage] = useState({ preview: "", raw: "" });
    const [user, setUser] = useState(initialUser);
    const [idUser, setUserId] = useState('');
    let history = useHistory();

   
    const handleChange = e => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
    }

    const onSubmit = async (e) => {
        e.preventDefault();
        let data = {
            name: user.fullName,
            email: user.email,
            password: user.password,
            passwordConfirm: user.passwordConfirm,
            photo: 'no photo'
        }

        userFuncAPI.signUp(data)
            .then(response => {
                setUserId(response.data.data.user.id);
                history.push({
                    pathname: `${Routes.account}`,
                    customNameData: response.data.data.user.id,
                });
            })
            .catch(e => {
                console.log(e);
                throw e;
            });



    };
    // const handleChangeUpload = e => {
    //     if (e.target.files.length) {
    //         setImage({
    //             preview: URL.createObjectURL(e.target.files[0]),
    //             raw: e.target.files[0]
    //         });
    //     }
    // };
    const handleUpload = async e => {
        e.preventDefault();
        const formData = new FormData();
        console.log('image',formData);
        formData.append("image", image.raw);

        await fetch("YOUR_URL", {
            method: "POST",
            headers: {
                "Content-Type": "multipart/form-data"
            },
            body: formData
        });
    };


    return (
        <div className="form-container-sign" >
            <form className="signUp-form" onSubmit={onSubmit} >
                <div className="marg">
                    <label className="__label">Full name</label>
                    <input className="__input" type="text" name="fullName" onChange={handleChange} />

                </div>
                <div className="marg">
                    <label className="__label">Email adress</label>
                    <input className="__input" type='email' placeholder='you@example.com' name="email" onChange={handleChange} />
                </div>
                <div className="marg">
                    <label className="__label">Password</label>
                    <input className="__input" type='password' placeholder='••••••••' minLength='2' name="password" onChange={handleChange} />
                </div>
                <div className="marg">
                    <label className="__label">Password confirm</label>
                    <input className="__input" type='password' placeholder='••••••••' minLength='2' name="passwordConfirm" onChange={handleChange} />
                </div>
                <div className="marg">
                    <label className="upload-button">
                        {image.preview ? (
                            <img src={image.preview} alt="dummy" width="300" height="300" />
                        ) : (
                                <>
                                    <span className="fa-stack fa-2x mt-3 mb-2">
                                        <i className="fas fa-circle fa-stack-2x" />
                                        <i className="fas fa-store fa-stack-1x fa-inverse" />
                                    </span>
                                    <h5 className="text-center">Upload your photo</h5>
                                </>
                            )}
                    </label>
                    <input
                        type="file"
                        id="upload-button"
                        style={{ display: "none" }}
                        onChange={handleChange}
                    />
                    <br />
                    <button type="submit" className="upload-photo" onClick={handleUpload}>Upload photo</button>
                </div>

                <button type="submit" className="btn-submit-signUp">Submit</button>
            </form>
        </div>
    )
}
export default SignUp

