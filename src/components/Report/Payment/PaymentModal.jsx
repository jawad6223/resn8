import React, { useState } from 'react'
import './PaymentModal.css'
import { Modal } from 'react-bootstrap';
import Close from '../../../assets/images/cross.png'
import Idcard from '../../../assets/images/id.png'
import { icons } from '../../../Constant/Icons/Icons';

export const PaymentModal = () => {
    const [showModal, setShowModal] = useState(false);
    const [selectedValue, setSelectedValue] = useState("");

    const handleSelectChange = (event) => {
        setSelectedValue(event.target.value);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    return (
        <>
            <button className='payment_btn' onClick={() => setShowModal(true)}>
                Save Payment
            </button>
            <Modal show={showModal} style={{ background: "rgba(37, 35, 44, 0.9)" }}>
                <div className='payment_modal'>
                    <div className="container-fluid paymentmodal_head">
                        <div className="container">
                            <div className="row">
                                <div className="col-xxl-10">
                                    <div className='payment_m_style'>
                                        Checkout
                                    </div>
                                </div>
                                <div className="col-xxl-2">
                                    <div className='d-flex justify-content-end'>
                                        <button className='close_clone_btn' onClick={handleCloseModal}>
                                            <img src={Close} alt="" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container-fluid paymentmodal_body pt-4 pb-3">
                        <div className="container">
                            <div className="row">
                                <div className="col-xxl-6">
                                    <div className='payment_b_style'>
                                        Payment
                                    </div>
                                    <input type="text" placeholder='Card Number' className='input_paymentmodal_payment mt-5' />
                                    <div className="row mt-4">
                                        <div className="col-xxl-6">
                                            <input type="text" placeholder='Expiry' className='input_paymentmodal_payment' />
                                        </div>
                                        <div className="col-xxl-6">
                                            <div className='position-relative'>
                                                <input type="text" placeholder='CVC' className='input_paymentmodal_payment' />
                                                <span className='icon_m_card'>
                                                    <img src={Idcard} alt="" />
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row mt-4">
                                        <div className="col-xxl-6">
                                            <div className="custom-dropdown">
                                                <select className='input_paymentmodal_dropdown'
                                                    value={selectedValue}
                                                    onChange={handleSelectChange}
                                                >
                                                    <option value="" disabled hidden>Country</option>
                                                    <option value="option1">India</option>
                                                    <option value="option2">China</option>
                                                    <option value="option2">Iran</option>
                                                </select>
                                                <div className="dropdown-icon">{icons.DropIcon}</div>
                                            </div>
                                        </div>
                                        <div className="col-xxl-6">
                                            <input type="text" placeholder='ZIP Code' className='input_paymentmodal_payment' />
                                        </div>
                                    </div>
                                    <div className="col-xxl-12 mt-4">
                                        <button className='paymentmodal_pay_btn'>
                                            Pay Now
                                        </button>
                                    </div>
                                </div>
                                <div className="col-xxl-6">
                                    <div className='right_side_payment'>
                                        <div className='ps-4'>
                                            <div className='payment_b_style'>
                                                Order Payment
                                            </div>
                                            <div className="row mt-5 m-0">
                                                <div className="col-xxl-6 p-0 summary_i_content">
                                                    Gender
                                                </div>
                                                <div className="col-xxl-6 p-0 summary_v_content">
                                                    Adult - Female
                                                </div>
                                            </div>
                                            <div className='summary_line mt-3' />
                                            <div className="row mt-3 m-0">
                                                <div className="col-xxl-6 p-0 summary_i_content">
                                                    Accent
                                                </div>
                                                <div className="col-xxl-6 p-0 summary_v_content">
                                                    English-Native
                                                </div>
                                            </div>
                                            <div className='summary_line mt-3' />
                                            <div className="row mt-3 m-0">
                                                <div className="col-xxl-6 p-0 summary_i_content">
                                                    Tone
                                                </div>
                                                <div className="col-xxl-6 p-0 summary_v_content">
                                                    Friendly
                                                </div>
                                            </div>
                                            <div className='summary_line mt-3' />
                                            <div className="row mt-3 m-0">
                                                <div className="col-xxl-6 p-0 summary_i_content">
                                                    Purpose
                                                </div>
                                                <div className="col-xxl-6 p-0 summary_v_content">
                                                    E-learning
                                                </div>
                                            </div>
                                            <div className='summary_line mt-3' />
                                            <div className="row mt-3 m-0">
                                                <div className="col-xxl-6 p-0 pt-2 summary_i_content">
                                                    Total
                                                </div>
                                                <div className="col-xxl-6 p-0 summary_amount_content">
                                                    $180
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Modal>
        </>
    )
}