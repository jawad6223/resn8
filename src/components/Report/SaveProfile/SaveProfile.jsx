import React, { useEffect, useState } from 'react'
import './SaveProfile.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { icons } from '../../../Constant/Icons/Icons';
import { useDispatch, useSelector } from 'react-redux';

export const SaveProfile = () => {

    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        AOS.init({
            offset: 300,
            duration: 1000,
        });
    }, []); // Run this effect only once when the component mounts

    const { cards } = useSelector((state) => state.savedCards);

    console.log("SavedReux:", cards);

    const cardsPerPage = 4;
    const indexOfLastCard = currentPage * cardsPerPage;
    const indexOfFirstCard = indexOfLastCard - cardsPerPage;
    const currentCards = cards.slice(indexOfFirstCard, indexOfLastCard);

    const handlePageChange = (newPage) => {
        const totalPages = Math.ceil(cards.length / cardsPerPage);

        // Check if there are cards and the newPage is within bounds
        if (cards.length > 0 && newPage >= 1 && newPage <= totalPages) {
            setCurrentPage(newPage);
        }
    };

    return (
        <section>
            <div className="container-fluid dashboard_bg save_profile pb-3">
                <div className="container pt-4">
                    <div className="row">
                        <div className="col-md-12" data-aos="fade-up">
                            <div className='find_browse_style'>
                                Saved Profiles
                            </div>
                        </div>
                    </div>
                    <div className="row mt-4">
                        <div className="col-md-12 p-0" data-aos="fade-down">
                            <div className={currentCards.length ? "find_t_box pb-3 ps-2" : ""}>
                                <div className="row m-0 pt-3">
                                    {currentCards.map((item, id) => (
                                        <div key={id} className="col-md-3 p-0 pe-2">
                                            <div className="card find_card ps-2 pe-2 pb-3">
                                                <div className='position-relative'>
                                                    <div className="saved">
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
                                                    <button className='gender_style clone_btn'>
                                                        {item.clonetage}
                                                    </button>
                                                </div>
                                                <div className='d-flex gap-3 mt-2'>
                                                    <div className='find_circles'>
                                                        {item.messageicon.message}
                                                    </div>
                                                    <button className='gender_style clone_btn'>
                                                        {item.clonetage}
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {cards.length > 0 && (
                    <div className="row mt-2">
                        <div className="col">
                            <div className='d-flex justify-content-center align-item-center gap-3'>
                                <button
                                    className='pagination_btn'
                                    onClick={() => handlePageChange(currentPage - 1)}
                                    disabled={currentPage === 1}
                                >{icons.Previcon}</button>
                                <p className='pt-3' style={{ color: "white" }}>{currentPage} of {Math.ceil(cards.length / cardsPerPage)}</p>
                                <button
                                    className='pagination_btn'
                                    onClick={() => handlePageChange(currentPage + 1)}
                                    disabled={currentPage === Math.ceil(cards.length / cardsPerPage)}
                                >{icons.Nexticon}</button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </section>
    )
}