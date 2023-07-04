import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export default function UseofficesFech(id) {
  const fetchoffices = async () => {
    console.log("officeprefeching");
    const res = await axios.get(
      `https://andii23.pythonanywhere.com/collages/${id}/office/`
    );

    return res.data;
  };
  return useQuery({
    queryKey: ["alloffices"],
    queryFn: fetchoffices,
    enabled: !!id,
  });
}
