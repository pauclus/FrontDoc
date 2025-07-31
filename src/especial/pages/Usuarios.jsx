// src/pages/Usuarios.jsx
import { useState } from 'react';
import Mapa from '../components/Mapa'; // Tu componente MapaInteractivo
import L from 'leaflet';

// Solución para iconos si estás en Vite/Webpack
delete L.Icon.Default.prototype._getIconUrl;
import icon from 'leaflet/dist/images/marker-icon.png';
import iconRetina from 'leaflet/dist/images/marker-icon-2x.png';
import shadow from 'leaflet/dist/images/marker-shadow.png';

L.Icon.Default.mergeOptions({
  iconRetinaUrl: iconRetina,
  iconUrl: icon,
  shadowUrl: shadow,
});

export const Usuarios = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    ubicacion: null, // Coordenadas del mapa
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleUbicacionSeleccionada = (coords) => {
    setFormData((prev) => ({
      ...prev,
      ubicacion: coords,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Formulario enviado:', formData);
    // Aquí puedes hacer una petición POST al backend
  };

  return (
    <div style={{ display: 'flex', flex:1, padding: '2rem', gap: '2rem' }}>
      {/* Columna izquierda: formulario */}
      <form onSubmit={handleSubmit} style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <h2>Registrar Dueño</h2>
        <input
          type="text"
          name="nombre"
          placeholder="Nombre"
          value={formData.nombre}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Correo"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="tel"
          name="telefono"
          placeholder="Teléfono"
          value={formData.telefono}
          onChange={handleChange}
        />

        {/* Mostrar coordenadas si están definidas */}
        {formData.ubicacion && (
          <small>
            Ubicación: Lat {formData.ubicacion.lat.toFixed(5)}, Lng {formData.ubicacion.lng.toFixed(5)}
          </small>
        )}

        <button type="submit">Registrar</button>
      </form>

      {/* Columna derecha: Mapa */}
      <div style={{ flex: 1 }}>
        <h2>Selecciona Dirección</h2>
        <Mapa onUbicacionSeleccionada={handleUbicacionSeleccionada} />
      </div>
    </div>
  );
};
