import { useState, useEffect, useContext } from "react"
import './ForgetPassword.css'
import { Modal } from 'react-bootstrap';
import { icons } from "../../Constant/Icons/Icons";
import Closebtn from '../../assets/images/x.png'

export const ForgetPassword = () => {

  const [showModal, setShowModal] = useState(false);

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <div className="d-flex justify-content-end pt-3">
        <div className='content_style' style={{ cursor: "pointer" }} onClick={() => setShowModal(true)}>
          Forgot Password
        </div>
      </div>
      <Modal show={showModal} style={{ background: "rgba(11, 2, 41, 0.9)" }}>
        <div className="modal_forgot pb-3 ps-3 pe-3">
          <div className="d-flex pt-3 gap-5">
            <div className="forgetP_styling">
              Forgot Password?
            </div>
            <button className='close_clone_btn' onClick={handleCloseModal}>
              <img src={Closebtn} alt="" />
            </button>
          </div>
          <p className="forget_content pt-2">Enter the email associated <br /> with your account</p>
          <form action="">
            <div className='position-relative pt-3'>
              <span className='mail_icon'>
                {icons.MailIcon}
              </span>
              <input type="text" placeholder='Enter your email' className='input_style ps-5' />
            </div>
          </form>
          <button className='Sign_button_style content_style mt-3'>
            Send
          </button>
        </div>
      </Modal>
    </>
  )
}