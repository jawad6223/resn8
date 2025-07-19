import { useState } from 'react'
import './Login.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { useNavigate } from 'react-router-dom';
import { ForgetPassword } from '../ForgetPassword'
import Vector from '../../assets/images/Vectorline.png';
import { background } from '../../Constant/Background/Background'
import { icons } from '../../Constant/Icons/Icons';

export const Login = () => {

    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const togglePasswordVisibility = () => {
        setShowPassword((prevState) => !prevState);
    };

    const signin = () => {
        navigate('/signup');
        console.log(email, password);
    }

    return (
        <>
            <div className="container-fluid p-0 bg_login">
                <div className="container h-100">
                    <div className="row h-100 justify-content-center align-items-center">
                        <div className='col-xxl-4 col-xl-4 col-lg-5 col-md-7 col-sm-9 col-10 p-0'>
                            <div className='login_box ps-4 pe-4 pb-4'>
                                <div className='heading_login'>Resn8</div>
                                <form action="">
                                    <label htmlFor="" className='label_style'>Email</label>
                                    <input
                                        type="text"
                                        placeholder='Enter your email'
                                        className='input_style mt-2 ps-3'
                                        value={email}
                                        onChange={handleEmailChange}
                                    />
                                    <label htmlFor="" className='label_style mt-3'>Password</label>
                                    <div className='position-relative'>
                                        <input
                                            type={showPassword ? 'text' : 'password'}
                                            placeholder='Enter your password'
                                            className='input_style mt-2 ps-3'
                                            value={password}
                                            onChange={handlePasswordChange}
                                        />
                                        <span
                                            className='toggle_eyeicon'
                                            onClick={togglePasswordVisibility}
                                        >
                                            {showPassword ? icons.EyeIcon : icons.EyeslashIcon}
                                        </span>
                                    </div>
                                </form>
                                <ForgetPassword />
                                <button className='Sign_button_style content_style mt-3' onClick={signin}>
                                    Sign in
                                </button>
                                <div className="row mt-2">
                                    <div className='col-xxl-5 col-xl-5 col-lg-5 col-md-5 col-sm-5 col-5'>
                                        <img src={Vector} alt="" style={{ width: "100%" }} />
                                    </div>
                                    <div className='col-xxl-2 col-xl-2 col-lg-2 col-md-2 col-sm-2 col-2 content_stylish d-flex justify-content-center'>
                                        or
                                    </div>
                                    <div className='col-xxl-5 col-xl-5 col-lg-5 col-md-5 col-sm-5 col-5'>
                                        <img src={Vector} alt="" style={{ width: "100%" }} />
                                    </div>
                                </div>
                                <button className='facebook_button content_style mt-2'>
                                    <div className='facebook_icon'>{icons.FacebookIcon}</div>
                                    Sign in with facebook
                                </button>
                                <button className='google_button mt-3'>
                                    <div className='google_icon'>{icons.GoogleIcon}</div>
                                    Sign in with Google
                                </button>
                                <div className="row justify-content-center align-items-center mt-3">
                                    <div className='col-xxl-6 col-xl-7 col-lg-7 col-md-8 col-sm-8 col-12 text-center text-lg-end text-md-end text-sm-end p-0 pt-1 acount_styling'>
                                        Don't have an account?
                                    </div>
                                    <div className='col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-4 col-12 text-center text-sm-start p-0 mt-3 mt-sm-0 ps-2 account_s_styling' onClick={() => navigate('/signup')}>
                                        Sign up now
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}