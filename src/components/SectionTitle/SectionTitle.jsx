import propTypes from "prop-types"
const SectionTitle = ({ heading, subHeading }) => {
    return (
        <div className="md:w-4/12 mx-auto text-center my-8">
            <p className="text-blue-600 font-jost my-4">{subHeading}</p>
            <h3 className="text-3xl font-jost uppercase border-y-4 py-4">{heading}</h3>
        </div>
    );
};

SectionTitle.propTypes = {
    heading: propTypes.string.isRequired,
    subHeading: propTypes.string.isRequired,
}

export default SectionTitle;