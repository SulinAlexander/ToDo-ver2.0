import React, {useContext} from 'react';
import ToDo from './ToDo'
import { Context } from './Context';

 
const ToDoList =() => {
    const {state} = useContext(Context)
    return (
        <div >
            {state.map((todo,index) => (
				<ToDo
                    key={index}
                    index = {index}
                    todo={todo}
                />
			))}
        </div>
    )
 }

export default ToDoList