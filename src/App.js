import React, {useReducer} from 'react';
import './App.css';


//components
import {Context} from './components/Context'
import ToDoList from './components/ToDoList'
import ToDoForm from './components/ToDoForm'
import Header from './components/Header'

const initialState = [
  
];


function reducer(state, action) {
   
  switch (action.type) {
    
    case 'addTask':
      return [
        ...state,
        { 
          id: state.length + 1, 
          task: action.userInput, 
          complete: false,
          important: false
        }
      ]; 
    case 'deleteTask':
      return [...state].filter((item,i)=>(i !== action.index))
    case 'doneTask':
      return [...state].map((item,i)=>{
        return i === action.index ? {...item, complete: true}:item
      })
    case 'importantTask':
      return [...state].map((item,i)=>{
        return i === action.index ? {...item, important: true}:item
      })
    default:
      return state
 }
}


function App() {
  
  const [state, dispatch] = useReducer(reducer, initialState)

  //const [ toDoList, setToDoList] = useState(data);

  /*const addTask  = (userInput ) => {
    let copy = [...toDoList];
    copy = [...copy, { id: toDoList.length + 1, task: userInput, complete: false }]; 
    setToDoList(copy);
  }

  const deleteTask = index => {
    const newTodos = toDoList.map((item,i)=>{
      return i === index ? {...item, complete: true}:item
    });
    setToDoList(newTodos);
  }

  const doneTask = index => {
    const newTodos = toDoList.map((item,i)=>{
      return i === index ? {...item, complete: true}:item
    });
    setToDoList(newTodos);
  }

  const importantTask = index => {
    const newTodos = toDoList.map((item,i)=>{
      return i === index ? {...item, complete: true}:item
    });
    setToDoList(newTodos);
  }*/

  return (
    <Context.Provider value = {{
      state,dispatch
    }}>
       <div className="App">
          <Header></Header>
          <ToDoList></ToDoList>
          <ToDoForm></ToDoForm>
      </div>
    </Context.Provider>
  );
}

export default App;
