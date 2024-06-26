import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function ManiFoodDetails() {
    const { id } = useParams();

    const [recipeDetails, setRecipeDetails] = useState();


    useEffect(() => {
        async function load() {

            const recipeData = await axios.get(`http://localhost:3000/recipes/${id}`);
            if (recipeData?.status === 200) {
                setRecipeDetails(recipeData?.data);
            }
        }

        load();
    }, [id]);

    return (
        <div className=" text-white ">
            <div className="container mx-auto p-6">
                <div className="flex flex-col md:flex-row gap-8">
                    <div className="md:w-1/2">
                        <img src={recipeDetails?.image} alt="Product" className="rounded-lg h-[470px] w-full object-cover" />
                        <div className="flex gap-4 mt-4">
                            <img src={recipeDetails?.image} alt="Thumbnail 1" className="w-24 h-24 rounded-lg object-cover" />
                            <img src="https://via.placeholder.com/100" alt="Thumbnail 2" className="w-24 h-24 rounded-lg object-cover" />
                            <img src="https://via.placeholder.com/100" alt="Thumbnail 3" className="w-24 h-24 rounded-lg object-cover" />
                        </div>
                    </div>
                    <div className="md:w-1/2">
                        <h1 className="text-3xl font-bold">{recipeDetails?.title}</h1>
                        <div className="flex items-center my-4">
                            <span className="text-red-500 text-2xl font-bold">{recipeDetails?.price} $</span>
                            <span className="line-through ml-2 text-gray-500">10% Off</span>
                        </div>
                        <div className="flex items-center mb-4">
                            <span className="text-yellow-400 mr-2">★★★★★</span>
                            <span>(1 Review)</span>
                        </div>
                        <p className="mb-4">{recipeDetails?.description}</p>
                        <div className="flex items-center mb-4">
                            <input type="number" min="1" defaultValue="1" className="input input-bordered w-20 border-white bg-color" />
                            <button className="btn bg-color text-white hover:bg-gray-500 ml-4">Add To Cart</button>
                        </div>
                        <div className="flex gap-4 mb-4 ">
                            <button className="btn btn-outline text-gray-500">Add to wishlist</button>
                            {/* <button className="btn btn-outline">Compare</button> */}
                        </div>
                        <div className=" mb-2"><strong>Type:</strong> {recipeDetails?.category} Dishe </div>
                        <div className=" mb-2"><strong>SKU:</strong> FWBHBHT</div>
                        <div className=" mb-2"><strong>Tags:</strong> Organic, Brown, Vegetables</div>
                        <div className="text-red-600"><strong>Stock:</strong> 5 Items In Stock</div>
                    </div>
                </div>
                <div className="mt-8 border-b " >

                </div>

            </div>
        </div>
    )
}
