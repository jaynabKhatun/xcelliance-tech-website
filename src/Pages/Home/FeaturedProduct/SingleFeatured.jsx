import propTypes from "prop-types";
import { BiSolidLike } from "react-icons/bi";
import { Link, useParams } from "react-router-dom";
import useAuth from "../../../Hooks/UseAuth";
import useAxiosCommon from "../../../Hooks/UseAxiosCommon";
import toast from "react-hot-toast";

const SingleFeatured = ({ item }) => {
  // console.log(item)
  const { image, name, tags, upvotes, description, _id } = item;
  const { user } = useAuth();
  console.log(user);
  const axiosCommon = useAxiosCommon();

  const handleUpvote = async () => {
    console.log("Upvoting");
    if (!user) {
        toast.error("Please log in to upvote.");
        return;
      }


  };

  return (
    <div className="flex  justify-center items-center  md:gap-20 ">
      <Link
        to={`/products/${_id}`}
        className="card mt-8 md:h-40 card-side w-11/12 border bg-base-200 hover:border-blue-600 hover:scale-105 transition "
      >
        <div className="card-body">
          <h2 className="card-title font-jost">{name}</h2>
          <p>
            {tags?.map((tag, index) => {
              return (
                <span key={index} className="badge badge-primary mr-3">
                  {tag}
                </span>
              );
            })}
          </p>
          <p className="font-jost">{description}</p>
        </div>
        <figure>
          <img src={image} alt="Movie" />
        </figure>
      </Link>

      <div className="w-1/12 hover:bg-gray-500 hover:scale-105">
        <button
          onClick={handleUpvote}
          className="border flex justify-center flex-col py-2 items-center"
        >
          <BiSolidLike className="text-4xl" />
        </button>
      </div>
    </div>
  );
};

SingleFeatured.propTypes = {
  item: propTypes.object.isRequired,
};

export default SingleFeatured;
