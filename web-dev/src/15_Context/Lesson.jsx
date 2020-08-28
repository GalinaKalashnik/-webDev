import React, {Component, Fragment} from 'react';

const TitleContext = React.createContext();
const LevelTree = () => (
    <TitleContext.Consumer>
        {({title, subtitle, click}) => (
                <Fragment>
                    <h1 onClick={click}>{title}</h1>
                    <h2>{subtitle}</h2>
                </Fragment>
            )
        }
    </TitleContext.Consumer>
)
const LevelTwo = () =>  <LevelTree />
const LevelOne = () => <LevelTwo />

class Lesson15 extends Component {
    render() {
        return (
            <TitleContext.Provider value={{title: 'Simple title', subtitle: 'Sub title', click: () => alert('dfsdfsdfdf')}}>
                <LevelOne />
            </TitleContext.Provider>
        )
    }
}

export default Lesson15;

