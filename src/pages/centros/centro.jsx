import { Grid, Typography } from "@mui/material";
import React from "react";
import Header from "../../components/header/header";
import ShowCentros from "../../components/showCentros/showCentros";


const Centro = ()=>{
    return (
        <Grid sx={{width:"100%",display:"flex",flexDirection:"column"}}>
            <Header/>
            <ShowCentros/>
        </Grid>
    );
}
export default Centro;