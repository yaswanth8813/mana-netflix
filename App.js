import React from "react";
import ROW from "./Row";
import requests from "./requests";
import Row from "./Row";
import Banner from './banner';
import Navbar from "./Nav"
import './index.css';
function App() {
  return (
    <div className="App">
         <Navbar></Navbar>
         <Banner></Banner>
          <ROW title="Netflix Originals" fetchURL={requests.fetchNetflixOriginals} islarge={true}/>
          <ROW title="Trending Now" fetchURL={requests.fetchTrending}/>
          <ROW title="Top Rated" fetchURL={requests.fetchTopRated}/>
          <ROW title="Action Movies" fetchURL={requests.fetchActionMovies}/>
          <ROW title="Comedy Movies" fetchURL={requests.fetchComedyMovies}/>
          <ROW title="Horror Movies" fetchURL={requests.fetchHorrorMovies}/>
          <ROW title="Romance Movies" fetchURL={requests.fetchRomanceMovies}/>
          <ROW title="Documentaries" fetchURL={requests.fetchDocumentaries}/>
          <Row title="Action Movies" fetchURL={requests.fetchActionMovies}/>
    </div>
  );
}
//48d8bee384ee8c98a9d7d9b550cd504f
//https://api.themoviedb.org/3/movie/550?api_key=48d8bee384ee8c98a9d7d9b550cd504f
export default App;
