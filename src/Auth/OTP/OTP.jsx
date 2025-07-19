import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import './OTP.css'
import { Modal } from 'react-bootstrap';
import { icons } from '../../Constant/Icons/Icons'
import Closebtn from '../../assets/images/x.png'

export const OTP = () => {
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <button className='Sign_button_style content_style mt-3' onClick={() => setShowModal(true)}>
        Register
      </button>
      <Modal show={showModal} style={{ background: "rgba(11, 2, 41, 0.9)" }}>
        <div className="modal_forgot pb-3 ps-3 pe-3 pt-3">
          <div className='d-flex gap-5'>
            <div className="forgetP_styling">
              OTP Verification
            </div>
            <button className='close_clone_btn' onClick={handleCloseModal}>
              <img src={Closebtn} alt="" />
            </button>
          </div>
          <p className="forget_content pt-2">
            Enter the 6 digit code sent to <br /> your phone at +1 234 56789
          </p>
          <form action="">
            <input type="text" placeholder='Enter code' className='input_style ps-3 mt-3' />
          </form>
          <p className="forget_content pt-2">
            Didn't receive the OTP? <u style={{ fontWeight: 'bold' }}>Resend OTP</u>
          </p>
          <button className='Sign_button_style content_style mt-4' onClick={() => navigate('/landing')}>
            Confirm
          </button>
        </div>
      </Modal>
    </>
  );
};