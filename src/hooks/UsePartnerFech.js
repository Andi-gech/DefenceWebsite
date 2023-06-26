import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export default function UsePartnersFech(id) {
  const fetchPartners = async () => {
    const res = await axios.get(`http://127.0.0.1:8000/collages/${id}/partner`);

    return res.data;
  };
  return useQuery({
    queryKey: ["allPartners"],
    queryFn: fetchPartners,
    enabled: !!id,
  });
}
