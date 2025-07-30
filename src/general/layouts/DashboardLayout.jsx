import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, Outlet } from 'react-router-dom';
import { useState } from 'react';

export const DashboardLayout = () => {
  const user = useSelector(state => state.auth?.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [expandedMenu, setExpandedMenu] = useState("Silabo");
  console.log("DashboardLayout MONTADO");

  const menus = [
    {
      id: 'Silabo',
      title: 'Parte I',
      items: [
        { id: 'Registro', label: 'Registro de Perros' },
        { id: 'Detalles', label: 'Detalles de Perros' },
        { id: 'Notificaciones', label: 'Notificaciones' },
      ]
    },
    {
      id: 'Docente',
      title: 'Parte II',
      items: [
        { id: 'Carga', label: 'Carga de Alumnos' },
        { id: 'Grupos', label: 'Grupos de Curso' },
        { id: 'Notas', label: 'Notas de Alumnos' },
      ]
    }
    
  ]

  const toggleMenu = (menuId) => {
    setExpandedMenu(prev => (prev === menuId ? null : menuId));
  };

  return (
    <div style={{ display: 'flex', minHeight: '100%', fontFamily: 'Arial, sans-serif' }}>
<div style={{
  width: '270px',
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: '#2c3e50',
  color: 'white',
  padding: '20px 0',
  alignSelf: 'stretch'
}}>          <div style={{ padding: '0 20px', marginBottom: '20px' }}>
            <h2 style={{ margin: 0, fontSize: '1.5rem', color: '#ecf0f1' }}>Menú</h2>
          </div>
          {menus.map(menu=>
            <div key={menu.id}>

              <div onClick={() => toggleMenu(menu.id)}
                style={{
                  padding: '12px 20px',
                  fontWeight: 'bold',
                  backgroundColor: expandedMenu === menu.id ? '#34495e' : 'transparent',
                  cursor: 'pointer', //pointer 
                  transition: 'background-color 0.3s'
                }}>
                  {menu.title}
              </div>

              {expandedMenu === menu.id && (
                <div>
                  {menu.items.map(item => {
                  // Mapear las rutas correctas según el módulo
                  const getRoute = (menuId, itemId) => {
                    switch (menuId) {
                      case 'Silabo':
                        return `/parteI/${itemId}`;
                      case 'Docente':
                        return `/parteII/${itemId}`;
                      default:
                        return `/dashboard/${menuId}/${itemId}`;
                    }
                  };

                  return (
                    <div
                      key={item.id}
                      onClick={() => navigate(getRoute(menu.id, item.id))}
                      style={{
                        padding: '10px 30px',
                        cursor: 'pointer',
                        backgroundColor: 'transparent',
                        borderLeft: '4px solid transparent',
                        transition: 'all 0.3s',
                        fontSize: '0.95rem'
                      }}
                      onMouseOver={(e) => {
                        e.currentTarget.style.backgroundColor = '#3d566e';
                      }}
                      onMouseOut={(e) => {
                        e.currentTarget.style.backgroundColor = 'transparent';
                      }}
                    >
                      {item.label}
                    </div>
                  );
                })}
                </div>

              )}
            </div>
          )

          }
      </div>
      {/* Contenido principal */}
      <div style={{ flex: '1', padding: ' 1px',  display: 'flex', justifyContent: 'center' }}>
        <Outlet 
        style={{width: '100%', height: '100%', display: 'flex', flex: '1'}}
        />
      </div>

    </div>

  )
}