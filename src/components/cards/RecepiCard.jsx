/* eslint-disable react/prop-types */


export default function RecepiCard({ recipe }) {

    return (

        <div className="flex">


            <div className="card w-96 bg-base-100 shadow-xl mb-5 border-2 border-color ">
                <div className="card-body">
                    <div className="flex">

                        <h2 className="card-title font-bold w-3/4">{recipe?.title}</h2>
                        <div className="card-actions justify-end w-1/4 text-color1">
                            <div className="">{recipe?.category}</div>
                        </div>
                    </div>
                    <h2 className="card-title">{recipe?.price}$</h2>
                    <p>{recipe?.description?.length > 50
                        ? recipe?.description?.slice(0, 50)
                        : recipe?.description}</p>
                </div>
                <figure><img className="w-full h-48 object-cover" src={recipe.image} alt="" />
                </figure>
            </div>

        </div>
    );
}
