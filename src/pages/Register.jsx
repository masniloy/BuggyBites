import { Link } from "react-router-dom"
import logo from "../assets/logo.png"
export default function Register() {
    return (
        <div className="min-h-screen flex sm:items-center justify-center bg-gray-100">
            <div className="flex flex-col md:flex-row bg-white shadow-lg rounded-lg overflow-hidden max-w-4xl w-full">

                <div className="md:w-1/2 p-8 md:border-r-4 md:border-b-0 border-b-4 border-color1">
                    <h2 className="text-2xl font-bold text-color text-center mb-8">Register</h2>
                    <form>
                        <div className="mb-4">
                            <label className="block text-gray-700">Name</label>
                            <input
                                type="text"
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-color"
                                placeholder="Enter your Name"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700">Email</label>
                            <input
                                type="email"
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-color"
                                placeholder="joe@email.com"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700">Password</label>
                            <input
                                type="password"
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-color"
                                placeholder="Enter your Password"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700">Confirm Password</label>
                            <input
                                type="password"
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-color"
                                placeholder="Confirm your Password"
                            />
                        </div>

                        <div className="flex items-center justify-between mb-4">
                            <a href="#" className="text-sm text-red-600 hover:underline">forgot password?</a>
                        </div>
                        <button className="w-full bg-color text-white py-2 rounded-lg hover:bg-color transition duration-200">
                            Register
                        </button>

                        <div className="flex items-center justify-between mt-4">
                            <p className=" text-sm">Have an account</p> <Link to={"/login"} className=" text-red-600 text-sm"><p>login</p></Link>
                        </div>
                    </form>
                </div>

                <div className="md:w-2/3 bg-color p-8 flex flex-col justify-center items-center ">
                    <div className="text-white text-center ">
                        <img
                            src={logo} // Replace with your logo path
                            alt="Buggybites Logo"
                            className="w-32 h-32 mx-auto mb-4"
                        />
                        <h1 className="text-2xl font-bold mb-2">Buggy Bites</h1>
                        <p className="text-sm text-color1">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro dicta eligendi amet? Aspernatur odio dolore aliquam itaque quidem sit. Quasi!</p>

                        <p className="mt-10 text-sm">Or Register Using</p>
                        <div className=" flex items-center justify-center gap-5 mt-2">
                            <div className="">
                                <svg className="fill-current bg-red-600 rounded-full text-white p-2.5 h-10 w-10" viewBox="0 0 488 512"><path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z" /></svg>
                            </div>
                            <div className="">
                                <svg className="fill-current bg-blue-900 rounded-full text-white p-2.5 h-10 w-10" viewBox="0 0 320 512"><path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z" /></svg>
                            </div>

                            <div className="">
                                <svg className="fill-current bg-gray-700 rounded-full text-white p-2.5 h-10 w-10" viewBox="0 0 496 512"><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" /></svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
