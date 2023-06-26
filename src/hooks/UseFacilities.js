import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export default function UseFacilitiesFech(id) {
  const fetchFacilities = async () => {
    const res = await axios.get(
      `http://127.0.0.1:8000/collages/${id}/facilities`
    );

    return res.data;
  };
  return useQuery({
    queryKey: ["allFacilities"],
    queryFn: fetchFacilities,
    enabled: !!id,
  });
}
