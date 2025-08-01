import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  return (
    <div className="container" style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Intern Portal Login</h2>
      <form
        onSubmit={e => {
          e.preventDefault();
          navigate("/dashboard");
        }}
      >
        <input placeholder="Enter email" style={{ margin: 10, width: "80%", padding: "8px" }} /><br />
        <input
          type="password"
          placeholder="Enter password"
          style={{ margin: 10, width: "80%", padding: "8px" }}
        /><br />
        <button type="submit" style={{ width: "90%", padding: "10px", cursor: "pointer" }}>
          Login
        </button>
      </form>
    </div>
  );
}
