// MapaInteractivo.jsx
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet';
import { useState } from 'react';
import L from 'leaflet';

import 'leaflet/dist/leaflet.css';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconRetina from 'leaflet/dist/images/marker-icon-2x.png';
import shadow from 'leaflet/dist/images/marker-shadow.png';

L.Icon.Default.mergeOptions({
  iconRetinaUrl: iconRetina,
  iconUrl: icon,
  shadowUrl: shadow,
});

function LocationMarker({ onChange }) {
  const [position, setPosition] = useState(null);

  const radioMaximo = 3700; // 3700 metros = 3.7 km
  const centro = L.latLng(-12.077222, -77.092778);
  useMapEvents({
    click(e) {
      const distancia = centro.distanceTo(e.latlng); // en metros
      if (distancia <= radioMaximo) {
        setPosition(e.latlng);
        onChange(e.latlng);
      } else {
        alert('Ubicación fuera del área permitida (3.7 km)');
      }
    },
  });
  return position === null ? null : (
    <Marker
      position={position}
      draggable={true}
      eventHandlers={{
        dragend: (e) => {
          const newPos = e.target.getLatLng();
          setPosition(newPos);
          onChange(newPos);
        },
      }}
    >
      <Popup>Mi ubicación</Popup>
    </Marker>
  );
}

export default function MapaInteractivo({ onUbicacionSeleccionada }) {
  return (
    <MapContainer
      center={[-12.077222, -77.092778]} // reemplaza por tu ciudad
      zoom={13}
      style={{ height: '500px', width: '100%' }}
    >
      <TileLayer
        attribution='&copy; OpenStreetMap contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <LocationMarker onChange={onUbicacionSeleccionada} />
    </MapContainer>
  );
}
