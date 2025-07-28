import { Navigate, Route, Routes } from 'react-router-dom'
import { DashboardLayout } from '../layouts/DashboardLayout'
import { EspecialRoutes } from '../../especial/routes/EspecialRoutes'

export const AppRouter =()=>{

    return (
        <Routes>
            
            <Route path="/dashboard" element={<DashboardLayout/>}/>
            <Route path="/parteI/*" element={<EspecialRoutes/>}/>
            <Route path="*" element={<Navigate to="/dashboard" />} />


        </Routes>)

}