import { Card, FormControl, Grid, InputLabel, MenuItem, Select, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import Header from "../../components/header/header"
import clienteAxios from "../../helpers/clienteAxios";
const IngresoCentro = ()=>{
    const [medicamentos,setMedicamentos] = useState([]);
    const [centros,setCentros] = useState([]);

    const [medicamento,setMedicamento] = useState({
        id:'',
    })

    const getMedicamentos = async()=>{
        const response = await clienteAxios.get("/medicamento/all");
        setMedicamentos(response.data.data);
    }
   

    const getCentros = async ()=>{
        const response = await clienteAxios.get("/centro/all");
        
        console.log(response.data.data);
    }

    useEffect(()=>{
        getMedicamentos();
        getCentros();
    },[])
    const handleChange = (event) => {
        setMedicamento(event.target.value);
      };
    return (
        <Grid container sx={{width:"100%",display:"flex",flexDirection:"column"}}>
            <Header/>
            <Typography>Ingreso</Typography>
            <Card  sx={{width:"25%",margin:"0px auto",padding:"30px"}}>
                <FormControl fullWidth>
                    <InputLabel>Medicamentos</InputLabel>
                    <Select name="id" onChange={handleChange}>
                        {
                            medicamentos.map((medicamento,idx)=>{
                                return(
                                    <MenuItem value={medicamento.id}>{medicamento.med_nombre}</MenuItem>
                                )
                            })
                        }
                    </Select>
                  
                </FormControl>

            </Card>
        </Grid>
    );
};


export default IngresoCentro;