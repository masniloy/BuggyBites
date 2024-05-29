import { useEffect, useState } from "react";
import RecepiCard from "../cards/RecepiCard";

export default function PopulerFood() {
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
            <div className=" mb-20">
                <h1 className="sm:text-3xl text-2xl my-20 text-center text-white ">______ Most Popular Foods ______
                </h1>

                <div className="item-cente flex justify-center">

                    <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-12">
                        {recipes
                            ?.reverse()
                            ?.slice(0, 4)
                            ?.map((recipe) => (
                                <RecepiCard key={recipe?.id} recipe={recipe} />

                            ))}
                    </div>

                </div>

            </div>
        </div>
    )
}
