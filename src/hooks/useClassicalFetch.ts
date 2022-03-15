import axios from "axios";
import { API_URL } from "constants/api";
import { StateContext } from "context/StateProvider";
import { useContext, useEffect, useState } from "react";
import { Task } from "types";

export const useClassicalFetch = () => {
  const { tasks, setTasks } = useContext(StateContext);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const res = await axios.get<Task[]>(`${API_URL}/tasks`);
        setTasks(res.data);
      } catch (error) {
        setIsError(true);
      }
      setIsLoading(false);
    };
    fetchData();
  }, [setTasks]);

  return { tasks, isLoading, isError };
};
