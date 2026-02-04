import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import OperationsPage from './pages/OperationsPage';
import SustainabilityPage from './pages/SustainabilityPage';
import Footer from './components/Footer';
import logo from '../asset/Logo-backeraser.png';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col font-sans antialiased text-gray-900">
        {/* Navbar */}
        <nav className="bg-white py-6 border-b border-gray-100 sticky top-0 z-50">
          <div className="container mx-auto px-6 flex justify-between items-center">
            <a href="/" className="text-2xl font-black text-deep-navy tracking-tighter">
              <img src={logo} alt="Logo" className="h-10 w-auto object-contain" />
            </a>
            <div className="hidden md:flex space-x-8 font-medium text-gray-600">
              <a href="/" className="hover:text-electric-blue transition">Home</a>
              <a href="/about" className="hover:text-electric-blue transition">About</a>
              <a href="/operations" className="hover:text-electric-blue transition">Operations</a>
              <a href="/sustainability" className="hover:text-electric-blue transition">Sustainability</a>
            </div>
          </div>
        </nav>

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/operations" element={<OperationsPage />} />
            <Route path="/sustainability" element={<SustainabilityPage />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;