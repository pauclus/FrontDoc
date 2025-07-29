export const silaboService = {

    crearSilabo: async (silabo)=>{
        const response = await fetch(`http://localhost:8080/silabo/Crear`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(silabo)
        });
    },

    eliminarSilabo: async (id)=>{
        const response = await fetch(`http://localhost:8080/silabo/Eliminar/${id}`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }
}