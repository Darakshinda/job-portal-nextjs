import React, { useState } from 'react';
import "./Form.css";
import { SearchableSelectInput } from './Input';
import {TextInput,TextArea} from "../../stories/TextInput";import { Tags } from '@/stories/Tags';
import { Select } from '@/stories/Dropdown';

interface fields {
  type: number;
  hdg: string;
  body: string;
  desc: string;val?:string;handle:(event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;settgs:Function;

  // Add other properties as needed
}
interface Option {
  label: string;
}
interface Props {
 
  title?:string;items?:fields[];
}


export const Form = ({title="",items=[]}: Props) => {
  const [vale, setvale] = useState<string>('');const handleit = (event: React.ChangeEvent<HTMLSelectElement>) => {setvale(event.target.value);};

  console.log(vale);

 return (
  <div className="group">
  <div className="group-heading">
  {title}
  </div>
  
    
 {items.map(({type,hdg,body,desc,val,handle,settgs},ind)=>(
  <div>
  <span className="head">{hdg}</span>
  {type==1 &&<TextInput val={val} placeholder={`${body}`} onChange={handle} req={true} cls="input_company"/>}
  {type==2 &&<TextArea val={val} placeholder={`${body}`} onChange={handle} req={true} cls="input_company"/>}
  {type==3 &&<Select onChange={handle}req={true} cls="input_company" body={body}/>}
  {type==4 && <Tags cls="input_company" settgs={settgs} dynamic={true} value={vale} onChange={handleit} options={JSON.parse(body)}/>}
  {type==5 && <div style={{marginLeft:"18%"}}>
   <div style={{display:"inline"}}><Select onChange={handle}req={true} cls="input_company" body={body.split("&&")[0]} type={5} /></div> 
    <a style={{display:"inline",fontSize:"30px",marginLeft:"1%"}}>{`-`}</a>
    <div style={{display:"inline"}}><Select onChange={handle}req={true} cls="input_company" body={body.split("&&")[1]} type={5} /></div> 
    </div>}
  
  <span className="info" style={{marginTop:"8px", marginLeft:"18px",width: "95%",}}>
    {desc}
  </span></div>
  ))}
  </div>
  );

};
