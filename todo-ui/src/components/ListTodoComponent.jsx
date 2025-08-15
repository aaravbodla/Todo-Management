import React, { useEffect, useState } from 'react'
import { completeTodo, deleteTodo, getAllTodos, inCompleteTodo } from '../services/TodoService';
import { useNavigate } from 'react-router-dom';
import { isAdminUser } from '../services/AuthService';

const ListTodoComponent = () => {

    const[todos, setTodos] = useState([]);

    const navigate = useNavigate(); 

    const isAdmin = isAdminUser();

    // Used to simulate fetching data from an API
    useEffect(() => {
        listTodos();
    }, [])

    function listTodos(){
        getAllTodos().then((response) => {
            setTodos(response.data);
        }).catch((error) => {
            console.error(error);
        })
    }

    function addNewTodo() {
        navigate('/add-todo');
    }

    function updateTodo(id){
        console.log(`Update Todo with id: ${id}`);
        navigate(`/update-todo/${id}`);
    }

    function removeTodo(id){
        deleteTodo(id).then((response) => {
            console.log(response.data);
            listTodos();
        }).catch((e) => {
            console.error(e);
        })
    }

    function markCompleteTodo(id) {
        completeTodo(id).then((response) => {
            console.log(response.data);
            listTodos();
        }).catch((e) => {
            console.error(e);
        })
    }

    function markInCompleteTodo(id){
        inCompleteTodo(id).then((response) => {
            listTodos();
        }).catch((e) => {
            console.error(e);
        })
    }

    return (
        <div className='container'>
            <h2 className='text-center'>List of Todos :</h2>
            {
                isAdmin && 
                <button className='btn btn-primary mb-2' onClick={addNewTodo}>Add Todo</button>
            }
            <div>
                <table className='table table-striped table-bordered'>
                    <thead>
                        <tr> 
                            <th>Todo Title</th>
                            <th>Todo Description</th>
                            <th>Todo Completed</th>
                            {
                                isAdmin && <th>Update Todo</th>
                            }
                            {
                                isAdmin && <th>Delete Todo</th>
                            }
                            <th>Done</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            todos.map((todo) => 
                                <tr key={todo.id}>
                                    <td>{todo.title}</td>
                                    <td>{todo.description}</td>
                                    <td>{todo.completed ? 'YES' : 'NO'}</td>
                                    {
                                        isAdmin && 
                                        <td className='text-center'>
                                            <button className='btn btn-info' onClick={() => updateTodo(todo.id)}>Update</button>
                                        </td>
                                    }
                                    {
                                        isAdmin && 
                                        <td className='text-center'>
                                            <button className='btn btn-danger' onClick={() => removeTodo(todo.id)}>Delete</button>
                                        </td>
                                    }
                                    <td>
                                        <button className='btn btn-success ' onClick={() => markCompleteTodo(todo.id)} style={{marginLeft: "10px"}}>Completed</button>
                                        <button className='btn btn-info' onClick={() => markInCompleteTodo(todo.id)} style={{marginLeft: "10px"}}>In Completed</button>
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
    }

export default ListTodoComponent