import { Grid, Typography } from "@mui/material";
import React from "react";

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
        </Grid>
    )
}

export default Header;