import { VFC } from "react";
import { ChevronDoubleLeftIcon } from "@heroicons/react/solid";
import { useNavigate } from "react-router-dom";
import { useQueryClient } from "react-query";
import { Task } from "types";

export const ReactQueryB: VFC = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const tasks = queryClient.getQueryData<Task[]>("tasks");

  console.log("ReactQueryB");

  return (
    <div>
      <p className="my-3 font-bold">ReactQueryA</p>
      {tasks?.map((task) => (
        <p key={task.id}>{task.title}</p>
      ))}
      <ChevronDoubleLeftIcon
        onClick={() => navigate("/")}
        className="mt-2 h-5 w-5 cursor-pointer text-blue-500"
      />
      <p className="text-sm">react query A</p>
    </div>
  );
};
