import React,{useState} from 'react'
import './Todo.css'

const Todo = () => {
    const [elements, setElements] = useState([]);
    const [length,setLength] = useState('');

    function handleRemoveCur(ind) {
        let newElements=[...elements];
        newElements.splice(ind,1);
        setElements(newElements);
    }

    let textInput = React.createRef();

    function handleClick(e) {
        e.preventDefault();
       if(length.length>5){
       setElements([...elements,textInput.current.value]);
       }else {
        alert("Please type more then 5 words");
       }
    }
  
    const displayList = elements.map((element,index) => {
            return (
                <div className="list-todo" key={index} >
                    <p>{element}</p>
                    <button className="remove-button" onClick={() =>handleRemoveCur(index)}>✔</button>
                </div>
            )
            
        })

    return (
        <div className="container">
            <div className="content">
            <div className="name">
                <p>Todo List</p>
            </div>
            <div className="add-todo">
                <form type="submit">
                    <input ref={textInput} type="text" placeholder="Add your new todo" onChange={e => setLength(e.target.value)} />
                </form>
                    <button type="submit" onClick={handleClick} >Add</button>
            </div>
            <div>
                {displayList}    
            </div>
            <div className="count-todo">
                <p>You have {elements.length} pending tasks</p>
                <button className="remove-buttons" onClick={() => setElements([]) }>Remove All</button>
            </div>
            </div>
        </div>
    );
}

export default Todo;