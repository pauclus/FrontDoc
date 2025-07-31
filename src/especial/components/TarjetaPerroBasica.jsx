import React from 'react';

const TarjetaPerroBasica = ({ perro }) => {
    return (
        <div style={{
            display: 'flex',
            border: '1px solid #e0e0e0',
            borderRadius: '8px',
            padding: '12px',
            margin: '8px 0',
            backgroundColor: 'white',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
            minHeight: '80px',
            alignItems: 'center'
        }}>
            {/* Espacio para imagen */}
            <div style={{
                width: '60px',
                height: '60px',
                backgroundColor: '#f0f0f0',
                borderRadius: '8px',
                marginRight: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#999',
                fontSize: '12px'
            }}>
                Imagen
            </div>

            {/* Información básica */}
            <div style={{ flex: 1 }}>
                <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: '4px'
                }}>
                    <h3 style={{
                        margin: 0,
                        fontSize: '16px',
                        fontWeight: '600',
                        color: '#333'
                    }}>
                        {perro.nombre}
                    </h3>
                    <span style={{
                        padding: '2px 8px',
                        borderRadius: '12px',
                        fontSize: '11px',
                        fontWeight: '500',
                        backgroundColor: perro.estado === 'activo' ? '#e8f5e8' : 
                                       perro.estado === 'perdido' ? '#fff3cd' : '#f8d7da',
                        color: perro.estado === 'activo' ? '#28a745' : 
                               perro.estado === 'perdido' ? '#856404' : '#721c24'
                    }}>
                        {perro.estado}
                    </span>
                </div>
                
                <div style={{
                    display: 'flex',
                    gap: '12px',
                    fontSize: '13px',
                    color: '#666'
                }}>
                    <span><strong>Raza:</strong> {perro.raza}</span>
                    <span><strong>Edad:</strong> {perro.edad} años</span>
                    <span><strong>Color:</strong> {perro.color}</span>
                    <span><strong>Tamaño:</strong> {perro.tamaño}</span>
                </div>
            </div>
        </div>
    );
};

export default TarjetaPerroBasica;