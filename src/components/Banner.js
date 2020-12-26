import React,{useEffect,useState} from 'react'
import "../styles/Banner.css"
import axios from "../axios"
import requests from "../requests"


function Banner() {

    const[movie,setMovie]=useState([])

useEffect(()=>{
    async function fetchdata(){
        const request=await axios.get(`${requests.fetchNetflixOriginals}`);
        setMovie(request.data.results[Math.floor(Math.random()*request.data.results.length-1)]);
        return request;
    }
   fetchdata();

},[])

    return (
        <header className="banner" style={{ 
            backgroundSize:"cover",
        backgroundImage:`url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundPosition:"center center",
        }}>
            <div className="banner__contents">
                <div className="banner__title">
                {movie?.title||movie?.name||movie?.original_name}    
                </div>
                <div className="banner__info">
                <h2 className="banner__description">{movie?.overview}</h2>         
                </div>
            </div>
            <div className="banner--fadeBottom" />
        </header>
    )
}

export default Banner
