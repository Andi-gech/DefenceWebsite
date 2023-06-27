import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export default function UseIndividualnewsFech(id) {
  const fetchIndividualnews = async () => {
    console.log("deprefeching");
    const res = await axios.get(
      `https://andii23.pythonanywhere.com/News/${id}`
    );

    return res.data;
  };
  return useQuery({
    queryKey: ["allIndividualnews"],
    queryFn: fetchIndividualnews,
    enabled: !!id,
  });
}
