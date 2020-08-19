import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class MyPortal extends Component {
    el = document.createElement('div');

    componentDidMount() {
        document.body.appendChild(this.el)
    }

    componentWillUnmount() {
        document.body.removeChild(this.el)
    }

    render() {
        // eslint-disable-next-line no-undef
        return ReactDOM.createPortal(this.props.children, this.el)
    }
}

class Portal14 extends Component {
    render() {
        return (
            <div>
                <p>Text</p>
                <MyPortal>
                    <p>MyPortal test</p>
                </MyPortal>
            </div>
        )
    }
}

export default Portal14;

