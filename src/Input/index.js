import React from 'react';
import * as R from 'ramda';

export default class Input extends React.Component {
  constructor(...arge) {
    super(...arge);
    this.state = {
      value: ''
    }
    this.focusInput = React.createRef();
  }

  componentDidMount() {
    this.focusInput.current.focus();
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  handleEnterSubmit(e) {
    const whiteSpaceCheck = x => R.not(R.equals(x, ' '));
    if(e.key === 'Enter' && R.any(whiteSpaceCheck, this.state.value)){
      this.props.addToList(this.state.value);
      this.setState({value: ''})
      this.focusInput.current.focus();
    }
  }

  render() {
    return <input type="text" 
      ref={this.focusInput}
      value={this.state.value}
      onChange={(e) => this.handleChange(e)}
      onKeyPress={(e) => this.handleEnterSubmit(e)}/>;
  }
}

