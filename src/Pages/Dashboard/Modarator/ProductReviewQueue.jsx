
import useProduct from "../../../Hooks/useProduct";

import ModaTable from "./ModaTable";


const ProductReviewQueue = () => {

    
    const [useProducts] = useProduct();
    console.log(useProducts);

    return (
        <div className="overflow-x-auto">
            <table className="table">
                {/* head */}
                <thead className="bg-gray-500 text-white">
                    <tr>
                        <th className="px-4 py-2 text-left">#</th>
                        <th className="px-4 py-2 text-left">Product Name</th>
                        <th className="px-4 py-2 text-left">View Details</th>
                        <th className="px-4 py-2 text-left">Make Featured Button</th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                    {
                        useProducts.map((item,idx) => <ModaTable item={item} key={item._id} idx={idx} ></ModaTable>)
                    }



                </tbody>
            </table>
        </div>
    );

};

export default ProductReviewQueue;