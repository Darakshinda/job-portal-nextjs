import React from 'react';
import Tag from '@/app/Components/Tag';
import ClickOutsideDiv from '@/app/Components/ClcikoutsideDiv';

import { useState } from 'react';

interface Option {
  label: string;
}

interface Props {
 
    closeable?:boolean;linktg?:boolean;color?:string;dynamic?:boolean;size?:string;value: string;
    onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;settgs?:Function;
    cls?: string;keyy?:string;
    options: Option[];
    req?: boolean;
  }

/*
<div role="listbox" tabindex="-1" class="ts-dropdown-content" id="select_locations-ts-dropdown" bis_skin_checked="1" style=""><div class="optgroup" data-group="1" bis_skin_checked="1"><div class="optgroup-header" bis_skin_checked="1"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Regions</font></font></div><div data-selectable="" data-value="region_AF" class="option active" role="option" id="select_locations-opt-1" bis_skin_checked="1" aria-selected="true">
🦁 Africa </div><div data-selectable="" data-value="region_AS" class="option" role="option" id="select_locations-opt-2" bis_skin_checked="1">
⛩ Asia </div><div data-selectable="" data-value="region_EU" class="option" role="option" id="select_locations-opt-3" bis_skin_checked="1">
🇪🇺 Europe </div><div data-selectable="" data-value="region_LA" class="option" role="option" id="select_locations-opt-4" bis_skin_checked="1">
💃 Latin America </div><div data-selectable="" data-value="region_ME" class="option" role="option" id="select_locations-opt-5" bis_skin_checked="1">
🕌 Middle East </div><div data-selectable="" data-value="region_NA" class="option" role="option" id="select_locations-opt-6" bis_skin_checked="1">
⛰️ North America </div><div data-selectable="" data-value="region_OC" class="option" role="option" id="select_locations-opt-7" bis_skin_checked="1">
🌊 Oceania </div></div><div class="optgroup" data-group="2" bis_skin_checked="1"><div class="optgroup-header" bis_skin_checked="1"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Countries</font></font></div><div data-selectable="" data-value="AF" class="option" role="option" id="select_locations-opt-9" bis_skin_checked="1">
🇦🇫 Afghanistan </div><div data-selectable="" data-value="AL" class="option" role="option" id="select_locations-opt-10" bis_skin_checked="1">
🇦🇱 Albania </div><div data-selectable="" data-value="DZ" class="option" role="option" id="select_locations-opt-11" bis_skin_checked="1">
🇩🇿 Algeria </div><div data-selectable="" data-value="AS" class="option" role="option" id="select_locations-opt-12" bis_skin_checked="1">
🇦🇸 American Samoa </div><div data-selectable="" data-value="AD" class="option" role="option" id="select_locations-opt-13" bis_skin_checked="1"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
🇦🇩 Andorra</font></font></div><div data-selectable="" data-value="AO" class="option" role="option" id="select_locations-opt-14" bis_skin_checked="1">
🇦🇴 Angola </div><div data-selectable="" data-value="AI" class="option" role="option" id="select_locations-opt-15" bis_skin_checked="1">
🇦🇮 Anguilla </div><div data-selectable="" data-value="AQ" class="option" role="option" id="select_locations-opt-16" bis_skin_checked="1">
🇦🇶 Antarctica </div><div data-selectable="" data-value="AG" class="option" role="option" id="select_locations-opt-17" bis_skin_checked="1">
🇦🇬 Antigua and Barbuda </div><div data-selectable="" data-value="AR" class="option" role="option" id="select_locations-opt-18" bis_skin_checked="1">
🇦🇷 Argentina </div><div data-selectable="" data-value="AM" class="option" role="option" id="select_locations-opt-19" bis_skin_checked="1">
🇦🇲 Armenia </div><div data-selectable="" data-value="AW" class="option" role="option" id="select_locations-opt-20" bis_skin_checked="1">
🇦🇼 Aruba </div><div data-selectable="" data-value="AU" class="option" role="option" id="select_locations-opt-21" bis_skin_checked="1">
🇦🇺 Australia </div><div data-selectable="" data-value="AT" class="option" role="option" id="select_locations-opt-22" bis_skin_checked="1">
🇦🇹 Austria </div><div data-selectable="" data-value="AZ" class="option" role="option" id="select_locations-opt-23" bis_skin_checked="1">
🇦🇿 Azerbaijan </div><div data-selectable="" data-value="BH" class="option" role="option" id="select_locations-opt-24" bis_skin_checked="1">
🇧🇭 Bahrain </div><div data-selectable="" data-value="BD" class="option" role="option" id="select_locations-opt-25" bis_skin_checked="1">
🇧🇩 Bangladesh </div><div data-selectable="" data-value="BB" class="option" role="option" id="select_locations-opt-26" bis_skin_checked="1">
🇧🇧 Barbados </div><div data-selectable="" data-value="BY" class="option" role="option" id="select_locations-opt-27" bis_skin_checked="1">
🇧🇾 Belarus </div><div data-selectable="" data-value="BE" class="option" role="option" id="select_locations-opt-28" bis_skin_checked="1">
🇧🇪 Belgium </div><div data-selectable="" data-value="BZ" class="option" role="option" id="select_locations-opt-29" bis_skin_checked="1">
🇧🇿 Belize </div><div data-selectable="" data-value="BJ" class="option" role="option" id="select_locations-opt-30" bis_skin_checked="1">
🇧🇯 Benin </div><div data-selectable="" data-value="BM" class="option" role="option" id="select_locations-opt-31" bis_skin_checked="1">
🇧🇲 Bermuda </div><div data-selectable="" data-value="BT" class="option" role="option" id="select_locations-opt-32" bis_skin_checked="1">
🇧🇹 Bhutan </div><div data-selectable="" data-value="BO" class="option" role="option" id="select_locations-opt-33" bis_skin_checked="1">
🇧🇴 Bolivia </div><div data-selectable="" data-value="BA" class="option" role="option" id="select_locations-opt-34" bis_skin_checked="1">
🇧🇦 Bosnia </div><div data-selectable="" data-value="BW" class="option" role="option" id="select_locations-opt-35" bis_skin_checked="1">
🇧🇼 Botswana </div><div data-selectable="" data-value="BV" class="option" role="option" id="select_locations-opt-36" bis_skin_checked="1"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
🇧🇻 Bouvet Island</font></font></div><div data-selectable="" data-value="BR" class="option" role="option" id="select_locations-opt-37" bis_skin_checked="1">
🇧🇷 Brazil </div><div data-selectable="" data-value="IO" class="option" role="option" id="select_locations-opt-38" bis_skin_checked="1">
🇮🇴 British Indian Ocean Territory </div><div data-selectable="" data-value="VG" class="option" role="option" id="select_locations-opt-39" bis_skin_checked="1">
🇻🇬 British Virgin Islands </div><div data-selectable="" data-value="BN" class="option" role="option" id="select_locations-opt-40" bis_skin_checked="1">
🇧🇳 Brunei </div><div data-selectable="" data-value="BG" class="option" role="option" id="select_locations-opt-41" bis_skin_checked="1">
🇧🇬 Bulgaria </div><div data-selectable="" data-value="BF" class="option" role="option" id="select_locations-opt-42" bis_skin_checked="1"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
🇧🇫 Burkina Faso</font></font></div><div data-selectable="" data-value="BI" class="option" role="option" id="select_locations-opt-43" bis_skin_checked="1"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
🇧🇮 Burundi</font></font></div><div data-selectable="" data-value="KH" class="option" role="option" id="select_locations-opt-44" bis_skin_checked="1">
🇰🇭 Cambodia </div><div data-selectable="" data-value="CM" class="option" role="option" id="select_locations-opt-45" bis_skin_checked="1">
🇨🇲 Cameroon </div><div data-selectable="" data-value="CA" class="option" role="option" id="select_locations-opt-46" bis_skin_checked="1">
🇨🇦 Canada </div><div data-selectable="" data-value="CV" class="option" role="option" id="select_locations-opt-47" bis_skin_checked="1"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
🇨🇻 Cape Verde</font></font></div><div data-selectable="" data-value="BQ" class="option" role="option" id="select_locations-opt-48" bis_skin_checked="1">
🇧🇶 Caribbean Netherlands </div><div data-selectable="" data-value="KY" class="option" role="option" id="select_locations-opt-49" bis_skin_checked="1">
🇰🇾 Cayman Islands </div><div data-selectable="" data-value="CF" class="option" role="option" id="select_locations-opt-50" bis_skin_checked="1">
🇨🇫 Central African Republic </div><div data-selectable="" data-value="TD" class="option" role="option" id="select_locations-opt-51" bis_skin_checked="1">
🇹🇩 Chad </div></div></div>
*/
let mySet: Set<string> = new Set();
  export const Tags = ({closeable=false,linktg=false,color="white",dynamic=false,size="sm",cls = 'select',settgs=()=>{},
    value,keyy,
    options,
    req = false,}: Props) => 
      {
       
        const [searchTerm, setSearchTerm] = useState('');
        const [sel, setsel] = useState(0);
       
        mySet.forEach((item) => {
          console.log(item);
      });
      const filt=(option:Option,)=>{
        
        return (option.label.toLowerCase().includes(searchTerm.toLowerCase())||option.label=="REGION"||option.label=="COUNTRIES")&&!mySet.has(option.label);}
      
        const filteredOptions = options.filter(option =>
          filt(option)
        );

    const [tags, setTags] = React.useState([]);
  const [typing, setTyping] = React.useState(false);
  const [inputValue, setInputValue] = React.useState("$$");

  settgs(keyy,tags.join(","));

  const handleOutsideClick = () => {
    setsel(0);setSearchTerm("");
  };
   

  const removeTag = (tag:string) => {
    mySet.delete(tag);
    const nextTags = tags.filter(item => item !== tag);
    setTags(nextTags);
  };

  const addTag = () => {
    
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
        onChange={e => {setSearchTerm(e.target.value);setsel(1);}} onClick={e=>setsel(1)}
      /></div>
      );
   

  };
  const fun=(option:Option)=>{
    if(option.label=="REGION"||option.label=="COUNTRIES") return(<div><br/><p><b>{option.label}</b></p><br/></div>);
      if(option.label!="") return(
    <li><button onClick={()=>{setInputValue("done");setSearchTerm(option.label);setsel(0);mySet.add(option.label);}}>{option.label}</button></li>);}
  
    const printtag=(item:string,index:number)=>{
      return(
        <Tag tag={{label:item}} key={index} onRemove={() => removeTag(item)}>
          {item}
        </Tag>
      )}
  
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
    <ClickOutsideDiv onOutsideClick={handleOutsideClick}><div  className={`searchable-select ${cls}`} style={{justifyItems:"center",backgroundSize:"cover",}}>
    {tags.map((item, index) => printtag(item,index))}
    {renderInput()}
  </div>
  {sel==1 && <div role="listbox" className="myDiv" style={{zIndex:"500px"}}><ul tabIndex={0} className={`dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box`} style={{backgroundColor:`white`,marginLeft:"1%",zIndex:"20000px", maxWidth:"95%"}}>
  {filteredOptions.map(option => fun(option))}
</ul></div>}</ClickOutsideDiv>
    );
  
  };