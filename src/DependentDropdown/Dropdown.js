import React, { useState } from 'react'
import './style.scss'

const countries = [
    {name:'India',value:'IN',cities:['Chennai','Mumbai','Delhi']},
    {name:'Pakistan',value:'PAK',cities:['Lahore','Karachi']},
    {name:'America',value:'Ame',cities:['Newyork','Losangels','Texas']}
]

const Dropdown = () => {
    const [country,setCountry] = useState({
        name:"",
        value:"",
        cities:[]
    })
    // console.log("country",country)
  return (
    <>
    {/* 1 Dropdown  */}
    <select className='drop' value={country} onChange={(e) => setCountry(e.target.value)} >
        <option  placeholder='Select'>Select</option>
        {countries?.map((item,index) => {
            return <option value={index}>{item?.name}</option>
        })}
    </select>


    {/* 2nd Dropdown -Dependent Dropdown */}
    <select value={country}>
        {
        countries[country]?.cities?.map((city,index) =>{
            return  <option value={index}>{city}</option>
        })}
    </select>
    </>
  )
}

export default Dropdown