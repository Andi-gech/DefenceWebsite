import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export default function UseDepartmentFech(id) {
  const fetchDepartment = async () => {
    const res = await axios.get(
      `http://127.0.0.1:8000/collages/${id}/department`
    );

    return res.data;
  };
  return useQuery({
    queryKey: ["allDepartment"],
    queryFn: fetchDepartment,
    enabled: !!id,
  });
}
