import { useQuery } from "@tanstack/react-query";
import useAxiosCommon from "../../Hooks/UseAxiosCommon";
import AllProducts from "./AllProducts";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import { useEffect, useState } from "react";




const Products = () => {
    const [search, setSearch] = useState('');
    const [itemsPerPage, setItemsPerPage] = useState(6);
    const [currentPage, setCurrentPage] = useState(0);



    const axiosCommon = useAxiosCommon();
    const { data: products = [], refetch } = useQuery({
        queryKey: ['products', search, currentPage, itemsPerPage],
        queryFn: async () => {
            const res = await axiosCommon.get(`/products?search=${search}&page=${currentPage}&size=${itemsPerPage}`);
            console.log(res?.data)
            return res?.data;
        },

    })

    //pagination

    const pages = Math.ceil(products.length / itemsPerPage);


    const page = [...Array(pages).keys()];
    console.log(page);




    const handleSearch = (e) => {
        e.preventDefault();
        const search = e.target.elements.search.value;
        // console.log(search);
        setSearch(search);
        refetch();

    }

    const handleItemPerPage = (e) => {
        console.log(e.target.value);
        const val = parseInt(e.target.value);
        console.log(val);
        setItemsPerPage(val);
        setCurrentPage(0);

    }

    const handlePrevPae = () => {
        if (currentPage > 0) {
            setCurrentPage(currentPage - 1);
        }
    }

    const handleNextPage = () => {
        if (currentPage < page.length - 1) {
            setCurrentPage(currentPage + 1);
        }

    }

    return (
        <div >
            <div className="p-6 py-20 ">
                <div className="container mx-auto">
                    <div className="flex flex-col lg:flex-row items-center justify-between">
                        <h2 className="text-center text-6xl tracking-tighter font-bold">Up to
                            <br className="sm:hidden" />50% Off
                        </h2>
                        <div className="space-x-2 text-center py-2 lg:py-0">
                            <span>For your First Order</span>
                            <span className="font-bold text-lg">Xcelliance</span>
                        </div>
                        <a href="#" rel="noreferrer noopener" className="px-5 mt-4 lg:mt-0 py-3 rounded-md border block dark:bg-gray-900 dark:text-gray-50 dark:border-gray-600">Shop Now</a>
                    </div>
                </div>
            </div>
            <div>
                <SectionTitle subHeading="hello" heading="All Product" />
            </div>

            <form onSubmit={handleSearch} className="form-control w-1/4 ">
                <div className="flex gap-2">
                    <input type="text" placeholder="Search product" name="search" className="input input-bordered w-24 md:w-auto" />
                    <button type="submit" className="btn btn-primary">Search</button>
                </div>
            </form>

            <div className="grid md:grid-cols-3 gap-4 mt-10  ">

                {
                    products?.map(p => <AllProducts key={p._id} p={p}></AllProducts>)
                }
            </div>
            <div className="flex justify-center gap-4 pagination">
                {/* <button onClick={handlePrevPae} className="btn">previous</button> */}


                {
                    page?.map(page => <button onClick={() => setCurrentPage(page)} key={page}
                        className={currentPage === page ? 'btn bg-blue-600 text-white' : 'bg-gray-200 btn'}>
                        {page}

                    </button>)
                }
                <select value={itemsPerPage} onChange={handleItemPerPage} name="" id="">
                    <option value="6">6</option>
                    <option value="10">10</option>
                    <option value="20">20</option>
                    <option value="50">50</option>
                </select>
                {/* <button onClick={handleNextPage} className="btn">Next</button> */}
            </div>


        </div>
    );
};

export default Products;