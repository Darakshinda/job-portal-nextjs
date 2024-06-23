"use client"
import React, { useState } from 'react';
import {JobCard} from "../../stories/Job-Card";
import {NavBar} from "../../stories/NavBar";
import {TextInput,TextArea} from "../../stories/TextInput";import { Tags } from '@/stories/Tags';
import { Select } from '@/stories/Dropdown';
import JoditEditorComponent from '../Components/Jodit-Editor';
import UploadButton from '../Components/ImgUpload';
import Checkbox from '../Components/Check';import ColorPickerButton from '../Components/ColorPicker';
import SelectedOptions from '../Components/Options';
import "../Components/Form.css";

import locnOpns from "../post/data/location.json";import tagOpns from "../post/data/tags.json";import benefitOpns from "../post/data/benefits.json";
import emptype from "../post/data/emptype.json";import primTag from "../post/data/primTag.json";import minSal from "../post/data/minsalary.json";
import maxSal from "../post/data/maxsalary.json";



export default function Home() {
  const [user, setuser] = useState({
    company: "",position: "",emptype: "Full-time",primtg: "Software Development",tags: "",locns:'',
    logo:'',minsal:"",maxsal:'',desc:'',benefits:'',how2apply:'',email4jobappl:'',applUrl:'',
    twtr:'',compMail:'',invMail:'',invAdrs:'',invNote:'',payLtr:false,pltrEml:'',fdbck:'',bgcolor:'#fefba4',
  });

  const handleChange = (key:string, value:string) => {
    setuser((prevState) => {
      if (prevState[key] === value) {
        return prevState; // Prevent unnecessary state updates
      }
      return {
        ...prevState,
        [key]: value,
      };
    });
  };
  

let comp=user.company,pos=user.position,jobdesc=user.desc,how2apply=user.how2apply;
if(comp=="") comp="Company";if(pos=="") pos="Position";if(jobdesc=="") jobdesc=`The description of the job position will appear here. Write this in the "Job Description" box above.`;
const disp=()=>console.log(user);

return (
    <main className="bg-base-100">
      
      <main className=" fixed bottom-0 z-10 left-[2.5%] w-full" style={{width:"60%",}}>
       
      <JobCard imgflg bdg imgsrc={user.logo} bgcolor={user.bgcolor} position={user.position} company_name={user.company} location_restriction={user.locns} tags={user.tags} created_at="5/17/2024 23:11:25"/>
       </main>
       <NavBar endIcon={false} post={true}/>
       <div className=" fixed bottom-0 z-10 w-full" style={{width:"30%",height:"22%",marginLeft:"60.6%",backgroundColor:"white",border:"shadow",borderWidth:"2px",display:"flex",justifyItems:"center",alignItems:"center"}}>
        <button className='btn btn-error ml-[5%] text-white font-bold'  style={{width:"90%",height:"50%",}} onClick={disp}>Post Job</button></div>

       <div className="group">
        <div className="group-heading">LET'S START</div>

        <span className="head">COMPANY NAME*</span>
        <TextInput keyy='company' val={user.company} placeholder={`Company name`} onChange={handleChange} req={true} cls="input_company"/>
        <span className="info" style={{marginTop:"8px", marginLeft:"18px",width: "95%",}}>Your company's brand/trade name: without Inc., Ltd., B.V., Pte., etc.</span>
        
        <span className="head">POSITION*</span>
        <TextInput keyy='position' val={user.position} placeholder={`Position`} onChange={handleChange} req={true} cls="input_company"/>
        <span className="info" style={{marginTop:"8px", marginLeft:"18px",width: "95%",}}> Please specify as single job position like "Marketing Manager" or "Node JS Developer", not a sentence like "Looking for PM / Biz Dev / Manager". We know your job is important but please DO NOT WRITE IN FULL CAPS. If posting multiple roles, please create multiple job posts. A job post is limited to a single job. We only allow real jobs, absolutely no MLM-type courses "learn how to work online" please.</span>
        
        <span className="head">EMPLOYMENT TYPE*</span>
        <Select keyy='emptype' onChange={handleChange} req={true} cls="input_company" body={emptype}/>
        <span className="info" style={{marginTop:"8px", marginLeft:"18px",width: "95%",}}></span>

        <span className="head">PRIMARY TAG</span>
        <Select keyy='primtg' onChange={handleChange} req={true} cls="input_company" body={primTag}/>
        <span className="info" style={{marginTop:"8px", marginLeft:"18px",width: "95%",}}></span>
        
        <span className="head">TAGS, KEYWORDS OR STACK*</span>
        <Tags keyy='tags' cls="input_company" settgs={handleChange} dynamic={true} options={tagOpns}/>
        <span className="info" style={{marginTop:"8px", marginLeft:"18px",width: "95%",}}>Short tags are preferred. Use tags like industry and tech stack. The first 3 or 4 tags are shown on the site, the other tags aren't but the job will be shown on each tag specific page (like /remote-react-jobs). We also sometimes generate tags automatically after you post/edit to supplement.</span>

        <span className="head">JOB IS RESTRICTED TO LOCATIONS?</span>
        <Tags keyy='locns' cls="input_company" settgs={handleChange} dynamic={true} options={locnOpns} phdr='Type a location this job is restricted to'/>
        <span className="info" style={{marginTop:"8px", marginLeft:"18px",width: "95%",}}>If you'd only like to hire people from a specific location or timezone this remote job is restricted to (e.g. Europe, United States or Japan). If not restricted, please leave it as "Worldwide". The less restricted this is, the more applicants you will get. Keeping it "Worldwide" is highly recommended as you'll have access to a worldwide pool of talent. To promote fairness in remote work positions, worldwide jobs are ranked higher.</span>

       </div>

       <div className="group">
        <div className="group-heading">COMPANY</div>

        <span className="head">COMPANY TWITTER</span>
        <TextInput keyy='twtr' val={user.twtr} placeholder={`username`} onChange={handleChange} req={true} cls="input_company"/>
        <span className="info" style={{marginTop:"8px", marginLeft:"18px",width: "95%",}}>Twitter username without @. Not required, but used to tag your company when we tweet out your job post.</span>
        
        <span className="head">COMPANY EMAIL* {`(STAYS PRIVATE, FOR INVOICE + EDIT LINK)`}</span>
        <TextInput keyy='compMail' val={user.compMail} placeholder={``} onChange={handleChange} req={true} cls="input_company"/>
        <span className="info" style={{marginTop:"8px", marginLeft:"18px",width: "95%",}}>Make sure this email is accessible by you! We use this to send the invoice and edit link. We can not and do not manually resend it! If you use your company domain (same as company name), we will show a [ Verified ] tag on your job post.</span>
        
        <span className="head">INVOICE EMAIL {`(STAYS PRIVATE)`}</span>
        <TextInput keyy='invMail' val={user.invMail} placeholder={``} onChange={handleChange} req={true} cls="input_company"/>
        <span className="info" style={{marginTop:"8px", marginLeft:"18px",width: "95%",}}>We send a copy of the invoice and edit link to here too. You can write your finance department or accountant expenses email here so they get a copy of the invoice for your bookkeeping.</span>

        <span className="head">INVOICE ADDRESS*</span>
        <TextArea keyy="invAdrs" val={user.invAdrs} placeholder={`e.g. your company's full name and full invoice address, including building, street, city and country; also things like your VAT number, this is shown on the invoice.`} onChange={handleChange} req={true} cls="input_company"/>
        <span className="info" style={{marginTop:"8px", marginLeft:"18px",width: "95%",}}>{`Specify your company address here and we'll put it on your invoice for your bookkeeping. Be sure to [ Save changes ] in bottom right after editing your invoice address. Then it'll be instantly updated on the invoice.`}</span>
        
        <span className="head">INVOICE NOTES / PO NUMBER</span>
        <TextInput keyy='invNote' val={user.invNote} placeholder={`e.g. PO number 1234`} onChange={handleChange} req={true} cls="input_company"/>
        <span className="info" style={{marginTop:"8px", marginLeft:"18px",width: "95%",}}>Not required. Add notes here that you'd like to see on the invoice/receipt such as a Purchase Order number or any other internal notes you need for reference. You can add or edit this later.</span>

        <span className="head">PAY LATER</span>
        <div style={{marginLeft:"1.4%"}}><Checkbox keyy="payLtr" label="I'd like to pay later" checked={user.payLtr} onChange={handleChange}/></div>
        <span className="info" style={{marginTop:"8px", marginLeft:"18px",width: "95%",}}>{`Need to get approval for this payment? Or send the invoice to your finance department first? No problem, we'll save your job post and send you (and your finance department below) a payment link. Once it's paid we immediately publish it!`}</span>

      { user.payLtr&&<div><span className="head">PAY LATER EMAIL*</span>
        <TextInput keyy='pltrEml' val={user.pltrEml} placeholder={`Pay later email address`} onChange={handleChange} req={true} cls="input_company"/>
        <span className="info" style={{marginTop:"8px", marginLeft:"18px",width: "95%",}}>We will send a link to pay for this job to this email address.</span></div>}
       
       </div>

       <div className="group">
        <div className="group-heading">JOB DETAILS</div>

        <span className="head">{`COMPANY LOGO (.JPG OR .PNG, SQUARE OR ROUND)`}</span>
        <div style={{marginLeft:"1.4%"}}><UploadButton keyy="logo" onChange={handleChange}/>
        <div style={{display:"flex",alignItems:"center",marginLeft:"1%"}}><b>Highlight with your company's 🌈 brand color:</b><ColorPickerButton change={handleChange} keyy='bgcolor' /></div></div>
        <span className="info" style={{marginTop:"8px", marginLeft:"18px",width: "95%",}}></span>
        
        <span className="head">JOB DESCRIPTION*</span>
        <div style={{marginLeft:"1.4%",marginRight:"2%"}}><JoditEditorComponent keyy="desc" value={user.desc} onChange={handleChange}/></div>
        <span className="info" style={{marginTop:"8px", marginLeft:"18px",width: "95%",}}>Click anywhere outside the editor to save</span>
        
        <span className="head">{`ANNUAL SALARY OR COMPENSATION IN USD (GROSS, ANNUALIZED, FULL-TIME-EQUIVALENT (FTE) IN USD EQUIVALENT)*`}</span>
        <div style={{marginLeft:"18%"}}>
          <div style={{display:"inline"}}><Select keyy="minsal" onChange={handleChange}req={true} cls="input_company" body={minSal} type="small" /></div> 
          <a style={{display:"inline",fontSize:"30px",marginLeft:"1%"}}>{`-`}</a>
          <div style={{display:"inline"}}><Select keyy="maxsal" onChange={handleChange}req={true} cls="input_company" body={maxSal} type="small"/></div> 
        </div>
        <span className="info" style={{marginTop:"8px", marginLeft:"18px",width: "95%",}}>It's illegal to not share salary range on job posts since 2021. Posts without salary will automatically show an estimate of salary based on similar jobs. Remote job postings are legally required to show a salary compensation range in many U.S. states and countries. Google does NOT index jobs without salary data. If it's a short-term gig, use the annual full-time equivalent. For example, if it's a 2-week project for $2,000, the annual equivalent would be $2,000 / 2 weeks * 52 weeks = $52,000. Please use USD equivalent. We don't have currency built-in yet and we'd like to use this salary data to show salary trends in remote work. Remote OK is a supporter of #OpenSalaries.</span>

        <span className="head">BENEFITS*</span>
        <div style={{marginLeft:"1.4%"}}><SelectedOptions options={benefitOpns} keyy="benefits" onChange={handleChange} /></div>
        <span className="info" style={{marginTop:"8px", marginLeft:"18px",width: "95%",}}></span>
        
        <span className="head">HOW TO APPLY?</span>
        <div style={{marginLeft:"1.4%",marginRight:"2%"}}><JoditEditorComponent keyy="how2apply" value={user.how2apply} onChange={handleChange}/></div>
        <span className="info" style={{marginTop:"8px", marginLeft:"18px",width: "95%",}}>Click anywhere outside the editor to save</span>

        <span className="head">EMAIL TO GET JOB APPLICATIONS VIA APPLICANT AI (OUR OWN ATS)*</span>
        <TextInput keyy='email4jobappl' val={user.email4jobappl} placeholder={`Apply email address`} onChange={handleChange} req={true} cls="input_company"/>
        <span className="info" style={{marginTop:"8px", marginLeft:"18px",width: "95%",}}>{`Need to get approval for this payment? Or send the invoice to your finance department first? No problem, we'll save your job post and send you (and your finance department below) a payment link. Once it's paid we immediately publish it!`}</span>

        <span className="head">APPLY URL</span>
        <TextInput keyy='applUrl' val={user.applUrl} placeholder={`https://`} onChange={handleChange} req={true} cls="input_company"/>
        <span className="info" style={{marginTop:"8px", marginLeft:"18px",width: "95%",}}>If you'd like to use your own apply form or ATS you can enter the URL here for people to apply. Jobs that use our own Applicant AI ATS generally receive more applicants.</span>
       
       </div>

       <div className="group">
        <div className="group-heading">FEEDBACK BOX</div>

        <span className="head">FEEDBACK ABOUT CODEUNITY</span>
        <TextArea keyy="fdbck" val={user.fdbck} onChange={handleChange} req={true} cls="input_company"/>
        <span className="info" style={{marginTop:"8px", marginLeft:"18px",width: "95%",}}>{`This isn't part of the job post. If you have any feature requests or general feedback about posting a job Remote OK, leave it here. Please be radically honest, I'm always improving the site and act on your feedback fast. It's most important that you're happy with the site and I want you to keep coming back to post here!`}</span>
 
       </div>
       <div className="group">
          <div className="group-heading">Preview</div>
          <main className="w-full"><br/>
          <div className="top-text"   style={{display:"flex",flexDirection:"column",justifyItems:"center",alignItems:"center",width:"100%"}}>
        <strong >Here's a preview of how your job post will look like</strong>
        <p  style={{marginTop:"1.5px"}}>Don't worry if it's not perfect the first time: your job is fully editable for free after posting it!</p>
        </div><br/>
          <div style={{marginTop:"5px",marginBottom:"50px", border:"shadow",borderWidth:"1px",borderRadius:"7px",width:"95%",marginLeft:"2.5%"}}>
          <div style={{marginLeft:"2%",marginTop:"1%"}}><JobCard imgflg bdg bgcolor={user.bgcolor} imgsrc={user.logo} cls="w-12wh" position={user.position} company_name={user.company} location_restriction={user.locns} tags={user.tags} created_at="5/17/2024 23:11:25"/></div>
          <div style={{display:"flex",flexDirection:"column",justifyItems:"center",alignItems:"center",width:"100%"}}><h1 style={{textAlign:"left"}}>
        <div style={{fontSize: "35px",marginTop:"3%"}}>
        <span>{comp}</span> is hiring a
        </div> <b style={{fontSize: "35px",}}>Remote <span>{pos}</span></b>
        <main dangerouslySetInnerHTML={{ __html: jobdesc }}></main>
        </h1></div>
        <div style={{marginTop:"4%",marginBottom:"50px",minHeight:"300px", border:"solid",borderWidth:"1px",borderRadius:"7px",width:"60%",marginLeft:"20%"}}>
        <div className="top-text"   style={{display:"flex",flexDirection:"column",justifyItems:"center",alignItems:"center",width:"100%",padding:"5%"}}>
        <strong style={{fontSize: "25px",}} >How do you apply?</strong>
        {how2apply==""&&<p  style={{marginTop:"5px"}}>{`Here the instructions go on how to apply for this job. Write them in the "How to Apply?" box.`}</p>}
        <div  style={{marginTop:"1.5px"}} dangerouslySetInnerHTML={{ __html:how2apply}}/>
        <div className="border border-gray-300 rounded-md px-2 py-2"  style={{borderStyle:"dotted",height:"5%",marginTop:"15px",fontSize: "16px",color:"#C7C7C7"}}>Apply for this job</div>
        </div><br/>
        </div>
          </div>
          </main>
      </div>

  <div style={{height:"200px"}}></div>
     
    </main>
    
  );
}
