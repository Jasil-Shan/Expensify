
const Login = () => {
    return (
        <div className="bg-gradient-to-br from-green-100 to-white min-h-screen flex flex-col items-center justify-center">
            <div className="container px-6 mx-auto flex flex-col md:flex-row md:items-center">
                <div className="flex flex-col w-full md:w-1/2 lg:w-3/4 mx-auto md:mx-0">
                    <div className="flex flex-col items-center md:items-start">
                        <div>
                            <svg
                                className="w-20 h-20 mx-auto md:float-left fill-stroke text-gray-800"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                {/* Your SVG path here */}
                            </svg>
                        </div>
                        <h1 className="text-5xl text-gray-800 font-bold">Client Area</h1>
                        <p className="w-5/6 mx-auto md:mx-0 text-gray-500">
                            Control and monitorize your website data from the dashboard.
                        </p>
                    </div>
                    <div className="bg-white p-10 flex flex-col w-full shadow-xl rounded-xl">
                        <h2 className="text-2xl font-bold text-gray-800 text-left mb-5">
                            Sign In
                        </h2>
                        <form action="" className="w-full">
                            {/* Your form inputs and button here */}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login
