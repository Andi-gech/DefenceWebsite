import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export default function UseUniversityFech() {
  const fetchUniversity = async () => {
    const res = await axios.get(
      `https://andii23.pythonanywhere.com/university/`
    );

    return res.data;
  };
  return useQuery({ queryKey: ["allUniversity"], queryFn: fetchUniversity });
}
