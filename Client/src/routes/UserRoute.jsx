import { Routes, Route } from 'react-router-dom'
import Login from '../components/Login/Login'
import Signup from '../components/Signup/Signup'
import Dashboard from '../components/Dashboard/Dashboard'


const UserRoute = () => {

    return (
        <Routes >
            <Route path='/signup' element={<Signup />} />
            <Route path='/login' element={<Login />} />

            <Route path='/dashboard' element={<Dashboard />} />
        </Routes>

    )
}

export default UserRoute