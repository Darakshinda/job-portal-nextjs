import React, { useState } from 'react';
import "./Form.css";
import { SearchableSelectInput } from './Input';
import {TextInput,TextArea} from "../../stories/TextInput";import { Tags } from '@/stories/Tags';
import { Select } from '@/stories/Dropdown';
import JoditEditorComponent from './Jodit-Editor';import { JobCard } from '@/stories/Job-Card';
import UploadButton from './ImgUpload';
import Checkbox from './Check';

interface fields {
  type: number;
  hdg: string;
  body: string;
  desc: string;val?:string;handle:Function;settgs:Function;
  vala?:string;handlea:Function;

  // Add other properties as needed
}
interface Option {
  label: string;
}
interface Props {
  disp:boolean;pos?:string;comp?:string;locns?:string;tags?:string;jobdesc?:string;how2apply?:string;imgsrc?:string;check?:boolean;
  title?:string;items?:fields[];
}


export const Form = ({title="",pos="",comp="",locns="",tags="",jobdesc="hs",how2apply="",imgsrc="",check=false,disp=false,items=[]}: Props) => {
  const [vale, setvale] = useState<string>('');const handleit = (event: React.ChangeEvent<HTMLSelectElement>) => {setvale(event.target.value);};

  console.log(vale);if(comp=="") comp="Company";if(pos=="") pos="Position";if(jobdesc=="") jobdesc=`The description of the job position will appear here. Write this in the "Job Description" box above.`;
  let fl=0;if(how2apply=="") {fl=1;}

 return (
  <div className="group">
  <div className="group-heading">
  {title}
  </div>
  
    
 {items.map(({type,hdg,body,desc,val="",handle,settgs,handlea,},ind)=>(
  <div>
  <span className="head">{hdg}</span>
  {type==1 &&<TextInput val={val} placeholder={`${body}`} onChange={handle} req={true} cls="input_company"/>}
  {type==2 &&<TextArea val={val} placeholder={`${body}`} onChange={handle} req={true} cls="input_company"/>}
  {type==3 &&<Select onChange={handle}req={true} cls="input_company" body={body}/>}
  {type==4 && <Tags cls="input_company" settgs={settgs} dynamic={true} options={JSON.parse(body)}/>}
  {type==5 && <div style={{marginLeft:"18%"}}>
   <div style={{display:"inline"}}><Select onChange={handle}req={true} cls="input_company" body={body.split("&&")[0]} type={5} /></div> 
    <a style={{display:"inline",fontSize:"30px",marginLeft:"1%"}}>{`-`}</a>
    <div style={{display:"inline"}}><Select onChange={handlea}req={true} cls="input_company" body={body.split("&&")[1]} type={5} /></div> 
    </div>}
  {type==6 && <JoditEditorComponent value={val} onChange={handle}/>}
  {type==7 && <div style={{marginLeft:"2%"}}><UploadButton onChange={handle}/></div>}
  {type==8 && <Checkbox checked={check} onChange={handle}/>}


  <span className="info" style={{marginTop:"8px", marginLeft:"18px",width: "95%",}}>
    {desc}
  </span></div>
  ))}
  

  {disp&&<main className="w-full"><br/>
  <div className="top-text"   style={{display:"flex",flexDirection:"column",justifyItems:"center",alignItems:"center",width:"100%"}}>
<strong >Here's a preview of how your job post will look like</strong>
<p  style={{marginTop:"1.5px"}}>Don't worry if it's not perfect the first time: your job is fully editable for free after posting it!</p>
</div><br/>
  <div style={{marginTop:"5px",marginBottom:"50px", border:"shadow",borderWidth:"1px",borderRadius:"7px",width:"95%",marginLeft:"2.5%"}}>
  <div style={{marginLeft:"2%",marginTop:"1%"}}><JobCard imgflg bdg imgsrc={imgsrc} cls="bg-yellow-100 w-12wh" position={pos} company_name={comp} location_restriction={locns} tags={tags} created_at="5/17/2024 23:11:25"/></div>
  <div style={{display:"flex",flexDirection:"column",justifyItems:"center",alignItems:"center",width:"100%"}}><h1 style={{textAlign:"left"}}>
<div style={{fontSize: "35px",marginTop:"3%"}}>
<span>{comp}</span> is hiring a
</div> <b style={{fontSize: "35px",}}>Remote <span>{pos}</span></b>
<main dangerouslySetInnerHTML={{ __html: jobdesc }}></main>
</h1></div>
<div style={{marginTop:"5px",marginBottom:"50px",minHeight:"300px", border:"solid",borderWidth:"1px",borderRadius:"7px",width:"90%",marginLeft:"5%"}}>
<div className="top-text"   style={{display:"flex",flexDirection:"column",justifyItems:"center",alignItems:"center",width:"100%",padding:"5%"}}>
<strong >How do you apply?</strong>
{fl==1&&<p  style={{marginTop:"5px"}}>{`Here the instructions go on how to apply for this job. Write them in the "How to Apply?" box.`}</p>}
<div  style={{marginTop:"1.5px"}} dangerouslySetInnerHTML={{ __html:how2apply}}/>
<div className="border border-gray-300 rounded-md px-2 py-2"  style={{borderStyle:"dotted",height:"5%",marginTop:"15px"}}>Apply for this job</div>
</div><br/>
</div>
  </div>

  
  </main>}
  </div>
  );

};
