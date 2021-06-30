import React from 'react';
import Option from "./Option"


const Options = (props) => (

  <div> 
  <div className="widget-header">
  <div>
  <h3> Your options</h3>
  </div>

  <button onClick={props.handelDeleteOptions} className="button button--link"> Remove all </button>
</div>

  {props.options.length === 0 && <p className="widget__message"> Please add an item to start</p>}


  {props.options.map((option,index) => (
    <Option
      key={option}
      count={index+1}
      optionText={option}
      handleDeleteOption={props.handleDeleteOption}
    />
  ))}
  
</div>
) ;

export default Options