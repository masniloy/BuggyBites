import { useEffect } from "react";
import Banner from "../components/home/Banner";
import { useState } from "react";
import RecepiCard from "../components/cards/RecepiCard";
import CategoryCard from "../components/cards/CategoryCard";
import Contact from "./Contact";

export default function Home() {
    const [recipes, setRescipes] = useState();
    const [categoris, setCategories] = useState();
    useEffect(() => {


        async function load() {

            const recipeRes = await fetch("http://localhost:3000/recipes");
            const recipeData = await recipeRes.json();
            setRescipes(recipeData);


            const categoryRes = await fetch("http://localhost:3000/categories");
            const categoryData = await categoryRes.json();

            setCategories(categoryData);
        }
        load();

    }, []);


    return (
        <div className="">
            <Banner />

            <div className=" flex bg-white text-black my-32 uppercase group">

                <div className="flex animate-loop-scroll  my-10 group-hover:paused ">

                    <div className=" flex ">
                        {categoris?.map((category) => (
                            <CategoryCard key={category?.id} category={category} />
                        ))}
                    </div>

                </div>
                <div className="flex animate-loop-scroll my-10 group-hover:paused">
                    <div className=" flex ">
                        {categoris?.map((category) => (
                            <CategoryCard key={category?.id} category={category} />
                        ))}
                    </div>
                </div>

            </div>
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

            <Contact />
        </div>
    );
}
