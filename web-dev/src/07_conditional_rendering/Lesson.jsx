import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types'


const Tab1 = () => {
    return <h2>text text Tab1</h2>
}

const Tab2 = () => {
    return <h2>text text Tab2</h2>
}

const Tab3 = () => {
    return <h2>text text Tab3</h2>
}

class ConditionalRendering extends Component {
    state = {
        activeTab: 1
    }

    handleTab = (e) => {
        this.setState({
            activeTab: +e.target.getAttribute('data-name')
        })
    }
    render() {

        const activeTab = this.state.activeTab
        return (
            <Fragment>
                <button data-name={1} onClick={this.handleTab}>Tab1</button>
                <button data-name={2} onClick={this.handleTab}>Tab2</button>
                <button data-name={3} onClick={this.handleTab}>Tab3</button>
                {/*{activeTab === 1 && <Tab1 />}*/}
                {/*{activeTab === 2 && <Tab2 />}*/}
                {/*{activeTab === 3 && <Tab3 />}*/}

                {activeTab === 1 ? <Tab1 /> : activeTab === 2 ? <Tab2 /> : <Tab3 />}
            </Fragment>
        )
    }
}

export default ConditionalRendering;

