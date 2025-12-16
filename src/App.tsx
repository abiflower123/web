import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import WebDesigning from './pages/services/WebDesigning';
import AIMLSolutions from './pages/services/AIMLSolutions';
import StudentProjects from './pages/services/StudentProjects';
import Internship from './pages/services/Internship';
import Courses from './pages/services/Courses';
import ScrollToTop from './components/common/ScrollToTop';
import LoadingScreen from './components/common/LoadingScreen';
import WhatsAppChat from './components/common/WhatsAppChat';
import CustomCursor from './components/common/CustomCursor';
import AnimatedBackground from './components/common/AnimatedBackground';
import { ThemeProvider } from './contexts/ThemeContext';
import FloatingParticles from './components/common/FloatingParticles';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <ScrollToTop />
        <LoadingScreen />
        <CustomCursor />
        <AnimatedBackground />
        <FloatingParticles />
        <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900 transition-colors duration-300">
          <Header />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/services/web-designing" element={<WebDesigning />} />
              <Route path="/services/ai-ml" element={<AIMLSolutions />} />
              <Route path="/services/student-projects" element={<StudentProjects />} />
              <Route path="/services/internship" element={<Internship />} />
              <Route path="/services/courses" element={<Courses />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
          <Footer />
          <WhatsAppChat />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;