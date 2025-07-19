import React, { useState, useEffect } from 'react'
import './Price.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Card } from './Card'
import { Cardone } from './Cardone'
import { icons } from '../../../Constant/Icons/Icons'

export const Price = () => {

  useEffect(() => {
    AOS.init({
      offset: 300,
      duration: 1000,
    });
  }, []); // Run this effect only once when the component mounts

  const PriceCircle = ({ text, colWidth }) => (
    <div className={`col-md-${colWidth} col-lg-${colWidth} col-xl-${colWidth} col-xxl-${colWidth} p-0 ps-1`}>
      <div className="price_circle">
        {text}
      </div>
    </div>
  );

  const priceItems = [
    { text: 'Unlimited voice generation', colWidth: 2 },
    { text: 'Custom Pricing', colWidth: 2 },
    { text: '24/7 Dedicated Support', colWidth: 2 },
    { text: 'Dedicated Slack Channel', colWidth: 3 },
    { text: 'Unlimited Character Limit', colWidth: 3 },
  ];

  const secondpriceItems = [
    { text: 'Dedicated Slack channel', colWidth: 2 },
    { text: 'Whiteglove onboarding support', colWidth: 3 },
    { text: 'SCIM', colWidth: 1 },
    { text: 'Dedicated Slack Channel', colWidth: 3 },
    { text: 'Whiteglove onboarding support', colWidth: 3 },
  ];

  return (
    <section>
      <div className="container-fluid pt-5 pb-5 bg_landing">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className='price_style'>
                Pricing
              </div>
              <div className='upgrade_style'>
                <p style={{ width: "70%" }}>Upgrade your Resn8 account to PRO and unlock unlimited benefits to enhance your project</p>
              </div>
            </div>
          </div>
          <div className="row mt-5 justify-content-center">
            <div className="col-xxl-5 col-xl-6 col-lg-6 col-md-6" data-aos="fade-up">
              <Card />
            </div>
            <div className="col-xxl-5 col-xl-6 col-lg-6 col-md-6 ps-3 col2" data-aos="fade-down">
              <Cardone />
            </div>
          </div>
          <div className="row mt-5 justify-content-center">
            <div className="col-xxl-8" data-aos="fade-up">
              <div className="price_box">
                <div className="ps-5 pe-5">
                  <div className="enter_text pt-5">
                    Enterprise Plan
                  </div>
                  <div className="row mt-3">
                    <div className="col-md-7">
                      <div className="offer_text">
                        We offer custom plan solutions to fit your voice service needs. To get started on finding the right plan for your team, contact us today.
                      </div>
                    </div>
                    <div className="col-md-5 d-flex justify-content-end justify-content-center text-center">
                      <button className='contact_btn gap-2'>
                        {icons.MessageIcon}Contact Sales
                      </button>
                    </div>
                  </div>
                </div>
                <div className='row mt-5 m-0 slider'>
                  {priceItems.map((item, index) => (
                    <PriceCircle key={index} text={item.text} colWidth={item.colWidth} />
                  ))}
                </div>
                <div className='row mt-4 m-0 slider'>
                  {secondpriceItems.map((item, index) => (
                    <PriceCircle key={index} text={item.text} colWidth={item.colWidth} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}