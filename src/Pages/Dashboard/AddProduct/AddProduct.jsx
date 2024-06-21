import { useState } from 'react';
import Taginput from "../../../Pages/Dashboard/AddProduct/Taginput";
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import useAxiosCommon from '../../../Hooks/UseAxiosCommon';
import toast from 'react-hot-toast';
import useAuth from '../../../Hooks/UseAuth';
import { useNavigate } from 'react-router-dom';


const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY
const image_hosting_api_key = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const AddProduct = () => {
    const navigate = useNavigate();
    const [tags, setTags] = useState([]);
    const axiosCommon = useAxiosCommon();
    const { user } = useAuth();
    console.log(user);

    const handleAddProduct = async (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name?.value;
        const category = form.category?.value;
        const file = form.file?.files;
        const link = form.link?.value;
        const description = form.description?.value;
        const newProduct = { name, link, description, tags, category, file };
        console.log(newProduct);


        //upload image on imgbb
        const imgFile = { image: file[0] }
        const res = await axiosCommon.post(image_hosting_api_key, imgFile, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
        if (res.status === 200 && res.data.success === true) {
            //now send data to server
            const addProduct = {
                name: newProduct.name,
                link: newProduct.link,
                description: newProduct.description,
                tags: newProduct.tags,
                category: newProduct.category,
                image: res.data.data.display_url,
                status: 'pending',

                userName: user?.name,
                email: user?.email,
                userImage: user?.image,
                time: new Date()

            }
            const newItem = await axiosCommon.post('/products', addProduct)
            console.log(newItem);
            if (newItem.data.insertedId) {
                navigate('/Products')

                form.reset();
                setTags([]);
                toast.success('Product Added Successfully');

            }

        }
        console.log(res.data.data);

    };

    return (
        <section className="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800">
            <SectionTitle subHeading='--- Xcelliance ---' heading='Add Your Product'></SectionTitle>
            <form
                onSubmit={handleAddProduct}
                className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                <div>
                    <label className="text-gray-700 dark:text-gray-200">Name</label>
                    <input name="name" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                </div>

                <div>
                    <label className="text-gray-700 dark:text-gray-200">Choose Photo</label>

                    <input type="file" name='file' className="file-input file-input-bordered file-input-primary block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none   max-w-xs" />
                </div>

                <div>
                    <label className="text-gray-700 dark:text-gray-200">External Link</label>
                    <input name="link" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                </div>

                <div>
                    <label className="text-gray-700 dark:text-gray-200">Category</label>
                    {/* <input name="category" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" /> */}
                    <select name="category" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" >
                        <option value="Mobile Apps"> Mobile Apps</option>
                        <option value="Web Apps">Web Apps</option>
                        <option value="Games">Games</option>
                        <option value="AI Tools">AI Tools</option>

                    </select>
                </div>

                <div >
                    <label className="text-gray-700 dark:text-gray-200">Tags</label>
                    <Taginput skill={tags} setSkill={setTags} />
                </div>

                <div>
                    <label className="text-gray-700 dark:text-gray-200">Description</label>
                    <textarea name="description" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"></textarea>
                </div>

                <div className="flex justify-end mt-6">
                    <input type="submit" value="Add Product" className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600" />
                </div>
            </form>
        </section>
    );
};

export default AddProduct;
