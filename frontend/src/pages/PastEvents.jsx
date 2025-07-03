import React from 'react'
import { useEffect } from 'react'
import { getPastEvents } from '../redux/slice/splitSlice'
import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'
import SplitCard from '../components/SplitCard.jsx'
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import { FaFilter } from 'react-icons/fa'
import { motion } from 'framer-motion'

const PastEvents = () => {
  const dispatch = useDispatch()
  const { splits } = useSelector((state) => state.split)

  const [splitData, setSplitData] = useState([])
  const [status, setStatus] = useState('')
  const [filteredData, setFilteredData] = useState([])

  const handleChange = (event) => {
    setStatus(event.target.value)
    setFilteredData(splitData.filter((split) => {
      if (event.target.value === '') return true
      return split.status === event.target.value
    }))
  }

  useEffect(() => {
    if (splits.length !== 0) {
      const data = splits.map((split) => ({
        id: split._id,
        Event: split.event,
        status: split.status,
        statusColor:
          split.status === "completed"
            ? "bg-green-100 text-green-800"
            : split.status === "pending"
            ? "bg-yellow-100 text-yellow-800"
            : "bg-red-100 text-red-800",
        date: new Date(split.createdAt).toLocaleDateString(),
        people: split.participants?.map((person) => person._id),
        totalPayment: split.amount,
        items: split.items?.slice(0, 2).map((item) => ({
          name: item.itemName,
          price: item.itemPrice,
          quantity: item.quantity,
        })),
        moreItems: split.items.length > 2 ? split.items.length - 2 : 0,
      }))
      setSplitData(data)
      setFilteredData(data)
    }
  }, [splits])

  useEffect(() => {
    if (splits.length !== 0 ) return
    dispatch(getPastEvents())
    },[splits.length, dispatch])

  return (
    <div>
      <div className="min-h-[50vh] w-full p-2 mt-4 rounded-2xl">
        <div className="flex items-center justify-between bg-white p-2 rounded-xl">
          <h1 className="font-semibold text-2xl text-gray-900 px-2">
          Past Events
        </h1>
        <FormControl sx={{ m: 1, minWidth: 120 }} size='small'>
          <InputLabel id="demo-select-small-label"><div className='flex gap-2 items-center'><FaFilter/><h1>Filter</h1></div></InputLabel>
          <Select
            labelId="demo-select-small-label"
            id="demo-select-small"
            value={status}
            label="Status"
            onChange={handleChange}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={"pending"}><span className='bg-yellow-100 text-yellow-800 px-3 py-1 rounded-xl text-sm'>Pending</span></MenuItem>
            <MenuItem value={"completed"}><span className='bg-green-100 text-green-800 px-3 py-1 rounded-xl text-sm'>Completed</span></MenuItem>
          </Select>
        </FormControl>
        </div>
        
        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 my-6">
          {filteredData.map((split, idx) => (
            <motion.div
            key={split.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.08, duration: 0.4 }}
          >
            <SplitCard key={idx} split={split}/>
          </motion.div>
        ))}
        </div>
      </div>
    </div>
  )
}

export default PastEvents
