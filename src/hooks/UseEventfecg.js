import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export default function UseEventFech() {
  const fetchEvent = async () => {
    const res = await axios.get(`https://andii23.pythonanywhere.com/Events/`);

    return res.data;
  };
  return useQuery({ queryKey: ["allEvent"], queryFn: fetchEvent });
}
