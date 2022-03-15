import { VFC } from "react";
import { ChevronDoubleRightIcon } from "@heroicons/react/solid";
import { useNavigate } from "react-router-dom";
import { useQueryTasks } from "hooks/useQueryTasks";

export const ReactQueryA: VFC = () => {
  const navigate = useNavigate();
  const { data: tasks, isLoading, isError } = useQueryTasks();

  console.log("ReactQueryA");

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error</div>;
  }

  return (
    <div>
      <p className="my-3 font-bold">ReactQueryA</p>
      {tasks?.map((task) => (
        <p key={task.id}>{task.title}</p>
      ))}
      <ChevronDoubleRightIcon
        onClick={() => navigate("/query-b")}
        className="mt-2 h-5 w-5 cursor-pointer text-blue-500"
      />
      <p className="text-sm">react query B</p>
    </div>
  );
};
