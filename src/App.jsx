import React from 'react';
    import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
    import CRM from './components/CRM';
    import Marketing from './components/Marketing';
    import Sales from './components/Sales';
    import LandingPage from './components/LandingPage';
    import PricingPage from './components/PricingPage';

    function App() {
      return (
        <Router>
          <div>
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/pricing" element={<PricingPage />} />
              <Route path="/crm" element={<CRM />} />
              <Route path="/marketing" element={<Marketing />} />
              <Route path="/sales" element={<Sales />} />
            </Routes>
          </div>
        </Router>
      );
    }

    export default App;
