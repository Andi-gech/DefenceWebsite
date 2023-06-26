import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export default function UseCollageFech() {
  const fetchCollage = async () => {
    const res = await axios.get(`https://andii23.pythonanywhere.com/collages/`);

    return res.data;
  };
  return useQuery({ queryKey: ["allcollage"], queryFn: fetchCollage });
}
