import React, { useState } from 'react';
import Buscador from '../../general/components/Buscador';
import { useSelector } from 'react-redux';

import TarjetaPerroBasica from '../components/TarjetaPerroBasica';
import TarjetaPerroAmplia from '../components/TarjetaPerroAmplia';

export const Detalles = () => {
    const [perros, setPerros] = useState([]);
    const [vistaAmplia, setVistaAmplia] = useState(false);
    const [cargando, setCargando] = useState(false);

    // Datos de ejemplo para demostración
    const perrosEjemplo = [
        {
            id_perro: 1,
            nombre: "Luna",
            raza: "Golden Retriever",
            edad: 3,
            color: "Dorado",
            tamaño: "grande",
            comportamiento: "tranquilo",
            ubicacion: "Parque Central",
            chip_codigo: "CHIP001",
            qr_codigo: "QR001",
            estado: "activo",
            fecha_registro: "2024-01-15T10:30:00"
        },
        {
            id_perro: 2,
            nombre: "Max",
            raza: "Pastor Alemán",
            edad: 5,
            color: "Negro y marrón",
            tamaño: "grande",
            comportamiento: "entrenado",
            ubicacion: "Zona Norte",
            chip_codigo: "CHIP002",
            qr_codigo: "QR002",
            estado: "activo",
            fecha_registro: "2024-02-20T14:15:00"
        },
        {
            id_perro: 3,
            nombre: "Bella",
            raza: "Chihuahua",
            edad: 2,
            color: "Blanco",
            tamaño: "pequeño",
            comportamiento: "juguetón",
            ubicacion: "Centro Comercial",
            chip_codigo: "CHIP003",
            qr_codigo: "QR003",
            estado: "perdido",
            fecha_registro: "2024-03-10T09:45:00"
        }
    ];

    const handleBuscar = async (termino) => {
        setCargando(true);
        
        // Simular búsqueda
        setTimeout(() => {
            const resultados = perrosEjemplo.filter(perro => 
                perro.nombre.toLowerCase().includes(termino.toLowerCase()) ||
                perro.raza.toLowerCase().includes(termino.toLowerCase()) ||
                perro.color.toLowerCase().includes(termino.toLowerCase())
            );
            setPerros(resultados);
            setCargando(false);
        }, 500);
    };

    const handleBuscarTodos = () => {
        setCargando(true);
        setTimeout(() => {
            setPerros(perrosEjemplo);
            setCargando(false);
        }, 500);
    };

    return (
        <div style={{ 
            flex: '1', 
            display: 'flex', 
            flexDirection: 'column',
            padding: '20px',
            backgroundColor: '#f5f5f5'
        }}>
            {/* Header */}
            <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: '20px',
                padding: '16px',
                backgroundColor: 'white',
                borderRadius: '8px',
                boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
            }}>
                <h1 style={{ margin: 0, color: '#333' }}>Buscador de Perros</h1>
                
                <div style={{ display: 'flex', gap: '12px' }}>
                    <button 
                        onClick={() => setVistaAmplia(false)}
                        style={{
                            padding: '8px 16px',
                            border: '1px solid #ddd',
                            borderRadius: '6px',
                            backgroundColor: !vistaAmplia ? '#007bff' : 'white',
                            color: !vistaAmplia ? 'white' : '#333',
                            cursor: 'pointer'
                        }}
                    >
                        Vista Básica
                    </button>
                    <button 
                        onClick={() => setVistaAmplia(true)}
                        style={{
                            padding: '8px 16px',
                            border: '1px solid #ddd',
                            borderRadius: '6px',
                            backgroundColor: vistaAmplia ? '#007bff' : 'white',
                            color: vistaAmplia ? 'white' : '#333',
                            cursor: 'pointer'
                        }}
                    >
                        Vista Amplia
                    </button>
                </div>
            </div>

            {/* Buscador */}
            <div style={{
                marginBottom: '20px',
                padding: '16px',
                backgroundColor: 'white',
                borderRadius: '8px',
                boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
            }}>
                <Buscador titulo='Buscar Perros' onBuscar={handleBuscar} />
                <button 
                    onClick={handleBuscarTodos}
                    style={{
                        marginTop: '12px',
                        padding: '8px 16px',
                        border: '1px solid #28a745',
                        borderRadius: '6px',
                        backgroundColor: '#28a745',
                        color: 'white',
                        cursor: 'pointer'
                    }}
                >
                    Mostrar Todos
                </button>
            </div>

            {/* Resultados */}
            <div style={{ flex: 1 }}>
                {cargando ? (
                    <div style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        height: '200px',
                        color: '#666'
                    }}>
                        Buscando perros...
                    </div>
                ) : perros.length > 0 ? (
                    <div style={{
                        display: vistaAmplia ? 'grid' : 'flex',
                        gridTemplateColumns: vistaAmplia ? 'repeat(auto-fill, minmax(400px, 1fr))' : '1fr',
                        flexDirection: vistaAmplia ? 'row' : 'column',
                        gap: '16px',
                        padding: '16px',
                        backgroundColor: 'white',
                        borderRadius: '8px',
                        boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                    }}>
                        {perros.map(perro => (
                            <div key={perro.id_perro}>
                                {vistaAmplia ? (
                                    <TarjetaPerroAmplia perro={perro} />
                                ) : (
                                    <TarjetaPerroBasica perro={perro} />
                                )}
                            </div>
                        ))}
                    </div>
                ) : (
                    <div style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        height: '200px',
                        color: '#666',
                        backgroundColor: 'white',
                        borderRadius: '8px',
                        boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                    }}>
                        No se encontraron perros. Intenta con otra búsqueda.
                    </div>
                )}
            </div>
        </div>
    );
};