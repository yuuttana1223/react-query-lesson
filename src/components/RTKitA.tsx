import { useAppDispatch, useAppSelector } from "app/hooks";
import { VFC } from "react";
import { increment, selectCount } from "slices/counterSlice";

export const RTKitA: VFC = () => {
  const count = useAppSelector(selectCount);
  const dispatch = useAppDispatch();

  console.log("RTKitA");

  return (
    <div className="flex flex-col items-center justify-center">
      <p className="my-3 font-bold">RTKitA</p>
      {count}
      <button
        onClick={() => dispatch(increment())}
        className="mt-3 rounded bg-indigo-600 py-3 px-3 text-sm text-white hover:bg-indigo-700"
      >
        increment
      </button>
      <div></div>
    </div>
  );
};
