import { Grid } from "@mui/material";
import React from "react";
import { useQuery } from "react-query";
import { getFarmacias } from "../../Queries/queriesFarmacia";
const ShowFarmacias = ()=>{
const {data,isLoading} = useQuery("farmacias",getFarmacias);
   
    if(!isLoading){
        return(
            <Grid sx={{
                width:"75%",
                margin:"0px auto"
            }}>
             {
                data.map((farmacia)=>{
                    console.log(farmacia);
                })
             }
              
    
            </Grid>
        )
    }
  
};

export default ShowFarmacias;