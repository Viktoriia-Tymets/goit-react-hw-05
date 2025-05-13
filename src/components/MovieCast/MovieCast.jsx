import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function MovieCast() {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${movieId}/credits`, {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1YjZiMzJlMzRjZWFmZGMzZDlhMmYyYmU5ODgxNjI0ZCIsIm5iZiI6MTc0NzE1MzkzOC40Niwic3ViIjoiNjgyMzc0MTJjZTgxYTNhOWYxNmVlYWU4Iiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.M59-mpD1noJzWp8F0ZVaGU6WN50UrjSSxdSe9Gg7jSU",
      },
    })
      .then((res) => res.json())
      .then((data) => setCast(data.cast));
  }, [movieId]);

  return (
    <ul>
      {cast.map((actor) => (
        <li key={actor.cast_id}>
          {actor.name} — {actor.character}
        </li>
      ))}
    </ul>
  );
}
