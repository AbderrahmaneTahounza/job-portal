import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/navbar';
import Hero from './components/hero';
import Sidebar from './components/sidebar';
import JobCard from './components/jobcard';
import Register from './components/register';
import RecruiterLogin from './components/recruiterlogin';

import './App.css';

const API = import.meta.env.VITE_API_URL;

function Home() {
  const jobs = [
    {
      title: "Full Stack Developer",
      company: "Slack",
      location: "California | Remote",
      description: "You will be responsible for frontend and backend development tasks.",
      logo: "https://cdn-icons-png.flaticon.com/512/2111/2111615.png"
    },
    {
      title: "UI/UX Designer",
      company: "Google",
      location: "New York | Hybrid",
      description: "Design intuitive interfaces and improve user experience.",
      logo: "https://cdn-icons-png.flaticon.com/512/5968/5968841.png"
    },
    {
      title: "Data Analyst",
      company: "Python",
      location: "Remote | Full-time",
      description: "Analyze and interpret data to guide business decisions.",
      logo: "https://cdn-icons-png.flaticon.com/512/5968/5968350.png"
    }
  ];

  return (
    <>
      <Hero />
      <div className="main-content">
        <Sidebar />
        <div className="jobs-section">
          <h2>Latest jobs</h2>
          <div className="jobs-grid">
            {jobs.map((job, index) => (
              <JobCard key={index} {...job} />
            ))}
          </div>
          <div className="pagination">
            <button>{"<"}</button>
            <button className="active">1</button>
            <button>2</button>
            <button>3</button>
            <button>{">"}</button>
          </div>
        </div>
      </div>
    </>
  );
}

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/recruiter-login" element={<RecruiterLogin />} />
      </Routes>
    </Router>
  );
}

export default App;
