import React from 'react';
import { TagGroup, Tag, Input, IconButton } from 'rsuite';import PlusIcon from '@rsuite/icons/Plus';

interface Props {
 
    closeable?:boolean;linktg?:boolean;color?:string;dynamic?:boolean;size?:string;
  }



  export const Tags = ({closeable=false,linktg=false,color="white",dynamic=false,size="sm",}: Props) => {
    const [tags, setTags] = React.useState(['Tag 1', 'Tag 2', 'Tag 3']);
  const [typing, setTyping] = React.useState(false);
  const [inputValue, setInputValue] = React.useState('');

  const removeTag = (tag:string) => {
    const nextTags = tags.filter(item => item !== tag);
    setTags(nextTags);
  };

  const addTag = () => {
    const nextTags = inputValue ? [...tags, inputValue] : tags;
    setTags(nextTags);
    setTyping(false);
    setInputValue('');
  };

  const handleButtonClick = () => {
    setTyping(true);
  };

  const renderInput = () => {
    if (typing) {
      return (
        <Input
          className="tag-input"
          size="xs"
          style={{ width: 70,marginLeft: "7px",backgroundColor:"#feffef", }}
          value={inputValue}
          onChange={setInputValue}
          onBlur={addTag}
          onPressEnter={addTag}
        />
      );
    }

    return (
      <IconButton
        className="tag-add-btn"
        onClick={handleButtonClick}
        icon={<PlusIcon />}
        appearance="ghost"
        style={{ marginLeft: "7px" }}
        size="xs"
      />
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
    <div>
    {tags.map((item, index) => (
      <Tag key={index} className="badge badge-outline bg-yellow-100" closable onClose={() => removeTag(item)} style={{backgroundColor:`${color}`,display:"inline",marginLeft:"7px"}}>
        {item}
      </Tag>
    ))}
    {renderInput()}
  </div>
    );
  
  };