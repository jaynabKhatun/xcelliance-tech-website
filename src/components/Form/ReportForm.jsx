
import useAxiosCommon from "../../Hooks/UseAxiosCommon";
import useAuth from "../../Hooks/UseAuth";
import propTypes from "prop-types";
import toast from "react-hot-toast";


const ReportForm = ({ products, setIsOpen }) => {
    // console.log(products);
    const axiosCommon = useAxiosCommon();
    const { user } = useAuth();
    // console.log(user);



    const handleReport = (e) => {
        e.preventDefault();
        // console.log("form data hre");
        const form = e.target
        const report = form.report.value;
        const product = products
        // console.log(report);


        //report send to server
        const reportedProduct = {
            report,
            product
        }
        axiosCommon.post("/report", reportedProduct)
            .then(res => {
                // console.log(res.data);
                if (res.data.insertedId) {
                    toast.success("Reported Successfully")
                }
                setIsOpen(false)



            })
            .catch(err => {
                // console.log(err.message);
                toast.error(err.message);
            })


    }
    return (
        <section className="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800">
            <h2 className="text-lg font-semibold text-gray-700 capitalize dark:text-white">Name: {products}</h2>

            <form onSubmit={handleReport}>
                <div>
                    <div>
                        <label className="text-gray-700 dark:text-gray-200" >By: {user.displayName}</label>
                        <textarea name="report" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                    </div>

                </div>

                <div className="flex justify-end mt-6">
                    <button className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">Submit</button>
                </div>
            </form>
        </section>
    );
};

ReportForm.propTypes = {
    products: propTypes.string.isRequired,
    setIsOpen: propTypes.func.isRequired,

}

export default ReportForm;