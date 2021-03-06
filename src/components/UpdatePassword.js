import React, { useState } from 'react';
import '../components/pages/updatePassword.css'
import userFuncAPI from '../api/userFuncAPI'
import { useHistory } from 'react-router-dom'
import Routes from '../router/Routes'

const UpdatePassword = () => {
    const initialPassword = {
        passwordCurrent: '',
        password: '',
        passwordConfirm: ' '
    };
    const [password, setPassword] = useState(initialPassword);
    const userToken = localStorage.getItem('token');
    let history = useHistory();

    const handleChange = e => {
        const { name, value } = e.target;
        setPassword({ ...password, [name]: value });
    }

    const onSubmit = async (e) => {
        e.preventDefault();

        let data = {
            passwordCurrent: password.passwordCurrent,
            password: password.password,
            passwordConfirm: password.passwordConfirm
        }
        userFuncAPI.updateMyPassword(data, userToken)
            .then(response => {
                console.log('update password', response.data);
            }).catch(e => {
                console.log(e);
                throw e;
            });

    }
    const myAccountPage = () => {
        history.push({
            pathname: `${Routes.account}`,
        });
    }

    return (
        <div className="container-update" >
        <div className="fas fa-undo-alt back-page" onClick={myAccountPage}></div>
            <div className="right-side" >
                <h2>Update Password</h2>
                <form className="form-update" onSubmit={onSubmit} >
                    <div className="marg">
                        <label className="update-label">Current password</label>
                        <input className="update-input" type='password' placeholder='••••••••' name="passwordCurrent" onChange={handleChange} />
                    </div>
                    <div className="marg">
                        <label className="update-label">Password</label>
                        <input className="update-input" type='password' name="password" onChange={handleChange} />
                    </div>
                    <div className="marg">
                        <label className="update-label">Confirm password</label>
                        <input className="update-input" type='password' name="passwordConfirm" onChange={handleChange} />
                    </div>
                    <button type="submit" className="btn-submit">Submit</button>
                </form>
            </div>
        </div>
    )
}
export default UpdatePassword;