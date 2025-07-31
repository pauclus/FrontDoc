import { Navigate, Route, Routes } from 'react-router-dom'
import { DashboardLayout } from '../layouts/DashboardLayout'
import { EspecialRoutes } from '../../especial/routes/EspecialRoutes'
import { ExternoRoutes } from '../../externo/routes/ExternoRoutes'


export const AppRouter =()=>{

    return (
        <Routes>
            
            <Route path="/dashboard" element={<DashboardLayout/>}/>
            <Route path="/parteI/*" element={<EspecialRoutes/>}/>
            <Route path='/parteII/*' element={<ExternoRoutes/>}/>
            <Route path="*" element={<Navigate to="/dashboard" />} />


        </Routes>)

}