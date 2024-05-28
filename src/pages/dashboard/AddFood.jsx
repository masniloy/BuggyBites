import axios from 'axios';
import { useEffect, useState } from 'react'

export default function AddFood() {
    const [categories, setCategories] = useState();

    useEffect(() => {
        async function load() {
            const data = await axios.get("http://localhost:3000/categories");
            if (data?.status === 200) {
                console.log(data?.data);
                setCategories(data?.data);
            }
        }

        load();
    }, []);

    const handleCreateRecipe = async (e) => {
        e.preventDefault();

        const form = e.target;

        const id = form.id.value;
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

        await axios.post("http://localhost:3000/recipes", recipeData);
    };


    function addProduct() {
        alert("Want to delete?");
    }
    return (
        <div className="  ">

            <div className="sm:flex items-center justify-center min-h-screen bg-gray-100">
                <div className="bg-white p-8 w-full rounded-lg shadow-lg sm:w-1/2 ">
                    <h2 className="text-2xl font-semibold mb-2">Add new item</h2>
                    <form onSubmit={handleCreateRecipe} >

                        <div className="mb-4">
                            <label className="block text-gray-700">Id *</label>
                            <input required name="id" type="text" placeholder="Id for your product" className="input input-bordered w-full" />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700">Title *</label>
                            <input required name="title" type="text" placeholder="Title for your product" className="input input-bordered w-full" />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="">Cateogry * </label>
                            <select required name="category" id="" className="input input-bordered w-full">
                                {categories?.map((category) => (
                                    <option key={category?.id} value={category?.title}>
                                        {category?.title}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-700">Description *</label>
                            <textarea required name="description" placeholder="Describe your product" className="textarea textarea-bordered w-full"></textarea>
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700">Price *</label>
                            <input required name="price" type="number" placeholder="Enter amount" className="input input-bordered w-full" />
                        </div>
                        <div className="flex justify-end">
                            {/* <button type="button" className="btn btn-ghost mr-2">Cancel</button> */}
                            <button onClick={addProduct} type="submit" className="btn bg-color text-white">Add Item</button>
                        </div>
                    </form>
                </div>
            </div>


        </div>
    );
}

