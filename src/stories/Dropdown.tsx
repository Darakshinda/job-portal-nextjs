import React from 'react';


interface Props {
 
  cls?: string;
}
interface Propd {
 
  cls?: string;bgcolor?: string;btncolor?: string;
}

/**
 * Primary UI component for user interaction
 */
export const Select = ({
  cls=`select select-bordered w-full max-w-xs`,
}: Props) => {

  return(
  
  <select className={`${cls}`}>
  <option disabled selected>Select</option>
  <option>Item 1</option>
  <option>Item 2</option>
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
