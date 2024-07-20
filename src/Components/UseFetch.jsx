import {useState, useEffect } from "react";
console.log("InuseFetchBefore function call");
const UseFetch = (url) => {
    console.log("InuseFetchBefore state call");
     const[data,setData]=useState();
     console.log("InuseFetchafter state call");
      useEffect(()=>{
        console.log("InuseFetchBefore url call");
        fetch(url).then((res)=>res.json())
        
        .then((data)=>setData(data))
        .catch (error => {console.error('error with fetch oeration',error)});
        console.log("InuseFetchafterjason call");
    },[])
return [data]
}

export default UseFetch
