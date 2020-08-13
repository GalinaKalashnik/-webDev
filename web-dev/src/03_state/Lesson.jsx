import React, {Component} from 'react';

class Counter extends Component {
    state = {
        counter: 0,
    }

    handleClick = () => {
        this.setState(({counter}) => ({
            counter: ++counter,
        }))
    }

    render() {
        const {counter} = this.state;

        return (
            <div>
                <div>{counter}</div>
                <button onClick={this.handleClick}>+1</button>
            </div>
        )
    }
}

export default Counter;