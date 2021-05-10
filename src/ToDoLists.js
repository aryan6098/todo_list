import React from 'react';
// import '../public/'
const ToDoLists = (props)=>{
    // const deleteItems = ()=>{
    //     console.log("deleted");
    // }
    return  (
        <>
        <div className="todo_style">
        <i className="fa fa-times" aria-hidden="true" onClick={()=>{
            props.onSelect(props.id);
        }}></i>
            <li>{props.text}</li>
        </div>
        </>
        );
};
export default ToDoLists;