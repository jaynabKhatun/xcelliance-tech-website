import { useQuery } from "@tanstack/react-query";

import { useParams } from "react-router-dom";
import useAxiosCommon from "../../Hooks/UseAxiosCommon";
import { BiSolidLike } from "react-icons/bi";

import SectionTitle from "../../components/SectionTitle/SectionTitle";
import { useState } from "react";
import ProductReportModal from "../../components/Modal/ProductReportModal";
import toast from "react-hot-toast";
import useAuth from "../../Hooks/UseAuth";

import ReviewSlider from "./ReviewSlider";

const ProductsDetailsPages = () => {
  // const axiosSecure = useAxiosSecure();
  const axiosCommon = useAxiosCommon();
  const { id } = useParams();
  const { user } = useAuth();
  console.log(user);

  const [isOpen, setIsOpen] = useState(false);

  //get all data from database
  const { data: products = [] } = useQuery({
    queryKey: ["products", id],
    queryFn: async () => {
      const res = await axiosCommon.get(`/products/${id}`);
      console.log(res.data);
      return res.data;
    },
  });

  const { data: reviews = [] } = useQuery({
    queryKey: ["reviews", id],
    queryFn: async () => {
      const res = await axiosCommon.get(`/reviews`);
      console.log(res.data);
      return res.data;
    },
  });

  console.log(reviews);

  const handleReview = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;

    const rating = form.rating.value;
    const review = form.review.value;

    const reviewData1 = { name, email, rating, review };
    console.log(reviewData1);

    //review sent to server
    const reviewData = {
      name,
      email,
      rating,
      review,
      img: user?.photoURL,
    };

    // console.log(reviewData)
    axiosCommon.post("/review", reviewData).then((res) => {
      // console.log(res.data);
      if (res.data.insertedId) {
        toast.success("Review Added Successfully");
      }
      form.reset();
    });
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div className="p-5 mx-auto sm:p-10 md:p-16 dark:bg-gray-100 dark:text-gray-800 ">
      <div className="flex flex-col max-w-3xl mx-auto overflow-hidden rounded mt-32">
        <img
          src={products.image}
          alt=""
          className="w-full h-60 sm:h-96 dark:bg-gray-500"
        />
        <div className="p-6 pb-12 m-4 mx-auto -mt-16 space-y-6 lg:max-w-2xl sm:px-10 sm:mx-12 lg:rounded-md dark:bg-gray-50">
          <div className="space-y-2">
            <a
              rel="noopener noreferrer"
              href="#"
              className="inline-block bg-base-300 mb-10 p-4 text-2xl font-semibold sm:text-3xl"
            >
              {products.name}{" "}
              <div className="badge badge-secondary">{products.category}</div>
            </a>

            <p className=" dark:text-gray-600  font-jost text-2xl">
              {products.description}
            </p>
            <p>
              {products.tags?.map((tag, index) => (
                <p key={index}># {tag}</p>
              ))}
            </p>
            <p>{}</p>
          </div>

          <div className="flex justify-end gap-6">
            {/* upvote byn */}
            
            <button className="btn btn-outline btn-secondary border-blue-600">
              {products.upvotes}
              <BiSolidLike className="text-4xl" />
            </button>

            {/* report product */}
            <button
              onClick={() => setIsOpen(true)}
              className="btn btn-outline btn-secondary border-blue-600"
            >
              Report This Product
            </button>
            {/* modal */}
            <ProductReportModal
              isOpen={isOpen}
              closeModal={closeModal}
              setIsOpen={setIsOpen}
              products={products.name}
            />
          </div>

          <h1 className="text-4xl font-jost">Write a Review</h1>

          <form onSubmit={handleReview}>
            <div className="grid grid-cols-4 gap-6 border-blue-600 border-2 p-6 rounded-md shadow-sm dark:bg-gray-50">
              <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                <div className="col-span-full sm:col-span-3">
                  <label className="text-sm">Username</label>
                  <input
                    id="username"
                    defaultValue={user?.displayName}
                    name="name"
                    type="text"
                    placeholder="Username"
                    className="w-full border p-2 border-blue-600 rounded-md"
                  />
                </div>
                <div className="col-span-full sm:col-span-3">
                  <label className="text-sm">email</label>
                  <input
                    type="text"
                    defaultValue={user?.email}
                    name="email"
                    placeholder="email"
                    className="w-full p-2 border border-blue-600 rounded-md"
                  />
                </div>
                <div className="col-span-full sm:col-span-3">
                  <label className="text-sm">Rating</label>
                  <input
                    id="rating"
                    type="text"
                    name="rating"
                    className="w-full p-2 border border-blue-600 rounded-md"
                  />
                </div>
                <div className="col-span-full">
                  <label className="text-sm">write a Review</label>
                  <textarea
                    id="bio"
                    placeholder="Review"
                    name="review"
                    className="w-full  border border-blue-600 rounded-md"
                  ></textarea>
                </div>
                <input
                  className="btn btn-primary w-40 "
                  type="submit"
                  value="Submit Review"
                />
              </div>
            </div>
          </form>
        </div>
      </div>

      <SectionTitle subHeading="Our Customer" heading=" Review "></SectionTitle>
      <div>
        <ReviewSlider reviews={reviews}></ReviewSlider>
      </div>
    </div>
  );
};

export default ProductsDetailsPages;
