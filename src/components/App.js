import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Increment, Decrement } from '../actions/index'
import { Button } from '@nextiva/next-ui';
import Counter from './Counter/index';

class App extends Component {

    render() {
        const { increment, decrement, counter } = this.props
        return (
            <div className='app-container'>
                <div className="app-container__header">
                    Increment and Decrement
                </div>
                <Counter counter={counter}/>
                <div className="app-container__increment">
                    <Button kind="success" onClick={increment}>Increment</Button>
                </div>
                <div className="app-container__decrement">
                    <Button kind="danger" onClick={decrement}>Decrement</Button>
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