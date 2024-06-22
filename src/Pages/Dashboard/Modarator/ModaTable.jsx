import { Link } from "react-router-dom";
import propTypes from "prop-types"

const ModaTable = ({ item, idx }) => {
    // console.log(item);
    const { name } = item;
    return (

        <tr className="bg-base-200 hover:bg-gray-100">
            <th className="px-4 py-2 text-left">{idx + 1}</th>
            <td className="px-4 py-2 text-left">{name}</td>
            <td className="px-4 py-2 text-left"><Link to={'/products'}><button className=" btn  btn-secondary btn-sm">View Details</button></Link></td>
            <td className="px-4 py-2 text-left"><button className="btn btn-ghost">Make Featured</button></td>
        </tr>

    );
};

ModaTable.propTypes = {
    item: propTypes.object.isRequired,
    idx: propTypes.number.isRequired,
}

export default ModaTable;