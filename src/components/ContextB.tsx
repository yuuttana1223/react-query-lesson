import { StateContext } from "context/StateProvider";
import { VFC, useContext } from "react";

export const ContextB: VFC = () => {
  const { isDark, setIsDark } = useContext(StateContext);

  console.log("ContextB");

  return (
    <div className="flex flex-col items-center justify-center">
      <p className="my-3 font-bold">ContextB</p>
      <p className="my-3">{isDark ? "on" : "off"}</p>
      <button
        onClick={() => setIsDark(false)}
        className="rounded bg-green-600 py-2 px-3 text-sm text-white hover:bg-green-700"
      >
        dark mode off
      </button>
    </div>
  );
};
