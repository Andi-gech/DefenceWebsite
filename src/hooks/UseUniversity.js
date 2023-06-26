import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export default function UseUniversityFech() {
  const fetchUniversity = async () => {
    const res = await axios.get(`http://127.0.0.1:8000/university/`);

    return res.data;
  };
  return useQuery({ queryKey: ["allUniversity"], queryFn: fetchUniversity });
}
