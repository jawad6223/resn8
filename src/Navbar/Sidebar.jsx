import React, { useState, useRef, useCallback, useMemo, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Sidebar.css'
import { Dashboard } from '../components/Report/Dashboard/Dashboard';
import { FindTalent } from '../components/Report/FindTalent/FindTalent';
import { SaveProfile } from '../components/Report/SaveProfile/SaveProfile';
import { OrderHistory } from '../components/Report/OrderHistory/OrderHistory';
import { Payment } from '../components/Report/Payment/Payment';
import { Setting } from '../components/Report/Settings&Privacy/Setting';
import { CreateProfile } from '../components/Report/CreateProfile/CreateProfile';
import { CustomSupport } from '../components/Report/CustomSupport/CustomSupport';
import { Foot } from '../Footer/Foot';
import OvalImage from '../assets/images/Oval.png'
import Saved from '../assets/images/save.png'
import Order from '../assets/images/order.png'
import Payments from '../assets/images/payment.png'
import Settings from '../assets/images/setting.png'
import Creates from '../assets/images/create.png'
import Messages from '../assets/images/message.png'
import Close from '../assets/images/cross.png'
import { icons } from '../Constant/Icons/Icons';

export const Sidebar = () => {

  const [activeTab, setActiveTab] = useState('findtalent');
  const [shownotification, setShowNotification] = useState(false);
  const [notificationVisible, setNotificationVisible] = useState({
    notify1: true,
    notify2: true,
    notify3: true,
    notif4: true,
  });

  const navigate = useNavigate();

  const handleCustomSupportClick = () => {
    // Navigate to CustomSupport component
    navigate('/customsupport');
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const handleCloseNotification = (id) => {
    setNotificationVisible((prev) => ({
      ...prev,
      [id]: false,
    }));
  };

  const handleToggleNotificationPanel = () => {
    setShowNotification(prev => !prev);
  };

  // Memoized Notification component using useMemo
  const MemoizedNotification = useMemo(() => {
    return ({ id, title, description, color }) => (
    <div className='notify_inner ps-3 pe-3 mb-1 pb-2' style={{ display: notificationVisible[id] ? 'block' : 'none' }}>
      <div className='d-flex justify-content-between'>
        <div className='d-flex gap-2 mt-3'>
          <div className='noti-circle' style={{ background: color }}>
            <div className='noti_inner_circle' style={{ color }}>
              i
            </div>
          </div>
          <div className='noti_style pt-1'>
            {title}
          </div>
        </div>
        <div className='mt-3'>
          <button className='close_noti_btn' onClick={() => handleCloseNotification(id)}>
            <img src={Close} alt="" />
          </button>
        </div>
      </div>
      <div className='notify_style ps-5'>
        {description}
      </div>
    </div>
  );
}, [notificationVisible]);

  const tabData = [
    { id: 'dashboard', label: 'Dashboard', icon: <div style={{ fontSize: "20px" }}>{icons.DashboardIcon}</div> },
    { id: 'findtalent', label: 'Find Talent', icon: <div style={{ fontSize: "20px" }}>{icons.PersonOutline}</div> },
    { id: 'saveprofile', label: 'Saved Profile', icon: <img src={Saved} alt="" /> },
    { id: 'orderhistory', label: 'Order History', icon: <img src={Order} alt="" /> },
    { id: 'payment', label: 'Payment', icon: <img src={Payments} alt="" /> },
    { id: 'setting', label: 'Settings & Privacy', icon: <img src={Settings} alt="" /> },
    { id: 'profile', label: 'Service Profile', icon: <img src={Creates} alt="" /> },
    { id: 'custom', label: 'Customer Support', icon: <img src={Messages} alt="" /> },
  ];

  const MainLayout = () => {
    return (
      <>
        {activeTab === 'dashboard' && <Dashboard />}
        {activeTab === 'findtalent' && <FindTalent />}
        {activeTab === 'saveprofile' && <SaveProfile />}
        {activeTab === 'orderhistory' && <OrderHistory />}
        {activeTab === 'payment' && <Payment />}
        {activeTab === 'setting' && <Setting />}
        {activeTab === 'profile' && <CreateProfile />}
        {activeTab === 'custom' && <CustomSupport />}
      </>
    );
  };

  return (
    <section>
      {/* Start of Navbar */}

      <nav className="navbar navbar-expand-lg navbar-sidebar">
        <div className="container-fluid">
          <span className='header_content d-lg-block d-md-none d-sm-none d-none' onClick={() => navigate('/landing')}>Resn8</span>
          <button className="navbar-toggler" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample">
            <div style={{ color: "white", fontSize: "30px" }}>{icons.ThreelineIcon}</div>
          </button>
          <div className='d-flex gap-3'>
            <button className='join_H_button'>
              <div style={{ marginRight: '8px', color: "yellow", fontSize: "15px" }}>{icons.CrownIcon}</div>
              Join Now
            </button>
            <div className='bell_icon' onClick={handleToggleNotificationPanel}>{icons.BellFillIcon}</div>
            {shownotification && (
              <div className='noti_body'>
                <MemoizedNotification id="notify1" title="voice capture result" description="Lorem Ipsum is simply dummy text..." />
                <MemoizedNotification id="notify2" title="Notification 2" color="#0C68E2" />
                <MemoizedNotification id="notify3" title="Notification 3" color="#FFBF58" />
                <MemoizedNotification id="notif4" title="Notification 4" color="#29E8C6" />
              </div>
            )}
            <div className='bell_icon' onClick={handleCustomSupportClick}>
              {icons.MessageRoundedDots}
            </div>
            <img src={OvalImage} alt="" />
          </div>
        </div>
      </nav>
      {/* End of Navbar */}

      {/* Start of Sidebar */}

      <div className="container-fluid" >
        <div className="row ">
          <div className="col-xxl-2 col-xl-2 col-lg-3 d-lg-block d-md-none d-sm-none d-none sidebar pb-5 p-0 ">
            <div className='d-flex flex-column gap-3 pt-4'>
              {tabData.map((tab) => (
                <button
                  key={tab.id}
                  className={`dash_style d-flex gap-2 ps-4 ${activeTab === tab.id ? 'active' : ''}`}
                  onClick={() => handleTabChange(tab.id)}
                >
                  {tab.icon}
                  {tab.label}
                </button>
              ))}
              <button className='dash_style d-flex gap-2 ps-4 mt-5' onClick={() => navigate('/')}>
                {icons.LogOutIcon}
                Logout
              </button>
            </div>
          </div>
          <div className="col-xxl-10 col-xl-10 col-lg-9 col-md-12 col-sm-12 col-12 sidebar_main pb-5 p-0">
            <MainLayout />
          </div>
        </div>
      </div>

      {/* End of Sidebar */}

      <Foot />

      {/* Start of offcanvas */}

      <div className="offcanvas offcanvas-start offcan sidebar col-md-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
        <span className='header_content ps-4' onClick={() => navigate('/landing')}>Resn8</span>
        <div className='d-flex flex-column gap-3'>
          {tabData.map((tab) => (
            <button
              key={tab.id}
              className={`dash_style d-flex gap-2 ps-4 ${activeTab === tab.id ? 'active' : ''}`}
              onClick={() => handleTabChange(tab.id)}
            >
              {tab.icon}
              {tab.label}
            </button>
          ))}
          <button className='dash_style d-flex gap-2 ps-4 mt-5' onClick={() => navigate('/')}>
            {icons.LogOutIcon}
            Logout
          </button>
        </div>
      </div>

      {/* End of offcanvas */}


    </section >
  )
}