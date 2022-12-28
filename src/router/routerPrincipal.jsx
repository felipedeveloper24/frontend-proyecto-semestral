import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Farmacia from "../pages/farmacia/farmacia";

const RouterPrincipal = ()=>{
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" exact  element={<Farmacia/>} />
            </Routes>
        </BrowserRouter>
    );
};


export default RouterPrincipal;