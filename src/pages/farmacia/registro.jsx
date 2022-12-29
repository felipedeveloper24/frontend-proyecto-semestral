import { Alert, Box, Button, Card, Grid, TextField, Typography } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";

import Header from "../../components/header/header";


const RegistroFarmacia = ()=>{
    const {register,handleSubmit, formState:{errors}} = useForm();

    const onSubmit=(data)=>{
        console.log(data);
    };

    return (
        <Grid container sx={{width:"100%",display:"flex",flexDirection:"column"}}>
            <Header/>
            <Typography variant="h5" sx={{textAlign:"center",marginTop:"10px",marginBottom:"10px"}}>Registro de farmacia</Typography>
            <form onSubmit={handleSubmit(onSubmit)}>
            <Card sx={{
                width:"50%",
                margin:"0px auto",
                
                display:"flex",
                flexDirection:"column",
                justifyContent:"center",
                alignItems:"center",
                padding:"20px"
            }}>
               
            
                    <TextField sx={{width:"70%",marginBottom:"10px"}} label="Nombre" {...register("nombre",{required:true})}  />
                    {errors.nombre && <Alert severity="error">Por favor llene el campo</Alert>}
                    <TextField label="Dirección" sx={{width:"70%",marginBottom:"10px"}} {...register("direccion",{required:true})} />
                    <TextField label="Email" type="email"  sx={{width:"70%",marginBottom:"10px"}} {...register("email",{required:true})} />

                <Box sx={{width:"50%",margin:"0px auto",display:"flex",justifyContent:"center"}}>
                    <Button type="submit" variant="contained" >Enviar datos</Button>
                </Box>
                
            </Card>
            </form>
        </Grid>
    )
}


export default RegistroFarmacia;