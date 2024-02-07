import axios from './axios';
import React, { useEffect, useState } from 'react';
import './row.css';
import Youtube from 'react-youtube';
import movieTrailer from 'movie-trailer';
const base_url="https://image.tmdb.org/t/p/original/";
const Row = ({title,fetchURL,islarge}) => {
    const [movies,setMovies] = useState([]);
    const [trailerUrl,settrailerUrl]=useState("");
    useEffect(()=>{
        async function fetchData(){
            const request = await axios.get(fetchURL);
            //console.log(request);
            setMovies(request.data.results);
            return request;
        }
        fetchData();
    },[fetchURL]);
    const opts={
      height: '390',
      width: '100%',
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
      },
    };
      const handleselect=(movie)=>{
        if(trailerUrl){
          settrailerUrl("");
        }else{
          movieTrailer(movie?.name|| movie?.title || movie?.original_name|| movie?.original_title||"")
          .then((url) => {
            const urlParams=new URLSearchParams(new URL(url).search); 
           settrailerUrl(urlParams.get("v"));
           //console.log(trailerUrl);
          }).catch((error) =>
            console.log(error));  
          }
        };
  return (
    <div className='row'>
      <h2>{title}</h2>
      <div className='row_poster'>
       { console.log(movies)}
       {movies.map((movie) => (
        <img className='movie_poster' onClick={()=> handleselect(movie)} src={`${base_url}${islarge? movie.poster_path : movie.backdrop_path}`} alt={movie.title} key={movie.id}/>
       ))}
      </div>
      {trailerUrl && <Youtube videoId={trailerUrl} opts={opts}/> }
    </div>
  )
}

export default Row;
