
import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useAxiosCommon from "../../../Hooks/UseAxiosCommon";

import SingleFeatured from "./SingleFeatured";
import { GrFormNextLink } from "react-icons/gr";


const FeaureProduct = () => {
    const axiosCommon = useAxiosCommon();


    const { data: products = [] } = useQuery({
        queryKey: ['products'],
        queryFn: async () => {
            const res = await axiosCommon.get('/products')
            // console.log(res.data)
            res.data = res.data.filter(product => product.category === 'Featured')
            return (res.data)

        }
    })

    return (
        <div>
            <SectionTitle subHeading="Most Popular" heading="Featured Collection"></SectionTitle>
            <div>
                {
                    products.map(item => <SingleFeatured key={item._id} item={item}></SingleFeatured>)
                }
            </div>
            <div className="flex justify-center items-center my-8 ">
                <button className="font-jost btn-outline flex justify-center items-center gap-4 border  px-2 py-2 rounded-md">More new apps release <GrFormNextLink /></button>

            </div>
        </div>
    );
};

export default FeaureProduct;