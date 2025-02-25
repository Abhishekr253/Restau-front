import React, { useEffect, useState } from 'react'
import axios from 'axios'
import ResttCard from './ResttCard'
function Allrest() {
  // create base_url

  const base_url = 'https://restaurant-listing-h40d.onrender.com/restaurants'

  //create a state for holding array
  const [rstData, setRstData] = useState([])

  // create a function for fetching

  const fetchData = async () => {
    const response = await axios.get(base_url)
    console.log(response.data);
    setRstData(response.data)
  }
  console.log(rstData);
  useEffect(() => {
    fetchData()
  }, [])
  return (

    <div>
      <ResttCard restArray={rstData} />
    </div>
  )
}

export default Allrest