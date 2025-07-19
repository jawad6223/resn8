import React, { useState } from 'react'
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { useDispatch, useSelector } from 'react-redux';
import { toggleSaved } from '../../../Redux/Slice/savedCardsSlice';
import datas from './data'
import { CloneModal } from './CloneModal';

export const Card = ({ cardsPerPage, currentPage }) => {

    const dispatch = useDispatch();
    const { cards } = useSelector((state) => state.savedCards);
    console.log("redxx>>>>Cards:", cards)

    const handleToggleSaved = (data) => {
        dispatch(toggleSaved(data));
    };

    const indexOfLastCard = currentPage * cardsPerPage;
    const indexOfFirstCard = indexOfLastCard - cardsPerPage;
    const currentCards = datas.slice(indexOfFirstCard, indexOfLastCard);

    return (
        <>
            <div className="row m-0">
                {currentCards.map((item, id) => (
                    <div key={id} className="col-md-4 p-0 pe-2 mb-4">
                        <div className="card find_card ps-2 pe-2 pb-3">
                            <div className='position-relative'>
                                <div className={`save_style ${cards.some((card) => card === item) ? 'saved' : ''}`} onClick={() => handleToggleSaved(item)}>
                                    {item.bookmarkicon.bookmark}
                                </div>
                                <img src={item.imagecard} alt="..." style={{ width: "100%", paddingTop: "10px" }} />
                                <div className='d-flex position-absolute img_position justify-content-between ps-2 pe-2'>
                                    <div className='circle_icon'>{item.leftarrowicon.left}</div>
                                    <img src={item.imageplay} alt="" style={{ width: "20%", cursor: "pointer" }} />
                                    <div className='circle_icon'>{item.rightarrowicon.right}</div>
                                </div>
                            </div>
                            <div className='d-flex mt-2 justify-content-between'>
                                <div className='find_browse2_style'>
                                    {item.name}
                                    <img src={item.imagetick} alt="" className='ps-2' />
                                </div>
                                <div className='p_style'>
                                    {item.price}
                                </div>
                            </div>
                            <div className='d-flex justify-content-between pe-2'>
                                <div className='com_style'>
                                    {item.completedOrders}
                                </div>
                                <div className='com_style'>
                                    {item.tag}
                                </div>
                            </div>
                            <div className='d-flex justify-content-between mt-2'>
                                <div className='d-flex gap-1'>
                                    {item.socialMedia.map((social, idx) => (
                                        <div key={idx} className='find_circles'>
                                            {social.icon}
                                        </div>
                                    ))}
                                </div>
                                <div className='w-25'>
                                    <button className='eng_btn com_style'>
                                        {item.language}
                                    </button>
                                </div>
                            </div>
                            <div className='lines_style mt-3' />
                            <div className='d-flex justify-content-between mt-2'>
                                <div className='gender_style'>
                                    {item.gender.title}
                                </div>
                                <div className='gender_style'>
                                    {item.gender.value}
                                </div>
                            </div>
                            <div className='lines_style mt-2' />
                            <div className='d-flex justify-content-between mt-2'>
                                <div className='gender_style'>
                                    {item.accent.title}
                                </div>
                                <div className='gender_style'>
                                    {item.accent.value}
                                </div>
                            </div>
                            <div className='lines_style mt-2' />
                            <div className='d-flex justify-content-between mt-2'>
                                <div className='gender_style'>
                                    {item.tone.title}
                                </div>
                                <div className='gender_style'>
                                    {item.tone.value}
                                </div>
                            </div>
                            <div className='lines_style mt-2' />
                            <div className='d-flex justify-content-between mt-2'>
                                <div className='gender_style'>
                                    {item.purpose.title}
                                </div>
                                <div className='gender_style'>
                                    {item.purpose.value} <br /> <span className='ps-5'>{item.purpose.subValue}</span>
                                </div>
                            </div>
                            <div className='d-flex gap-3 mt-3'>
                                <div className='find_circles'>
                                    {item.cloneicon.clone}
                                </div>
                                <CloneModal />
                            </div>
                            <div className='d-flex gap-3 mt-2'>
                                <div className='find_circles'>
                                    {item.messageicon.message}
                                </div>
                                <CloneModal />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}