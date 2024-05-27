/* eslint-disable react/prop-types */
export default function CategoryCard({ category }) {
    return (
        <div className=" border-color1 text-white px-5 py-3 rounded  border-2 font-bold">
            <h1 className="text-center">{category?.title}</h1>
        </div>
    );
}
