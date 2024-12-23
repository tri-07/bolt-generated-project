import React from 'react';
    import Navbar from './Navbar';

    function LandingPage() {
      return (
        <div>
          <Navbar />
          <header className="hero-section">
            <h1>Grow Better With TriWare</h1>
            <p>Marketing, sales, and service software that helps your business grow without compromise. Because "good for the business" should also mean "good for the customer."</p>
            <button className="start-free-btn">Start Free or Get a Demo</button>
          </header>
          <section className="hubs-section">
            <div className="hub-card">
              <h3>Marketing Hub</h3>
              <p>Marketing software to help you grow traffic, convert more visitors, and run complete inbound marketing campaigns at scale.</p>
              <a href="#">Learn More</a>
            </div>
            <div className="hub-card">
              <h3>Sales Hub</h3>
              <p>Sales CRM software to help you get deeper insights into prospects, automate tasks, and close more deals faster.</p>
              <a href="#">Learn More</a>
            </div>
            <div className="hub-card">
              <h3>Service Hub</h3>
              <p>Customer service software to help you connect with customers, exceed expectations, and turn them into promoters.</p>
              <a href="#">Learn More</a>
            </div>
          </section>
        </div>
      );
    }

    export default LandingPage;
