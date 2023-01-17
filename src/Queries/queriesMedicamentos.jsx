import { useNavigate } from "react-router-dom";
import clienteAxios from "../helpers/clienteAxios"

const getMedicamentos = async()=>{
    const {status,data} = await clienteAxios.get("/medicamento/all");
    if(status===200){
        return data;
    }
}
const crear_medicamento = async(medicamento)=>{
    const navigate = useNavigate();
    const {status,data} = await clienteAxios.post("/medicamento/create",medicamento);
    if(status===200){
        navigate("/medicamentos");
    }
}
export default {getMedicamentos,crear_medicamento};
