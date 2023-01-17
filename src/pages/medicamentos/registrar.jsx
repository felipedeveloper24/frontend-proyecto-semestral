import { Grid,Card,TextField,Alert,Typography,Box,Button} from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Header from "../../components/header/header";
import clienteAxios from "../../helpers/clienteAxios";
import crear_medicamento from "../../Queries/queriesMedicamentos";
const RegistrarMedicamento = ()=>{
    const navigate = useNavigate();
    const {register,handleSubmit,formState:{errors}} = useForm();
    const onSubmit = async(data)=>{ 
        const response = await clienteAxios.post("/medicamento/create",data);
        if(response.status===200){
            navigate("/medicamentos");
        }
    }
    return (
        <Grid container sx={{width:"100%",display:"flex",flexDirection:"column"}}>
            <Header/>
            <Typography variant="h5" sx={{textAlign:"center",marginTop:"10px",marginBottom:"10px"}}>Registro de Medicamento</Typography>
            <form onSubmit={handleSubmit(onSubmit)}>
            <Card sx={{
                width:"40%",
                margin:"0px auto",
                
                display:"flex",
                flexDirection:"column",
                justifyContent:"center",
             
                padding:"20px"
            }}>
               
                    <TextField sx={{width:"90%",marginBottom:"10px"}} label="Nombre Medicamento" {...register("med_nombre",{required:true})}  />
                    {errors.med_nombre && <Alert severity="error" sx={{width:"90%" }}>Por favor llenar este campo</Alert>}
                    <TextField label="Compuesto" sx={{width:"90%",marginBottom:"10px",marginTop:"10px"}} {...register("med_compuesto",{required:true})} />
                    {errors.med_compuesto && <Alert severity="error" sx={{width:"90%" }}>Por favor llenar este campo</Alert>}
                   
                <Box sx={{width:"50%",margin:"0px auto",marginTop:"10px",display:"flex",justifyContent:"center"}}>
                    <Button type="submit" variant="contained" >Enviar datos</Button>
                </Box>
                
            </Card>
            </form>
        </Grid>
    )
};

export default RegistrarMedicamento;