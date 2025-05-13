import { useEffect, useState } from "react";
import MovieList from "../../components/MovieList/MovieList";

export default function MoviesPage() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);

  const handleSearch = (e) => {
    e.preventDefault();
    fetch(`https://api.themoviedb.org/3/search/movie?query=${query}`, {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1YjZiMzJlMzRjZWFmZGMzZDlhMmYyYmU5ODgxNjI0ZCIsIm5iZiI6MTc0NzE1MzkzOC40Niwic3ViIjoiNjgyMzc0MTJjZTgxYTNhOWYxNmVlYWU4Iiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.M59-mpD1noJzWp8F0ZVaGU6WN50UrjSSxdSe9Gg7jSU",
      },
    })
      .then((res) => res.json())
      .then((data) => setMovies(data.results));
  };

  return (
    <div>
      <h1>BEST MOVIES FOR EVENING</h1>
      <form onSubmit={handleSearch}>
        <input value={query} onChange={(e) => setQuery(e.target.value)} />
        <button type="submit">Search</button>
      </form>
      <MovieList movies={movies} />
    </div>
  );
}
