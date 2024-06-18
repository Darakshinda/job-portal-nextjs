import React from 'react';
import "./Form.css";
import { Input } from './Input';

interface fields {
  type: number;
  hdg: string;
  body: string;
  desc: string;

  // Add other properties as needed
}
interface Props {
 
  title?:string;items?:fields[];
}


/**
 * Primary UI component for user interaction
 */


export const Form = ({title="",items=[{type:1,hdg:"",body:"",desc:"",}]}: Props) => {

 return (
  <div className="group">
  <div className="group-heading">
  {title}
  </div>
 {items.map(({type,hdg,body,desc},ind)=>(<Input hdg={hdg} body={body} desc={desc}/>))}

  </div>
  );

};
