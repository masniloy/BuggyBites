import image from "../assets/img1.jpg"
export default function About() {
    return (
        // <div>
        //     <div className="hero min-h-screen ">
        //         <div className="hero-content flex-col lg:flex-row-reverse">
        //             <img src={image} className="max-w-sm rounded-lg shadow-2xl" />
        //             <div>
        //                 <h1 className="text-4xl font-bold text-white">About BuggyBites!</h1>
        //                 <p className="py-6 text-color1">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
        //                 <button className="text-white border-x p-3 px-7 border-color1">Get Started</button>
        //             </div>
        //         </div>
        //     </div>
        // </div>




        <div className="flex flex-col md:flex-row items-center bg-gray-100 p-8">
            <div className="md:w-1/2 p-4">
                <h2 className="text-2xl font-semibold mb-4">About Us</h2>
                <h1 className="text-4xl font-bold mb-4">Andy Chef Restaurant</h1>
                <p className="mb-4">
                    The dailies? You know – milk, bread, eggs – the dailies. These are the things you eat that you find yourself
                    running out each week (or each day) to purchase.
                </p>
                <button className="bg-black text-white py-2 px-4 rounded">
                    Read More
                </button>
            </div>
            <div className="md:w-1/2 p-4">
                <img
                    src={image} // Replace with your image path
                    alt="Chef presenting dish"
                    className="w-full h-auto rounded"
                />
            </div>
        </div>


    )
}
