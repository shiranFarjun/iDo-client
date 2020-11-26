import React, { useState, useEffect } from "react";
import userFuncAPI from '../../api/userFuncAPI';
import Routes from '../../router/Routes'
import { useHistory, Link } from 'react-router-dom'
import './myAccount.css'

const MyAccount = (props) => {
    
    const initialUser = {
        name: '',
        email: '',
    };
    // const [image, setImage] = useState({ preview: "", raw: "" });
    const [idUser, setUserId] = useState(props.location.customNameData);
    console.log(idUser);
    const [user, setUser] = useState(initialUser);
    let history = useHistory();

    const MyProductTo = {
        pathname: Routes.MyProduct,
        param1: idUser
    };
    const updatePassword = {
        pathname: Routes.updatePassword
    };

    useEffect(() => {
        getUserById();
    }, []);

    const getUserById = () => {
        userFuncAPI.getUserById(idUser)
            .then(response => {
                setUser(prevState => ({...prevState,
                    name: response.data.data.data.name,
                    email: response.data.data.data.email
                 }));
            }).catch(e => {
                console.log(e);
                throw e;
            });
    };

    const handleChange = e => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
    }

    const onSubmit = async (e) => {
        e.preventDefault();
        let data = {
            name: user.fullName,
            email: user.email,
            photo: 'no photo'
        }
        userFuncAPI.updateUserById(idUser, data)
            .then(response => {
                console.log('change email and name on submit at myAccount', response.data);

            }).catch(e => {
                console.log(e);
                throw e;
            });

    };

    const onLogoutClick = () => {
        setUserId(null);
        localStorage.clear();
        history.push({
            pathname: `${Routes.home}`,
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
    // const handleUpload = async e => {
    //     e.preventDefault();
    //     const formData = new FormData();
    //     formData.append("image", image.raw);

    //     await fetch("YOUR_URL", {
    //         method: "POST",
    //         headers: {
    //             "Content-Type": "multipart/form-data"
    //         },
    //         body: formData
    //     });
    // };


    return (
        <div className="container-account" >
            <div className="left-side">
                <ul>
                    <li><i className="fas fa-cog"></i> Settings
                        <Link to={Routes.account} className='nav-links' >

                        </Link>
                    </li>
                    <li><i className="fas fa-key"></i> Update Password
                    <Link to={updatePassword} className='nav-links' >

                    </Link>
                </li>
                    <li><i className="fas fa-briefcase"></i>  My product
                        <Link to={MyProductTo} className='nav-links'>

                        </Link>
                    </li>

                    <li><i className="fab fa-cc-visa"></i>   Billing
                        <Link to="#" className='nav-links' >
                        </Link>
                    </li>
                    <li><i className="fas fa-envelope-open-text"></i>  Messages
                        <Link to="#" className='nav-links' >
                        </Link>
                    </li>
                    <li><i className="far fa-question-circle"></i> Support
                        <Link to="#" className='nav-links' >
                        </Link>
                    </li>
                    <li onClick={onLogoutClick}><i className="fas fa-sign-out-alt"></i> Logout
                    <Link to="#" className='nav-links' >
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="right-side" >
                <h2>Your account settings</h2>
                <form className="form-account" onSubmit={onSubmit} >
                    <div className="marg">
                        <label className="__label">Full name</label>
                        <input className="__input" type="text" placeholder={user.name} name="fullName" onChange={handleChange} />

                    </div>
                    <div className="marg">
                        <label className="__label">Email address</label>
                        <input className="__input" type='email' placeholder={user.email} name="email" onChange={handleChange} />
                    </div>
                    <button type="submit" className="btn-submit">Submit</button>
                </form>
            </div>
        </div>

    )
}
export default MyAccount
