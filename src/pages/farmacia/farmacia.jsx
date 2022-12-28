import { Grid } from "@mui/material";
import React from "react";
import Header from "../../components/header/header";
import ShowFarmacias from "../../components/showFarmacias/showFarmacias";

const Farmacia = ()=>{
    return(
        <Grid container sx={{
            margin:0,
            padding:0,
            width:"100%",
            display:"flex",
            flexDirection:"column"
        }}>
            <Header/>
            <ShowFarmacias/>

        </Grid>
    )
}

export default Farmacia;