import React, {Component, Fragment} from 'react';
const POSITION = [
    {
        id: 'fe',
        value: 'front end',
        title: 'front end'
    },
    {
        id: 'be',
        value: 'back end',
        title: 'back end'
    }
]
class Form12 extends Component {
    state = {
        inputText: '',
        textareaText: '',
        selectText: '',
        showData: {
            name: '',
            text: '',
            position: ''
        }
    }

    inputRef = React.createRef();
    textareaRef = React.createRef();
    selectRef = React.createRef();

    // мажорная деструктуризация { target: { value } }
    handleChange = () => (
        this.setState({
            inputText: this.inputRef.current.value,
            textareaText: this.textareaRef.current.value,
            selectText: this.selectRef.current.value
        })
    )


    // // мажорная деструктуризация { target: { value } }
    // handleInputChange = ({ target: { value } }) => (
    //     this.setState({
    //         inputText: value
    //     })
    // )

    handleClick = (e) => {
        e.preventDefault();
        const {inputText, textareaText, selectText} = this.state
        this.setState({
            inputText: '',
            textareaText: '',
            selectText: '',
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
                        Name: <input ref={this.inputRef} type='text' name='name' placeholder='Name' value={inputText} onChange={this.handleChange} />
                    </label>
                    <br/>

                    <label htmlFor='text'>Text:</label>
                    <textarea ref={this.textareaRef} id='text' placeholder='Text' value={textareaText} onChange={this.handleChange} />
                    <br/>

                    <select ref={this.selectRef} value={selectText} onChange={this.handleChange}>
                        {POSITION.map( ({id, value, title}) => (
                            <option key={`${id}-${value}`} value={value}>{title}</option>
                        ))}
                    </select>
                    <br/>

                    <button onClick={this.handleClick}>Show</button>

                </form>
                <div>
                    <h3>{name}</h3>
                    <h3>{text}</h3>
                    <h3>{position}</h3>
                </div>
            </Fragment>
        )
    }
}

export default Form12;

