import React, { useEffect, useState } from 'react'
import './Banner.css';
import requests from './requests';
import axios from './axios';
const Banner = () => {
    
const [banner,setbanner]=useState([]);
 useEffect(()=>{
    async function fetchData(){
        const request = await axios.get(requests.fetchNetflixOriginals);
        setbanner(request.data.results[Math.floor(Math.random() * request.data.results.length - 1)]);
        return request;
    }
    fetchData();
 },[]);
  function truncate(str,n){
    return str?.length > n ? str.substr(0,n-1)+"..." : str;
  }
  return (
    <div className='banner'
     style={{
        backgroundsize:"cover",
        backgroundImage:`url("https://image.tmdb.org/t/p/original/${banner?.backdrop_path}")`,
        backgroundPosition:"center center"
     }} 
    >
        <div className='banner_contents'>
        <h1 className='banner_title'>{ banner?.title || banner?.name || banner?.original_name||banner?.original_title}</h1>
        <div className='banner_buttons'>
        <button className='banner_button play'> <i class="material-icons">play_arrow</i>
              <span> PLAY</span></button>
        <button className='banner_button'> <i class="material-icons">add</i>
              <span> MY LIST</span></button>
      </div>
        <h2 className='banner_description' >{truncate(banner?.overview,180)}</h2>
      </div>
      <div className='banner_empty'></div>
    </div>
  )
}

export default Banner;
