// import { useState } from "react";
// import SectionTitle from "../../../components/SectionTitle/SectionTitle";
// import Taginput from "../AddProduct/Taginput";
// import useAxiosCommon from "../../../Hooks/UseAxiosCommon";

// import { useLoaderData, useNavigate } from "react-router-dom";
// import toast from "react-hot-toast";
// const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY
// const image_hosting_api_key = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;


// const UpdateItem = () => {
//     const axiosCommon = useAxiosCommon();
//     const [tags, setTags] = useState([]);
//     const navigate = useNavigate();

//     const { name, _id, category,  link, description } = useLoaderData();



//     const handleUpdateProduct = async (e) => {

//         e.preventDefault();
//         const form = e.target;
//         const name = form.name?.value;
//         const category = form.category?.value;
//         const file = form.file?.files;
//         const link = form.link?.value;
//         const description = form.description?.value;
//         const updateItem = { name, link, description, tags, category, file };
//         console.log(updateItem);


//         //upload image on imgbb
//         const imgFile = { image: file[0] }
//         const res = await axiosCommon.post(image_hosting_api_key, imgFile, {
//             headers: {
//                 'Content-Type': 'multipart/form-data'
//             }
//         });
//         console.log(res.data);
//         if (res.status === 200 && res.data.success === true) {


//             const newItem = await axiosCommon.patch(`/productsUp/${_id}`, updateItem)
//             console.log(newItem);

//             if (newItem.data.modifiedCount === 1) {



//                 setTags([]);
//                 toast.success('Product Added Successfully');
//                 navigate('/Products')

//             }

//         }
//         console.log(res.data.data);



//     }


//     return (
//         <section className="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800">
//             <SectionTitle subHeading='--- Xcelliance ---' heading='Update your Product'></SectionTitle>
//             <form
//                 onSubmit={handleUpdateProduct}
//                 className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
//                 <div>
//                     <label className="text-gray-700 dark:text-gray-200">Name</label>
//                     <input defaultValue={name} name="name" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
//                 </div>

//                 <div>
//                     <label className="text-gray-700 dark:text-gray-200">Choose Photo</label>

//                     <input type="file" name='file' className="file-input file-input-bordered file-input-primary block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none   max-w-xs" />
//                 </div>

//                 <div>
//                     <label className="text-gray-700 dark:text-gray-200">External Link</label>
//                     <input name="link" defaultValue={link} type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
//                 </div>

//                 <div>
//                     <label className="text-gray-700 dark:text-gray-200">Category</label>
//                     {/* <input name="category" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" /> */}
//                     <select defaultValue={category} name="category" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800  dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" >
//                         <option value="Mobile Apps"> Mobile Apps</option>
//                         <option value="Web Apps">Web Apps</option>
//                         <option value="Games">Games</option>
//                         <option value="AI Tools">AI Tools</option>

//                     </select>
//                 </div>

//                 <div >
//                     <label className="text-gray-700 dark:text-gray-200">Tags</label>
//                     <Taginput skill={tags} setSkill={setTags} />
//                 </div>

//                 <div>
//                     <label className="text-gray-700 dark:text-gray-200">Description</label>
//                     <textarea name="description" defaultValue={description} className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"></textarea>
//                 </div>

//                 <div className="flex justify-end mt-6">
//                     <input type="submit" value="Update Product" className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600" />
//                 </div>
//             </form>
//         </section>
//     );
// };

// export default UpdateItem;

import { useState, useEffect } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import Taginput from "../AddProduct/Taginput";
import useAxiosCommon from "../../../Hooks/UseAxiosCommon";
import { useLoaderData, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api_key = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const UpdateItem = () => {
    const axiosCommon = useAxiosCommon();
    const navigate = useNavigate();
    const { name, _id, category, image, link, description, tags: initialTags } = useLoaderData();

    const [tags, setTags] = useState(initialTags || []);
    const [imagePreview, setImagePreview] = useState(image);

    useEffect(() => {
        setTags(initialTags || []);
        setImagePreview(image || null);
    }, [initialTags, image]);

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setImagePreview(URL.createObjectURL(file));
        }
    };

    const handleUpdateProduct = async (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name?.value;
        const category = form.category?.value;
        const file = form.file?.files[0];
        const link = form.link?.value;
        const description = form.description?.value;

        let imageUrl = image; // Default to existing image

        // Upload new image to imgbb if a new file is selected
        if (file) {
            const imgFile = new FormData();
            imgFile.append('image', file);

            try {
                const res = await axiosCommon.post(image_hosting_api_key, imgFile, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                });

                if (res.status === 200 && res.data.success) {
                    imageUrl = res.data.data.display_url;
                } else {
                    toast.error("Image upload failed");
                    return;
                }
            } catch (error) {
                toast.error("Image upload failed");
                return;
            }
        }

        const updateItem = { name, link, description, tags, category, image: imageUrl };

        try {
            const res = await axiosCommon.patch(`/productsUp/${_id}`, updateItem);

            if (res.data.modifiedCount === 1) {
                toast.success('Product Updated Successfully');
                navigate('/Products');
                form.reset();
                setTags([]);
            } else {
                toast.error('Product update failed');
            }
        } catch (error) {
            toast.error('Product update failed');
        }
    };

    return (
        <section className="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800">
            <SectionTitle subHeading='--- Xcelliance ---' heading='Update your Product'></SectionTitle>
            <form onSubmit={handleUpdateProduct} className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                <div>
                    <label className="text-gray-700 dark:text-gray-200">Name</label>
                    <input defaultValue={name} name="name" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                </div>

                <div>
                    <label className="text-gray-700 dark:text-gray-200">Choose Photo</label>
                    <input type="file" name='file' onChange={handleFileChange} className="file-input file-input-bordered file-input-primary block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none max-w-xs" />
                    {imagePreview && <img src={imagePreview} alt="Preview" className="mt-2 h-48 w-48 object-cover" />}
                </div>

                <div>
                    <label className="text-gray-700 dark:text-gray-200">External Link</label>
                    <input name="link" defaultValue={link} type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                </div>

                <div>
                    <label className="text-gray-700 dark:text-gray-200">Category</label>
                    <select defaultValue={category} name="category" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring">
                        <option value="Mobile Apps">Mobile Apps</option>
                        <option value="Web Apps">Web Apps</option>
                        <option value="Games">Games</option>
                        <option value="AI Tools">AI Tools</option>
                    </select>
                </div>

                <div>
                    <label className="text-gray-700 dark:text-gray-200">Tags</label>
                    <Taginput skill={tags} setSkill={setTags} />
                </div>

                <div>
                    <label className="text-gray-700 dark:text-gray-200">Description</label>
                    <textarea name="description" defaultValue={description} className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"></textarea>
                </div>

                <div className="flex justify-end mt-6">
                    <input type="submit" value="Update Product" className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600" />
                </div>
            </form>
        </section>
    );
};

export default UpdateItem;
