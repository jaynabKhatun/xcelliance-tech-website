import React from "react";
import useAxiosSecure from "../../../Hooks/UseAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import SingleCupon from "../Cupon/SingleCupon";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const Slider = () => {
  const axiosSecure = useAxiosSecure();
  const { data: offer = [] } = useQuery({
    queryKey: ["offer"],
    queryFn: async () => {
      const res = await axiosSecure.get("/offer");
      console.log(res.data);

      return res.data;
    },
  });
  return (
    <div>
      <SectionTitle subHeading="New Offer" heading="Big Sell Offer">
        {" "}
      </SectionTitle>
      <div className="flex gap-2">
        {offer.map((off) => (
          <SingleCupon key={off._id} off={off}></SingleCupon>
        ))}
      </div>
    </div>
  );
};

export default Slider;
