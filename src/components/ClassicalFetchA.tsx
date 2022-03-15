import { useClassicalFetch } from "hooks/useClassicalFetch";
import { VFC } from "react";
import { ChevronDoubleRightIcon } from "@heroicons/react/solid";
import { useNavigate } from "react-router-dom";

export const ClassicalFetchA: VFC = () => {
  const { tasks, isLoading, isError } = useClassicalFetch();
  const navigate = useNavigate();
  console.log("ClassicalFetchA");

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    <div>Error</div>;
  }

  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="mb-3 text-center font-bold">ClassicalFetchA</h1>
      {tasks?.map((task) => (
        <p key={task.id}>{task.title}</p>
      ))}
      <ChevronDoubleRightIcon
        onClick={() => navigate("/fetch-b")}
        className="h-5 w-5 cursor-pointer text-blue-500"
      />
      <p className="text-sm">fetch B</p>
    </div>
  );
};
