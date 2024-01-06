import { Link, useNavigate } from "react-router-dom";
import { useFormik } from 'formik'
import axios from "axios";
import { toast } from 'react-toastify'
import login from '../../assets/login.jpg'

const Login = () => {

    const navigate = useNavigate()

    const formik = useFormik({

        initialValues: {
            email: '',
            password: '',
        },

        onSubmit: async (values) => {
            try {
                const { data } = await axios.post('/login', { ...values })
                if (data?.status) {
                    navigate("/home")
                } else {
                    toast.error(data.message, {
                        position: "top-center"
                    })
                }
            } catch (error) {
                console.log(error)
            }

        },
    })
    return (
        <>
            <section className="bg-gray-50  min-h-screen flex items-center justify-center">
                <div className="bg-gray-100 flex rounded-2xl shadow-lg max-w-2xl p-8 ">
                    <div className=" px-14">
                        <h2 className='font-bold text-3xl text-[#002D74]'>Login</h2>
                        <p className='text-sm mt-4 text-[#002D74]'>Welcome Back!</p>

                        <form onSubmit={formik.handleSubmit} className='flex flex-col gap-4'>
                            <input className='p-2 mt-8 rounded-xl border' onChange={formik.handleChange} type="email" name="email" placeholder='Email' id="" required />
                            <div className="relative">
                                <input className='p-2  rounded-xl border w-full' onChange={formik.handleChange} type='password' name='password' placeholder='Password' required />
                            </div>
                            <button className='bg-[#002D74] rounded-xl py-2 mt-2 text-white hover:scale-105 duration-300' type="submit">Login</button>
                        </form>
                        <div className='mt-10 grid-cols-3 items-center text-gray-500'>
                            <hr className=' text-gray-500' />
                            <p className='text-center text-sm'>OR</p>
                            <hr className=' text-gray-500' />
                        </div>
                        <div className='mt-3 text-xs flex justify-between items-center'>
                            <p>Not a member yet !?</p>
                            <Link to={'/signup'}><p className='hover:scale-105 duration-300 py-2 px-5 bg-white border rounded-xl'>Register</p></Link>
                        </div>

                    </div>

                    <div className="w-1/2 md:block hidden">
                        <img className="rounded-xl w-full h-full object-cover" src={login} alt="" />
                    </div>
                </div>
            </section >
        </>
    );
};

export default Login
