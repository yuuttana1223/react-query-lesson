import { ChevronDoubleLeftIcon } from "@heroicons/react/solid";
import { StateContext } from "context/StateProvider";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

export const ClassicalFetchB = () => {
  const { tasks } = useContext(StateContext);
  const navigate = useNavigate();
  console.log("ClassicalFetchB");

  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="mb-3 text-center font-bold">ClassicalFetchA</h1>
      {tasks?.map((task) => (
        <p key={task.id}>{task.title}</p>
      ))}
      <ChevronDoubleLeftIcon
        onClick={() => navigate("/fetch-a")}
        className="h-5 w-5 cursor-pointer text-blue-500"
      />
      <p className="text-sm">fetch A</p>
    </div>
  );
};
