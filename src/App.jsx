import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './pages/dashboard';
import Login from './pages/login';
import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/frontend-sac/" element={<Login />} />
        <Route path="/frotend-sac/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
