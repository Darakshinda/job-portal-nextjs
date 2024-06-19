import React from 'react';


interface Props {
 
  cls?: string;onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;req?:boolean;body?:string;id?:string;type?:number;
}
interface Propd {
 
  cls?: string;bgcolor?: string;btncolor?: string;
}

/**
 * Primary UI component for user interaction
 */
export const Select = ({
  cls=`select select-bordered w-full max-w-xs`,req=false,onChange,body="",id,type=3,
}: Props) => {
if(type==5) return(
  
  <select className={`${cls}`} required={req} onChange={onChange} id={id} style={{display:"inline",width:"37%"}}>
  {body.split("<").map((option) => (
        <option>
          {option}
        </option>
      ))}
</select>
  );
  
  return(
  
  <select className={`${cls}`} required={req} onChange={onChange} id={id}>
  {body.split("<").map((option) => (
        <option>
          {option}
        </option>
      ))}
</select>
  );
};

export const Dropdown = ({bgcolor="base",btncolor="base",
  cls=`dropdown`,
}: Propd) => {

 return (
    <div className={cls}>
  <div tabIndex={0} role="button" className="btn m-1" style={{backgroundColor:`${btncolor}`}}>Click</div>
  <ul tabIndex={0} className={`dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52`} style={{backgroundColor:`${bgcolor}`}}>
    <li><button onClick={()=>console.log("clicked 1")}>Item 1</button></li>
    <li><button onClick={()=>console.log("clicked 2")}>Item 2</button></li>
  </ul>
</div>
  );

};
