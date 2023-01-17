import { Alert, Box, Button, Card, Grid, TextField, Typography } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Header from "../../components/header/header";
import clienteAxios from "../../helpers/clienteAxios";
import { createCentro } from "../../Queries/queriesCentro";

const RegistrarCentro = ()=>{
    const {register,handleSubmit,formState:{errors}} = useForm();
    const navigate = useNavigate();
    const onSubmit = async(data)=>{
        const response = await clienteAxios.post("/centro/create",data);
        if(response.status===200){
            navigate("/centros");
        }
    }

    return (
        <Grid container sx={{width:"100%",display:"flex",flexDirection:"column"}}>
        <Header/>
        <Typography variant="h5" sx={{textAlign:"center",marginTop:"10px",marginBottom:"10px"}}>Registro de centros</Typography>
        <form onSubmit={handleSubmit(onSubmit)}>
        <Card sx={{
            width:"40%",
            margin:"0px auto",
            
            display:"flex",
            flexDirection:"column",
            justifyContent:"center",
         
            padding:"20px"
        }}>
           
                <TextField type="number" sx={{width:"90%",marginBottom:"10px"}} label="Código" {...register("cd_codigo",{required:true})}  />
                {errors.cd_codigo && <Alert severity="error" sx={{width:"90%" }}>Por favor llenar este campo</Alert>}
                <TextField label="Dirección" sx={{width:"90%",marginBottom:"10px",marginTop:"10px"}} {...register("cd_direccion",{required:true})} />
                {errors.cd_direccion && <Alert severity="error" sx={{width:"90%" }}>Por favor llenar este campo</Alert>}
                <TextField label="Teléfono" type="text"  sx={{width:"90%",marginBottom:"10px",marginTop:"10px"}} {...register("cd_telefono",{required:true})} />
                {errors.cd_telefono && <Alert severity="error" sx={{width:"90%" }}>Por favor llenar este campo</Alert>}
            <Box sx={{width:"50%",margin:"0px auto",marginTop:"10px",display:"flex",justifyContent:"center"}}>
                <Button type="submit" variant="contained" >Enviar datos</Button>
            </Box>
            
        </Card>
        </form>
    </Grid>
    )
};

export default RegistrarCentro;
