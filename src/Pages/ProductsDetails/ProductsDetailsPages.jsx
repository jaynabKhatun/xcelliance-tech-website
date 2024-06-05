import { useQuery } from '@tanstack/react-query';
import paralax from '../../../src/assets/bg/bg.jpg'

import { useParams } from 'react-router-dom';
import useAxiosCommon from '../../Hooks/UseAxiosCommon';
import { BiSolidLike } from 'react-icons/bi';


const ProductsDetailsPages = () => {
    // const axiosSecure = useAxiosSecure();
    const axiosCommon = useAxiosCommon()
    const { id } = useParams();

    const { data: products = [] } = useQuery({
        queryKey: ['products', id],
        queryFn: async () => {
            const res = await axiosCommon.get(`/products/${id}`);
            console.log(res.data)
            return res.data;
        }

    })

    return (
        <div className='h-[700px] bg-fixed opacity-80' style={{
            backgroundImage: `url(${paralax})`,
        }}>
            <div>
                <div className="text-white flex justify-center items-center" >

                    <section>
                        <div className="dark:bg-violet-600">
                            <div className="container flex flex-col items-center px-4 py-16 pb-24 mx-auto text-center lg:pb-56 md:py-32 md:px-10 lg:px-32 dark:text-gray-50">
                                <h1 className="text-5xl font-bold leading-none sm:text-6xl xl:max-w-3xl dark:text-gray-50">{products.name}</h1>
                                <p className="mt-6 mb-8 text-lg sm:mb-12 xl:max-w-3xl dark:text-gray-50">{products.description}!</p>

                            </div>
                        </div>
                        <img src={products.image} alt="" className="w-5/6 mx-auto mb-12 -mt-20 dark:bg-gray-500 rounded-lg shadow-md lg:-mt-40" />
                    </section>

                </div>
            </div>

        </div>
    );
};

export default ProductsDetailsPages;