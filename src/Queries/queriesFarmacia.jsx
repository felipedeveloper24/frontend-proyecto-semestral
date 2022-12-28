
import React from "react";
import clienteAxios from "../helpers/clienteAxios";

export async function getFarmacias(){
   const {data} = await clienteAxios.get("/farmacia/all")

    return data;
}
