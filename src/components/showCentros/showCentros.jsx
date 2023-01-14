import { Grid, Typography,Button,Alert} from "@mui/material";
import React from "react";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import { getCentros } from "../../Queries/queriesCentro";
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Table from "@mui/material/Table";
import Paper from '@mui/material/Paper';
import DeleteIcon from '@mui/icons-material/Delete';
import ChangeCircleIcon from '@mui/icons-material/ChangeCircle';
import { deleteCentro } from "../../Queries/queriesCentro";
const ShowCentros = ()=>{
    const {data,isLoading} = useQuery("centros",getCentros);
    if(!isLoading && !data.mensaje){
        return(
            <Grid sx={{
                width:"75%",
                margin:"0px auto"
            }}>
                <Typography variant="h4" sx={{textAlign:"center",marginTop:"10px",marginBottom:"10px"}}>Listado de centros <Link to="/registrarCentro" className="btn btn-primary">Registrar Centro de distribución</Link> </Typography>
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
                        <TableBody>
                            {
                                data.data.map((centro,idx)=>{
                                    return(
                                    <TableRow key={idx}>
                                          <TableCell component="th" scope="row">
                                                {centro.cd_codigo}
                                            </TableCell>
                                            <TableCell >{centro.cd_direccion}</TableCell>
                                            <TableCell >{centro.cd_telefono}</TableCell>
                                            <TableCell  >
                                                <Button color="success"  >
                                                    <ChangeCircleIcon />
                                                </Button>
                                                <Button color="error" onClick={()=>deleteCentro(centro.id)}  >
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
    if(!isLoading && data.mensaje){
        return(
            <Grid sx={{
                width:"75%",
                margin:"0px auto"
            }}>
               <Typography variant="h4" sx={{textAlign:"center",marginTop:"10px",marginBottom:"10px"}}>Listado de centros <Link to="/registrarFarmacia" className="btn btn-primary">Registrar Centro de distribución</Link> </Typography>
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
                    <Alert severity="error" sx={{width:"50%",margin:"0px auto",marginTop:"20px"}}>{data.mensaje}</Alert>
    
            </Grid>
        )
    }
};

export default ShowCentros;