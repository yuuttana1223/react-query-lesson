import { useAppSelector } from "app/hooks";
import { VFC } from "react";
import { selectMode } from "slices/counterSlice";

export const RTKitD: VFC = () => {
  const mode = useAppSelector(selectMode);

  console.log("RTKitD");

  return (
    <div className="flex flex-col items-center justify-center">
      <p className="my-3 font-bold">RTKitD</p>
      <p className="text-blue-500">{mode ? "mode on" : "mode off"}</p>
    </div>
  );
};
