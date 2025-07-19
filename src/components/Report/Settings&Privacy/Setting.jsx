import React, { useState } from 'react'
import './Setting.css'

export const Setting = () => {

    const InputField = ({ label, type, placeholder, className, mt = 2 }) => (
        <div className={`col-md-6 mt-${mt}`}>
            <label className={`label_style ${label === "Email" || label === "Company" ? label : ""}`}>
                {label}
            </label>
            <input type={type} placeholder={`Enter Your ${label}`} className={`input_style ps-3 mt-2 ${className}`} />
        </div>
    );

    return (
        <section>
            <div className="container-fluid dashboard_bg setting pb-3">
                <div className="container pt-4">
                    <div className="row">
                        <div className="col-md-12">
                            <div className='find_browse_style'>
                                Change Password
                            </div>
                        </div>
                    </div>
                    <div className="row mt-4">
                        <div className="col-md-12">
                            <div className="order_box pb-5">
                                <div className='ps-3 pe-3 pt-4'>
                                    <div className="row">
                                        <InputField label="Old Password" type="password" />
                                        <InputField label="New Password" type="password" />
                                    </div>
                                    <div className="row mt-3">
                                        <InputField label="Confirm" type="password" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-4">
                        <div className="col-md-12">
                            <div className='find_browse_style'>
                                Personal Information
                            </div>
                        </div>
                    </div>
                    <div className="row mt-4">
                        <div className="col-md-12">
                            <div className="order_box pb-5">
                                <div className='ps-3 pe-3 pt-4'>
                                    <div className="row">
                                        <InputField label="Name" type="text" />
                                        <InputField label="Email" type="text" />
                                    </div>

                                    <div className="row mt-3">
                                        <InputField label="Phone Number" type="text" />
                                        <InputField label="Company Name" type="text" />
                                    </div>

                                    <div className="row mt-3">
                                        <InputField label="Company Role" type="text" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='d-flex justify-content-end mt-5'>
                        <button className='payment_btn'>
                            Save Changes
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}