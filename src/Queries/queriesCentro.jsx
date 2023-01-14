import clienteAxios from "../helpers/clienteAxios";

export async function getCentros(){
    const {status,data} = await clienteAxios.get("/centro/all");
    if(status===200){
        return data;
    }
}
export async function deleteCentro(id){
    const response = await clienteAxios.delete("/centro/delete",{data:{id:id}});
    console.log(response);
    window.location.reload(true);
}
export async function createCentro(centro){
    const response = await clienteAxios.post("/centro/create",centro)
    if(response.status==200){
        return response.data;
    }
}