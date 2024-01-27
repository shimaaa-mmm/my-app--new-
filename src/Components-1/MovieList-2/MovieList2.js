import { Fragment, useEffect, useState } from "react";
import api from "../../utils/api";
import { Link } from "react-router-dom";

export default function MovieList2({ urlServer }) {
  const [movie, setMovie] = useState({
    data: [],
    metadata: {
      current_page: 1,
      per_page: 2,
      page_count: 25,
      total_count: 250,
    },
  });
  useEffect(() => {
    getApi();
  }, []);
  async function getApi() {
    try {
      const response = await api.get(urlServer);
      setMovie(response.data);
    } catch (error) {}
  }

  function renderMovie() {
    return movie.data.map(({ title, poster, id }) => {
      return (
        <li>
          <img src={poster} />
          <Link to={`/m/${id}`}>
            <h2>{title}</h2>
          </Link>
        </li>
      );
    });
  }

  return (
    <Fragment>
      <div className="container">
        <ul className="flex-x gap-10">{renderMovie()}</ul>
      </div>
    </Fragment>
  );
}
