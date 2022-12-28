import axios from "axios";
import React from "react";


const url = "http://127.0.0.1:8000/api"
const clienteAxios = axios.create({baseURL:url});

export default clienteAxios;