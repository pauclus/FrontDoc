export const silaboService = {

    crearSilabo: async (cursoId)=>{
        const response = await fetch(`http://localhost:8080/silabo/Crear/${cursoId}`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }
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