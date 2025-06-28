import React from 'react'

function SplitStep3({setBillSplitStatus}) {

    const handleSubmit = () =>{
        localStorage.removeItem("step")
        setBillSplitStatus(1)
    }

  return (
    <div>
        <button onClick={()=>handleSubmit()} className='bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-600 transition-colors duration-300'>Submit</button>
    </div>
  )
}

export default SplitStep3
