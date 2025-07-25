import './JobCard.css';

function JobCard({ title, company, location, description, logo }) {
  return (
    <div className="job-card">
      <img src={logo} alt="logo" />
      <h3>{title}</h3>
      <p>{location}</p>
      <p>{description}</p>
      <div className="job-actions">
        <button>Apply now</button>
        <button className="secondary">Learn more</button>
      </div>
    </div>
  );
}

export default JobCard;
