
import React from 'react';

const ShowcaseProduct = () => {
  const cards = [
    {
      title: "Reinventing micro-mobility with",
      highlight: "Award winning",
      highlightEnd: "design",
      description: "Our mission is to close the gap between a scooter and a bike. Yoda is the lightest vehicle of its category, designed to be agile and fun for everyone to ride.",
      image: "https://assets-global.website-files.com/65ae37af356fab4845432048/65be0fdac914d702e08f70ed_Yoda-Helmet_1-transcode.mp4"
    },
    {
      title: "Best in class energy management for",
      highlight: "optimal autonomy",
      description: "3 riding modes: 🌱 eco, ⚡️ normal & 🚀 boost - that offer up to 80 km range on one single charge with a swappable battery.",
      image: "https://assets-global.website-files.com/65ae37af356fab4845432048/65ae37af356fab48454320ae_BatteryRemoval_Pingpong_001-transcode.mp4"
    },
    {
      title: "Durable and effortless,",
      highlight: "all the way",
      description: "We spent years crafting Yoda, stripping away unnecessary components to deliver a simple and efficient mobility experience.",
      image: "https://assets-global.website-files.com/65ae37af356fab4845432048/65be104f9aba74d774b7f4a3_Yoda-Exploded-50-transcode.mp4"
    }
  ];

  return (
    <section className="showcase-section">
      <div className="showcase-container">
        <div className="showcase-grid">
          {cards.map((card, index) => (
            <div key={index} className="showcase-card">
              <div className="card-content">
                <h2 className="card-title">
                  {card.title} <span className="highlight-text">{card.highlight}</span>
                  {card.highlightEnd && ` ${card.highlightEnd}`}
                </h2>
                <div className="card-line"></div>
                <p className="card-description">{card.description}</p>
              </div>
              <div className="card-media">
                <video 
                  autoPlay 
                  loop 
                  muted 
                  playsInline
                  className="card-video"
                >
                  <source src={card.image} type="video/mp4" />
                </video>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShowcaseProduct;
