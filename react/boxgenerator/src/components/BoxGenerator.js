import react, {useState } from 'react';

const BoxGenerator = () => {

    //Will store the selection in state before the use cliks ass
    const [color, selectColor] = useState("");
    const [colorBoxes, addToColorBoxes] = useState([]);
    
    const addMoreBoxes = (e) => {
        //Grab the selector field.         

        //add the value in color to the array in state.
        //const currentColorBoxes = colorBoxes;
        //currentColorBoxes.push(color);
        //addToColorBoxes([...colorBoxes, color]);
        addToColorBoxes([...colorBoxes, color]);

        //swap the new array in to state using the setter
        //Clear the select box (It is worth nothing that until I cleared the state the change did not occur until I clicked the drop down arrow again)
        selectColor("");

        //prevent default
        e.preventDefault();        

        //console.log the state
        console.log(colorBoxes);
    }

    return(
        <div id="main" className="container-fluid">
            <form id="form" className="d-flex justify-content-center align-items-center container-fluid">
                <label htmlFor="color" className="form-label d-inline mb-0">Color</label>
                <select id="select" className="form-select d-inline mx-3" value={color} onChange={ (e) => selectColor(e.target.value)}>
                    <option value="" default disabled>Make your selection</option>
                    <option value="green">Green</option>
                    <option value="blue">Blue</option>
                    <option value="red">Red</option>
                    <option value="purple">Purple</option>
                </select>
                <button className="btn btn-light" onClick={addMoreBoxes}>Add</button>               
            </form>
            <div id="box-container">
                {
                    colorBoxes.map( (item) =>
                    <div className={'box '+ item}> </div>
                    )                    
                }                        
            </div>            
        </div>        
    );
}

export default BoxGenerator;