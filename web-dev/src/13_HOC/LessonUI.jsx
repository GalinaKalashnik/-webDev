import React, {Component} from 'react';
import LoadingHOC from "./LoadingHOC";

class AppComponentUI13 extends Component {
    render() {
        return (
            <div>{this.props.data.title}</div>
        )
    }
}

const AppComponent = LoadingHOC('data')(AppComponentUI13)

class LessonUI extends Component {
    state = {
        data: {},
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/todos/1')
            .then(response => response.json())
            .then(data => this.updateState(data))
    }

    updateState = (data) => {
        window.setTimeout(() => {
            this.setState( {data})
        }, 3000)
    }

    render() {
        return (
            <AppComponent data={this.state.data} />
        )
    }
}

export default LessonUI;

