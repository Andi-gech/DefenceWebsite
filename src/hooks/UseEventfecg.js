import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export default function UseEventFech() {
  const fetchEvent = async () => {
    const res = await axios.get(`http://127.0.0.1:8000/Events/`);

    return res.data;
  };
  return useQuery({ queryKey: ["allEvent"], queryFn: fetchEvent });
}
