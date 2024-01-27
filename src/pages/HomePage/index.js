import { Fragment, useEffect, useState } from "react";
import "./HomePage.css";
import Header from "../../Components-1/Header/Header";
import MovieList2 from "../../Components-1/MovieList-2/MovieList2";

export default function HomePage() {
  return (
    <Fragment>
      <Header />
      <h3>ویژه ها</h3>
       <br></br>
      <MovieList2 urlServer={`/movies?page=1`} />
      <br></br>
      <MovieList2 urlServer={`/movies?page=4`} />
      <h3> سریال</h3>
      <MovieList2 urlServer={`/movies?page=8`} />
      <br></br>
      <MovieList2 urlServer={`/movies?page=9`} />
      <h3> قدیمی</h3>
      <MovieList2 urlServer={`/movies?page=15`} />
    </Fragment>
  );
}
// hame faghat mohtaye objecthaaaa fargh dare . momke adarse interneti fargh kone
////maute lishe  dovom dar safhe movielist
//////  // dar homepage movielist ra call kardim va be mahza in ke movielist namayesh dade beshe
