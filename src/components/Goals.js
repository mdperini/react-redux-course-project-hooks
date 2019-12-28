import React from 'react'
import { connect } from 'react-redux'
import List from './List'

import {
    handleAddGoal,
    handleDeleteGoal
} from '../actions/goals'

const Goals = ({goals, dispatch}) => {
    const [name, setName] = React.useState('')
    const handleChange = (e) => setName(e.target.value)
    const addItem = (e) => {
        e.preventDefault()

        dispatch(handleAddGoal(
            name,
            () => setName('')
        ))
    }

    const removeItem = (goal) => this.props.dispatch(handleDeleteGoal(goal))
    
    return (
        <div>
            <h1>Goals</h1>
            <input
                type='text'
                placeholder='Add Goal'
                value={name}
                onChange={handleChange} 
            />
            <button onClick={addItem}>Add Goal</button>
            <List
                items={goals}
                remove={removeItem}
            />
        </div>
    )    
}

export default connect((state, dispatch)=> (
    {
        goals: state.goals,
        dispatch
    }))(Goals)