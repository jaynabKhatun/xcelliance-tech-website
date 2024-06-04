
import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useAxiosCommon from "../../../Hooks/UseAxiosCommon";
import { useState } from "react";
import SingleFeatured from "./SingleFeatured";


const FeaureProduct = () => {
    const axiosCommon = useAxiosCommon();
    const [products, setProducts] = useState([])

    const { data } = useQuery({
        queryKey: ['products'],
        queryFn: async () => {
            const res = await axiosCommon.get('/products')
            // console.log(res.data)
            res.data = res.data.filter(product => product.category === 'Web Apps')
            console.log(res.data)
            setProducts(res.data)

        }
    })

    return (
        <div>
            <SectionTitle subHeading="Most Popular" heading="Featured Collection"></SectionTitle>
            <div className="">
                {
                    products.map(item => <SingleFeatured key={item._id} item={item}></SingleFeatured>)
                }
            </div>
        </div>
    );
};

export default FeaureProduct;