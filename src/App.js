// App.js
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import LandingSection from './pages/LandingSection';
import RegistrationPage from './pages/RegistrationPage';
import Services from './pages/Services';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/register" element={<RegistrationPage />} />

        <Route
          path="*"
          element={
            <>
              <Header />
              <Routes>
                {/* <Route  path="/" element={<LandingSection/>} /> */}
                {/* <Route path="/services" element={<Services />} /> */}
              </Routes>
            </>
          }
        />

      </Routes>
    </Router>
  );
}

export default App;

