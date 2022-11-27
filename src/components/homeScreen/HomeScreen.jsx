import React from "react";
import Nav from "../nav/Nav";
import Banner from "../banner/Banner";
import "./homescreen.css";
import request from "../../request";
import Row from "../rows/Row";

export default function HomeScreen() {
  return (
    <div className="homeScreen">
      <Nav />
      <Banner />
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={request.netflixOriginals}
        isLargeRow
      />
      <Row title="Trending Now" fetchUrl={request.trending} />
      <Row title="Top Rated" fetchUrl={request.topRated} />
      <Row title="Action Movies" fetchUrl={request.actionMovies} />
      <Row title="Comedy Movies" fetchUrl={request.comedyMovies} />
      <Row title="Horror Movies" fetchUrl={request.horrorMovies} />

      <Row title="Romance Movies" fetchUrl={request.romanceMovies} />
      <Row title="Documentaries" fetchUrl={request.documentaries} />
    </div>
  );
}
