import {Routes, Route} from 'react-router-dom'
import {Datos} from '../pages/Datos'
import {Ubicacion} from '../pages/Ubicacion'


import {DashboardLayout} from '../../general/layouts/DashboardLayout'
export const ExternoRoutes = ()=>{

    return (
    <Routes>
        <Route element={<DashboardLayout/>}>
            <Route path="Datos" element={<Datos/>} />
            <Route path="Ubicacion" element={<Ubicacion/>} />

        </Route>
    </Routes>
    )
}