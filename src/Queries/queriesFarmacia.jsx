
import React from "react";
import clienteAxios from "../helpers/clienteAxios";

export async function getFarmacias(){
   const {data,status} = await clienteAxios.get("/farmacia/all")
    if(status==200){
        return data;
    }
}

export async function deleteFarmacia(id){
    console.log("id-farmacia"+id);
   
    const {data} = await clienteAxios.delete("/farmacia/delete",{id});
    return data;
}
