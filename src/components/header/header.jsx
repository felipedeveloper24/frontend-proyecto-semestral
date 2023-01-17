import { Grid, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
const Header = ()=>{
    return(
        <Grid item sx={{
            width:"100%",
            display:"flex",
            backgroundColor:"#0f172a",
            height:"70px"
        }}>
            <Grid sx={{
                width:"50%",
                display:"flex",
                justifyContent:"center",
                alignItems:"center"
            }}>
                <Typography sx={{
                    color:"white",
                    textTransform:"uppercase"
                }} >Distribuidor de fármacos</Typography>
            </Grid>
            <Grid sx={{width:"30%",display:"flex",justifyContent:"flex-start",alignItems:"flex-start"}}>
                
            </Grid>
            <Link  className="text-white text-decoration-none text-uppercase m-auto" to="/">Inicio</Link>
        </Grid>
    )
}

export default Header;