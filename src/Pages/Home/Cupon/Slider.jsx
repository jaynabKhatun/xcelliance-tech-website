import React from "react";
import useAxiosSecure from "../../../Hooks/UseAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import SingleCupon from "../Cupon/SingleCupon";

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
    <div className="flex gap-2">
      {offer.map((off) => (
        <SingleCupon key={off._id} off={off}></SingleCupon>
      ))}
    </div>
  );
};

export default Slider;
