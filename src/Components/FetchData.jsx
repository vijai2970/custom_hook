import React from 'react'
import UseFetch from './UseFetch';
console.log("Before API call");
const [data]=UseFetch('https://api.npoint.io/9045c260b1565daa9e15');
 console.log("help");
const FetchData = () => {
  return (
    <>
     <ul className='list_data_main'>
        <h1 className='usefetch_heading'>Use Fetch Custom Hook</h1>
     </ul>
    </>
  )
}

export default FetchData