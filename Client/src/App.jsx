import { BrowserRouter, Route, Routes } from 'react-router-dom'
import axios from 'axios'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import UserRoute from './routes/userRoute'

function App() {

  axios.defaults.baseURL = "http://localhost:3000"
  axios.defaults.withCredentials = true;
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/*' element={<UserRoute />} />
        </Routes>
        <ToastContainer />
      </BrowserRouter>

    </>
  )
}

export default App
