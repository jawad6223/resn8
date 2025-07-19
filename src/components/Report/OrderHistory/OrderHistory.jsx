import React from 'react'
import './OrderHistory.css'
import { IoMdArrowDropdown } from "react-icons/io";


export const OrderHistory = () => {

    const orderHistoryData = [
        { date: 'April 9, 2023', type: 'Dubbing Artist', projectName: 'I will do Dubbing Artist', projectTotal: '$829', projectProgress: 'In Progress' },
        { date: 'April 9, 2023', type: 'Dubbing Artist', projectName: 'I will do Dubbing Artist', projectTotal: '$829', projectProgress: 'In Progress' },
        { date: 'April 9, 2023', type: 'Dubbing Artist', projectName: 'I will do Dubbing Artist', projectTotal: '$829', projectProgress: 'In Progress' },
        { date: 'April 9, 2023', type: 'Dubbing Artist', projectName: 'I will do Dubbing Artist', projectTotal: '$829', projectProgress: 'In Progress' },
        { date: 'April 9, 2023', type: 'Dubbing Artist', projectName: 'I will do Dubbing Artist', projectTotal: '$829', projectProgress: 'In Progress' },
        { date: 'April 9, 2023', type: 'Dubbing Artist', projectName: 'I will do Dubbing Artist', projectTotal: '$829', projectProgress: 'In Progress' },
        { date: 'April 9, 2023', type: 'Dubbing Artist', projectName: 'I will do Dubbing Artist', projectTotal: '$829', projectProgress: 'In Progress' },
    ];

    return (
        <section>
            <div className="container-fluid dashboard_bg order_payment pb-3">
                <div className="container pt-4">
                    <div className="row">
                        <div className="col-md-9">
                            <div className='find_browse_style'>
                                Order History
                            </div>
                        </div>
                        <div className="col-md-3 d-flex justify-content-end">
                            <div class="dropdown">
                                <button className="btn month_btn dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
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
                    <div className="row mt-4">
                        <div className="col-md-12">
                            <div className='order_box pb-5'>
                                <div className='ps-3 pe-3 pt-4'>
                                    <div className="table-responsive">
                                        <table className="table">
                                            <thead>
                                                <tr id='orderhistory_tablehead'>
                                                    <th scope="col">Date</th>
                                                    <th scope="col">Type</th>
                                                    <th scope="col">Project Name</th>
                                                    <th scope="col">Project Total</th>
                                                    <th scope="col">Project Progress</th>
                                                </tr>
                                            </thead>
                                            <tbody id='orderhistory_tablebody'>
                                                {orderHistoryData.map((item, index) => (
                                                    <tr key={index}>
                                                        <th scope="row">{item.date}</th>
                                                        <td>{item.type}</td>
                                                        <td>{item.projectName}</td>
                                                        <td>{item.projectTotal}</td>
                                                        <td>{item.projectProgress}</td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
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