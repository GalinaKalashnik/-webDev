import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types'


const Tab1 = () => {
    return <h2>Tab1 text text </h2>
}

const Tab2 = () => {
    return <h2>Tab2 text text </h2>
}

const Tab3 = () => {
    return <h2>Tab3 text text</h2>
}

const people = ['Anna', 'Alex', "Gala", 'Max'];

const TabsBtn = [
    {
        dataName: 1,
        title: 'Tab1'
    },
    {
        dataName: 2,
        title: 'Tab2'
    },
    {
        dataName: 3,
        title: 'Tab3'
    }
]

class ListKeys extends Component {
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
                {TabsBtn.map( ({dataName, title}) => (
                    <button key={`${dataName}-${title}`} data-name={dataName} onClick={this.handleTab}>{title}</button>
                ))}

                {/*{activeTab === 1 && <Tab1 />}*/}
                {/*{activeTab === 2 && <Tab2 />}*/}
                {/*{activeTab === 3 && <Tab3 />}*/}

                {activeTab === 1 ? <Tab1 /> : activeTab === 2 ? <Tab2 /> : <Tab3 />}

                <ul>
                    {people.map( (p,index) => ( <li key={index}>{p}</li> ))}
                </ul>
            </Fragment>
        )
    }
}

export default ListKeys;

