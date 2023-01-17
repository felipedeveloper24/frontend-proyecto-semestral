import { Grid,Card,TextField,Typography,Box,Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import clienteAxios from "../../helpers/clienteAxios";
import Header from "../../components/header/header"
const ModificarCentro = ()=>{
    const [centro, SetCentro] = useState({
        cd_codigo:"",
        cd_direccion:"",
        cd_telefono:""
    });
    const [isLoading,setLoading] = useState(false);
    const {id} = useParams();
    const navigate = useNavigate();
    const getCentro = async()=>{
        const response = await clienteAxios.get(`/centro/show/${id}`);
        if(response.status==200){
            SetCentro(response.data[0]);
            setLoading(true);
        }
    }
    useEffect(()=>{
        getCentro();
    },[]);
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        SetCentro({ ...centro, [name]: value });
      };
    const onSubmit = async(e)=>{
        e.preventDefault();
        const data = {
            id:id,
            cd_codigo : centro.cd_codigo,
            cd_direccion:centro.cd_direccion,
            cd_telefono:centro.cd_telefono
        }
        console.log(centro);
        const response = await clienteAxios.put(`/centro/update`,data);
        if(response.status===200){
            navigate("/centros");
        }
        
    }
    if(isLoading){
        return (
            <Grid sx={{width:"100%",display:"flex",flexDirection:"column"}}>
                <Header/>
                <Typography sx={{textAlign:"center",marginTop:"15px"}} variant="h4">Actualizar Centro</Typography>
                <form onSubmit={onSubmit}>
                <Card sx={{
                    width:"40%",
                    margin:"0px auto",
                    
                    display:"flex",
                    flexDirection:"column",
                    justifyContent:"center",
                 
                    padding:"20px"
                }}>
                   
                        <TextField  sx={{width:"90%",marginBottom:"10px"}} onChange={handleInputChange} value={centro.cd_codigo} name="cd_codigo"  label="Código" />
                        <TextField label="Dirección"  onChange={handleInputChange} value={centro.cd_direccion} name="cd_direccion" sx={{width:"90%",marginBottom:"10px",marginTop:"10px"}} />
            
                        <TextField label="Teléfono" type="text"  onChange={handleInputChange} value={centro.cd_telefono} name="cd_telefono"  sx={{width:"90%",marginBottom:"10px",marginTop:"10px"}}  />
    
                    <Box sx={{width:"50%",margin:"0px auto",marginTop:"10px",display:"flex",justifyContent:"center"}}>
                        <Button type="submit" variant="contained" >Enviar datos</Button>
                    </Box>
                    
                </Card>
                </form>
            </Grid>
        )
    }
    return (
            <Grid sx={{width:"100%",display:"flex",flexDirection:"column"}}>
                <Header/>
                <div>Cargando datos ........</div>
            </Grid>
    )
}

export default ModificarCentro;