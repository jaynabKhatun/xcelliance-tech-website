
import propTypes from "prop-types"
import { Link } from "react-router-dom";
const AllProducts = ({ p }) => {
    console.log(p);
    const { image, name, tags,  description, _id, category } = p;

    return (



        <div className="card w-96 bg-base-100 shadow-xl border hover:scale-105 transition-transform mt-10 hover:border-blue-600  ">
            <figure><img src={image} alt="Shoes" /></figure>
            <Link to={`/products/${_id}`} className="card-body">
                <h2 className="card-title">
                    {name}
                    <div className="badge badge-secondary">NEW</div>
                </h2>
                <p className="hover:link-hover">{description}</p>
                <p className="hover:link-hover">{
                    tags.map((tag, index) => {
                        return (
                            <span key={index} className="badge badge-primary mr-3">#{tag}</span>
                        )
                    })
                }</p>
                <div className="card-actions justify-end">
                    <div className="badge badge-outline">{category}</div>

                </div>
            </Link>
        </div>

    );
};

AllProducts.propTypes = {
    p: propTypes.object.isRequired,
}

export default AllProducts;