import React from "react";
import Marquee from "react-fast-marquee";
import propTypes from "prop-types";

const SingleCupon = ({ off }) => {
  console.log(off);
  const { name, discount, date, CuponCode } = off;
  return (
    <Marquee pauseOnHover={true}>
      <div>
        <div className="container bg-gradient-to-r from-indigo-500 to-violet-500 text-white p-8 rounded-lg shadow-lg max-w-md mx-auto">
          <div className="text-3xl font-bold mb-4">{name}</div>
          <div className="text-lg mb-4">
            Get <span className="text-yellow-400 font-bold">{discount}</span>{" "}
            your next purchase!
          </div>
          <div className="text-base mb-4">Use coupon code:</div>
          <div className="bg-white text-gray-800 rounded-lg px-4 py-2 flex items-center justify-between">
            <span className="text-2xl font-semibold">{CuponCode}</span>
            <button className="bg-blue-800 text-white px-3 py-1 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
              Copy
            </button>
          </div>
          <div className="text-sm mt-4">
            <p>
              Valid until <span className="font-semibold">{date}</span>
            </p>
            <p>Terms and conditions apply.</p>
          </div>
        </div>
      </div>
    </Marquee>
  );
};

SingleCupon.propTypes = {
  off: propTypes.object.isRequired,
};

export default SingleCupon;
