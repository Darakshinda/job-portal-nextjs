"use client"
import React from "react";
import Navbar from "../Navbar";
import JobList from "../Components/JobList";
import {JobCard} from "../../stories/Job-Card";
import {Form} from "../Components/Form";
import {NavBar} from "../../stories/NavBar";
import { title } from "process";



export default function Home() {
const f1={lbl:"LET'S START",
  fields:[{type:1,hdg:"COMPANY NAME*",body:"Sample",desc:"Your company's brand/trade name: without Inc., Ltd., B.V., Pte., etc."}
  ,{type:1,hdg:"POSITION*",body:"Manager",desc:` Please specify as single job position like "Marketing Manager" or "Node JS Developer", not a sentence like "Looking for PM / Biz Dev / Manager". We know your job is important but please DO NOT WRITE IN FULL CAPS. If posting multiple roles, please create multiple job posts. A job post is limited to a single job. We only allow real jobs, absolutely no MLM-type courses "learn how to work online" please.`},
  {type:1,hdg:"EMPLOYMENT TYPE*",body:"Full-time",desc:""},
  {type:1,hdg:"PRIMARY TAG",body:"Marketing",desc:"This primary tag shows first and increases visibility in the main sections. Your job is shown on every page that is tagged with though. E.g. if you tag it as PHP, it shows for Remote PHP Jobs etc."}

  ],
}
const f2={lbl:"COMPANY",
  fields:[{type:1,hdg:"COMPANY TWITTER",body:"Sample",desc:"Twitter username without @. Not required, but used to tag your company when we tweet out your job post"}
  ,{type:1,hdg:"COMPANY EMAIL* (STAYS PRIVATE, FOR INVOICE + EDIT LINK)",body:"",desc:`Make sure this email is accessible by you! We use this to send the invoice and edit link. We can not and do not manually resend it! If you use your company domain (same as company name), we will show a [ Verified ] tag on your job post.`},
  {type:1,hdg:"INVOICE EMAIL (STAYS PRIVATE)",body:"",desc:`We send a copy of the invoice and edit link to here too. You can write your finance department or accountant expenses email here so they get a copy of the invoice for your bookkeeping.`},
  {type:1,hdg:"INVOICE ADDRESS*",body:"",desc:"Specify your company address here and we'll put it on your invoice for your bookkeeping. Be sure to [ Save changes ] in bottom right after editing your invoice address. Then it'll be instantly updated on the invoice."},
  {type:1,hdg:"INVOICE NOTES / PO NUMBER",body:"",desc:" Not required. Add notes here that you'd like to see on the invoice/receipt such as a Purchase Order number or any other internal notes you need for reference. You can add or edit this later."}

  ],
}
console.log(f1.fields);
  return (
    <main className="bg-base-100">
      <main className=" fixed bottom-0 z-10 left-[2.5%] w-full">
       <JobCard imgflg bdg cls="card glass" position="Manager" company_name="Sample Company" location_restriction="Faridabad" tags="HTML,Css,JS,Node,React,backend" created_at="5/17/0100 23:11:25"/></main>
       <NavBar endIcon={false} post={true}/>
       <Form title={f1.lbl} items={f1.fields}/>
       <Form title={f2.lbl} items={f2.fields}/>
       <Form title={f1.lbl} items={f1.fields}/>
     
    </main>
    
  );
}
