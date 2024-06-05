import { useQuery } from "@tanstack/react-query";
import useAxiosCommon from "../../Hooks/UseAxiosCommon";
import SingleNews from "./SingleNews";
import SectionTitle from "../../components/SectionTitle/SectionTitle";


const TechNews = () => {
    const axios = useAxiosCommon();

    const { data: news = [] } = useQuery({
        queryKey: ['news'],
        queryFn: async () => {
            const res = await axios.get('/technews')
            return res.data
        }
    })
    return (
        <div>
            <div className="mt-20">
                <SectionTitle subHeading="EveryDay Tech News" heading="More Tech News"></SectionTitle>
            </div>
            <div className="flex lg:flex-row flex-col">

                <div className="mt-10 w-10/12">

                    <div className="grid md:grid-cols-2">
                        {
                            news.map(item => <SingleNews key={item._id} news={item}></SingleNews>)
                        }
                    </div>
                </div>

                <div className=" w-4/12 mt-14 ">
                    {
                        news.map(news => <div key={news._id} className="card mt-6 hover:scale-105 hover:border hover:border-blue-600 transition w-96 bg-base-100 shadow-xl image-full">
                            <figure><img src={news.pic}alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">{news.date}</h2>
                                <p className="font-jost">{news.heading}</p>
                               
                            </div>
                        </div>)
                    }

                </div>
            </div>
        </div>
    );
};

export default TechNews;