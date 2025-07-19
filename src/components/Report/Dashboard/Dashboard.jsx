import React, { useState, useEffect } from 'react'
import './Dashboard.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis } from 'recharts';
import { icons } from '../../../Constant/Icons/Icons';


export const Dashboard = () => {

  useEffect(() => {
    AOS.init({
      offset: 300,
      duration: 1000,
    });
  }, []); // Run this effect only once when the component mounts

  const data = [
    {
      icon: <div className='grp_icon'>{icons.UserIcon}</div>,
      title: 'Total User',
      amount: '$120,784.02',
      percentage: '12.3%',
      change: '+1,453.89 today',
    },
    {
      icon: <div className='grp_icon'>{icons.ProgressionIcon}</div>,
      title: 'Total Revenue',
      amount: '$120,784.02',
      percentage: '12.3%',
      change: '+1,453.89 today',
    },
  ];

  const data1 = [
    {
      icon: <div className='grp_icon'>{icons.FillcheckIcon}</div>,
      title: 'Subscribed Customer',
      amount: '$120,784.02',
      percentage: '12.3%',
      change: '+1,453.89 today',
      color: 'red',
      arrowIcon: <div style={{ color: 'red', display: "inline-block" }}>{icons.ArrowdownLeftIcon}</div>,
    },
    {
      icon: <div className='grp_icon'>{icons.ReceiveIcon}</div>,
      title: 'Average revenue per user (ARPU)',
      amount: '$120,784.02',
      percentage: '12.3%',
      change: '+1,453.89 today',
      arrowIcon: icons.ArrowoutIcon,
    },
  ];

  const data2 = [
    {
      title: 'Monthly Recurring Revenue (MRR)',
      buttonLabel: 'Month',
      amount: '$16,400.12',
      percentage: '12.3%',
      profits: {
        label: 'Profit',
        dotStyle: { background: '' },
      },
      losses: {
        label: 'Loss',
        dotStyle: { background: 'grey' },
      },
      ticks: ['20K', '15K', '10K', '5K', '0'],
      months: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    },
  ];

  const Array = [
    {
      amount: 0,
      profit: 5.5,
      loss: 5,
      month: "Jan"
    },
    {
      amount: 5,
      profit: 10,
      loss: 9.2,
      month: "Feb"
    },
    {
      amount: 10,
      profit: 9.5,
      loss: 8.2,
      month: "Mar"
    },
    {
      amount: 15,
      profit: 15,
      loss: 12.5,
      month: "Apr"
    },
    {
      amount: 20,
      profit: 11.2,
      loss: 9.5,
      month: "May"
    },
    {
      amount: 20,
      profit: 6.5,
      loss: 5,
      month: "Jun"
    },
  ]

  return (
    <section>
      <div className="container-fluid dashboard_bg">
        <div className="container pt-5">
          <div className="row">
            <div className="col-xxl-6 col-xl-6 col-lg-12">
              <div className="row">
                {data.map((item, index) => (
                  <div className="col-sm-6" key={index} data-aos="fade-up">
                    <div className='dash_box1 pb-3 dash_boxes'>
                      <div className='ps-4 pt-3'>
                        <div className='d-flex gap-2'>
                          <div className='dash_circle'>{item.icon}</div>
                          <div className='total_d_style mt-1'>{item.title}</div>
                        </div>
                        <div className='text_d_style mt-2'>{item.amount}</div>
                        <div className='text1_d_style d-flex gap-2 mt-2'>
                          {icons.ArrowoutIcon}
                          {item.percentage}
                          <span className='color_d'>{item.change}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="row mt-2">
                {data1.map((item, index) => (
                  <div className="col-sm-6" key={index} data-aos="fade-down">
                    <div className='dash_box1 pb-3 dash_boxes'>
                      <div className='ps-4 pt-3'>
                        <div className='d-flex gap-2'>
                          <div className='dash_circle'>{item.icon}</div>
                          <div className='total_d_style mt-1'>{item.title}</div>
                        </div>
                        <div className='text_d_style mt-2'>{item.amount}</div>
                        <div className='text1_d_style d-flex gap-2 mt-2'>
                          {item.arrowIcon}
                          {item.percentage}
                          <span className='color_d'>{item.change}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="col-xxl-6 col-xl-6 col-lg-12" data-aos="fade-down">
              {data2.map((item, index) => (
                <div className='dash_box2 pb-3' key={index}>
                  <div className='ps-4 pe-4 pt-4'>
                    <div className='row justify-content-between'>
                      <div className='col-sm-7 col-12 monthly_d_style'>{item.title}</div>
                      <div className='col-sm-4 col-12 d-flex justify-content-end'>
                        <div class="dropdown">
                          <button className="btn month_btn_d dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                            This Month
                          </button>
                          <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                            <li><a class="dropdown-item" href="#">January</a></li>
                            <li><a class="dropdown-item" href="#">February</a></li>
                            <li><a class="dropdown-item" href="#">March</a></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className='row mt-3 m-0'>
                      <div className='col-xxl-7 col-xl-7 col-lg-7 col-md-7 col-sm-7 col-12'>
                        <div className='d-flex gap-2'>
                          <div className='d2_style'>{item.amount}</div>
                          <div className='d_circle_style mt-2'>
                            {icons.ArrowoutIcon}{item.percentage}
                          </div>
                        </div>
                      </div>
                      <div className='col-xxl-5 col-xl-5 col-lg-5 col-md-5 col-sm-5 col-12'>
                        <div className='d-flex gap-5 justify-content-end'>
                          <div className='d-flex gap-2'>
                            <div className='dot_d_style mt-3' style={item.profits.dotStyle} />
                            <div className='p_d_style mt-2'>{item.profits.label}</div>
                          </div>
                          <div className='d-flex gap-2'>
                            <div className='dot_d_style mt-3' style={item.losses.dotStyle} />
                            <div className='p_d_style mt-2'>{item.losses.label}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row mt-4">
                      <div className="col-12 p-0">
                        <div className='pe-4'>
                          <ResponsiveContainer width="100%" aspect={3}>
                            <BarChart data={Array}>
                              <XAxis dataKey="month" />
                              <YAxis dataKey="amount" />
                              <Bar dataKey="profit" fill="#EA1179" />
                              <Bar dataKey="loss" fill='#C8C2FC' />
                            </BarChart>
                          </ResponsiveContainer>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}