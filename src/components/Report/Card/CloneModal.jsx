import React, { useState } from 'react'
import './CloneModal.css'
import { Modal } from 'react-bootstrap';
import Close from '../../../assets/images/cross.png'
import Card from '../../../assets/images/cardone.png'
import Play from '../../../assets/images/Play.png'
import { icons } from '../../../Constant/Icons/Icons'

export const CloneModal = () => {

    const [showModal, setShowModal] = useState(false);
    const [isChecked, setIsChecked] = useState(false);
    const [selectedValue, setSelectedValue] = useState("");

    const handleCheckboxChange = (event) => {
        setIsChecked(event.target.checked);
    };

    const handleSelectChange = (event) => {
        setSelectedValue(event.target.value);
    };

    const InputField = ({ placeholder, value, onChange, options }) => (
        <div>
            <div className="custom-dropdown">
                <select className="clonestyle_input" value={value} onChange={onChange}>
                    <option value="" disabled hidden>{placeholder}</option>
                    {options.map((option) => (
                        <option key={option.value} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    );

    const CheckboxWithInputField = ({ isChecked, handleCheckboxChange, selectedValue, handleSelectChange, icons, label, options }) => (
        <div className='d-flex justify-content-between mt-3'>
            <label className="checkbox-label">
                <input
                    type="checkbox"
                    checked={isChecked}
                    onChange={handleCheckboxChange}
                    style={{ display: 'none' }}
                />
                <span className="check-icon">
                    {isChecked ? icons.CheckboxIcon : icons.UnCheckboxIcon}
                </span>
                <span className='checkbox_styling'>{label}</span>
            </label>
            <InputField
                label="Profile Type"
                type="select"
                placeholder="Select"
                value={selectedValue}
                onChange={handleSelectChange}
                dropdownIcon
                options={options}
            />
        </div>
    );

    const handleCloseModal = () => {
        setShowModal(false);
    };

    return (
        <>
            <button className='gender_style clone_btn' onClick={() => setShowModal(true)}>Clone Voice</button>
            <Modal show={showModal} style={{ background: "rgba(37, 35, 44, 0.9)" }}>
                <div className="clonemodal_content">
                    <div className='clone_head ps-3 pe-3'>
                        <div className='clone_heading'>
                            Rens8 Voice Generator
                        </div>
                        <button className='close_clone_btn' onClick={handleCloseModal}>
                            <img src={Close} alt="" />
                        </button>
                    </div>
                    <div className="clonebody ps-3 pe-3 pb-3">
                        <div className='clonebody_style pt-3'>
                            Create your voice project by completing the <br /> information below:
                        </div>
                        <div className='d-flex pt-3 gap-2'>
                            <div className='position-relative mt-1' style={{ width: "35%" }}>
                                <img src={Card} alt="" style={{ width: "100%" }} />
                                <img src={Play} className='clone_play' alt="" style={{ width: "25%" }} />
                            </div>
                            <div className='d-flex flex-column gap-2' style={{ width: "65%" }}>
                                <input
                                    type="text"
                                    placeholder='Enter Project Name'
                                    className='projects_style' />
                                <input type="text" placeholder='Add Script....' className='script_style' />
                            </div>
                        </div>
                        <div className='clone_style pt-3'>
                            Set up your offer or Switch to single payment offer
                        </div>
                        <div className='clone_stylish pt-2'>
                            You have exceeded the following characters, click here <span style={{ color: "#d0126c", cursor: "pointer" }}>[link]</span>  to upgrade account to premium version.
                        </div>
                        <CheckboxWithInputField
                            isChecked={isChecked}
                            handleCheckboxChange={handleCheckboxChange}
                            selectedValue={selectedValue}
                            handleSelectChange={handleSelectChange}
                            icons={icons}
                            label="Commercial rights"
                            options={[
                                { value: 'option1', label: '1 ($75)' },
                                { value: 'option2', label: '2 ($100)' },
                            ]}
                        />
                        <CheckboxWithInputField
                            isChecked={isChecked}
                            handleCheckboxChange={handleCheckboxChange}
                            selectedValue={selectedValue}
                            handleSelectChange={handleSelectChange}
                            icons={icons}
                            label="Full broadcast rights"
                            options={[
                                { value: 'option1', label: '1 ($75)' },
                                { value: 'option2', label: '2 ($100)' },
                            ]}
                        />
                        <CheckboxWithInputField
                            isChecked={isChecked}
                            handleCheckboxChange={handleCheckboxChange}
                            selectedValue={selectedValue}
                            handleSelectChange={handleSelectChange}
                            icons={icons}
                            label="Time audio sync (per 60 seconds) rights"
                            options={[
                                { value: 'option1', label: '1 ($75)' },
                                { value: 'option2', label: '2 ($100)' },
                            ]}
                        />
                        <CheckboxWithInputField
                            isChecked={isChecked}
                            handleCheckboxChange={handleCheckboxChange}
                            selectedValue={selectedValue}
                            handleSelectChange={handleSelectChange}
                            icons={icons}
                            label="Split files (up to 5 files)"
                            options={[
                                { value: 'option1', label: '1 ($75)' },
                                { value: 'option2', label: '2 ($100)' },
                            ]}
                        />
                        <CheckboxWithInputField
                            isChecked={isChecked}
                            handleCheckboxChange={handleCheckboxChange}
                            selectedValue={selectedValue}
                            handleSelectChange={handleSelectChange}
                            icons={icons}
                            label="Additional revision (+1 day)"
                            options={[
                                { value: 'option1', label: '1 ($75)' },
                                { value: 'option2', label: '2 ($100)' },
                            ]}
                        />
                        <CheckboxWithInputField
                            isChecked={isChecked}
                            handleCheckboxChange={handleCheckboxChange}
                            selectedValue={selectedValue}
                            handleSelectChange={handleSelectChange}
                            icons={icons}
                            label="Background music"
                            options={[
                                { value: 'option1', label: '1 ($75)' },
                                { value: 'option2', label: '2 ($100)' },
                            ]}
                        />
                        <CheckboxWithInputField
                            isChecked={isChecked}
                            handleCheckboxChange={handleCheckboxChange}
                            selectedValue={selectedValue}
                            handleSelectChange={handleSelectChange}
                            icons={icons}
                            label="Script Changes (+1 day)"
                            options={[
                                { value: 'option1', label: '1 ($75)' },
                                { value: 'option2', label: '2 ($100)' },
                            ]}
                        />
                        <CheckboxWithInputField
                            isChecked={isChecked}
                            handleCheckboxChange={handleCheckboxChange}
                            selectedValue={selectedValue}
                            handleSelectChange={handleSelectChange}
                            icons={icons}
                            label="Full Buyout"
                            options={[
                                { value: 'option1', label: '1 ($75)' },
                                { value: 'option2', label: '2 ($100)' },
                            ]}
                        />
                        <div className='clone_line mt-3' />
                        <div className='d-flex justify-content-between mt-2'>
                            <div className='clone_style'>
                                Total
                            </div>
                            <div className='clone_style' style={{ color: "#d0126c" }}>
                                $180
                            </div>
                        </div>
                        <div className='clone_line mt-2' />
                        <div className='d-flex justify-content-between mt-3'>
                            <button className="clone_back clone_stylish" onClick={handleCloseModal}>
                                Back
                            </button>
                            <button className='clone_back clone_stylish'>
                                Generate Project
                            </button>
                        </div>
                    </div>
                </div>
            </Modal>
        </>
    );
}