import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
  VFC,
} from "react";
import { Task } from "types";

type StateContextType = {
  tasks?: Task[];
  isDark: boolean;
  setTasks: Dispatch<SetStateAction<Task[] | undefined>>;
  setIsDark: Dispatch<SetStateAction<boolean>>;
};

export const StateContext = createContext({} as StateContextType);

type Props = {
  children: ReactNode;
};

export const StateProvider: VFC<Props> = ({ children }) => {
  const [tasks, setTasks] = useState<Task[] | undefined>(undefined);
  const [isDark, setIsDark] = useState(false);

  return (
    <StateContext.Provider value={{ tasks, isDark, setTasks, setIsDark }}>
      {children}
    </StateContext.Provider>
  );
};
