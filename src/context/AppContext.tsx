import { useState } from "react";
import { AppContextProviderComponent } from "./types";
import { AppContext } from "./context";
import { Todo } from "./context";


export const AppContextProvider: AppContextProviderComponent = ({ children }) => {
    const checkData = () => {
        const todoData = sessionStorage.getItem("todos")
        if(todoData){
          return JSON.parse(todoData);
        }else{
          return []
        }
    }

    const [input, setInput] = useState<string>("");
    const [todosData, setTodosData] = useState<Todo[]>(checkData);
    const [trigger, setTrigger] = useState<boolean>(false);
    const [onEdit, setOnEdit] = useState<boolean>(false);
    const [editID, setEditID] = useState<number>(0);
    const [jot, setJot] = useState<string>("")

    return (
        <AppContext.Provider
        value={
            {
                input,
                setInput,
                todosData,
                setTodosData,
                trigger,
                setTrigger,
                onEdit,
                setOnEdit,
                editID,
                setEditID,
                jot,
                setJot
            }
        }>
            {(children)}
        </AppContext.Provider>
    )
};