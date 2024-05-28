/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";


export default function RecepiCard({ recipe }) {

    return (

        <div className="my-5">
            <Link to={"/menus"}>
                <div className="card w-96 bg-base-100 shadow-lg shadow-color1 image-full">
                    <figure className="w-full h-60 object-cover"><img className="w-full h-full object-cover" src={recipe.image} alt="Food" /></figure>
                    <div className="card-body">
                        <div className="flex">

                            <h2 className="card-title text-2xl font-bold w-4/5">{recipe?.title}</h2>
                            <div className="card-actions justify-end w-1/4 text-color1">
                                <div className=" bg-white font-bold text-color w-full text-center rounded">{recipe?.category}</div>
                            </div>
                        </div>
                        <p>{recipe?.description?.length > 70
                            ? recipe?.description?.slice(0, 70)
                            : recipe?.description}</p>
                        <h2 className="card-title">{recipe?.price}$</h2>
                    </div>
                </div>

            </Link>


        </div>
    );
}
