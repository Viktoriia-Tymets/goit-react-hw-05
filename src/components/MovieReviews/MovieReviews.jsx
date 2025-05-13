import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function MovieReviews() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${movieId}/reviews`, {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1YjZiMzJlMzRjZWFmZGMzZDlhMmYyYmU5ODgxNjI0ZCIsIm5iZiI6MTc0NzE1MzkzOC40Niwic3ViIjoiNjgyMzc0MTJjZTgxYTNhOWYxNmVlYWU4Iiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.M59-mpD1noJzWp8F0ZVaGU6WN50UrjSSxdSe9Gg7jSU",
      },
    })
      .then((res) => res.json())
      .then((data) => setReviews(data.results));
  }, [movieId]);

  if (reviews.length === 0) return <p>No reviews at the moment</p>;

  return (
    <ul>
      {reviews.map((review) => (
        <li key={review.id}>
          <strong>{review.author}:</strong>
          <p>{review.content}</p>
        </li>
      ))}
    </ul>
  );
}
