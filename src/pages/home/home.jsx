import { Button, Grid } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";
import Header from "../../components/header/header";

const Home = ()=>{
    return(
        <Grid container sx={{
            width:"100%",
            display:"flex",
            flexDirection:"column"
        }}>
            <Header />
            <Grid item sx={{
                width:"75%",
                margin:"0px auto",
                display:"flex",
                flexDirection:"column",
                justifyContent:"center",
              
                alignItems:"center",
                marginTop:"40px"
            }}>
                <NavLink className="btn btn-primary mt-3" to="/farmacias" >Farmacias</NavLink>
                <NavLink className="btn btn-primary mt-3" to="/centros" >Centros de distribución</NavLink>
                <NavLink className="btn btn-primary mt-3" >Medicamentos</NavLink>
                <NavLink className="btn btn-primary mt-3" >Ingresos</NavLink>
                <NavLink className="btn btn-primary mt-3" >Traspasos</NavLink>
                <NavLink className="btn btn-primary mt-3">Egresos</NavLink>
            </Grid>
            <Grid item sx={{
                width:"75%",
                margin:"0px auto",
                display:"flex",
                justifyContent:"center",
                alignItems:"center",
                height:"100px",
            }}>
             
            </Grid>
        </Grid>
        
    )
}

export default Home;