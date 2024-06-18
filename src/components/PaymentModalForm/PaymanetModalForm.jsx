import useAuth from "../../Hooks/UseAuth";


const PaymanetModalForm = ({closemodal}) => {
    const { user } = useAuth();
    console.log(user)
    return (
        <section className="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800">
            <h2 className="text-lg font-semibold text-gray-700 capitalize dark:text-white">Name : {user.displayName}</h2>

            <form>
                <div>
                    <div>
                        <label className="text-gray-700 dark:text-gray-200" >Subcription Fee : $ <span>50</span></label>
                        <div>
                            <h1>
                                Activate Xcellinace Subscription
                            </h1>
                        </div>
                    </div>

                </div>

                <div className="flex justify-end mt-6">
                    <button
                        className="px-8 py-2.5 leading-5
                      text-white transition-colors
                       duration-300 transform bg-gray-700
                        rounded-md hover:bg-gray-600
                         focus:outline-none focus:bg-gray-600">
                        PayNow
                    </button>
                </div>
            </form>
        </section>
    );
};

export default PaymanetModalForm;