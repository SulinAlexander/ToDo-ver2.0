import React,{useState, useContext} from 'react';
import Button from '@material-ui/core/Button'
import Input from '@material-ui/core/Input';
import { Context } from './Context';




    const ToDoForm = () => {

        const {dispatch} = useContext(Context)
        
        const [ userInput, setUserInput ] = useState('');
        
       
         const handleChange = (e) => {
            setUserInput(e.currentTarget.value)
        }
    
        const handleSubmit = (e) => {
            e.preventDefault();
            dispatch({  userInput, type: "addTask" })
            setUserInput("");
        } 

        return(
            <form  noValidate autoComplete="off"  onSubmit={handleSubmit}>
                <Input  label="Task" id="standard-uncontrolled"  size="small"  value={userInput} type="text" onChange={handleChange}/>
                <Button variant="contained" color="primary" type="submit">Add Task</Button>
            </form>
        )
        
    }

    

export default ToDoForm