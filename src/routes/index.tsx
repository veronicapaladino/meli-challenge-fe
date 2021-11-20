import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import { Header } from "../components/header";
import { Home } from "../components/home";


const Router = () => {
    return (
        <BrowserRouter>
        <Header />
            <Routes>
                <Route path="/" element={<Home />}></Route> 
            </Routes>
        </BrowserRouter>
    );
};

export default Router;