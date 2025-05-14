import { useEffect, useState } from "react";
import MovieList from "../../components/MovieList/MovieList";

export default function HomePage() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/popular`, {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1YjZiMzJlMzRjZWFmZGMzZDlhMmYyYmU5ODgxNjI0ZCIsIm5iZiI6MTc0NzE1MzkzOC40Niwic3ViIjoiNjgyMzc0MTJjZTgxYTNhOWYxNmVlYWU4Iiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.M59-mpD1noJzWp8F0ZVaGU6WN50UrjSSxdSe9Gg7jSU",
      },
    })
      .then((res) => res.json())
      .then((data) => setMovies(data.results));
  }, []);

  return (
    <div>
      <h1>Trending today...</h1>
      <MovieList movies={movies} />
    </div>
  );
}
