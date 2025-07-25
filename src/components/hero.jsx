import './Hero.css';

function Hero() {
  return (
    <section className="hero">
      <h1>Over 10,000+ jobs to apply</h1>
      <p>Your Next Big Career Move Starts Right Here.</p>
      <div className="search-box">
        <input type="text" placeholder="Search for jobs..." />
        <input type="text" placeholder="Location" />
        <button>Search</button>
      </div>
      <div className="trusted-by">
        <span>Trusted by</span>
        <img src="https://cdn-icons-png.flaticon.com/512/732/732221.png" alt="Microsoft" />
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Walmart_logo.svg/1200px-Walmart_logo.svg.png" alt="Walmart" />
        <img src="https://upload.wikimedia.org/wikipedia/commons/3/33/Accenture.svg" alt="Accenture" />
      </div>
    </section>
  );
}

export default Hero;
