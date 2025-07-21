import {Routes, Route} from 'react-router-dom'
import {Crear} from '../pages/Crear'
import {Imprimir} from '../pages/Imprimir'
import {Modificar} from '../pages/Modificar'
import {DashboardLayout} from '../../general/layouts/DashboardLayout'
export const EspecialRoutes = ()=>{

    return (
    <Routes>
        <Route element={<DashboardLayout/>}>
            <Route path="Creacion" element={<Crear/>} />
            <Route path="Modificacion" element={<Modificar/>} />
            <Route path="Descarga" element={<Imprimir/>} />
        </Route>
    </Routes>
    )
}