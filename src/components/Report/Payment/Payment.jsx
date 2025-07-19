import React, { useState } from 'react'
import './Payment.css'
import { PaymentModal } from './PaymentModal';
import { icons } from '../../../Constant/Icons/Icons';
import Cardno from '../../../assets/images/cards.png'
import Idcard from '../../../assets/images/id.png'

export const Payment = () => {

    const [selectedValue, setSelectedValue] = useState("");

    const handleSelectChange = (event) => {
        setSelectedValue(event.target.value);
    };

    return (
        <section>
            <div className="container-fluid dashboard_payment_bg payment">
                <div className="container pt-4">
                    <div className="row">
                        <div className="col-md-12">
                            <div className='find_browse_style'>
                                Add Payment
                            </div>
                        </div>
                    </div>
                    <div className="row mt-4">
                        <div className="col-md-12">
                            <div className="order_box pb-5">
                                <div className='ps-3 pe-3 pt-4'>
                                    <label className='label_style'>
                                        Account Name
                                    </label>
                                    <div className='position-relative'>
                                        <input type="text" placeholder='1234 1234 1234 1234' className='input_style ps-3 mt-2' />
                                        <span className='icon_card'>
                                            <img src={Cardno} alt="" />
                                        </span>
                                    </div>
                                    <div className="row mt-3">
                                        <div className="col-md-6">
                                            <label className='label_style'>
                                                Account Number
                                            </label>
                                            <input type="text" placeholder='MM / YY' className='input_style ps-3 mt-2' />
                                        </div>
                                        <div className="col-md-6">
                                            <label className='label_style'>
                                                CVC
                                            </label>
                                            <div className='position-relative'>
                                                <input type="text" placeholder='CVC' className='input_style ps-3 mt-2' />
                                                <span className='icon_card'>
                                                    <img src={Idcard} alt="" />
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row mt-3">
                                        <div className="col-md-6">
                                            <label className='label_style'>
                                                Routing Number
                                            </label>
                                            <div className="custom-dropdown">
                                                <select className='input_style ps-3 mt-2'
                                                    style={{appearance: "none"}}
                                                    value={selectedValue}
                                                    onChange={handleSelectChange}
                                                >
                                                    <option value="" disabled hidden>Select</option>
                                                    <option value="option1">India</option>
                                                    <option value="option2">China</option>
                                                    <option value="option2">Iran</option>
                                                </select>
                                                <div className="dropdown-icon">{icons.DropIcon}</div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <label className='label_style'>
                                                ZIP
                                            </label>
                                            <input type="text" placeholder='01234' className='input_style ps-3 mt-2' />
                                        </div>
                                    </div>
                                    <div className='d-flex justify-content-end mt-4'>
                                        <PaymentModal />
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