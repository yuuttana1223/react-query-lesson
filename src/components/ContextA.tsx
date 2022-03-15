import { StateContext } from "context/StateProvider";
import { useContext, VFC } from "react";
export const ContextA: VFC = () => {
  const { isDark, setIsDark } = useContext(StateContext);
  console.log("ContextA");

  return (
    <div className="flex flex-col items-center justify-center">
      <p className="my-3 font-bold">ContextA</p>
      <p className="my-3">{isDark ? "on" : "off"}</p>
      <button
        onClick={() => setIsDark((prevIsDark) => !prevIsDark)}
        className="rounded bg-indigo-600 py-2 px-3 text-sm text-white hover:bg-indigo-700"
      >
        toggle mode
      </button>
    </div>
  );
};
