import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import PageLoader from './components/PageLoader';
import AnalyticsTracker from './components/AnalyticsTracker';
import { CurrencyProvider } from './context/CurrencyContext';
import Home from './pages/Home';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import About from './pages/About';
import Careers from './pages/Careers';
import Pricing from './pages/Pricing';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

function App() {
  return (
    <CurrencyProvider>
    <BrowserRouter>
      <AnalyticsTracker />
      <PageLoader />
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-white text-[#0B0B0F]">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/about" element={<About />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
    </CurrencyProvider>
  );
}

export default App;

