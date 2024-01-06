import { Routes, Route } from 'react-router-dom'
import Login from '../components/Login/Login'
import Signup from '../components/Signup/Signup'
import Dashboard from '../components/Dashboard/Dashboard'
import AddExpense from '../components/Add Expense/AddExpense'
import AllExpense from '../components/All Expenses/AllExpenses'


const UserRoute = () => {

    return (
        <Routes >
            <Route path="/SignUp" element={<Signup />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/addExpense" element={<AddExpense />} />
            <Route path="/allExpense" element={<AllExpense />} />
        </Routes>

    )
}

export default UserRoute