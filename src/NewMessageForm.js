import React, {useState} from 'react';
class NameForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: ''};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
      alert('A name was submitted: ' + this.state.value);
      event.preventDefault();
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      );
    }
  }
const NewMessageForm = ({onSend}) => {
    const [inputText, setInputText] = useState('');
    const handleTextChange = event => {
        setInputText(event.target.value);
    }
    const handleSend = () =>{
onSend(inputText);
        setInputText('');
    }
    return (
      <div>
        <input
          type="text"
          data-testid="messageText"
          value={inputText}
          onChange={handleTextChange}
        />
      <button
         data-testid="sendButton"
     onClick={handleSend}>
         Send
       </button>
      </div>
    );
  };

  export default NewMessageForm;