import React from 'react'
import './Footer.css'
import line from '../assets/images/Line_one.png'
import { icons } from '../Constant/Icons/Icons'

export const Footer = () => {

  const handleFacebookClick = () => {
    // Handle click logic here (e.g., open the URL in a new tab)
    window.open('https://www.facebook.com/', '_blank');
  };

  const handleTwitterClick = () => {
    // Handle click logic here (e.g., open the URL in a new tab)
    window.open('https://twitter.com/', '_blank');
  };

  const handleInstagramClick = () => {
    // Handle click logic here (e.g., open the URL in a new tab)
    window.open('https://www.instagram.com/', '_blank');

  };

  const footerData = [
    {
      title: 'Subscribe to our newsletter',
      items: [
        <div key="lineStyle" className="line_style">
          <input key="emailInput" type="text" placeholder="Email address" className="footer_input" />
          <div className="curve_style">
            <div className='curve_icon'>{icons.ArrowforwardIcon}</div>
          </div>
        </div>,
        <div className='d-flex gap-5 pt-2'>
          <div className='multiple_icons' onClick={handleFacebookClick}>{icons.FacebookfIcon}</div>
          <div className='multiple_icons' onClick={handleTwitterClick}>{icons.TwitterIcon}</div>
          <div className='multiple_icons' onClick={handleInstagramClick}>{icons.InstagramIcon}</div>
        </div>
      ]
    },
    {
      title: 'For Clients',
      items: [
        'Voice Marketplace',
        <div className='for_talent mt-5'>For Talent</div>,
        <div className='voice_style mt-3'>How to Find Work</div>,
        <div className='voice_style mt-3'>Trust, Safety & Security</div>,
      ],
    },
    { title: 'Resources', items: ['Help & Support'] },
    {
      title: 'Company',
      items: [
        <div className='d-flex'>
          <div style={{ width: "50%" }}>
            <p>About Us</p>
            <p>Leadership</p>
            <p>Investor Relations</p>
            <p>Careers</p>
            <p>Press</p>
          </div>
          <div style={{ width: "50%" }}>
            <p>Contact Us</p>
            <p>Modern Slavery</p>
            <p>Terms & Condition</p>
            <p>Privacy Policy</p>
          </div>
        </div>
      ]
    }
  ];

  return (
    <section>
      <div className="container-fluid footer_BG pb-5">
        <div className="container">
          <div className="row pt-4">
            <div className="col-md-12">
              <div className='project_style'>
                Resn8
              </div>
              <div className='project_detail'>
                Resn8 increases voice-over project productivity by creating new opportunities for buyers and sellers to connect, <br />
                collaborate, and leverage innovative ai- technology all on a single, easy-to-use, platform.
              </div>
              <div className='mt-5'>
                <img src={line} alt="" style={{ width: "100%" }} />
              </div>
            </div>
          </div>
          <div className="row mt-5">
            {footerData.map((section, index) => (
              <div className="col-lg-3 col-md-6 mb-4 p-0 text-center text-center text-sm-start" key={index}>
                <div className='for_talent'>
                  {section.title}
                </div>
                {section.items.map((item, itemIndex) => (
                  <div className="voice_style mt-3" key={itemIndex}>
                    {item}
                  </div>
                ))}
              </div>
            ))}
          </div>
          <div className='mt-5'>
            <img src={line} alt="" style={{ width: "100%" }} />
          </div>
          <div className='project_detail mt-4'>
            Copyright <div className='copyright_icon ps-1 pe-1'>{icons.CopyrightIcon}</div>2024. All rights reserved
          </div>
        </div>
      </div>
    </section>
  )
}