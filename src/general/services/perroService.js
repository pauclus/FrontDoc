export const perroService = {

    buscarCursos: async (parteNombre) => {
        const response = await fetch(`${import.meta.env.VITE_APP_BACKEND_URL}api/cursos/por-nombre?parteNombre=${parteNombre}`);
        const data = await response.json();
        return data;
    }
}