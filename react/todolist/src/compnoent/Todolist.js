import React, { useState } from 'react';

const Todolist = (props) => {   

    //empty state example
    const [list, setList] = useState([]);

    //This state will be used to retreive a value from a form.  
    const [newToDo, setNewToDo] = useState("");

    //Submit an addition to the list
    const addToList = (e) => {        
        e.preventDefault();

        setList([...list, {
            toDo: newToDo,
            isComplete: false
            //id: Math.floor(Math.random() * 1000) //not needed after re-factor
        }]);    
        
        setNewToDo('');
    } 

    //Delete an item from the array in state using filter.
    //https://stackoverflow.com/questions/55140474/filter-array-of-objects-by-index
    const deleteFromList = (index) => {
        
        //Changing this to use the index.  At the time I was using toDo.id.  I don't believe this is necessary.  <refactoring>
        //use filter to return a new array excluding the value that we want to delete        
        //const newToDoList = list.filter((toDo, index) => toDo.id !== itemToDelete);  

        //setting the index to i instead of index because index is already being used as the incoming paramater name.
        //this makes a copy of state (newToDoList) with the incoming index filtered out.
        const newToDoList = list.filter((value, i) => i !== index);   

        //set state to the new array use modifyList
        setList(newToDoList);               
    }

    //This is a function that will be called up to "complete" an item on the todo list.
    //learning to use slice and concat like they do on the platorm.
    const completeTask = (index) => {        
        
        //extract the object from the list using the index
        const obj = {
            ...list[index] 
        };  

        //set the boolean value isComplete to not equal itself.  (False will become true, true will become false.)
        obj.isComplete = !obj.isComplete; 

        //Grabs everything in the list up until the index
        let arr = list.slice(0, index);

        //edits the array to add itself, then to add the object in, then if there is more to the list after this point in the index it will add that back in.
        arr = [...arr, obj].concat(list.slice(index + 1));

        //Setting the list with the updated array value will update state and force the components to refresh.  
        setList(arr);       
    }

    return (
        <div>
            <h1 className="text-center mt-3 d-inline">To Do List</h1>            
            <button type="button" className="btn btn-primary btn-lg mb-3 ms-3" data-bs-toggle="collapse" data-bs-target="#collapse" aria-expanded="false" aria-controls="collapse">Add</button> 
            <form id="collapse" className="collapse" onSubmit={addToList}>
                <label htmlFor="newitem" className="form-label">New ToDo: </label>
                <input type="text" value={newToDo} className="form-control" onChange={ (e) => setNewToDo(e.target.value) }/>
                <button type="submit" className="btn btn-primary mt-2">Submit</button>
            </form>                     
            {
                list.map( (todo, index) => 
                    <div key={index} className="d-flex justify-content-between align-items-center mt-3 border border-3 border-primary p-3" id={ 'todo-' + index }>
                        <div>
                            <p className={list[index].isComplete === true?"fs-2 d-inline text-decoration-line-through":"fs-2 d-inline"}>{ todo.toDo }</p>
                            <input className="fs-2 form-check-input ms-3 mt-2" type="checkbox" onClick={() => completeTask(index)}/>
                        </div>
                        <button type="button" className="btn btn-secondary" id={index} onClick={ (e) => deleteFromList(index) }>Delete</button>                
                    </div>  
                )                   
            }                                             
        </div>  
            
    );
}

export default Todolist;