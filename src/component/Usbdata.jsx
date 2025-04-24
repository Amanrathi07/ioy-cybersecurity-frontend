import React, { useState,useEffect } from 'react'

function Usbdata() {
    const[usbData,setUsbData]=useState(null);

    async function getUsbData() {
        let response=await fetch('http://10.0.157.103:5000/usbdevices')
        let data=await response.json();
        setUsbData(data)
        console.log( data[0].split('--')[1]);
        
    }

    useEffect(()=>{getUsbData()},[])
  return (
    <div className='mt-2'>{(usbData===null)?(""):(usbData.map((data,i)=>(<div className='bg-amber-200 p-3 mt-2 w-[60%] rounded-2xl'>{i+1}<span className='ml-4'>{data.split('--')[0]}</span></div>)))}</div>
  )
}

export default Usbdata