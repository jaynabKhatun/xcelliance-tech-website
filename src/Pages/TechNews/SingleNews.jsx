
import propTypes from "prop-types"
const SingleNews = ({ news }) => {
    // console.log(news)
    const {pic,date, windows, heading } = news;
    return (
        <div className="card w-96  bg-base-200 shadow-xl mt-10 hover:scale-105 transition hover:border hover:border-blue-600 ">
            <figure ><img src={pic} alt="news" /></figure>
           <div className="flex font-bold mt-2 ml-2 gap-4 font-jost">
           <p>{windows}</p>
            <p>{date}</p>

           </div>
            <div className="card-body">
                <h2  className="card-title hover:link-hover">
              
                    {heading}
                   
                </h2>
               
                <div className="card-actions justify-end">
                    <div className="badge badge-outline">tech</div>
                    <div className="badge badge-outline">news</div>
                </div>
            </div>
        </div>
    );
};

SingleNews.propTypes = {
    news: propTypes.object.isRequired,
};

export default SingleNews;