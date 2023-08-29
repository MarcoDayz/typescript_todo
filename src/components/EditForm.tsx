import { ChangeEvent, FormEvent, useContext, useEffect } from "react";
import { AppContext } from "../context/context";

const EditForm = () => {
    const { todosData, setTodosData, onEdit, setOnEdit, editID, setEditID, jot, setJot } = useContext(AppContext);

    useEffect(() => {
        if(todosData.length === 0){
            setJot("")
        }else{
            setJot(todosData[editID].item)
        }
        return
    }, [editID, todosData]);

    
    const handleEditChange = (e: ChangeEvent<HTMLInputElement>) => {
        setJot(e.currentTarget.value)
    }

    const handleEditSubmit = (e: FormEvent) => {
        e.preventDefault()
        //add splice method replace the jot
        todosData.splice(editID, 1, {item: jot})
        setTodosData(todosData)
        exitModule()
    }

    const exitModule = () => {
        setOnEdit(false)
        setEditID(0)
        setJot("")
    }

    return (
        <>
        {onEdit?
            <div className="edit-main">
                <form name="edit-fm" className="edit-fm" onSubmit={handleEditSubmit}>
                    <div className="exit-wrapper">
                        <input type="button" className="exit-btn" onClick={exitModule}/>
                    </div>
                    {/* <h1>Update Jot</h1> */}
                    <div className="edit-inp-wrapper">
                        <input name="edit-in" className="edit-in" type="text" value={jot} onChange={handleEditChange} autoComplete="off"/>
                        <input name="edit-sub" className="edit-sub" type="submit" value={"save"}/>
                    </div>
                </form>
            </div>
            :
            null
        }
        </>
    )
};

export default EditForm;