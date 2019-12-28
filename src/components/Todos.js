import React from 'react'
import { connect } from 'react-redux'
import List from './List'

import {
    handleAddTodo,
    handleDeleteTodo,
    handleToggle
} from '../actions/todos'

const Todos = ({ todos, dispatch}) => {
    const [name, setName] = React.useState('')
    const handlechange = (event) => setName(event.target.value)
    const addItem = (e) => {
        e.preventDefault()

        dispatch(handleAddTodo(
            this.input.value,
            () => setName('')
        ))
    }

    const toggleItem = (id) => dispatch(handleToggle(id))

    const removeItem = (todo) => dispatch(handleDeleteTodo(todo))

    return (
            <div>
                <h1>Todo List</h1>
                <input
                    type='text'
                    placeholder='Add Todo'
                    value={name}
                    onChange={handlechange}
                />
                <button onClick={addItem}>Add Todo</button>
                <List 
                    toggle={toggleItem}
                    items={todos}
                    remove={removeItem} />
            </div>
        )
}

export default connect((state, dispatch) => (
    {
        todos: state.todos,
        dispatch
    }   
))(Todos)