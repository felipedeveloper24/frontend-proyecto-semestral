import { Alert, Box, Button, Card, Grid, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import clienteAxios from "../../helpers/clienteAxios";
import { useNavigate, useParams } from "react-router-dom";
import Header from "../../components/header/header";

const Modificar = ()=>{
    const {register,handleSubmit, formState:{errors}} = useForm(); 
    const {id} = useParams();
    const [loading,setLoading] = useState(false);
    const navigate = useNavigate();
    const [farmacia,setFarmacia] = useState({
        farm_nombre:'',
        farm_direccion:'',
        farm_mail:''
    })
    const [farm_nombre,setFarm_nombre]=useState("");
    const [farm_direccion,setFarm_direccion]=useState("");
    const [farm_mail,setFarm_mail]=useState("");
    const getFarmacia= async(id)=>{
        const response = await clienteAxios.get(`/farmacia/show/${id}`);
        setLoading(true);
        setFarmacia(response.data[0]);
    }
    useEffect(()=>{
        getFarmacia(id);
    },[]);
  
    const onSubmit= async(e)=>{
        e.preventDefault();
        //llamamos a nuestra funcion para enviar la info al endpoint del backend
        const response = await clienteAxios.put("/farmacia/update",{
            id:id,
            farm_nombre:farmacia.farm_nombre,
            farm_direccion:farmacia.farm_direccion,
            farm_mail: farmacia.mail
        })
        console.log(response.data);
        if(response.status===200){
            navigate("/farmacias");
        }
      
    };
    const handleInputChange = (event) => {
        const { name, value } = event.target;

        setFarmacia({ ...farmacia, [name]: value });
      };
    if(loading){
  
        return(
            <Grid container sx={{width:"100%",display:"flex",flexDirection:"column"}}>
                <Header/>
                <Typography variant="h5" sx={{textAlign:"center",marginTop:"10px",marginBottom:"10px"}}>Actualización de farmacia</Typography>
                <form onSubmit={onSubmit}>
                <Card sx={{
                    width:"40%",
                    margin:"0px auto",
                    
                    display:"flex",
                    flexDirection:"column",
                    justifyContent:"center",
                 
                    padding:"20px"
                }}>
                   
                        <TextField  sx={{width:"90%",marginBottom:"10px"}} onChange={handleInputChange} value={farmacia.farm_nombre} name="farm_nombre"  label="Nombre" />
                        {errors.farm_nombre && <Alert severity="error" sx={{width:"90%" }}>Por favor llenar este campo</Alert>}
                        <TextField label="Dirección"  onChange={handleInputChange} value={farmacia.farm_direccion} name="farm_direccion" sx={{width:"90%",marginBottom:"10px",marginTop:"10px"}} />
                        {errors.farm_direccion && <Alert severity="error" sx={{width:"90%" }}>Por favor llenar este campo</Alert>}
                        <TextField label="Email" type="email"  onChange={handleInputChange} value={farmacia.farm_mail} name="farm_mail"  sx={{width:"90%",marginBottom:"10px",marginTop:"10px"}}  />
                        {errors.farm_mail && <Alert severity="error" sx={{width:"90%" }}>Por favor llenar este campo</Alert>}
                    <Box sx={{width:"50%",margin:"0px auto",marginTop:"10px",display:"flex",justifyContent:"center"}}>
                        <Button type="submit" variant="contained" >Enviar datos</Button>
                    </Box>
                    
                </Card>
                </form>
            </Grid>
        )
    }
    return <div>Cargando datos......</div>
    
   
}
export default Modificar;