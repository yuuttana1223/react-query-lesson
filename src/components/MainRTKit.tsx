import { VFC } from "react";
import { RTKitA } from "components/RTKitA";
import { RTKitB } from "components/RTKitB";
import { RTKitC } from "components/RTKitC";
import { RTKitD } from "components/RTKitD";

export const MainRTKit: VFC = () => {
  return (
    <div className="grid grid-cols-2 gap-40">
      <RTKitA />
      <RTKitB />
      <RTKitC />
      <RTKitD />
    </div>
  );
};
