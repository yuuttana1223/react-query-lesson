import { useAppDispatch } from "app/hooks";
import { increment } from "slices/counterSlice";

export const RTKitB = () => {
  const dispatch = useAppDispatch();

  console.log("RTKitB");

  return (
    <div className="flex flex-col items-center justify-center">
      <p className="my-3 font-bold">RTKitB</p>
      <button
        onClick={() => dispatch(increment())}
        className="rounded bg-indigo-600 py-3 px-3 text-sm text-white hover:bg-indigo-700"
      >
        increment
      </button>
    </div>
  );
};
