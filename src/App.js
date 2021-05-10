import React, { useState } from 'react';
import './App.css';
import ToDoLists from './ToDoLists';

const App=()=>{
const [listName,setListName] = useState("");
const [items,setItems] = useState([]);
const InputEvent =(e)=>{
  setListName(e.target.value)
  }

  const listOfItem = ()=>{
    if(listName==="")
    {
      alert("Please Add Your Task 🤥");
    }
    else{
    setItems((oldItem)=>{
      return [...oldItem,listName];
    })
  }
    setListName('');
  }
  const deleteItems = (id)=>{
    console.log("Deleted");
    setItems((oldItem)=>{
      return oldItem.filter((arrElem,index)=>{
        return index!==id;
      })
    })
  }

  return(
    <>
      <div className="main_div">
        <div className="center_div">
          <h1>TO DO LIST</h1>
          <br />
          <input type="text" placeholder="Add a Task" onChange={InputEvent} value={listName}/>
          <button onClick={listOfItem}> + </button>
          <ol>
            {/* <li>Buy Mango</li> */}
            {/* <li>{listName}</li> */}
            {items.map((itemval,index)=>{
             return <ToDoLists 
             key={index}
             id={index}
             text={itemval}
             onSelect={deleteItems}
             />
            })}
          </ol>
        </div>
      </div>
    </>
  )
};

export default App;