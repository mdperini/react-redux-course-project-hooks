import React from 'react'
import ConnectedTodos from './Todos'
import ConnectedGoals from './Goals'
import { connect } from 'react-redux'
import {
    handleInitialData
} from '../actions/shared'

const App = ({loading, dispatch}) => {
    const [initialData, setInitialData] = React.useState(false)
   
    //componentDidMount() {
    React.useEffect(()=> {
        dispatch(handleInitialData())

        setInitialData(true)
    }, [initialData, dispatch])  

    if (loading) {
            return <h3>Loading...</h3>
    }

    return (
        <div>
            <ConnectedTodos />
            <ConnectedGoals />
        </div>
    )
}

export default connect((state, dispatch) => ({
    loading: state.loading,
    dispatch
}))(App)