import React, {useContext} from 'react';
import IconButton from '@material-ui/core/IconButton';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import DeleteIcon from '@material-ui/icons/Delete';
import StarIcon from '@material-ui/icons/Star';
import { Context } from './Context';

const ToDo = ({todo,index}) => {

    const {dispatch} = useContext(Context)

    const onDelete = () => dispatch({ type: "deleteTask", index })

    return (

        <div className={`todo ${todo.complete && "strike"} ${todo.important && "important"}`}>
            <div className = 'span'>{todo.task}</div>
            <div className = 'btnGroup'>
                <IconButton onClick={() => dispatch({ type: "doneTask" , index})}> 
                    <CheckCircleIcon/> 
                </IconButton> 
                <IconButton onClick={onDelete}> 
                    <DeleteIcon/> 
                </IconButton>
                <IconButton onClick={() => dispatch({ type: "importantTask", index })}>
                    <StarIcon/>
                </IconButton>
            </div>
            
        </div>
    )
    
}

export default ToDo