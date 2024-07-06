import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useParams } from "react-router-dom";
import useAxiosSecure from "../../../Hooks/UseAxiosSecure";

("react-router-dom");

const EditCupon = () => {
  const axioSecure = useAxiosSecure();
  const { id } = useParams();
  //   console.log(id);

  const { data: cupons } = useQuery({
    queryKey: ["cupons", id],
    queryFn: async () => {
      const res = await axioSecure.get(`/cupons/${id}`);
      console.log(res.data);
    //   return res.data;
    },
  });

  const handleEditCupon = (e) => {
    console.log("press");
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const CuponCode = form.CuponCode.value;
    const discount = form.discount.value;
    const date = form.date.value;
    const newCupon = { name, CuponCode, discount, date };
    console.log(newCupon);
  };

  return (
    <div>
      <h1 className="text-2xl flex justify-center font-semibold p-12">
        Edit Cupon
      </h1>
      <form onSubmit={handleEditCupon} className="max-w-md mx-auto p-6">
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="text"
            name="name"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            defaultValue={cupons.name}
            required
          />
          <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
            Cupon Name
          </label>
        </div>

        <div className="relative z-0 w-full mb-5 group">
          <input
            type="text"
            name="discount"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            defaultValue={cupons.discount}
            required
          />
          <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
            discount
          </label>
        </div>
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="text"
            name="CuponCode"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            defaultValue={cupons.CuponCode}
            required
          />
          <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
            Cupon Code
          </label>
        </div>

        <div className="relative z-0 w-full mb-5 group">
          <input
            type="date"
            name="date"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            defaultValue={cupons.date}
            required
          />
          <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
            date
          </label>
        </div>

        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default EditCupon;
