import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export default function UseFacilitiesFech(id) {
  const fetchFacilities = async () => {
    const res = await axios.get(
      `https://andii23.pythonanywhere.com/collages/${id}/facilities`
    );

    return res.data;
  };
  return useQuery({
    queryKey: ["allFacilities"],
    queryFn: fetchFacilities,
    enabled: !!id,
  });
}
