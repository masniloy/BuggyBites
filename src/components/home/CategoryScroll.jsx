import { useEffect, useState } from "react";
import CategoryCard from "../cards/CategoryCard";

export default function CategoryScroll() {
    const [categoris, setCategories] = useState();
    useEffect(() => {


        async function load() {


            const categoryRes = await fetch("http://localhost:3000/categories");
            const categoryData = await categoryRes.json();

            setCategories(categoryData);
        }
        load();

    }, []);


    return (

        <div className=" flex bg-white text-black my-32 uppercase group overflow-hidden">

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

    )
}
