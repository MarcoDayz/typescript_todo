import React, { useContext, MouseEvent, useEffect } from "react";
import { AppContext } from "../context/context";
import { FiEdit, FiDelete } from "react-icons/fi";

const ToDos : React.FunctionComponent = () => {
    const { todosData, setTodosData, trigger, setTrigger, setOnEdit, setEditID } = useContext(AppContext);

    useEffect(() => {
    },[trigger]);

    const handleDelete = (e : MouseEvent) => {
        let id : number = parseInt(e.currentTarget.id)
        todosData.splice(id, 1);
        setTodosData(todosData);
        sessionStorage.setItem("todos", JSON.stringify(todosData))
        setTrigger(!trigger)
    }

    const handleEdit = (e: MouseEvent) => {
        const id : number = parseInt(e.currentTarget.id)
        setEditID(id)
        setOnEdit(true)
        // console.log(id)
    }

    return (
        <>
        {
            todosData.map((elem, i) => {
                return (
                    <div className="todo-wrapper" key={i}>
                        <div className="count">{i+1})</div>
                        <div className="todo-txt">{elem.item}</div>
                        <div className="options">
                            <button id={`${i}`} className="edit-btn" onClick={handleEdit}><FiEdit /></button>
                            <button id={`${i}`} className="del-btn" onClick={handleDelete}><FiDelete /></button>
                        </div>
                    </div>
                )
            })
        }
        </>
    )
};

export default ToDos;