import { useEffect, useState } from "react";
import axios from "axios";

export default function Leaderboard() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/intern/leaderboard")
      .then(res => setUsers(res.data));
  }, []);

  return (
    <div className="container">
      <h2>Leaderboard</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Referral Code</th>
            <th>Donations Raised</th>
          </tr>
        </thead>
        <tbody>
          {users.map((u, i) => (
            <tr key={i}>
              <td>{u.name}</td>
              <td>{u.code}</td>
              <td>₹{u.donations}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
