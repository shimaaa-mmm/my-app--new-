import { Fragment, useEffect, useState } from "react";
import api from "../../utils/api";
import { useParams } from "react-router-dom";
import "./SingleMovie.css";

export default function SingleMovie() {
  const { id } = useParams();
  const [item, setItem] = useState({});
  useEffect(() => {
    singleMovie();
  }, []);

  async function singleMovie() {
    try {
      const res = await api.get(`movies/${id}`);
      setItem(res.data);
      console.log(res);
    } catch (error) {
      //   console.log(error);
    }
  }
  return (
    <Fragment>
      <div className="container ">
        <div className="holder-flex ">
        <img className="single-movie films" src={item.poster} />
        <div className="parent">
        <h4  className="titr text">{item.id}</h4>
          <h1 className="titr text">{item.title}</h1>
          <h4 className="titr text">{item.year}</h4>
          <h4 className="titr text">{item.released}</h4>
          <h4 className="titr text">{item.director}</h4>
          <h4 className="titr text">{item.actors}</h4>
          <h7 className="titr text">{item.country}</h7>
          <a className="titr text color" href={`https://www.imdb.com/title/${item.imdb_id}`}>go on imdb</a>
          <h7 className="titr text">{item.type}</h7>
          <h4 className="titr text">{item.genres}</h4>    </div>      
        </div>
      </div>
    </Fragment>
  );
}
