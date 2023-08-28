import { ChangeEvent, FormEvent, useContext, useEffect } from "react";
import { AppContext } from "../context/context";

const InputForm = () => {
    const { input, setInput, setTodosData, todosData } = useContext(AppContext);

    useEffect(()=>{
        sessionStorage.setItem("todos",JSON.stringify(todosData))
    },[todosData])

    const handleChange = (e : ChangeEvent<HTMLInputElement>) => {
        setInput(e.target.value)
    }

    const handleSubmit = (e : FormEvent) => {
        e.preventDefault();
        if(input.length !== 0){
            collectTodo(input)
            
            setInput("");
        }else{
            return
        }
    }

    const collectTodo = (todo: string) => {
        setTodosData([...todosData,{item: todo}])
        // sessionStorage.setItem("todos",JSON.stringify(todosData))
    }

    return (
        <form id="fm" onSubmit={handleSubmit}>
            <input id="in" type="text" placeholder="ex. Buy Milk" value={input} onChange={handleChange} autoComplete="off"/>
            <input id="sub" type="submit" value={"Jot"}/>
        </form>
    )
};

export default InputForm;