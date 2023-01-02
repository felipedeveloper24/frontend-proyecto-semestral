import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Farmacia from "../pages/farmacia/farmacia";
import RegistroFarmacia from "../pages/farmacia/registro";
import Home from "../pages/home/home";

const RouterPrincipal = ()=>{
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" exact  element={<Farmacia/>} />
                <Route path="/farmacia" exact element={<RegistroFarmacia/>}/>
            </Routes>
        </BrowserRouter>
    );
};


export default RouterPrincipal;