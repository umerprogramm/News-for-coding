import React from 'react';

export default function News_card(props) {
  return (
    <div className='bg-slate-800 h-100'>
    <div className='bg-gray-200 w-80 m-auto rounded my-3'>
    <h4 className='px-3 text-2xl font-bold '>{props.title}</h4>
        
     <span className='p-3'>comments : {props.comments}</span>
     <br/>
     <span className='p-3'>votes : {props.votes}</span>
     <br/>
     <span className='p-3'>time : {props.Time}</span>
     <br/>
   <a href={props.url} target="_blank">  <span className=' my-5 m-3 px-2 bg-slate-800 text-white rounded'> Go to the post </span></a>

</div>
  </div>
  )
}

