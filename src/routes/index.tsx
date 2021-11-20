import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import { Home } from "../components/home";


const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}></Route> 
            </Routes>
        </BrowserRouter>
    );
};

export default Router;