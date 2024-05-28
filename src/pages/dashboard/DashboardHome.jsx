import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase/firebase.config";

export default function DashboardHome() {
    const [user] = useAuthState(auth);
    return (
        <div className=" ">
            <div className="flex items-center justify-center min-h-screen  ">
                <div className="p-10 w-full h-screen  ">
                    <div className="flex justify-center">
                        <img
                            className="w-32 h-32 rounded-full border-2 border-color"
                            src={user?.photoURL}
                            alt="Profile picture"
                        />
                    </div>
                    <div className="text-center mt-4">
                        <h2 className="text-2xl font-semibold">{user?.displayName}</h2>
                        <p className="text-gray-500 text-sm">{user?.email}</p>

                        <p className="mt-2 text-sm">Street number & name, Apartment, City, zip code,<br /> Country Name</p>

                    </div>
                    <div className="mt-4 flex justify-around text-center">
                        <div>
                            <p className="text-xl font-bold">14</p>
                            <p className="text-gray-500">Total Items</p>
                        </div>
                        <div>
                            <p className="text-xl font-bold">10</p>
                            <p className="text-gray-500">Categories</p>
                        </div>
                        <div>
                            <p className="text-xl font-bold">21</p>
                            <p className="text-gray-500">Revues</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
