import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function EditFood() {
    const { id } = useParams();

    const [recipeDetails, setRecipeDetails] = useState();
    const [categories, setCategories] = useState();

    useEffect(() => {
        async function load() {
            const categoriesData = await axios.get(
                "http://localhost:3000/categories"
            );
            if (categoriesData?.status === 200) {
                setCategories(categoriesData?.data);
            }

            const recipeData = await axios.get(`http://localhost:3000/recipes/${id}`);
            if (recipeData?.status === 200) {
                setRecipeDetails(recipeData?.data);
            }
        }

        load();
    }, [id]);

    const handleCreateRecipe = async (e) => {
        e.preventDefault();

        const form = e.target;

        const title = form.title.value;
        const price = form.price.value;
        const category = form.category.value;
        const description = form.description.value;
        const recipeData = {
            id,
            title,
            price,
            category,
            description,
        };

        await axios.patch(`http://localhost:3000/recipes/${id}`, recipeData);
    };
    return (


        <div className="sm:flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-8 w-full rounded-lg shadow-lg sm:w-1/2 ">
                <h2 className="text-2xl font-semibold mb-2">Edit Item</h2>
                <form onSubmit={handleCreateRecipe} >


                    <div className="mb-4">
                        <label className="block text-gray-700">Title *</label>
                        <input name="title" type="text" defaultValue={recipeDetails?.title} className="input input-bordered w-full" />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="">Cateogry * </label>
                        <select name="category" id="" className="input input-bordered w-full">
                            {categories?.map((category) => (
                                <option key={category?.id}
                                    selected={category?.title === recipeDetails?.category}
                                    value={category?.title}>
                                    {category?.title}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700">Description *</label>
                        <textarea name="description" defaultValue={recipeDetails?.description} className="textarea textarea-bordered w-full"></textarea>
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Price *</label>
                        <input name="price" type="number" defaultValue={recipeDetails?.price} className="input input-bordered w-full" />
                    </div>
                    <div className="flex justify-end">
                        {/* <button type="button" className="btn btn-ghost mr-2">Cancel</button> */}
                        <button type="submit" className="btn bg-color text-white">Update Item</button>
                    </div>
                </form>
            </div>
        </div>




    );
}
