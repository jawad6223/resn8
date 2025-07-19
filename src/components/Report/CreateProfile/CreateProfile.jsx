import React, { useState } from 'react'
import './CreateProfile.css'
import { icons } from '../../../Constant/Icons/Icons';

export const CreateProfile = () => {

    const [selectedValues, setSelectedValues] = useState({
        accent: '',
        gender: '',
        age: '',
        language: '',
        tone: '',
        purpose: '',
    });

    const handleSelectChange = (event, field) => {
        setSelectedValues((prevValues) => ({
            ...prevValues,
            [field]: event.target.value
        }));
    };

    const CommonInput = ({ label, type, placeholder, value, onChange, icon, readOnly }) => (
        <>
            <label className={`label_style ${label.replace(/\s+/g, '')}`}>{label}</label>
            <div className='custom-dropdown'>
                <input type={type} placeholder={placeholder} className="input_style ps-3 mt-2" value={value} onChange={onChange}  readOnly={readOnly} style={readOnly ? { cursor: 'pointer' } : {}} />
                {icon && <div className="dropdown-icon">{icon}</div>}
            </div>
        </>
    );

    const CommonDropdown = ({ label, options, value, onChange, icon }) => (
        <>
            <label className={`label_style ${label.replace(/\s+/g, '')}`}>{label}</label>
            <div className="custom-dropdown">
                <select className="input_style ps-3 mt-2" style={{appearance: "none"}} value={value} onChange={(e) => onChange(e)}>
                    <option value="" disabled hidden>Select Your {label}</option>
                    {options.map((option) => (
                        <option key={option.value} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </select>
                {icon && <div className="dropdown-icon">{icon}</div>}
            </div>
        </>
    );




    return (
        <section>
            <div className="container-fluid dashboard_bg create_profile pb-3">
                <div className="container pt-4">
                    <div className="row">
                        <div className="col-md-10">
                            <div className='find_browse_style'>
                                Account Information
                            </div>
                        </div>
                        <div className="col-md-2">
                            <div className='d-flex justify-content-end'>
                                <button className='edit_btn'>
                                    Edit
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="col-md-12">
                            <div className="order_box pb-5">
                                <div className='ps-3 pe-3 pt-4'>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <CommonInput label="Name" type="text" placeholder="Enter your Name" />
                                        </div>
                                        <div className="col-md-6">
                                            <CommonDropdown
                                                label="Accent"
                                                options={[{ value: "Primary", label: "Primary" }, { value: "Secondary", label: "Secondary" }]}
                                                value={selectedValues.accent}
                                                onChange={(e) => handleSelectChange(e, 'accent')}
                                                icon={icons.DropIcon}
                                            />
                                        </div>
                                    </div>
                                    <div className="row mt-3">
                                        <div className="col-md-6">
                                            <CommonInput label="Price" type="text" placeholder="Enter your Price" />
                                        </div>
                                        <div className="col-md-6">
                                            <CommonDropdown
                                                label="Gender"
                                                options={[{ value: "Male", label: "Male" }, { value: "Female", label: "Female" }]}
                                                value={selectedValues.gender}
                                                onChange={(e) => handleSelectChange(e, 'gender')}
                                                icon={icons.DropIcon}
                                            />
                                        </div>
                                    </div>
                                    <div className="row mt-3">
                                        <div className="col-md-6">
                                            <CommonDropdown
                                                label="Age Range"
                                                options={[{ value: "Infant", label: "Infant" }, { value: "Teen", label: "Teen" }, { value: "Adult", label: "Adult" }]}
                                                value={selectedValues.age}
                                                onChange={(e) => handleSelectChange(e, 'age')}
                                                icon={icons.DropIcon}
                                            />
                                        </div>
                                        <div className="col-md-6">
                                            <CommonInput label="Upload Voice Sample" type="text" placeholder="Upload Your Voice Sample" icon={icons.AttachIcon} readOnly/>
                                        </div>
                                    </div>
                                    <div className="row mt-3">
                                        <div className="col-md-6">
                                            <CommonDropdown
                                                label="Language"
                                                options={[{ value: "English", label: "English" }, { value: "French", label: "French" }]}
                                                value={selectedValues.language}
                                                onChange={(e) => handleSelectChange(e, 'language')}
                                                icon={icons.DropIcon}
                                            />
                                        </div>
                                        <div className="col-md-6">
                                            <CommonDropdown
                                                label="Tone"
                                                options={[{ value: "Casual", label: "Casual" }, { value: "Formal", label: "Formal" }, { value: "Friendly", label: "Friendly" }]}
                                                value={selectedValues.tone}
                                                onChange={(e) => handleSelectChange(e, 'tone')}
                                                icon={icons.DropIcon}
                                            />
                                        </div>
                                    </div>
                                    <div className="row mt-3">
                                        <div className="col-md-6">
                                            <CommonDropdown
                                                label="Purpose"
                                                options={[{ value: "Business", label: "Business" }, { value: "Social", label: "Social" }]}
                                                value={selectedValues.purpose}
                                                onChange={(e) => handleSelectChange(e, 'purpose')}
                                                icon={icons.DropIcon}
                                            />
                                        </div>
                                        <div className="col-md-6">
                                            <CommonInput label="Profile Picture" type="text" placeholder="Upload Your Photo" icon={icons.PhotoCameraIcon} readOnly/>
                                        </div>
                                    </div>
                                    <div className="row mt-3">
                                        <div className="col-md-6">
                                            <CommonInput label="Instagram" type="text" placeholder="Enter Your URL" />
                                        </div>
                                        <div className="col-md-6">
                                            <CommonInput label="Youtube" type="text" placeholder="Enter Your URL" />
                                        </div>
                                    </div>
                                    <div className="row mt-3">
                                        <div className="col-md-6">
                                            <CommonInput label="Twitter" type="text" placeholder="Enter Your URL" />
                                        </div>
                                        <div className="col-md-6">
                                            <CommonInput label="Tiktok" type="text" placeholder="Enter Your URL" />
                                        </div>
                                    </div>
                                    <div className='d-flex justify-content-end mt-5'>
                                        <button className='payment_btn'>
                                            Save Changes
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}