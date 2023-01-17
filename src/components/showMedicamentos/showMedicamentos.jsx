import { Grid,Typography,Alert,Button} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { Link, useNavigate } from "react-router-dom";
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Table from "@mui/material/Table";
import Paper from '@mui/material/Paper';
import DeleteIcon from '@mui/icons-material/Delete';
import ChangeCircleIcon from '@mui/icons-material/ChangeCircle';
import clienteAxios from "../../helpers/clienteAxios";
const ShowMedicamentos = ()=>{
    const navigate = useNavigate();
    const [medicamentos,setMedicamentos] = useState([]);
    const [loading,setLoading] = useState(false);
    const [mensaje,setMensaje] = useState(""); 
    const getMedicamentos = async()=>{
        const response = await clienteAxios.get("/medicamento/all");
        console.log(response.data);
        if(response.status===200){
            if(response.data.mensaje){
                setMensaje(response.data.mensaje);
                setLoading(true)
            }else{
                setMedicamentos(response.data.data);
                setLoading(true)
            }
        }
    }
    useEffect(()=>{
        getMedicamentos();
    },[]);
    const deleteMedicamento = async(id)=>{
        const response = await clienteAxios.delete("/medicamento/delete",{
            data:{id:id}
        })
        if(response.status===200){
            window.location.reload(true);
        }
        
    }
    
    if(loading && mensaje<=0){

        return(
            <Grid sx={{
                width:"75%",
                margin:"0px auto"
            }}>
                <Typography variant="h4" sx={{textAlign:"center",marginTop:"10px",marginBottom:"10px"}}>Listado de Medicamentos <Link to="/registrarMedicamento" className="btn btn-primary">Registrar Medicamento</Link> </Typography>
               <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                        <TableRow>
                            <TableCell>Nombre</TableCell>
                            <TableCell >Compuesto</TableCell>
                            <TableCell>Acciones</TableCell>
                        </TableRow>
                        </TableHead>
                        <TableBody>
                            {
                                medicamentos.map((medicamento,idx)=>{
                                    return(
                                    <TableRow key={idx}>
                                          <TableCell component="th" scope="row">
                                                {medicamento.med_nombre}
                                            </TableCell>
                                            <TableCell >{medicamento.med_compuesto}</TableCell>
                                            <TableCell  >
                                                <Button color="success" onClick={()=>navigate(`/modificarMedicamento/${medicamento.id}`)}  >
                                                    <ChangeCircleIcon />
                                                </Button>
                                                <Button color="error" onClick={()=>deleteMedicamento(medicamento.id)}  >
                                                    <DeleteIcon  />
                                                </Button>
                                              
                                            </TableCell>
                                    </TableRow>
                                    )
                                    
                                })
                            }
                        </TableBody>
                    </Table>
                    </TableContainer>
              
    
            </Grid>
        )     
    }
    
    if(loading && mensaje.length>0){
        console.log(mensaje);
        return(
            <Grid sx={{
                width:"75%",
                margin:"0px auto"
            }}>
               <Typography variant="h4" sx={{textAlign:"center",marginTop:"10px",marginBottom:"10px"}}>Listado de Medicamentos <Link to="/registrarMedicamento" className="btn btn-primary">Registrar Medicamento</Link> </Typography>
               <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                        <TableRow>
                            <TableCell>Código</TableCell>
                            <TableCell >Dirección</TableCell>
                            <TableCell >Teléfono</TableCell>
                            <TableCell>Acciones</TableCell>
                        </TableRow>
                        </TableHead>
                        
                    </Table>
                    </TableContainer>
                    <Alert severity="error" sx={{width:"50%",margin:"0px auto",marginTop:"20px"}}>{mensaje}</Alert>
    
            </Grid>
        )
    }
    
   
};

export default ShowMedicamentos;