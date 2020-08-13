import React, {Component} from 'react';
import PropTypes from 'prop-types'

export const Counter05 = ({counter = 0}) => {
    return <h3>{`Counter component. Counter value is: ${counter}`}</h3>
}

// //валидация пропсов
// Counter.propTypes = {
//     //тут задаем их тип, isRequired - бязательные даннык которые должна получить компонента
//     counter: PropTypes.number.isRequired,
//     func: PropTypes.func,
//     number: PropTypes.number,
//     string: PropTypes.string
// }
//
// Counter.defaultProps = {
//     func: () => {},
//     number: 0,
//     string: ''
// }

export class Lesson05 extends Component {
    static propTypes = {
        children: PropTypes.element,
    }

    static defaultProps = {
        children: null
    }
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
        const {children} = this.props;

        return (
            <div>
                <div>{counter}</div>
                {React.cloneElement(children, {counter: this.state.counter})}
                <button onClick={this.handleClick}>+1</button>
            </div>
        )
    }
}

