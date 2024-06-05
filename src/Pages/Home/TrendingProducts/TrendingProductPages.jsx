import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useAxiosCommon from "../../../Hooks/UseAxiosCommon";

import { BiSolidLike } from "react-icons/bi";
import { data } from "autoprefixer";
import { GrFormNextLink } from "react-icons/gr";
import { Link } from "react-router-dom";




const TrendingProductPages = () => {
    const axiosCommon = useAxiosCommon();



    const { data: trendingProducts = [] } = useQuery({

        queryKey: ['trendingProducts'],
        queryFn: async () => {
            const res = await axiosCommon.get('/products')
            console.log(res.data)
            return (res.data)


        }

    })






    return (
        <div className="mt-20" >
            <SectionTitle subHeading="People are looking for alternatives to..." heading="Interesting new Trending Products  "
            ></SectionTitle>
            <div>
                {
                    trendingProducts.slice(0, 6).map(item => <div key={item._id} className="flex justify-center items-center  md:gap-20 ">
                        <div className="card mt-8 md:h-40 card-side w-11/12 border bg-base-200  hover:border-blue-600 hover:scale-105 transition">

                            <div className="card-body ">
                                <h2 className="card-title">{item.name}</h2>
                                <p>
                                    {
                                        item.tags.map((tag, index) => {
                                            return (
                                                <span key={index} className="badge badge-primary mr-3">{tag}</span>
                                            )
                                        })
                                    }
                                </p>
                                <p className="font-jost">{item.description}</p>

                            </div>
                            <figure><img src={item.image} alt="Movie" /></figure>
                        </div>

                        <div className="w-1/12 hover:scale-105 transition hover:bg-gray-400">
                            <div className="border flex justify-center flex-col  py-2 items-center">
                                <BiSolidLike className="text-4xl" />
                                {item.upvotes}

                            </div>

                        </div>


                    </div>
                    )
                }
                <div className="flex justify-center items-center my-8 ">
                    <Link to={'/products'}><button className="font-jost btn-outline flex justify-center items-center gap-4 border  px-2 py-2 rounded-md">More new apps release <GrFormNextLink /></button>
</Link>
                </div>
            </div>
        </div >
    );
};

export default TrendingProductPages;