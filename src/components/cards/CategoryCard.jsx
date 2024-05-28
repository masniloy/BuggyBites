/* eslint-disable react/prop-types */
export default function CategoryCard({ category }) {
    return (
        <div className=" border-color   border-r-2 sm:text-3xl text-xl  font-bold ">
            <h1 className="text-center sm:w-72 w-44">{category?.title}</h1>
        </div>
    );
}
