import React from 'react';
import { TagGroup, Tag, Input, IconButton } from 'rsuite';import PlusIcon from '@rsuite/icons/Plus';

import { useState } from 'react';

interface Option {
  label: string;
}

interface Props {
 
    closeable?:boolean;linktg?:boolean;color?:string;dynamic?:boolean;size?:string;value: string;
    onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;settgs?:Function;
    cls?: string;
    options: Option[];
    req?: boolean;
  }



  export const Tags = ({closeable=false,linktg=false,color="white",dynamic=false,size="sm",cls = 'select',settgs=()=>{},
    value,
    onChange,
    options,
    req = false,}: Props) => 
      {
        const [searchTerm, setSearchTerm] = useState('');
        const [sel, setsel] = useState(0);
      
        const filteredOptions = options.filter(option =>
          option.label.toLowerCase().includes(searchTerm.toLowerCase())
        );

    const [tags, setTags] = React.useState(['']);
  const [typing, setTyping] = React.useState(false);
  const [inputValue, setInputValue] = React.useState("$$");

  settgs(tags.join(","));

  

  const removeTag = (tag:string) => {
    const nextTags = tags.filter(item => item !== tag);
    setTags(nextTags);
  };

  const addTag = () => {
    console.log(`hello ${searchTerm}`)
    const nextTags = searchTerm ? [...tags, searchTerm] : tags;
    setTags(nextTags);
    setTyping(false);setInputValue("$$");setSearchTerm("");

  };

  const handleButtonClick = () => {
    setTyping(true);
  };
  console.log(`@@${inputValue} ${searchTerm}`);
  if(inputValue=="done") addTag();
  const renderInput = () => {
   
      return (
        <div style={{display:"inline"}}>
      <input
        type="text"
        className={`search-input ${cls}`} style={{width:"350px",borderStyle:"none"}}
        placeholder="Type a tag or keyword to search and add it"
        value={searchTerm}
        onChange={e => {setSearchTerm(e.target.value);setsel(1);}}
      /></div>
      );
   

  };
  
  if(size=="lg")
    return(
    <Tag closable={closeable} className="badge badge-outline bg-yellow-100" style={{backgroundColor:`${color}`,height:"40px",width:"66px"}}>
        {linktg&&<a target="_blank" href="https://rsuitejs.com" rel="noreferrer">Link-Tag</a>}
        {!linktg&&"Tag"}
    </Tag>);

   if(size=="md")
    return(
    <Tag closable={closeable} size="sm" className="badge badge-outline bg-yellow-100" style={{backgroundColor:`${color}`,height:"30px",width:"50px"}}>
        {linktg&&<a target="_blank" href="https://rsuitejs.com" rel="noreferrer">Link-Tag</a>}
        {!linktg&&"Tag"}
    </Tag>);

  if(!dynamic) 
    return(
    <Tag closable={closeable} className="badge badge-outline bg-yellow-100" style={{backgroundColor:`${color}`}}>
        {linktg&&<a target="_blank" href="https://rsuitejs.com" rel="noreferrer">Link-Tag</a>}
        {!linktg&&"Tag"}
    </Tag>);
   
  
  return (
    <div><div  className={`searchable-select ${cls}`} style={{justifyItems:"center", maxWidth:"90%",backgroundSize:"cover",}}>
    {tags.map((item, index) => (
      <Tag key={index} className="badge badge-outline bg-yellow-100" closable onClose={() => removeTag(item)} style={{backgroundColor:`${color}`,display:"inline",marginLeft:"7px"}}>
        {item}
      </Tag>
    ))}
    {renderInput()}
  </div>
  {sel==1 && <ul tabIndex={0} className={`dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box`} style={{backgroundColor:`white`}}>
  {filteredOptions.map(option => (
    <li><button onClick={()=>{setInputValue("done");setSearchTerm(option.label);setsel(0);}}>{option.label}</button></li>
    
  ))}
</ul>}</div>
    );
  
  };