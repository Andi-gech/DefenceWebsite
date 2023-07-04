import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export default function UseStafmemberFech(id) {
  const fetchStafmember = async () => {
    console.log("officeprefeching");
    const res = await axios.get(
      `https://andii23.pythonanywhere.com/staffmember/${id}/`
    );

    return res.data;
  };
  return useQuery({
    queryKey: ["allStafmember"],
    queryFn: fetchStafmember,
    enabled: !!id,
  });
}
