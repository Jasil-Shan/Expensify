import { Routes, Route } from 'react-router-dom'
import Login from '../components/Login/Login'
import Signup from '../components/Signup/Signup'


const UserRoute = () => {

    return (
        <Routes >
            <Route path='/signup' element={<Signup />} />
            <Route path='/login' element={<Login />} />
        </Routes>

    )
}

export default UserRoute