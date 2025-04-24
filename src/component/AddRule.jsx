import React from "react";

function AddRule() {
  return (
    <div className=" w-screen h-screen">
      <div className="bg-amber-200 h-[80%] m-16 rounded-3xl border-2 p-4 ">
        <form className='flex flex-col 'action="">
          <span className="m-4 flex items-center gap-3">
            <p className="font-bold text-xl"> New rule</p>{" "}
            <input
              className="bg-amber-50 p-2 rounded-xl"
              type="text"
              placeholder="add New rule ......."
            />
          </span>
          <div className="m-4 flex items-center gap-3">
            <p className="font-bold text-xl">Network Protocol</p>
            <span>
              <input type="checkbox" id="proto1" name="proto1" value="TCP" />
              <label for="proto1"> TCP</label>
            </span>
            <span>
              <input type="checkbox" id="proto2" name="proto2" value="UDP" />
              <label for="proto2"> UDP</label>
            </span>
            <span>
              <input type="checkbox" id="proto3" name="proto3" value="SCTP" />
              <label for="proto2"> SCTP</label>
            </span>
          </div>

          <div><span className="m-4 flex items-center gap-3">
            <p className="font-bold text-xl"> Port</p>{" "}
            <input
              className="bg-amber-50 p-2 rounded-xl"
              type="text"
              placeholder="port"
            />
          </span></div>
          <div><span className="m-4 flex items-center gap-3">
            <p className="font-bold text-xl"> IP Address</p>{" "}
            <input
              className="bg-amber-50 p-2 rounded-xl"
              type="text"
              placeholder="IP Addres(IPV4 or IPV6)"
            />
          </span></div>
          <div><span className="m-4 flex items-center gap-3">
            <p className="font-bold text-xl"> Source Port</p>{" "}
            <input
              className="bg-amber-50 p-2 rounded-xl"
              type="text"
              placeholder="Source Port"
            />
          </span></div>
          <div><span className="m-4 flex items-center gap-3">
            <p className="font-bold text-xl"> Destination Port</p>{" "}
            <input
              className="bg-amber-50 p-2 rounded-xl"
              type="text"
              placeholder="Destination Port"
            />
          </span></div>

          <center><button className="bg-green-500 w-xl rounded-xl font-bold" type="submit" onClick={()=>{}}>Add Rule</button></center>
        </form>
      </div>
    </div>
  );
}

export default AddRule;
