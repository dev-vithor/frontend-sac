import '../styles/login.scss';

import { useState } from 'react';

import { useNavigate } from 'react-router-dom';

import LoadingSpinner from '../components/loadingSpinner';
import { login } from '../services/authService';

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async e => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await login(email, password);
      if (response.success) {
        setLoading(false);
        navigate("/dashboard");
      }
    } catch (err) {
      setLoading(false);
      setError(err);
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <p>APP SAC</p>
        <form onSubmit={handleLogin}>
          <div className="input-group">
            <input
              type="email"
              placeholder="Email or Phone"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </div>
          <div className="input-group">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
          </div>
          {error && <p className="error-message">{error}</p>}
          <button type="submit" className="login-button" disabled={loading}>
            {loading ? <LoadingSpinner /> : "Sign in"}
          </button>
        </form>
        <div className="forgot-password">
          <a href="#">Forgot password?</a>
        </div>
        <div className="signup">
          Não conseguiu fazer o login?<a href="#"> Contate a TI</a>
        </div>
      </div>
    </div>
  );
}

export default Login;
