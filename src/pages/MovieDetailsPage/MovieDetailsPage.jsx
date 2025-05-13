import { useEffect, useState } from "react";
import {
  useParams,
  useLocation,
  useNavigate,
  Link,
  Outlet,
} from "react-router-dom";

export default function MovieDetailsPage() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();

  const backLink = location.state?.from || "/movies";

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${movieId}`, {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1YjZiMzJlMzRjZWFmZGMzZDlhMmYyYmU5ODgxNjI0ZCIsIm5iZiI6MTc0NzE1MzkzOC40Niwic3ViIjoiNjgyMzc0MTJjZTgxYTNhOWYxNmVlYWU4Iiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.M59-mpD1noJzWp8F0ZVaGU6WN50UrjSSxdSe9Gg7jSU",
      },
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch movie details");
        }
        return res.json();
      })
      .then(setMovie)
      .catch((err) => setError(err.message));
  }, [movieId]);

  if (error) return <p>Error: {error}</p>;
  if (!movie) return <p>Loading...</p>;

  const imageUrl = movie.poster_path
    ? `https://image.tmdb.org/t/p/w780${movie.poster_path}`
    : null;

  return (
    <div>
      <button onClick={() => navigate(backLink)}>Back</button>
      <h2>{movie.title}</h2>

      {imageUrl && <img src={imageUrl} alt={movie.title} width="400" />}

      <p>{movie.overview}</p>

      <nav>
        <Link to="cast" state={{ from: backLink }}>
          Actors
        </Link>{" "}
        |{" "}
        <Link to="reviews" state={{ from: backLink }}>
          Reviews
        </Link>
      </nav>
      <Outlet />
    </div>
  );
}
