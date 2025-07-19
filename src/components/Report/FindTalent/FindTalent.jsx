import React, { useState, useEffect } from 'react'
import './FindTalent.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Tone from '../../../assets/images/ton.png'
import Accent from '../../../assets/images/acct.png'
import { ReactiveBase, RangeSlider } from '@appbaseio/reactivesearch';
import { Card } from '../Card/Card';
import { Offcanvas } from './Offcanvas';
import datas from '../Card/data';
import { icons } from '../../../Constant/Icons/Icons';

export const FindTalent = () => {

    const [showCheckboxes, setShowCheckboxes] = useState({
        Tone: false,
        Accent: false,
        Gender: false,
        Price: false,
        Purpose: false,
    });
    const [checkboxes, setCheckboxes] = useState({});
    const [selectedOption, setSelectedOption] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);

    const cardsPerPage = 6;
    const handlePageChange = (newPage) => {
        setCurrentPage(newPage);
    };

    useEffect(() => {
        AOS.init({
            offset: 300,
            duration: 1000,
        });
    }, []); // Run this effect only once when the component mounts



    const checkboxesOptions = {
        Tone: [
            "Bass", "Baritone", "Tenor", "Alto", "Mezzo-soprano", "Soprano"
        ],
        Accent: [
            "Classical", "Jazz", "Blues", "Rock", "Latin", "Hip Hop"
        ],
        Gender: [
            "Male", "Female", "Agender"
        ],
        Price: [
            "100", "1000", "100000"
        ],
        Purpose: [
            "Lifestyle", "Sports", "Music", "Comedy", "Games", "Fashion"
        ],
    };

    const handleCheckboxChange = (name) => {
        setCheckboxes((prevCheckboxes) => ({
            ...prevCheckboxes,
            [name]: !prevCheckboxes[name],
        }));
    };

    const handleDropdownClick = (dropdownType) => {
        setShowCheckboxes((prevShowCheckboxes) => ({
            ...prevShowCheckboxes,
            [dropdownType]: !prevShowCheckboxes[dropdownType],
        }));
    };

    const DropdownItem = ({ image, icon, label, dropdownType }) => {
        const getDropdownIcon = (dropdownType) => {
            return showCheckboxes[dropdownType] ? icons.ArrowDropup : icons.DropIcon;
        };
        return (
            <div className="d-flex justify-content-between mt-4">
                <div className="find_browse2_style d-flex gap-2 pt-2">
                    {image && image[dropdownType] && <img src={image[dropdownType]} alt="" />}
                    {icon && icon[dropdownType]}
                    {label}
                </div>
                <div
                    style={{ color: "white", fontSize: "25px", cursor: "pointer" }}
                    onClick={() => handleDropdownClick(dropdownType)}
                >
                    {getDropdownIcon(dropdownType)}
                </div>
            </div>
        );
    };

    const radioOptions = [
        { id: "ten", label: "10" },
        { id: "twenty", label: "10-20" },
        { id: "thirty", label: "20-30" },
        { id: "forty", label: "30" },
    ];

    const handleRadioChange = (id) => {
        setSelectedOption(id);
    };


    return (
        <section>
            <div className="container-fluid dashboard_bg find_talent pb-3">
                <div className="container pt-4">
                    <div className="row">
                        <div className="col-xxl-9 col-xl-9 col-lg-11 col-md-11 col-sm-11 col-10" data-aos="fade-up">
                            <div className='find_browse_style'>
                                Browse Voices
                            </div>
                        </div>
                        <div className="col-xxl-3 col-xl-3 col-lg-1 col-md-1 col-sm-1 col-1" data-aos="fade-down">
                            <div className='find_browse_style d-xl-block d-lg-none d-md-none d-sm-none d-none'>
                                Filters
                            </div>
                            <button className="d-xxl-none d-xl-none d-lg-block d-md-block d-sm-block d-block" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight" style={{ border: "none", background: "none" }}>
                                <div style={{ color: "white", fontSize: "30px" }}>{icons.FilterAlt}</div>
                            </button>
                        </div>
                    </div>
                    <div className="row mt-4">
                        <div className="col-xxl-9 col-xl-9 col-lg-12 col-md-12 p-0" data-aos="fade-down">
                            <div className="find_t_box ps-2">
                                <div className="row m-0">
                                    <div className="col-md-12 mt-4 p-0 mb-2">
                                        <Card cardsPerPage={cardsPerPage} currentPage={currentPage} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xxl-3 col-xl-3 d-xxl-block d-xl-block d-lg-none d-md-none d-sm-none d-none" data-aos="fade-down">
                            <div className='filter_box pb-2' data-aos="fade-down">
                                <div className='ps-4 pe-4'>
                                    <div className='d-flex pt-4'>
                                        <div className='position-relative'>
                                            <span className='mail_s_icon'>
                                                {icons.SearchIcon}
                                            </span>
                                            <input type="text" placeholder='Search Voice' className='input_f_box' />
                                        </div>
                                        <button className='find_f_btn gender_style'>
                                            Find
                                        </button>
                                    </div>
                                    <button className='save_f_btn find_browse2_style mt-3'>
                                        {icons.HeartIcon} Save Search
                                    </button>
                                    {Object.keys(showCheckboxes).map((dropdownType) => (
                                        <div key={dropdownType}>
                                            <DropdownItem
                                                label={dropdownType}
                                                image={{ Tone: Tone, Accent: Accent }}
                                                icon={{ Gender: icons.GenderIcon, Price: icons.PricetagIcon, Purpose: icons.PurposeIcon }}
                                                dropdownType={dropdownType}
                                                onClick={() => handleDropdownClick(dropdownType)}
                                            />
                                            {showCheckboxes[dropdownType] && (
                                                <div>
                                                    {checkboxesOptions[dropdownType].map((option) => (
                                                        <div
                                                            key={option}
                                                            className="d-flex ps-5 justify-content-between mt-3"
                                                        >
                                                            <div className="find_browse2_style">{option}</div>
                                                            <label className="checkbox-label">
                                                                <input
                                                                    type="checkbox"
                                                                    name={option}
                                                                    checked={checkboxes[option]}
                                                                    onChange={() => handleCheckboxChange(option)}
                                                                    style={{ display: "none" }}
                                                                />
                                                                <span className="check_find">
                                                                    {checkboxes[option] ? icons.CheckboxIcon : icons.UnCheckboxIcon}
                                                                </span>
                                                            </label>
                                                        </div>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className='filter_box mt-3 pb-1' data-aos="fade-down">
                                <div className='ps-4 pe-4 pt-4'>
                                    <div className='find_browse2_style'>
                                        Followers
                                    </div>
                                    <div className='d-flex justify-content-between mt-3'>
                                        <div className='find_browse2_style'>
                                            Quantity
                                        </div>
                                        <div className='find_browse2_style'>
                                            10-225K
                                        </div>
                                    </div>
                                    <ReactiveBase
                                        app="your_app_name"
                                        credentials="your_credentials"
                                        url="https://appbase-demo-ansible-abxiydt-arc.searchbase.io"
                                    >
                                        <RangeSlider
                                            componentId="PriceSensor"
                                            dataField="price"
                                            className='custom-range-slider' // Use a custom class for styling
                                            range={{ start: 0, end: 300000 }}
                                            defaultValue={{
                                                start: 10,
                                                end: 225000
                                            }}
                                        />
                                    </ReactiveBase>
                                </div>
                            </div>
                            <div className='filter_box mt-3 pb-2' data-aos="fade-down">
                                <div className='ps-4 pe-4 pt-4'>
                                    <div className='find_browse2_style'>
                                        Ad price
                                    </div>
                                    <div className='d-flex justify-content-between mt-3'>
                                        <div className='find_browse2_style'>
                                            Price
                                        </div>
                                        <div className='find_browse2_style'>
                                            $100-3000
                                        </div>
                                    </div>
                                    <ReactiveBase
                                        app="your_app_name"
                                        credentials="your_credentials"
                                        url="https://appbase-demo-ansible-abxiydt-arc.searchbase.io"
                                    >
                                        <RangeSlider
                                            componentId="PriceSensor"
                                            dataField="price"
                                            className='custom-range-slider' // Use a custom class for styling
                                            range={{ start: 0, end: 300000 }}
                                            defaultValue={{
                                                start: 10,
                                                end: 225000
                                            }}
                                        />
                                    </ReactiveBase>
                                </div>
                            </div>
                            <div className='filter_box mt-3 pb-2' data-aos="fade-down">
                                <div className='ps-4 pe-4 pt-4'>
                                    <div className='find_browse2_style'>
                                        Stories per day
                                    </div>
                                    {radioOptions.map(({ id, label }) => (
                                        <div key={id} className="d-flex mt-1">
                                            <label className="checkbox-label">
                                                <input
                                                    type="radio"
                                                    name="radiobutton"
                                                    checked={selectedOption === id}
                                                    onChange={() => handleRadioChange(id)}
                                                    style={{ display: "none" }}
                                                />
                                                <span className="check_find">
                                                    {selectedOption === id ? icons.CircleDotIcon : icons.CircleIcon}
                                                </span>
                                            </label>
                                            <div className="find_browse2_style ps-2 mt-2">{label}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-2">
                        <div className="col">
                            <div className='d-flex justify-content-center align-item-center gap-3'>
                                <button
                                    className='pagination_btn'
                                    onClick={() => handlePageChange(currentPage - 1)}
                                    disabled={currentPage === 1}>{icons.Previcon}</button>
                                <p className='pt-3' style={{ color: "white" }}>{currentPage} of {Math.ceil(datas.length / cardsPerPage)}</p>
                                <button
                                    className='pagination_btn'
                                    onClick={() => handlePageChange(currentPage + 1)}
                                    disabled={currentPage === Math.ceil(datas.length / cardsPerPage)}
                                >{icons.Nexticon}</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Offcanvas />
        </section>
    )
}