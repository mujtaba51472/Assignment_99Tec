import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './sections/dashboard/Dashboard';
import { Login } from './sections/auth/login';
import Register from './sections/auth/register/Register';
import { ProtectedRoute } from './guard/ProtectedRoute';

function App() {
  const user = JSON.parse(localStorage.getItem('user'));
  console.log('usertoken' , user?.token)
  const token = user?.token;

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Register />} />
          <Route path="/login" element={<Login/>} />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute token={token}>
                <Dashboard />
              </ProtectedRoute>
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
