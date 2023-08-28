import './App.css';
import InputForm from './components/InputForm';
import ToDos from './components/ToDos';
import { useContext, useEffect } from 'react';
import { AppContext } from './context/context';
import EditForm from './components/EditForm';

const App = () => {
  const { todosData, setTodosData, trigger, setTrigger } = useContext(AppContext);

  useEffect(() => {},[trigger])

  const handleClear = () => {
    setTodosData([])
    sessionStorage.setItem("todos",JSON.stringify([]))
    setTrigger(!trigger)
  }

  return (
    <div className="App">
      <header className="App-header">
        <div>jotpile</div>
      </header>
      <i>Jot down a task, item, or note</i>
      <InputForm />
      {todosData.length === 0?
        <div className="clear-btn-ph">No Jots currently 🤔</div>
        :
        <button className="clear-btn" onClick={handleClear}>Erase Jots</button>
      }
      <ToDos />
      <EditForm />
    </div>
  );
}

export default App;
