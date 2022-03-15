import { API_URL } from "constants/api";
import { Task } from "types";
import axios from "axios";
import { useQuery } from "react-query";

const fetchAllTasks = async () => {
  const res = await axios.get<Task[]>(`${API_URL}/tasks`);
  return res.data;
};

export const useQueryTasks = () => {
  return useQuery<Task[], Error>({
    queryKey: "tasks",
    queryFn: fetchAllTasks,
    cacheTime: 30000,
    staleTime: 30000,
  });
};
