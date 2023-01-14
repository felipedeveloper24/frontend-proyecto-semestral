import { Alert, Box, Button, Card, Grid, TextField, Typography } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Header from "../../components/header/header";
import { createFarmacia } from "../../Queries/queriesFarmacia";

const RegistroFarmacia = ()=>{
    const {register,handleSubmit, formState:{errors}} = useForm();
    const navigate = useNavigate();
    const onSubmit=(data)=>{
        //llamamos a nuestra funcion para enviar la info al endpoint del backend
        createFarmacia(data);
        navigate("/");
    };

    return (
        <Grid container sx={{width:"100%",display:"flex",flexDirection:"column"}}>
            <Header/>
            <Typography variant="h5" sx={{textAlign:"center",marginTop:"10px",marginBottom:"10px"}}>Registro de farmacia</Typography>
            <form onSubmit={handleSubmit(onSubmit)}>
            <Card sx={{
                width:"40%",
                margin:"0px auto",
                
                display:"flex",
                flexDirection:"column",
                justifyContent:"center",
             
                padding:"20px"
            }}>
               
                    <TextField sx={{width:"90%",marginBottom:"10px"}} label="Nombre" {...register("farm_nombre",{required:true})}  />
                    {errors.farm_nombre && <Alert severity="error" sx={{width:"90%" }}>Por favor llenar este campo</Alert>}
                    <TextField label="Dirección" sx={{width:"90%",marginBottom:"10px",marginTop:"10px"}} {...register("farm_direccion",{required:true})} />
                    {errors.farm_direccion && <Alert severity="error" sx={{width:"90%" }}>Por favor llenar este campo</Alert>}
                    <TextField label="Email" type="email"  sx={{width:"90%",marginBottom:"10px",marginTop:"10px"}} {...register("farm_mail",{required:true})} />
                    {errors.farm_mail && <Alert severity="error" sx={{width:"90%" }}>Por favor llenar este campo</Alert>}
                <Box sx={{width:"50%",margin:"0px auto",marginTop:"10px",display:"flex",justifyContent:"center"}}>
                    <Button type="submit" variant="contained" >Enviar datos</Button>
                </Box>
                
            </Card>
            </form>
        </Grid>
    )
}


export default RegistroFarmacia;