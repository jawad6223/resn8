import { useState } from 'react'
import './Signup.css'
import { useNavigate } from 'react-router-dom';
import Vector from '../../assets/images/Vectorline.png';
import { icons } from '../../Constant/Icons/Icons';
import { OTP } from '../OTP/OTP'
import { background } from '../../Constant/Background/Background'

export const Signup = () => {

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [isChecked, setIsChecked] = useState(false);
    const [selectedValue, setSelectedValue] = useState("");
    const navigate = useNavigate();

    const togglePasswordVisibility = () => {
        setShowPassword((prevState) => !prevState);
    };

    const toggleConfirmPasswordVisibility = () => {
        setShowConfirmPassword((prevState) => !prevState);
    };

    const handleCheckboxChange = (event) => {
        setIsChecked(event.target.checked);
    };

    const handleSelectChange = (event) => {
        setSelectedValue(event.target.value);
    };

    const login = () => {
        navigate('/')
    }

    const InputField = ({ label, type, placeholder, className, value, onChange, dropdownIcon, options }) => (
        <div>
            <label htmlFor="" className='label_style mt-3'>{label}</label>
            {type === 'select' ? (
                <div className="custom-dropdown">
                    <select className={`input_style ps-3 mt-2 ${className}`} style={{appearance: "none"}} value={value} onChange={onChange}>
                        <option value="" disabled hidden>{placeholder}</option>
                        {options.map((option) => (
                            <option key={option.value} value={option.value}>
                                {option.label}
                            </option>
                        ))}
                    </select>
                    {dropdownIcon && <div className="dropdown-icon">{icons.DropIcon}</div>}
                </div>
            ) : (
                <div className='position-relative'>
                    <input type={type} placeholder={placeholder} className={`input_style ps-3 mt-2 ${className}`} value={value} onChange={onChange} />
                    {dropdownIcon && (
                        <span className='toggle_input_password' onClick={onChange}>
                            {icons.EyeIcon}
                        </span>
                    )}
                </div>
            )}
        </div>
    );

    const renderPasswordInput = (label, placeholder, showPassword, togglePasswordVisibility) => (
        <div>
            <label htmlFor="" className='label_style mt-3'>{label}</label>
            <div className='position-relative'>
                <input type={showPassword ? 'text' : 'password'} placeholder={placeholder} className='input_style ps-3 mt-2' />
                <span className='toggle_eyeicon' onClick={togglePasswordVisibility}>
                    {showPassword ? icons.EyeIcon : icons.EyeslashIcon}
                </span>
            </div>
        </div>
    );

    return (
        <>
            <div className="container-fluid p-0" style={background}>
                <div className="container h-100">
                    <div className="row h-100 justify-content-center align-items-center">
                        <div className="col-xxl-4 col-xl-4 col-lg-5 col-md-7 col-sm-9 col-10 p-0 pt-4 pb-4">
                            <div className='sign_box ps-4 pe-4 pb-4'>
                                <div className='heading_signup'>Signup</div>
                                    <form action="">
                                        <InputField label="Profile Type" type="select" placeholder="Select" value={selectedValue}
                                            onChange={handleSelectChange}
                                            dropdownIcon
                                            options={[
                                                { value: 'option1', label: 'Admin Account' },
                                                { value: 'option2', label: 'User Account' },
                                            ]}
                                        />
                                        <InputField label="Name" type="text" placeholder="Enter your name" />
                                        <InputField label="Email" type="text" placeholder="Enter your email" />
                                        {renderPasswordInput('Password', 'Enter your password', showPassword, togglePasswordVisibility)}
                                        {renderPasswordInput('Confirm Password', 'Enter your confirm password', showConfirmPassword, toggleConfirmPasswordVisibility)}
                                    </form>
                                    <div className='d-flex mt-3'>
                                    <label className="checkbox-label">
                                        <input
                                            type="checkbox"
                                            checked={isChecked}
                                            onChange={handleCheckboxChange}
                                            style={{ display: 'none' }}
                                        />
                                        <span className="check-icon">
                                            {isChecked ? icons.CheckboxIcon : icons.UnCheckboxIcon}
                                        </span>
                                    </label>
                                        <span className='checkbox_styling ps-2'>Accept Terms and Conditions</span>
                                    </div>
                                    
                                    <OTP />
                                    <div className="row mt-3">
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
                                    <button className='facebook_button content_style mt-3'>
                                        <div className='facebook_icon'>{icons.FacebookIcon}</div>
                                        Sign in with facebook
                                    </button>
                                    <button className='google_button mt-3'>
                                        <div className='google_icon'>{icons.GoogleIcon}</div>
                                        Sign in with Google
                                    </button>
                                    <p className='project_name'>Resn8</p>
                                    <div className="row justify-content-center align-items-center mt-3">
                                        <div className='col-xxl-6 col-xl-7 col-lg-7 col-md-8 col-sm-8 col-12 text-center text-lg-end text-md-end text-sm-end p-0 pt-1 acount_styling'>
                                            Don't have an account?
                                        </div>
                                        <div className='col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-4 col-12 text-center text-sm-start p-0 mt-3 mt-sm-0 ps-2 account_s_styling' onClick={login}>
                                            Login now
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