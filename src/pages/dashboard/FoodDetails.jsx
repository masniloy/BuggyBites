import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function FoodDetails() {

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
        <div className=" ">
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
                            <input type="number" min="1" defaultValue="1" className="input input-bordered w-20" />
                            <button className="btn bg-color text-white hover:bg-gray-500 ml-4">Add To Cart</button>
                        </div>
                        <div className="flex gap-4 mb-4">
                            <button className="btn btn-outline">Add to wishlist</button>
                            {/* <button className="btn btn-outline">Compare</button> */}
                        </div>
                        <div className="text-gray-700 mb-2"><strong>Type:</strong> {recipeDetails?.category} Dishe </div>
                        <div className="text-gray-700 mb-2"><strong>SKU:</strong> FWBHBHT</div>
                        <div className="text-gray-700 mb-2"><strong>Tags:</strong> Organic, Brown, Vegetables</div>
                        <div className="text-gray-700"><strong>Stock:</strong> 5 Items In Stock</div>
                    </div>
                </div>
                <div className="mt-8 border-b border-color" >
                    <div className="tabs ">
                        <a className="tab tab-bordered tab-active">Description</a>
                        <a className="tab tab-bordered">Specification</a>
                        <a className="tab tab-bordered">Review</a>
                    </div>
                </div>
                {/* <div className="mt-8">
                    <h2 className="text-2xl font-bold mb-4">Related Product</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="card">
                            <img src="https://via.placeholder.com/200" alt="Related Product 1" className="rounded-lg" />
                            <div className="mt-2">Related Product 1</div>
                        </div>
                        <div className="card">
                            <img src="https://via.placeholder.com/200" alt="Related Product 2" className="rounded-lg" />
                            <div className="mt-2">Related Product 2</div>
                        </div>
                        <div className="card">
                            <img src="https://via.placeholder.com/200" alt="Related Product 3" className="rounded-lg" />
                            <div className="mt-2">Related Product 3</div>
                        </div>
                    </div>
                </div> */}
            </div>
        </div>
    )
}