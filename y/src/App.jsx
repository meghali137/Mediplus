import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Signup from './Components/Authentication/signup';
import Login from './Components/Authentication/login';
import Landing from './Components/Landing/landing';
import Navbar from './Components/navbar';
import Header from './Components/Landing/header';
import Footer from './Components/footer';

const App = () => {
  const current_theme = localStorage.getItem('current_theme');
  const [theme, setTheme] = useState(current_theme ? current_theme : 'light');

  useEffect(() => {
      localStorage.setItem('current_theme', theme);
  }, [theme])
  return (
    <div className={`main ${theme}`}>
            <Navbar theme={theme} setTheme={setTheme} />
      {/* Navbar should always be visible */}
      <Header />
      <Routes>
        <Route path="/landing" element={<Landing />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/navbar" element={<Navbar />} />
      </Routes>

      {/* Footer should always be visible */}
      <Footer />
    </div>
  );
};

export default App;
