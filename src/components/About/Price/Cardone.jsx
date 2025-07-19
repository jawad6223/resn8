import React, { useState } from 'react'
import { icons } from '../../../Constant/Icons/Icons'

export const Cardone = () => {

    const [toggle, setToggle] = useState('monthly');

    const handleToggle = (value) => {
        setToggle(value);
    };

    const renderFee = () => {
        if (toggle === 'monthly') {
            return '$24.99 per user/month';
        } else {
            return '$299.88 per user/annual';
        }
    };

    const renderFeatures = () => {
        const monthlyFeatures = [
            'Ability to clone your voice style',
            'Higher character limit',
            'Access to more voice options',
            '24/7 support',
        ];

        const annuallyFeatures = [
            'Everything in PRO Talent plus...',
            'Unlimited Saved Profiles',
            'Unlimited Voice Generation',
            'Unlimited Project Queues',
            'Unlimited Downloads',
            'Unlimited Character Limit',
            'Unlimited Project Revisions',
            '24/7 Support',
        ];

        const features = toggle === 'monthly' ? monthlyFeatures : annuallyFeatures;

        return (
            <div className='d-flex justify-content-center mt-5'>
                <div>
                    {features.map((feature, index) => (
                        <div key={index}>
                            {index === 0 && toggle === 'annually' ? (
                                <span className='text_styling mt-2 ps-2'>{feature}</span>
                            ) : (
                                <>
                                    <div className='tick_icon mt-n2'>{icons.CheckmarkIcon}</div>
                                    <span className='text_styling mt-2 ps-2'>{feature}</span>
                                </>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        );
    };

    return (
        <>
            <div className="card card_priceone">
                <div className="card-body mt-5 ms-4 me-4 p-0 position-relative">
                    <div className='pro_style'>For Pro Buyers</div>
                    <div className="row justify-content-center m-0 mt-2">
                        <div className="col-xxl-9 col-xl-9 col-lg-10 col-md-12 col-sm-9 col-12 text-center p-0">
                            <div className='per_style'>
                            {renderFee()}
                            </div>
                        </div>
                        <div className="col-2 p-0 pt-2">
                            <button className='per_btn'>-20%</button>
                        </div>
                    </div>
                    <div className="row justify-content-center m-0">
                        <div className="col-1 p-0 mt-3 d-flex justify-content-end">
                            <div className='grp_icon'>{icons.PeoplegroupIcon}</div>
                        </div>
                        <div className='col-xxl-4 col-xl-4 col-lg-5 col-md-7 col-sm-4 col-6 p-0 ps-2'>
                            <div className='voice_p_style mt-4'>
                                Best for agencies
                            </div>
                        </div>
                    </div>
                    <div className="row mt-3 justify-content-center mt-4 m-0">
                        <div className="col-xxl-3 col-xl-3 col-lg-2 col-md-1 col-sm-2 col-2 p-0">
                            <div className='line_p_style mt-3'></div>
                        </div>
                        <div className="col-xxl-6 col-xl-6 col-lg-8 col-md-10 col-sm-7 col-7">
                            <label className="switch">
                                <input type="checkbox" />
                                <div className="sliders">
                                    <span className='label_text' onClick={() => handleToggle('monthly')}>Monthly</span>
                                    <span className='label_text' onClick={() => handleToggle('annually')}>Annually</span>
                                </div>
                            </label>
                        </div>
                        <div className="col-xxl-3 col-xl-3 col-lg-2 col-md-1 col-sm-2 col-2 p-0">
                            <div className='line_p_style mt-3'></div>
                        </div>
                    </div>

                    {renderFeatures()}
                    <div className='d-flex justify-content-center align-item-center'>
                        <button className='pro_b_btn position-absolute'>
                            Became a Pro Buyer
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}
