import { FaCartPlus, FaHome, FaOutdent, FaUser } from "react-icons/fa";
import NavlinkMenu from "./NavlinkMenu";

const ModaratorMenu = () => {
    return (
        <div>
            <NavlinkMenu icon={FaUser} label='My Profile' address='/dashboard/myProfile' />
            <NavlinkMenu icon={FaUser} label='Product Review' address='productReview' />

            <NavlinkMenu icon={FaUser} label='Reported Product' address='reportedContent' />
        </div>
    );
};

export default ModaratorMenu;