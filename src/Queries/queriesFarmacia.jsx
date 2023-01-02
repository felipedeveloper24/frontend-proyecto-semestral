
import React from "react";
import { useNavigate } from "react-router-dom";
import clienteAxios from "../helpers/clienteAxios";


export async function getFarmacias(){

   const {data,status} = await clienteAxios.get("/farmacia/all")
    if(status==200){
       
        return data;
    }
    
}

export async function deleteFarmacia(id){
    console.log(id);
    const response = await clienteAxios.delete("/farmacia/delete",{data:{id:id}});
    console.log(response);
    window.location.reload(true);
}
export async function createFarmacia(farmacia){
    const response = await clienteAxios.post("/farmacia/create",farmacia);
    return response.status;

}



