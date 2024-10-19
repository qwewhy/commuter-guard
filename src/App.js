import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Navigation from './components/Navigation';
import Home from './components/Home';
import AISimulatedCall from './features/AISimulatedCall/AISimulatedCall';
import AutoAlarm from './features/AutoAlarm/AutoAlarm';
import PhoneAlert from './features/PhoneAlert/PhoneAlert';
import About from './components/About';
import Privacy from './components/Privacy';
import './i18n/i18n';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/ai-call" element={<AISimulatedCall />} />
            <Route path="/auto-alarm" element={<AutoAlarm />} />
            <Route path="/phone-alert" element={<PhoneAlert />} />
            <Route path="/about" element={<About />} />
            <Route path="/privacy" element={<Privacy />} />
          </Routes>
        </main>
        <Navigation />
        <Footer />
      </div>
    </Router>
  );
}

export default App;