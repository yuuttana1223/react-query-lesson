import { VFC } from "react";
import { useAppDispatch } from "app/hooks";
import { toggleMode } from "slices/counterSlice";

export const RTKitC: VFC = () => {
  const dispatch = useAppDispatch();

  console.log("RTKitC");

  return (
    <div className="flex flex-col items-center justify-center">
      <p className="my-3 font-bold">RTKitC</p>
      <button
        onClick={() => dispatch(toggleMode())}
        className="rounded bg-indigo-600 py-3 px-3 text-sm text-white hover:bg-indigo-700"
      >
        toggle mode
      </button>
    </div>
  );
};
