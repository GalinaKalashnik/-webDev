import React, {Component} from 'react';
import PropTypes from 'prop-types'

const MyLink = ({text, onClick}) => {
    return <a href="/test" onClick={onClick}>{text}</a>
}


MyLink.propTypes = {
    text: PropTypes.string,
    onClick: PropTypes.func
}

MyLink.defaultProps = {
    text: 'etwtrer',
    onClick: () => {}
}

class Events extends Component {

    handleClick = (e) => {
        e.preventDefault();
        console.log('sdfdfsdf');
    }
    render() {
        return (
            <div>
                <MyLink onClick={this.handleClick}/>
            </div>
        )
    }
}

export default Events;

