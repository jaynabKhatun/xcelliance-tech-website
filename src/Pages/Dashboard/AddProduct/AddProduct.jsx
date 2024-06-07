import Taginput from "./Taginput";


const AddProduct = () => {
    return (
        <div className="mx-14 mt-10 border-2 border-blue-400 rounded-lg">
            <div className="mt-10 text-center font-bold">Xcelliance</div>
            <div className="mt-3 text-center text-4xl font-bold">Add an Product</div>
            <form className="p-8">
                <div className="flex gap-4">
                    <input type="Name" name="name" className="mt-1 block w-1/2 rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm" placeholder="Product Name *" />
                    <input type="file" className="file-input file-input-bordered file-input-primary w-full max-w-xs" />

                    {/* <input type="email" name="email" className="mt-1 block w-1/2 rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm" placeholder="Email *" /> */}
                </div>
                <div className="flex gap-4 my-6">
                    <div className="mt-1 rounded-md border w-1/2 border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm">
                        < Taginput/>
                    </div>

                    <input type="text" name="link" className="mt-1 block w-1/2 rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm" placeholder="external links*" />

                </div>
                <div className="">
                    <textarea name="textarea" id="text" cols="30" rows="10" className="mb-10 h-40 w-full resize-none rounded-md border border-slate-300 p-5 font-semibold text-gray-300"> Description*
                    </textarea>
                </div>
                <div className="text-center">
                    <a className="cursor-pointer rounded-lg bg-blue-700 px-8 py-5 text-sm font-semibold text-white">Add Product</a>
                </div>
            </form>
        </div>
    );
};

export default AddProduct;