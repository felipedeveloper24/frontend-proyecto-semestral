import { Alert, Button, CircularProgress, Grid, Typography } from "@mui/material";
import React from "react";
import { useQuery } from "react-query";
import { deleteFarmacia, getFarmacias } from "../../Queries/queriesFarmacia";
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Table from "@mui/material/Table";
import Paper from '@mui/material/Paper';
import DeleteIcon from '@mui/icons-material/Delete';
import ChangeCircleIcon from '@mui/icons-material/ChangeCircle';
import { Link, useNavigate } from "react-router-dom";
const ShowFarmacias = ()=>{
const {data,isLoading,refetch} = useQuery("farmacias",getFarmacias);
const navigate = useNavigate();

    if(!isLoading && data.mensaje){
 
        return(
            <Grid sx={{
                width:"75%",
                margin:"0px auto"
            }}>
                <Typography variant="h4" sx={{textAlign:"center",marginTop:"10px",marginBottom:"10px"}}>Listado de farmacias <Link to="/farmacia" className="btn btn-primary">Registrar Farmacia</Link> </Typography>
               <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                        <TableRow>
                            <TableCell>Nombre</TableCell>
                            <TableCell >Dirección</TableCell>
                            <TableCell >Email</TableCell>
                            <TableCell>Acciones</TableCell>
                        </TableRow>
                        </TableHead>
                        
                    </Table>
                    </TableContainer>
                    <Alert severity="error" sx={{width:"25%",margin:"0px auto",marginTop:"20px"}}>{data.mensaje}</Alert>
    
            </Grid>
        )
    }
    if(!isLoading && !data.mensaje){
        
        return(
            <Grid sx={{
                width:"75%",
                margin:"0px auto"
            }}>
                <Typography variant="h4" sx={{textAlign:"center",marginTop:"10px",marginBottom:"10px"}}>Listado de farmacias <Link to="/registrarFarmacia" className="btn btn-primary">Registrar Farmacia</Link> </Typography>
               <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                        <TableRow>
                            <TableCell>Nombre</TableCell>
                            <TableCell >Dirección</TableCell>
                            <TableCell >Email</TableCell>
                            <TableCell>Acciones</TableCell>
                        </TableRow>
                        </TableHead>
                        <TableBody>
                            {
                                data.map((farmacia,idx)=>{
                                    return(
                                    <TableRow key={idx}>
                                          <TableCell component="th" scope="row">
                                                {farmacia.farm_nombre}
                                            </TableCell>
                                            <TableCell >{farmacia.farm_direccion}</TableCell>
                                            <TableCell >{farmacia.farm_mail}</TableCell>
                                            <TableCell  >
                                                <Button onClick={()=>navigate(`/modificarFarmacia/${farmacia.id}`)} color="success" >
                                                    <ChangeCircleIcon />
                                                </Button>
                                                <Button color="error"  onClick={()=>deleteFarmacia(farmacia.id)}>
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
    
    
    return (
        <Grid className="m-auto d-flex flex-column justify-content-center align-items-center">
            <Typography>Cargando datos de farmacia</Typography>
            <CircularProgress/>
        </Grid>
        
    )
  
};

export default ShowFarmacias;