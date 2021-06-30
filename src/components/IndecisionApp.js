import React from 'react';
import AddOptions from "./AddOption";
import Header from "./Header";
import Action from "./Action";
import Options from "./Options"
import Counter from "./Counter"
import OptionModal from "./OptionModel"

class IndecisionApp extends React.Component {
    constructor(props) {
      super(props);
      this.handelDeleteOptions = this.handelDeleteOptions.bind(this);
      this.handlePick = this.handlePick.bind(this);
      this.handleAddOption = this.handleAddOption.bind(this);
      this.handleDeleteOption = this.handleDeleteOption.bind(this);
  
      this.state = {
        options: [],
        selectedOptions:undefined
      };
    }
  
    componentDidMount() {
      try {
        const json = localStorage.getItem("options");
        const options = JSON.parse(json);
  
        if (options) {
          this.setState(() => ({ options }));
        }
      } catch (e) {
        //do nothing
      }
    }
  
    componentDidUpdate(prevProps, prevState) {
      if (prevState.options.length !== this.state.options.length) {
        const json = JSON.stringify(this.state.options);
        localStorage.setItem("options", json);
      }
    }
  
    componentWillUnmount() {
      console.log("life cycle   componentWillUnmount ");
    }
  
    // remove all items
    handelDeleteOptions() {
      // this.setState(() => {
      //   return {
      //     options: [],
      //   };
      // });
  
      this.setState(() => ({ options: [] }));
    }
  

    handleClearSelectedOption=()=>{
      this.setState(()=>({selectedOptions:undefined }))
    }


    handleDeleteOption(optionToRemove) {
      this.setState((prevState) => ({
        options: prevState.options.filter((option) => optionToRemove !== option),
      }));
    }
  
    handlePick() {
      const randomNum = Math.floor(Math.random() * this.state.options.length);
      const option = this.state.options[randomNum];
     

      this.setState(()=>({

        selectedOptions:option
      }))
    }
  
    // add options
  
    handleAddOption(option) {
      if (!option) {
        return " Enter valide value to add item !";
      } else if (this.state.options.indexOf(option) > -1) {
        return "this item already exsits !";
      }
  
      this.setState((prevState) => ({
        options: prevState.options.concat([option]),
      }));
  
      // this.setState((prevState) => {
      //   return {
      //     options: prevState.options.concat([option]),
      //   };
      // });
    }
  
    render() {
      const title = "Indecision ";
      const subtitle = "Put your life in the hand of computer";
  
      return (
        <div>
          <Header title={title} subtitle={subtitle} />
          <div className="contasiner">
          <Action
            hasOptions={this.state.options.length > 0}
            handlePick={this.handlePick}
          />
          <div  className="widget" > 
         
          <Options
            options={this.state.options}
            handelDeleteOptions={this.handelDeleteOptions}
            handleDeleteOption={this.handleDeleteOption}
          />
          <AddOptions handleAddOption={this.handleAddOption} />
          <Counter />
          </div>

          </div>
          <OptionModal
          selectedOptions={this.state.selectedOptions}
          handleClearSelectedOption= {this.handleClearSelectedOption}
           />
     
        </div>
      );
    }
  }



  export default IndecisionApp