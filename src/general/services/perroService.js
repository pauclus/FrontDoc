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

    const url = `${import.meta.env.VITE_APP_BACKEND_URL}api/perros/buscar?${params.toString()}`;

    const response = await fetch(url);
    if (!response.ok) throw new Error('Error al buscar perros');

    return await response.json();
}
}