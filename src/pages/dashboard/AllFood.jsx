
import axios from "axios";
import { useEffect, useState } from "react";
import RecipeRow from "../../components/cards/RecipeRow";

export default function AllFood() {
    const [recipes, setRecipes] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [showToast, setShowToast] = useState(false);
    const [recipeToDelete, setRecipeToDelete] = useState(null);

    useEffect(() => {
        async function load() {
            const data = await axios.get("http://localhost:3000/recipes");
            if (data?.status === 200) {
                setRecipes(data?.data);
            }
        }
        load();
    }, []);

    const handleDeleteClick = (recipe) => {
        setRecipeToDelete(recipe);
        setShowModal(true);
    };

    const confirmDeleteRecipe = async () => {
        await axios.delete(`http://localhost:3000/recipes/${recipeToDelete.id}`);
        setRecipes(recipes.filter(recipe => recipe.id !== recipeToDelete.id));
        setShowModal(false);
        setShowToast(true);
        setTimeout(() => {
            setShowToast(false);
        }, 3000);
    };

    return (
        <div className="overflow-x-auto w-full px-16 mt-10">
            <h1 className="text-2xl mb-4">Manage All Food</h1>
            <table className="table table-zebra">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Image</th>
                        <th>Title</th>
                        <th>Price</th>
                        <th>Category</th>
                        <th>Detail</th>
                        <th>Action</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {recipes?.map((recipe) => (
                        <RecipeRow key={recipe?.id} recipe={recipe} onDeleteClick={() => handleDeleteClick(recipe)} />
                    ))}
                </tbody>
            </table>

            {showModal && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white p-6 rounded-lg">
                        <h2 className="text-lg font-semibold">Confirm Delete</h2>
                        <p>Are you sure you want to delete this recipe?</p>
                        <div className="flex justify-end mt-4">
                            <button onClick={() => setShowModal(false)} className="btn btn-ghost mr-2">
                                Cancel
                            </button>
                            <button onClick={confirmDeleteRecipe} className="btn bg-color text-white">
                                Confirm
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {showToast && (
                <div className="fixed bottom-4 right-4 bg-green-500 text-white p-4 rounded-lg shadow-lg">
                    Deleted successfully!
                </div>
            )}
        </div>
    );
}
