import React ,{useState , useEffect }from 'react';
import News_card from '../News_card/News_card';

export default function Main() {
 
 
 const [state , setstate] = useState([])

  useEffect(() => {
   fetch('http://localhost:5000/')
	.then(response => response.json())
	.then(data =>setstate(data))
	.catch(err => console.error(err));
}, []);
 


  return( 
  <>
  { state.map((value ) =>
(
<News_card

key = {value.index}
title = {value.title}
votes = {value.votes}
comments = {value.comments}
Time  = {value.time_stamp}
url = {value.url}

/>
)


  )
}
  </>
  )
}
