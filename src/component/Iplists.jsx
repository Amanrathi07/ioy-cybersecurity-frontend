import React, { useEffect, useState } from 'react'
import { loadConfigFromFile } from 'vite';

function Iplists() {
  
    const[apiData,setApiData]=useState(null);

    async function portsData() {
        
        let response=await fetch("http://10.0.157.103:5000/portscan")

        let data=await response.json()

        setApiData(data);          
        
    }
    
    useEffect(()=>{
        portsData()
        
    },[]) 
    return (
    
    <div>{(apiData===null)?("no data"):("data")}</div>
  )
}

export default Iplists