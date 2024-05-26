import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <div className="">

            <div className="navbar bg-color text-white">
                <div className="navbar-start">
                    <div className="dropdown ">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 bg-color">

                            <Link to={"about"}><li><a>Home</a></li></Link>
                            <Link to={"/"}><li><a>About</a></li></Link>
                            <Link to={"menus"}><li><a>Menus</a></li></Link>
                            <Link to={"contact"}><li><a>Contact</a></li></Link>
                            <Link to={"/dashboard"}><li><a>Dashboard</a></li></Link>

                        </ul>
                    </div>
                    <Link to={"/"}><a className="btn btn-ghost text-xl w-40">Buggy Bites</a></Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <Link to={"/"}><li><a>Home</a></li></Link>
                        <Link to={"about"}><li><a>About</a></li></Link>
                        <Link to={"menus"}><li><a>Menus</a></li></Link>
                        <Link to={"contact"}><li><a>Contact</a></li></Link>
                        <Link to={"/dashboard"}><li><a>Dashboard</a></li></Link>
                    </ul>
                </div>
                <div className="navbar-end">
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img alt="Tailwind CSS Navbar component" src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                            </div>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-color rounded-box w-52">
                            <li>
                                <a className="justify-between">
                                    Profile
                                    <span className="badge">New</span>
                                </a>
                            </li>

                            <Link to={"login"}><li><a>Login</a></li></Link>
                            <Link to={"register"}><li><a>Register</a></li></Link>

                        </ul>
                    </div>
                </div>
            </div>

        </div>
    )
}
