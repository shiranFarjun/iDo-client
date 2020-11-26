import React, { useState ,useEffect} from "react";
import './login.css'
import { useHistory } from 'react-router-dom'
import userFuncAPI from '../../api/userFuncAPI';
import Routes from '../../router/Routes'



const Login = () => {
    const init = {
        email: '',
        password: ''

    };
    const [token,setToken]=useState('')
    const [userLogin, setUserLogin] = useState(init);
    let history = useHistory();


    useEffect(() => {
        localStorage.setItem('token',token);
    }, [token]);
   
    const handleChange = e => {
        const { name, value } = e.target;
        setUserLogin({ ...userLogin, [name]: value });
    }

    const onSubmit = async (e) => {
        e.preventDefault();
        let data = {
            email: userLogin.email,
            password: userLogin.password
        }

        userFuncAPI.login(data)
            .then(response => {
                setToken(response.data.token);
                console.log(response.data.data.user.id);
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

    return (
        <div className="wrap">
            <div className="form-container">
                <div className="login-form" >
                    <h2> Log into your account</h2>
                    <form className="form__input" onSubmit={onSubmit} >

                        <label className="form__label">Email address</label>
                        <input className="form__input" type='email' placeholder='you@example.com' name="email" onChange={handleChange} />

                        <label className="form__label">Password</label>
                        <input className="form__input" type='password' placeholder='••••••••' minLength='8' name="password" onChange={handleChange} />


                        <button type="submit" className="btn-submit-login">Login</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default Login

