import React from 'react';

const TarjetaPerroAmplia = ({ perro }) => {
    return (
        <div style={{
            border: '1px solid #e0e0e0',
            borderRadius: '12px',
            padding: '20px',
            margin: '16px 0',
            backgroundColor: 'white',
            boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
            maxWidth: '400px'
        }}>
            {/* Header con imagen y nombre */}
            <div style={{
                display: 'flex',
                alignItems: 'center',
                marginBottom: '16px'
            }}>
                {/* Espacio para imagen */}
                <div style={{
                    width: '80px',
                    height: '80px',
                    backgroundColor: '#f0f0f0',
                    borderRadius: '12px',
                    marginRight: '16px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#999',
                    fontSize: '14px'
                }}>
                    Imagen
                </div>

                <div style={{ flex: 1 }}>
                    <h2 style={{
                        margin: '0 0 4px 0',
                        fontSize: '20px',
                        fontWeight: '600',
                        color: '#333'
                    }}>
                        {perro.nombre}
                    </h2>
                    <span style={{
                        padding: '4px 12px',
                        borderRadius: '16px',
                        fontSize: '12px',
                        fontWeight: '500',
                        backgroundColor: perro.estado === 'activo' ? '#e8f5e8' : 
                                       perro.estado === 'perdido' ? '#fff3cd' : '#f8d7da',
                        color: perro.estado === 'activo' ? '#28a745' : 
                               perro.estado === 'perdido' ? '#856404' : '#721c24'
                    }}>
                        {perro.estado}
                    </span>
                </div>
            </div>

            {/* Información detallada */}
            <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '12px',
                fontSize: '14px'
            }}>
                <div>
                    <strong style={{ color: '#555' }}>Raza:</strong>
                    <div style={{ color: '#666', marginBottom: '8px' }}>{perro.raza}</div>
                </div>
                
                <div>
                    <strong style={{ color: '#555' }}>Edad:</strong>
                    <div style={{ color: '#666', marginBottom: '8px' }}>{perro.edad} años</div>
                </div>
                
                <div>
                    <strong style={{ color: '#555' }}>Color:</strong>
                    <div style={{ color: '#666', marginBottom: '8px' }}>{perro.color}</div>
                </div>
                
                <div>
                    <strong style={{ color: '#555' }}>Tamaño:</strong>
                    <div style={{ color: '#666', marginBottom: '8px' }}>{perro.tamaño}</div>
                </div>
                
                <div>
                    <strong style={{ color: '#555' }}>Comportamiento:</strong>
                    <div style={{ color: '#666', marginBottom: '8px' }}>{perro.comportamiento}</div>
                </div>
                
                <div>
                    <strong style={{ color: '#555' }}>Chip:</strong>
                    <div style={{ color: '#666', marginBottom: '8px', fontSize: '12px' }}>
                        {perro.chip_codigo || 'No registrado'}
                    </div>
                </div>
            </div>

            {/* Ubicación */}
            {perro.ubicacion && (
                <div style={{ marginTop: '12px' }}>
                    <strong style={{ color: '#555' }}>Ubicación:</strong>
                    <div style={{ color: '#666', fontSize: '13px' }}>{perro.ubicacion}</div>
                </div>
            )}

            {/* Código QR */}
            {perro.qr_codigo && (
                <div style={{ marginTop: '12px' }}>
                    <strong style={{ color: '#555' }}>Código QR:</strong>
                    <div style={{ color: '#666', fontSize: '12px' }}>{perro.qr_codigo}</div>
                </div>
            )}

            {/* Fecha de registro */}
            <div style={{
                marginTop: '16px',
                paddingTop: '12px',
                borderTop: '1px solid #eee',
                fontSize: '12px',
                color: '#999'
            }}>
                Registrado: {new Date(perro.fecha_registro).toLocaleDateString()}
            </div>
        </div>
    );
};

export default TarjetaPerroAmplia; 