import React from 'react';
import "./Form.css";


interface Props {
 
  hdg?:string;body?:string;desc?:string;
}


/**
 * Primary UI component for user interaction
 */


export const Input = ({hdg="",body="",desc=""}: Props) => {

 return (
    <div>
    <span className="head">{hdg}</span>
    <input data-required="required" type="text" name="company" data-name="your company name" className="input_company" placeholder={body} value={`  ${body}`}/>
    <span className="info" style={{marginTop:"8px", marginLeft:"18px",width: "95%",}}>
    {desc}
    </span>
    </div>
  );

};
