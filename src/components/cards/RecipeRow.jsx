import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
export default function RecipeRow({ recipe }) {
    function deleteProduct() {
        alert("Want to delete?");
    }

    return (
        <tr className=" border-b border-color">
            <th>{recipe?.id}</th>
            <td>
                <div className="avatar ">
                    <div className="mask mask-squircle w-12 h-12 ">
                        <img className="" src={recipe?.image} alt="Avatar Tailwind CSS Component" />
                    </div>
                </div>
            </td>

            <td>{recipe?.title}</td>
            <td>{recipe?.price}</td>
            <td>{recipe?.category}</td>
            <td >
                <Link
                    to={`/dashboard/editFood/${recipe?.id}`}
                    className="btn btn-sm "
                >
                    Edit
                </Link>
            </td>
            <td className=" ">

                <button onClick={deleteProduct} className="btn btn-sm rounded-full h-1 bg-transparent ">X</button>
            </td>

        </tr>

    );
}
