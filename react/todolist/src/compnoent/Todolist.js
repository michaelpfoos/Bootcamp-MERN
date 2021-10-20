import React, { useState } from 'react';

const Todolist = (props) => {   

    // //This state will maintain the list
    // const [list, modifyList] = useState({        
    //     //toDo: JSON.parse(sessionStorage.getItem('toDoList')) ? JSON.parse(sessionStorage.getItem('toDoList')) : ['Complete the To Do list assignment before the deadline tonight', 'Eat some ice cream', 'Get eight hours of sleep'] 
    //     //toDo: localStorage.getItem('toDoList') ? localStorage.getItem('toDoList') : ['Complete the To Do list assignment before the deadline tonight', 'Eat some ice cream', 'Get eight hours of sleep'] 
    //     //toDo: JSON.parse(localStorage.getItem('toDoList')) ? JSON.parse(localStorage.getItem('toDoList')) : ['Complete the To Do list assignment before the deadline tonight', 'Eat some ice cream', 'Get eight hours of sleep'] 
    // }); 

    //empty state example
    const [list, setList] = useState([]);

    //This state will be used to retreive a value from a form.  
    const [newToDo, getNewToDo] = useState("");

    //Submit an addition to the list
    const addToList = (e) => {        
        e.preventDefault();

        setList([...list, {
            toDo: newToDo,
            isComplete: false,
            id: Math.floor(Math.random() * 1000)
        }]);
        
        //const currentList = list.toDo;
        //currentList.push(newToDo); 
        //const storeList = newToDoList;          

        //save data to sessionStorage
        //sessionStorage.setItem('toDoList', JSON.stringify(currentList)); 
        //localStorage.setItem('toDoList', JSON.stringify(currentList)); 
        //localStorage.setItem("toDoList", Todolist);        
       
    } 

    //Delete an item from the array in state using filter.
    //https://stackoverflow.com/questions/55140474/filter-array-of-objects-by-index
    const deleteFromList = (itemToDelete) => {
        //const isToRemove = parseInt(e.target.id);  
        
        //use filter to return a new array excluding the value that we want to delete
        const newToDoList = list.filter((toDo, index) => toDo.id !== itemToDelete);       

        //set state to the new array use modifyList
        setList(newToDoList);               
    }

    //This is a function that will be called up to "complete" an item on the todo list.
    const completeTask = (e) => {        
        const idToGet = 'p-' + e.target.id.split("-")[1];
        const itemToComplete = document.getElementById(idToGet);  
        
        if (e.target.checked) {
            itemToComplete.classList.add("text-decoration-line-through");   
        }
        else itemToComplete.classList.remove("text-decoration-line-through");              
    }

    return (
        <div>
            <h1 className="text-center mt-3 d-inline">To Do List</h1>            
            <button type="button" class="btn btn-primary btn-lg mb-3 ms-3" data-bs-toggle="collapse" data-bs-target="#collapse" aria-expanded="false" aria-controls="collapse">Add</button> 
            <form id="collapse" className="collapse" onSubmit={addToList}>
                <label htmlFor="newitem" className="form-label">New ToDo: </label>
                <input type="text" className="form-control" onChange={ (e) => getNewToDo(e.target.value) }/>
                <button type="submit" className="btn btn-primary mt-2">Submit</button>
            </form>                     
            {
                list.map( (todo, index) => 
                    <div className="d-flex justify-content-between align-items-center mt-3 border border-3 border-primary p-3" id={ 'todo-' + index }>
                        <div>
                            <p className="fs-2 d-inline" id={'p-' + index}>{ todo.toDo }</p>
                            <input class="fs-2 form-check-input ms-3 mt-2" type="checkbox" id={'checkbox-' + index} onClick={completeTask}/>
                        </div>
                        <button type="button" class="btn btn-secondary" id={index} onClick={ (e) => deleteFromList(todo.id) }>Delete</button>                
                    </div>  
                )                   
            }                                             
        </div>  
            
    );
}

export default Todolist;