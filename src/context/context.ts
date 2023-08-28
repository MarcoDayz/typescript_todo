import { createContext } from "react"

export interface Todo {
  item: string
}
export const AppContext = createContext<AppContextProps>(
  {
    input: "",
    setInput: () => {},
    todosData: [],
    setTodosData: () => {},
    trigger: false,
    setTrigger: () => {},
    onEdit: false,
    setOnEdit: () => {},
    editID: 0,
    setEditID: () => {},
    jot: "",
    setJot: () => {}
  }
);


type AppContextProps = {
  input: string;
  setInput: (newValue: string) => void,
  todosData: Todo[]
  setTodosData: (newArr: Todo[]) => void,
  trigger: boolean,
  setTrigger: (newBoolean: boolean) => void,
  onEdit: boolean,
  setOnEdit: (newBoolean: boolean) => void,
  editID: number,
  setEditID: (newID: number) => void,
  jot: string,
  setJot: (newJot: string) => void
}