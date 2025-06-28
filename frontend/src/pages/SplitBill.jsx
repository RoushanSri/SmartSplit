import React, { useState } from 'react'
import BillSplitStatus from '../components/BillSplitStatus';
import SplitStep1 from '../components/SplitStep1';
import SplitStep2 from '../components/SplitStep2';
import SplitStep3 from '../components/SplitStep3';
import { useNavigate } from 'react-router-dom';

const SplitBill = () => {

  const [billSplitStatus, setBillSplitStatus] = useState(localStorage.getItem("step")||1);
  const [formData, setFormData] = useState(JSON.parse(localStorage.getItem("formData"))||null);

  const navigate = useNavigate();

  const handleCancel = () => {
      if(billSplitStatus==1){
          localStorage.removeItem("step");
          localStorage.removeItem("formData");
          setBillSplitStatus(1);
          setFormData(null);
          navigate("/u/dashboard")
        }else{
          setBillSplitStatus(billSplitStatus-1)
        }
  }

  return (
    <div className="flex flex-col items-center justify-center mt-6 bg-gray-100 w-full">
      <div className="bg-white shadow-md rounded-lg p-3 w-full flex items-center justify-between">
        <h1 className="text-2xl font-bold">Split Bill</h1>
        <button className={`${billSplitStatus==1?"bg-red-500":"bg-black"} text-white px-4 py-2 rounded-lg`} onClick={()=> handleCancel()}>
          <span>{billSplitStatus==1?"Cancel Bill Split":"Previous Step"}</span>
        </button>
      </div>
      <div className="bg-white shadow-md rounded-lg p-3 w-full my-4">
        <BillSplitStatus billSplitStatus={billSplitStatus}/>
      </div>
      <div className='w-full bg-white rounded-2xl p-6 shadow-md'>
        {billSplitStatus==1?(
          <SplitStep1 setBillSplitStatus={setBillSplitStatus} formData={formData} setFormData={setFormData}/>
        ):billSplitStatus==2?(
          <SplitStep2 setBillSplitStatus={setBillSplitStatus} formData={formData} setFormData={setFormData}/>
        ):(
          <SplitStep3 setBillSplitStatus={setBillSplitStatus} formData={formData} setFormData={setFormData}/>
        )}
      </div>
    </div>
  )
}

export default SplitBill
