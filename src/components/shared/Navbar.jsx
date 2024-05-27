import { useAuthState, useSignOut } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase/firebase.config";

export default function Navbar() {
    const [user] = useAuthState(auth);

    const [signOut] = useSignOut(auth);
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


                            {!user?.email ?
                                <>

                                </> :
                                <>
                                    <Link to={"/dashboard"}><li><a>Dashboard</a></li></Link>
                                </>
                            }

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
                        {!user?.email ?
                            <>

                            </> :
                            <>
                                <Link to={"/dashboard"}><li><a>Dashboard</a></li></Link>
                            </>
                        }
                    </ul>
                </div>
                <div className="navbar-end">
                    {!user?.email ?
                        <>
                            <div className="dropdown dropdown-end">
                                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                    <div className="">
                                        <li>
                                            <a className="justify-between">
                                                Profile

                                            </a>
                                        </li>
                                    </div>
                                </div>
                                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-color rounded-box w-52">
                                    <Link to={"login"}><li><a>Login</a></li></Link>
                                    <Link to={"register"}><li><a>Register</a></li></Link>

                                </ul>
                            </div>

                        </> :
                        <>
                            <div className="dropdown dropdown-end">
                                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                    <div className="w-10 rounded-full">
                                        <img alt="Tailwind CSS Navbar component" src={user.photoURL} />
                                    </div>
                                </div>
                                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-color rounded-box w-52">
                                    <li>
                                        <a className="justify-between">
                                            {user?.displayName}

                                            {/* <span className="badge">New</span> */}
                                        </a>
                                        <a className="justify-between text-xs">

                                            {user?.email}
                                            {/* <span className="badge">New</span> */}
                                        </a>
                                    </li>
                                    <Link className="mt-5 border border-white rounded-lg" onClick={async () => {
                                        const success = await signOut();
                                    }} to={"/"}><li><a>Logout</a></li></Link>

                                </ul>
                            </div>
                        </>
                    }

                </div>
            </div>

        </div>
    )
}
