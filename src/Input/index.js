import React from 'react';

class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    }
    this.handleEnterSubmit = this.handleEnterSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  handleEnterSubmit(e) {
    if(e.key === 'Enter'){
      this.props.addToList(this.state.value);
      this.setState({value: ''})
    }
  }

  render() {
    return <input type="text" 
      value={this.state.value}
      onChange={this.handleChange}
      autoFocus
      onKeyPress={this.handleEnterSubmit}/>;
  }
}

export default Input;
