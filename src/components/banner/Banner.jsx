import React, { useEffect, useState } from "react";
import "./banner.css";
import axios from "axios";
import request from "../../request";

export default function Banner() {
  
  const [movie, setMovie] = useState([]);
  useEffect(()=>{
    async function fetchData() {
        const req = await axios.get(request.netflixOriginals);
        setMovie(req.data.results[Math.floor(Math.random() * req.data.results.length - 1)]);
        return req;
    }
    fetchData();
  },[])
  console.log(movie);
  function cutString(string, numForCut) {
    return string?.length > numForCut
      ? string.substr(0, numForCut - 1) + "..."
      : string;
  }
  return (
    <header className="banner" style={{backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`}}>
      <div className="banner__container">
        <h2 className="banner__title">{movie?.title || movie?.name || movie?.original_name}</h2>
        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My List</button>
        </div>
        <h1 className="banner__description">
          {cutString(
            movie?.overview ,200
          )}
        </h1>
      </div>
      <div className="banner__fadeBottom" />
    </header>
  );
}
