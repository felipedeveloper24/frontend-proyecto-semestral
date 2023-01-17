import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Centro from "../pages/centros/centro";
import IngresoCentro from "../pages/centros/ingreso";
import ModificarCentro from "../pages/centros/modificar";
import RegistrarCentro from "../pages/centros/registrar";
import VerStock from "../pages/centros/verStock";
import Farmacia from "../pages/farmacia/farmacia";
import Modificar from "../pages/farmacia/modificar";
import RegistroFarmacia from "../pages/farmacia/registro";
import Home from "../pages/home/home";
import Medicamentos from "../pages/medicamentos/medicamentos";
import ModificarMedicamento from "../pages/medicamentos/modificar";
import RegistrarMedicamento from "../pages/medicamentos/registrar";

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
                <Route path="/modificarCentro/:id" exact element={<ModificarCentro/>}/>
                <Route path="/medicamentos" exact element={<Medicamentos/>} />    
                <Route path="/registrarMedicamento" exact element={<RegistrarMedicamento/>} />
                <Route path="/modificarMedicamento/:id" exact element={<ModificarMedicamento/>} />
                <Route path="/verStock/:id" exact element={<VerStock/>} />
                <Route path="/ingresos" exact element={<IngresoCentro/>} />
             </Routes>
        </BrowserRouter>
    );
};


export default RouterPrincipal;