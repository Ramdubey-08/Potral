import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <nav>
      <Link to="/dashboard">Dashboard</Link>
      <Link to="/leaderboard">Leaderboard</Link>
    </nav>
  );
}
