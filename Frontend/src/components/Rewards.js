export default function Rewards({ rewards }) {
  return (
    <div className="container">
      <h3>Rewards & Unlockables</h3>
      <ul>
        {rewards.map((reward, idx) => (
          <li key={idx}>
            <strong>{reward.title}: </strong>{reward.desc}
          </li>
        ))}
      </ul>
    </div>
  );
}
