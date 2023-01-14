import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Centro from "../pages/centros/centro";
import RegistrarCentro from "../pages/centros/registrar";
import Farmacia from "../pages/farmacia/farmacia";
import Modificar from "../pages/farmacia/modificar";
import RegistroFarmacia from "../pages/farmacia/registro";
import Home from "../pages/home/home";

const RouterPrincipal = ()=>{
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" exact  element={<Home/>} />
                <Route path="/farmacias" exact element={<Farmacia/>}/>
                <Route path="/registrarFarmacia" exact element={<RegistroFarmacia/>}/>
                <Route path="/modificarFarmacia/:id" exact element={<Modificar/>} />
                <Route path="/centros" exact element={<Centro/>} />
                <Route path="/registrarCentro" exact element={<RegistrarCentro/>} />
            </Routes>
        </BrowserRouter>
    );
};


export default RouterPrincipal;