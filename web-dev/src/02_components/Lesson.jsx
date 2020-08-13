import React, {Component} from 'react';

const Welcome = () => {
    return <h1>Hello world</h1>
}

class SuperWelcome extends Component {
    render() {
        return <h1>Hello world!!!!</h1>
    }
}

const Lesson = () => {
    return (
        <div>
            <Welcome />
            <SuperWelcome />
        </div>
    )
}
export default Lesson;