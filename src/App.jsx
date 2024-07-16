import './App.css';
import { useState} from 'react';

function App() {

  const [input, setInput] = useState("");
  const [list, setList] = useState([]);
  const [uid, setUid] = useState();
  const [update, setUpdate] = useState(false);

  const handleInput = (ev) => {
    setInput(ev.target.value);
  }

  const handleTask = () => {
    setList([...list, input]);
    setInput("")
  }

  const handleUpdate = () => {
    list.splice(uid, 1, input)
    setInput("")
    setUpdate(false)
  }

  const handleDelete = (i) => {
    const filterList = list.filter((element)=> element !== list[i])
    console.log("filterList", filterList);
    setList(filterList)
    setInput("")
  }

  const handleEdit = (i) => {
    const filterList = list.filter((element)=> element === list[i])
    setInput(filterList[0])
    setUid(i)
    setUpdate(true)
  }

  return(
    <div className="App">
      
      <h2>Todo App</h2>

      <div className="container">

      <div className="input-box">
            <input type="text" value={input} onChange={(ev)=>handleInput(ev)} placeholder='Enter task...'/> 
            {update ? <button className="update-button" onClick={handleUpdate}>Update</button> : 
            <button className="add-button" onClick={handleTask}>Add task</button>}
      </div>

        <div className="list">
          <ul>
            {list.map((item, i) => 
              <li key={i}>
                {item}
                <button
                  className="delete-button"
                  onClick={() => handleDelete(i)}>
                  Delete
                </button>

                <button
                  className="edit-button"
                  onClick={() => handleEdit(i)}>
                  Edit
                </button>
              </li>
            )}
          </ul>
        </div>
        
      </div>        
    </div>
  );
}

export default App;