import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export default function UseCollageFech() {
  const fetchCollage = async () => {
    const res = await axios.get(`http://127.0.0.1:8000/collages/`);

    return res.data;
  };
  return useQuery({ queryKey: ["allcollage"], queryFn: fetchCollage });
}
