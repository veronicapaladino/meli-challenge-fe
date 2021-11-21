import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import EmptyState from "../components/empty-state";
import Header from "../components/header";
import Home from "../components/home";
import ItemDetail from "../components/item-detail";
import ItemsList from "../components/items-list";


const Router = () => {
    return (
        <BrowserRouter>
        <Header />
            <Routes>
                <Route path="/" element={<Home />}></Route> 
                <Route path="/items" element={<ItemsList />}></Route> 
                <Route path="/items/:id" element={<ItemDetail />} />
                <Route path="/*" element={<EmptyState />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;