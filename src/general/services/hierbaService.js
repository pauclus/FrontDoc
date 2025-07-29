export const hierbaService = {

    buscarHierbas: async (parteNombre) => {
        const response = await fetch(`${import.meta.env.VITE_APP_BACKEND_URL}api/hierbas/por-nombre?parteNombre=${parteNombre}`);
        const data = await response.json();
        return data;
    }
}