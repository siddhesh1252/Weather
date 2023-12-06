// 97cc560376ac45bc13513253d119f488
// api.openweathermap.org/data/2.5/weather?q=pune &appid=97cc560376ac45bc13513253d119f488

import React, { useEffect, useState } from 'react'
import "./Style.css"
import WeatherCard from './weatherCard';
const Temp = () => {

   const[searchValue,setSearchValue]=useState("pune");
   const [tempInfo,setTempInfo]=useState({}); 
   
   const getWeatherInfo=async()=>{
        try{
          let url=`https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric &appid=97cc560376ac45bc13513253d119f488`;
          const res=await fetch(url);
          const data=await res.json();
          
      const { temp, humidity, pressure } = data.main;
      const { main: weathermood } = data.weather[0];
      const { name } = data;
      const { speed } = data.wind;
      const { country, sunset } = data.sys;

      const myNewWeatherInfo = {
        temp,
        humidity,
        pressure,
        weathermood,
        name,
        speed,
        country,
        sunset,
      };
      setTempInfo(myNewWeatherInfo)
        }
        catch(error){
           console.log(error);
        }
    }
    useEffect(()=>{
       getWeatherInfo();
    },[]);

  return (
    <>
      <div className='wrap'>
        <div className='search'>
            <input
                type="search"
                placeholder='search...'
                autoFocus id="search"
                className='searchTerm'
                value={searchValue}
                onChange={(e)=>setSearchValue(e.target.value)}
            />
            <button className='searchButton' type="button" onClick={getWeatherInfo}>Search</button>
        </div>
      </div>

      <WeatherCard tempInfo={tempInfo}/>
    </>
  )
}

export default Temp