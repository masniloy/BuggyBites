import { useEffect, useState } from "react";
import MenuCart from "../components/cards/MenuCart";

export default function Menus() {
    const [recipes, setRescipes] = useState();

    useEffect(() => {


        async function load() {

            const recipeRes = await fetch("http://localhost:3000/recipes");
            const recipeData = await recipeRes.json();
            setRescipes(recipeData);
        }
        load();

    }, []);
    return (
        <div>
            <div className="">
                <h1 className="text-4xl my-20 text-center text-white">____ OUR MENUS ____
                </h1>
                <div className="item-cente flex justify-center">
                    <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-12">
                        {recipes
                            ?.reverse()
                            ?.map((recipe) => (
                                < MenuCart key={recipe?.id} recipe={recipe} />
                            ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
