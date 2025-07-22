// frontend/src/Signin.js
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function Signin() {
  const [email, setEmail]       = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res   = await fetch("http://localhost:3000/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      const data = await res.json();
      
      if (res.ok && data.redirect) navigate(data.redirect);
      else alert(data.message || "Login failed");
    } catch (err) {
      alert("Server error");
    }
  };

  return (
    <div className="auth-card">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button>Login</button>
      </form>
      <p>Don’t have an account? <Link to="/signup">Sign up</Link></p>
    </div>
  );
}

export default Signin;
