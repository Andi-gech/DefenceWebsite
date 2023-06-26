import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export default function UseNewsfech() {
  const fetchnews = async () => {
    const res = await axios.get(`http://127.0.0.1:8000/News/`);

    return res.data;
  };
  return useQuery({ queryKey: ["allnews"], queryFn: fetchnews });
}
