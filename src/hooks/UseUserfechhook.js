import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export default function UseStafmemberFech() {
  const fetchStafmember = async () => {
    const res = await axios.get(
      `https://andii23.pythonanywhere.com/staffmember/`
    );
    console.log(res.data);
    return res.data;
  };
  return useQuery({
    queryKey: ["allStafmember"],
    queryFn: fetchStafmember,
  });
}
