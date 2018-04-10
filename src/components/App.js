import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Increment, Decrement } from '../actions/index'

class App extends Component {

    render() {
        const { increment, decrement, counter } = this.props
        return (
            <div className='app-container'>
                <div className="app-container__header">
                    Increment and Decrement
                </div>
                <div className="app-container__output">
                    {counter}
                </div>
                <div className="app-container__increment">
                    <button onClick={increment}>Increment</button>
                </div>
                <div className="app_container_decrement">
                    <button onClick={decrement}>Decrement</button>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state, ownProps) => ({
    counter: state.counter
})



export default connect(
    (state) =>
        state.counter,
    (dispatch) => ({
        increment: () => dispatch(Increment()),
        decrement: () => dispatch(Decrement())
    })
)(App)