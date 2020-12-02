import React, {Component, Fragment} from 'react';
const POSITION = [
    {
        id: 'fe',
        value: 'front-end dev',
        title: 'front-end dev'
    },
    {
        id: 'be',
        value: 'back-end dev',
        title: 'back-end dev'
    }
]
class Form10 extends Component {
    state = {
        inputText: '',
        textareaText: '',
        selectorText: '',
        showData: {
            name: '',
            text: '',
            position: ''
        }
    }
    // мажорная деструктуризация { target: { value } }
    handleInputChange = ({ target: { value } }) => (
        this.setState({
            inputText: value
        })
    )

    handleTextareaChange = ({ target: { value } }) => (
        this.setState({
            textareaText: value
        })
    )

    handleSelectChange = ({ target: { value } }) => (
        this.setState({
            selectText: value
        })
    )

    handleClick = (e) => {
        e.preventDefault();
        const {inputText, textareaText, selectText} = this.state
        this.setState({
            inputText: '',
            textareaText: '',

            showData: {
                name: inputText,
                text: textareaText,
                position: selectText
            }
        })
    }

    render() {

        const {inputText, textareaText, selectText, showData } = this.state;
        const {name, text, position } = showData;
        return (
            <Fragment>
                <form>
                    <label>
                        Name: <input type='text' name='name' placeholder='Name' value={inputText} onChange={this.handleInputChange} />
                    </label>
                    <br/>

                    <label htmlFor='text'>Text:</label>
                    <textarea id='text' placeholder='Text' value={textareaText} onChange={this.handleTextareaChange} />
                    <br/>

                    <select value={selectText} onChange={this.handleSelectChange}>
                        {POSITION.map( ({id, value, title}) => (
                            <option key={`${id}-${value}`} value={value}>{title}</option>
                        ))}
                    </select>
                    <br/>

                    <button onClick={this.handleClick}>Show</button>

                </form>
                <div>
                    <h1>{name}</h1>
                    <h2>{text}</h2>
                    <h3>{position}</h3>
                </div>
            </Fragment>
        )
    }
}

export default Form10;

