import React from 'react'

function SplitStep2({setBillSplitStatus}) {

    const handleNext=()=>{
        localStorage.setItem("step",3)
        setBillSplitStatus(3)
    }

  return (
    <div>
      <button onClick={()=>handleNext()} className='bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-600 transition-colors duration-300'>Next Step</button>
    </div>
  )
}

export default SplitStep2
