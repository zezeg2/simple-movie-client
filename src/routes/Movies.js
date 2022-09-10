import { gql, useApolloClient } from "@apollo/client";
import { useEffect, useState } from "react";

export default function Movies() {
  const [movies, setMovies] = useState([]);
  const client = useApolloClient();
  useEffect(() => {
    client
      .query({
        query: gql`
          {
            allMovies {
              id
              title
            }
          }
        `,
      })
      .then((results) => setMovies(results.data.allMovies));
  }, [client]);
  console.log(movies);
  return (
    <div>
      {movies.map((movie) => {
        <li key={movie.id}>{movie.title}</li>;
      })}
    </div>
  );
}
