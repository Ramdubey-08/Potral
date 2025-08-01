import { useEffect, useState } from "react";
import axios from "axios";
import Rewards from "../components/Rewards";

export default function Dashboard() {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:5000/api/intern/dashboard")
      .then(res => setData(res.data));
  }, []);

  if (!data) return <b>Loading...</b>;

  return (
    <div className="container">
      <h1>Welcome, {data.name}!</h1>
      <p><b>Referral Code:</b> {data.referral}</p>
      <p><b>Total Donations Raised:</b> ₹{data.totalDonations}</p>
      <Rewards rewards={data.rewards} />
    </div>
  );
}
