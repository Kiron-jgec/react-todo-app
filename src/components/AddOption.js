
import React from 'react';


  export default class AddOptions extends React.Component {
    constructor(props) {
      super(props);
      this.handleAddOption = this.handleAddOption.bind(this);
      this.state = {
        error: undefined,
      };
    }
  
    handleAddOption(e) {
      e.preventDefault();
  
      const option = e.target.elements.option.value.trim();
      const error = this.props.handleAddOption(option);
      this.setState(() => ({ error }));
  
  
  
      if(!error)
      {
        e.target.elements.option.value =" "
      }
  
  
    }
  
    render() {
      return (
        <div>
          {this.state.error && <p className="add-option-error">{this.state.error}</p>}
          <form onSubmit={this.handleAddOption} className="add-option">
            <input type="text" name="option" className="add-option__input" />
            <button type="submit" className="button"> Add Option </button>{" "}
          </form>{" "}
        </div>
      );
    }
  }