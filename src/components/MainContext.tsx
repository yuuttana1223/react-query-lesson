import { VFC } from "react";
import { ClassicalFetchA } from "components/ClassicalFetchA";
import { ClassicalFetchB } from "components/ClassicalFetchB";
import { ContextA } from "components/ContextA";
import { ContextB } from "components/ContextB";

export const MainContext: VFC = () => {
  return (
    <div className="grid grid-cols-2 gap-40">
      <ClassicalFetchA />
      <ClassicalFetchB />
      <ContextA />
      <ContextB />
    </div>
  );
};
