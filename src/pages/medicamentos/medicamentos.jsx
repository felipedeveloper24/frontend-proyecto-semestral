import { Grid } from "@mui/material";
import React from "react";
import { useQuery } from "react-query";
import Header from "../../components/header/header";
import ShowMedicamentos from "../../components/showMedicamentos/showMedicamentos";
import getMedicamentos from "../../Queries/queriesMedicamentos";
const Medicamentos = ()=>{

    return (
        <Grid sx={{width:"100%",display:"flex",flexDirection:"column"}}>
            <Header/>
            <ShowMedicamentos/>
        </Grid>
    );
}

export default Medicamentos;