import {Routes, Route} from 'react-router-dom'
import {Registrar} from '../pages/Registrar'
import {Notificaciones} from '../pages/Notificaciones'
import {Detalles} from '../pages/Detalles'
import {Propietarios} from '../pages/Propietarios'

import {DashboardLayout} from '../../general/layouts/DashboardLayout'
export const EspecialRoutes = ()=>{

    return (
    <Routes>
        <Route element={<DashboardLayout/>}>
            <Route path="Registro" element={<Registrar/>} />
            <Route path="Detalles" element={<Detalles/>} />
            <Route path="Notificaciones" element={<Notificaciones/>} />
            <Route path="Propietarios" element={<Propietarios/>} />
        </Route>
    </Routes>
    )
}