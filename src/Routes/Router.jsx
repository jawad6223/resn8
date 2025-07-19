import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Login} from '../Auth/Login/Login'
import {Signup} from '../Auth/Signup/Signup';
import {Landing} from '../Pages/Landing';
import { Pricing } from '../Pages/Pricing';
import {Report} from '../Pages/Report'
import { Error } from '../Error/Error';

export const Router = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/landing" element={<Landing />} />
                    <Route path="/pricing" element={<Pricing />} />
                    <Route path="/report" element={<Report />} />
                    <Route path="*" element={<Error />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}
