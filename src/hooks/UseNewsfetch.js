import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export default function UseNewsfech() {
  const fetchnews = async () => {
    const res = await axios.get(`https://andii23.pythonanywhere.com/News/`);

    return res.data;
  };
  return useQuery({ queryKey: ["allnews"], queryFn: fetchnews });
}
