import React, { useEffect, useState } from "react";
import Stack from "@mui/material/Stack";
import { Gauge } from "@mui/x-charts/Gauge";
import Usbdata from "./Usbdata";

function Dashboard() {
  let [apiData, setApiData] = useState(null);

  async function getApiData() {
    let response = await fetch("http://10.0.157.103:5000/system/health");

    let data = await response.json();

    setApiData(data);

    // console.log(data.memory_usage);
  }


  getApiData();

  return (
    <div className="flex flex-col mt-10">
    <div className=" w-screen  flex flex-col items-center justify-center">
      {apiData === null ? (
        <div className=" flex items-center justify-center">
          <h4 className="text-2xl">Loading.......</h4>
        </div>
      ) : (
        <div className=" w-[90%]  " >
          {/* <h3>usageName</h3> */}
          <div className="flex items-center  gap-24 ">
            <div className="bg-amber-200 w-44 h-36 rounded-4xl flex  flex-col justify-center items-center ">
              <Stack
                direction={{ xs: "column", md: "row" }}
                spacing={{ xs: 1, md: 3 }}
              >
                
                <Gauge
                  width={100}
                  height={100}
                  value={[apiData.cpu_usage+10]}
                  startAngle={-90}
                  endAngle={90}
                />
                
              </Stack>
              <p className="mt-[-20px]">cpu usge</p>
            </div>
            <div className="bg-amber-200 w-44 h-36 rounded-4xl flex  flex-col justify-center items-center">
            <Stack
                direction={{ xs: "column", md: "row" }}
                spacing={{ xs: 1, md: 3 }}
              >
                
                <Gauge
                  width={100}
                  height={100}
                  value={[apiData.disk_usage]}
                  startAngle={-90}
                  endAngle={90}
                />
              </Stack>
              <p className="mt-[-20px]">disk usage</p>
              
            </div>
            <div className="bg-amber-200 w-44 h-36 rounded-4xl flex flex-col justify-center items-center">
            <Stack
                direction={{ xs: "column", md: "row" }}
                spacing={{ xs: 1, md: 3 }}
              >
                
                <Gauge
                  width={100}
                  height={100}
                  value={[apiData.memory_usage]}
                  startAngle={-90}
                  endAngle={90}
                />
              </Stack>
              <p className="mt-[-20px]">memory usage</p>
              
            </div>
          </div>
        </div>
      )}
      
    </div>
    <div className="mt-18 ml-18 " >
      <p className="font-bold">Devices connected</p>
    <Usbdata/>
  </div>
  </div>
  );
}

export default Dashboard;
