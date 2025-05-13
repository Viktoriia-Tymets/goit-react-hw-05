import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <div>
      <h2>The page was not found</h2>
      <Link to="/">Back to Home Page</Link>
    </div>
  );
}
