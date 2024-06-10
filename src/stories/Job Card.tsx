import React from 'react';


interface Props {
 
  cls?: string;bdg?:boolean;top?:boolean;imgflg?:boolean;divcls?:string;popup?:boolean;fgcls?:string;imgsrc?:string;bgcolor?:string;
}


/**
 * Primary UI component for user interaction
 */


export const JobCard = ({cls=`card w-96 bg-base-100 shadow-xl`,bdg = false,imgflg=false,divcls="card-body",popup=false,top=true,fgcls="",bgcolor="",
  imgsrc="https://media.dev.to/cdn-cgi/image/width=1600,height=900,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fwhh1lpihw7h587pb2iuc.png",
}: Props) => {

 return (
    <div className={cls} style={{backgroundColor:`${bgcolor}`}}>
    {popup&&<div className="card-body">
    <div className="card-actions justify-end">
      <button className="btn btn-square btn-sm">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
      </button>
    </div>
    <p>We are using cookies for no reason.</p>
  </div>}
    {imgflg&&top&&<figure className={fgcls}><img src={imgsrc} alt="Frontend Developer" className="rounded-xl"/></figure>}
    <div className={divcls}>
      <h2 className="card-title">Frontend Developer</h2> {bdg&&<div className="badge badge-secondary">NEW</div>}
      <b style={{fontSize:"12px",textDecoration:"underline"}}>Roles</b>
      <p style={{fontSize:"12px"}}><b>{"."}</b> optimize applications</p>
      <p style={{fontSize:"12px"}}><b>{"."}</b> develop features</p>
      <p style={{fontSize:"12px"}}><b>{"."}</b> maintain brand consistency for UIs</p>
      <div className="card-actions justify-end">
      {bdg&&<div className="badge badge-outline bg-yellow-100">React</div>} {bdg&&<div className="badge badge-outline bg-yellow-100">HTML,CSS,JS</div> }
        <button className="btn btn-accent">Apply</button>
      </div>
    </div>
    {imgflg&&!top&&<figure className={fgcls}><img src={imgsrc} alt="Shoes" /></figure>}
  </div>
  );

};
