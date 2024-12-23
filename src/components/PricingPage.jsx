import React from 'react';
    import Navbar from './Navbar';

    function PricingPage() {
      return (
        <div className="pricing-page-container">
          <Navbar />
          <div className="pricing-page">
            <h1>Choose Your Plan</h1>
            <p className="pricing-subtitle">Flexible plans to fit your needs.</p>
            <div className="pricing-container">
              <div className="pricing-card">
                <h3>Basic</h3>
                <div className="price">$0<span className="period">/month</span></div>
                <p>Free forever</p>
                <ul className="features">
                  <li>Basic CRM</li>
                  <li>Email Marketing</li>
                  <li>Contact Management</li>
                </ul>
                <button className="select-plan-btn">Select Plan</button>
              </div>
              <div className="pricing-card pro">
                <h3>Pro</h3>
                <div className="price">$50<span className="period">/month</span></div>
                <p>For growing teams</p>
                <ul className="features">
                  <li>All Basic features</li>
                  <li>Advanced CRM</li>
                  <li>Marketing Automation</li>
                  <li>Sales Analytics</li>
                </ul>
                <button className="select-plan-btn">Select Plan</button>
              </div>
              <div className="pricing-card business">
                <h3>Business</h3>
                <div className="price">$150<span className="period">/month</span></div>
                <p>For large organizations</p>
                <ul className="features">
                  <li>All Pro features</li>
                  <li>Custom Integrations</li>
                  <li>Dedicated Support</li>
                  <li>Advanced Reporting</li>
                </ul>
                <button className="select-plan-btn">Select Plan</button>
              </div>
            </div>
          </div>
        </div>
      );
    }

    export default PricingPage;
