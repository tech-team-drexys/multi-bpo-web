
import React from 'react';

const ShowcaseProduct = () => {
  return (
    <section className="showcase-section">
      <div className="showcase-container">
        <div className="showcase-grid">
          <div className="showcase-card">
            <div className="card-content">
              <h2 className="card-title">
                Reinventing micro-mobility with <span className="text-accent">Award winning</span> design
              </h2>
              <div className="card-divider"></div>
              <p className="card-description">
                Our mission is to close the gap between a scooter and a bike. Yoda is the lightest vehicle of its category, designed to be agile and fun for everyone to ride.
              </p>
            </div>
          </div>
          
          <div className="showcase-card">
            <div className="card-content">
              <h2 className="card-title">
                Best in class energy management for <span className="text-accent">optimal autonomy</span>
              </h2>
              <div className="card-divider"></div>
              <p className="card-description">
                3 riding modes: 🌱 eco, ⚡️ normal & 🚀 boost - that offer up to 80 km range on one single charge with a swappable battery.
              </p>
            </div>
          </div>
          
          <div className="showcase-card">
            <div className="card-content">
              <h2 className="card-title">
                Durable and effortless, <span className="text-accent">all the way</span>
              </h2>
              <div className="card-divider"></div>
              <p className="card-description">
                We spent years crafting Yoda, stripping away unnecessary components to deliver a <strong>simple</strong> and <strong>efficient</strong> mobility experience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShowcaseProduct;
