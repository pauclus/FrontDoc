
const baseUrl = import.meta.env.VITE_APP_BACKEND_URL;

export const perroService = {


buscarPerros: async ({ nombre, dueñoId, raza, edad, color, comportamiento, tamaño, ubicacion }) => {
    const params = new URLSearchParams();

    if (nombre) params.append('nombre', nombre);
    if (dueñoId) params.append('dueñoId', dueñoId);
    if (raza) params.append('raza', raza);
    if (edad) params.append('edad', edad);
    if (color) params.append('color', color);
    if (comportamiento) params.append('comportamiento', comportamiento);
    if (tamaño) params.append('tamaño', tamaño);
    if (ubicacion) params.append('ubicacion', ubicacion);

    const url = `${baseUrl}api/perros/buscar?${params.toString()}`;

    const response = await fetch(url);
    if (!response.ok) throw new Error('Error al buscar perros');

    return await response.json();
},
    /**
     * Crea un nuevo perro y lo asocia a un usuario como dueño principal
     */
    crearPerro: async (perro, idUsuario)=>{
        const response = await fetch(`${baseUrl}api/perros/crear?idUsuario=${idUsuario}`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(perro)
        });
    },

    crearPerro: async(perro, idUsuario)=>{
        const response = await fetch(`${baseUrl}/api/perros/crear?idUsuario=${idUsuario}`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(perro)
        });
        if (!response.ok) throw new Error('Error al crear perro');
        return response.json();
      },
      
       guardarPerro: async(perro) =>{
        const response = await fetch(`${baseUrl}/api/perros/guardar`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(perro)
        });
        if (!response.ok) throw new Error('Error al guardar perro');
        return response.json();
      },
      
       actualizarPerro: async(idPerro, perro)=>{
        const response = await fetch(`${baseUrl}/api/perros/${idPerro}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(perro)
        });
        if (!response.ok) throw new Error('Error al actualizar perro');
        return response.json();
      },
      
       obtenerPerroPorId: async(idPerro)=>{
        const response = await fetch(`${baseUrl}/api/perros/${idPerro}`);
        if (!response.ok) throw new Error('Perro no encontrado');
        return response.json();
      },
      
       obtenerTodosLosPerros: async()=>{
        const response = await fetch(`${baseUrl}/api/perros`);
        if (!response.ok) throw new Error('Error al obtener perros');
        return response.json();
      },
      
       obtenerPerrosPorUsuario: async(idUsuario)=>{
        const response = await fetch(`${baseUrl}/api/perros/usuario/${idUsuario}`);
        if (!response.ok) throw new Error('Error al obtener perros por usuario');
        return response.json();
      },
      
       contarPerrosPorRazas: async(razas) =>{
        const response = await fetch(`${baseUrl}/api/perros/por-raza`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(razas)
        });
        if (!response.ok) throw new Error('Error al contar perros por raza');
        return response.json();
      }
      

}