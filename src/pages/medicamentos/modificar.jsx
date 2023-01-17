import { Grid,TextField,Button,Card,Box,Typography} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Header from "../../components/header/header";
import clienteAxios from "../../helpers/clienteAxios";

const ModificarMedicamento = ()=>{
    const {id} = useParams();
    const [medicamento,setMedicamento] = useState({
        med_nombre: '',
        med_compuesto:''
    }); 
    const [loading,setLoading] = useState(false);
    const getMedicamento = async()=>{
        const response = await clienteAxios.get(`/medicamento/show/${id}`);
        setMedicamento(response.data[0]);
    };
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setMedicamento({ ...medicamento, [name]: value });
      };
    useEffect(()=>{
        getMedicamento();
    },[]);

    const Navigate = useNavigate();

    const onSubmit = async(e)=>{
        e.preventDefault();
        const response = await clienteAxios.put("/medicamento/update",{
            id:id,
            med_nombre:medicamento.med_nombre,
            med_compuesto:medicamento.med_compuesto
        })

        if(response.status===200){
            Navigate("/medicamentos");
        }
    }
   
    return (
        <Grid sx={{width:"100%",display:"flex",flexDirection:"column"}}>
            <Header/>
            <Typography variant="h5" sx={{textAlign:"center",marginTop:"10px",marginBottom:"10px"}}>Actualización de Medicamento</Typography>
                <form onSubmit={onSubmit}>
                <Card sx={{
                    width:"40%",
                    margin:"0px auto",
                    
                    display:"flex",
                    flexDirection:"column",
                    justifyContent:"center",
                 
                    padding:"20px"
                }}>
                        <TextField  sx={{width:"90%",marginBottom:"10px"}} onChange={handleInputChange} value={medicamento.med_nombre} name="med_nombre"  label="Nombre Medicamento" />    
                        <TextField label="Compuesto"  onChange={handleInputChange} value={medicamento.med_compuesto} name="med_compuesto" sx={{width:"90%",marginBottom:"10px",marginTop:"10px"}} />
                    
                    <Box sx={{width:"50%",margin:"0px auto",marginTop:"10px",display:"flex",justifyContent:"center"}}>
                        <Button type="submit" variant="contained" >Enviar datos</Button>
                    </Box>
                    
                </Card>
                </form>
        </Grid>
    )
};

export default ModificarMedicamento;