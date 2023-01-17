import { Alert, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import Header from "../../components/header/header";
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Table from "@mui/material/Table";
import Paper from '@mui/material/Paper';
import { useParams } from "react-router-dom";
import clienteAxios from "../../helpers/clienteAxios";


const VerStock = ()=>{
    const [stocks,setStock] = useState([]);
    const [mensaje,setMensaje] = useState("");
    const [loading,setLoading] = useState(false);
    const {id} = useParams();

    const getStock = async()=>{
        const response = await clienteAxios.get(`centro/showStock/${id}`);
        if(response.status==200){
            if(response.data.mensaje){
                setMensaje(response.data.mensaje);
                setLoading(true);
            }else{
                setStock(response.data.stock);
                setLoading(true);
            }
           
            
        }
    }
    useEffect(()=>{
           getStock(); 
    },[])

    if(loading && mensaje.length<=0){
        return (
            <Grid sx={{width:"100%",display:"flex",flexDirection:"column"}}>
                <Header/>
                <Typography variant="h4" sx={{textAlign:"center",marginTop:"10px",marginBottom:"10px"}}>Stock Disponible</Typography>
                <Grid sx={{width:"75%",margin:"0px auto"}}>
                <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                            <TableHead>
                            <TableRow>
                                <TableCell>Lote</TableCell>
                                <TableCell>Medicamento</TableCell>
                                <TableCell >Compuesto</TableCell>
                                <TableCell >Cantidad</TableCell>
                            </TableRow>
                            </TableHead>
                            <TableBody>
                              {
                                stocks.map((stock,idx)=>{
                                    return (
                                        <TableRow key={idx}>
                                            <TableCell>{stock.lote}</TableCell>
                                            <TableCell>{stock.nombre}</TableCell>
                                            <TableCell>{stock.compuesto}</TableCell>
                                            <TableCell>{stock.stock}</TableCell>
                                        </TableRow>
                                    )
                                })
                              }
            
                            </TableBody>
                        </Table>
                        </TableContainer>
                        </Grid>
            </Grid>
        )
    }
        return (
            <Grid sx={{width:"100%",display:"flex",flexDirection:"column"}}>
                <Header/>
                <Typography variant="h4" sx={{textAlign:"center",marginTop:"10px",marginBottom:"10px"}}>Stock Disponible</Typography>
                <Grid sx={{width:"75%",margin:"0px auto"}}>
                <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                            <TableHead>
                            <TableRow>
                                <TableCell>Lote</TableCell>
                                <TableCell>Medicamento</TableCell>
                                <TableCell >Compuesto</TableCell>
                                <TableCell >Cantidad</TableCell>
                            </TableRow>
                            </TableHead>
                            <TableBody>
                            </TableBody>
                        </Table>
                        </TableContainer>
                        <Alert severity="error" sx={{width:"50%",margin:"0px auto",marginTop:"10px"}}>{mensaje}</Alert>
                        </Grid>
            </Grid>
        );
}

export default VerStock;