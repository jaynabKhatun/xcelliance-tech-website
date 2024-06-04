import propTypes from "prop-types"
import { BiSolidLike } from "react-icons/bi";

const SingleFeatured = ({ item }) => {
    console.log(item)
    const { image, name, tags,upvotes } = item;
    return (
        <div className="flex justify-center items-center  gap-20 ">
            <div className="card mt-8 h-40 card-side w-11/12 border ">

                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>
                        {
                            tags.map((tag, index) => {
                                return (
                                    <span key={index} className="badge badge-primary mr-3">{tag}</span>
                                )
                            })
                        }
                    </p>

                </div>
                <figure><img src={image} alt="Movie" /></figure>
            </div>

            <div className="w-1/12">
                <div className="border flex justify-center flex-col  py-2 items-center">
                <BiSolidLike className="text-4xl" />
                {upvotes}
               
                </div>
            </div>
        </div>
    );
};

SingleFeatured.propTypes = {
    item: propTypes.object.isRequired,
};

export default SingleFeatured;