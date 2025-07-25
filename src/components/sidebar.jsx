import './Sidebar.css';

function Sidebar() {
  return (
    <div className="sidebar">
      <h3>Search by Categories</h3>
      <label><input type="checkbox" /> Programming</label>
      <label><input type="checkbox" /> Marketing</label>
      <label><input type="checkbox" /> Designing</label>
      <label><input type="checkbox" /> Accounting</label>
      <label><input type="checkbox" /> Analytics</label>

      <h3>Search by Location</h3>
      <label><input type="checkbox" /> California</label>
      <label><input type="checkbox" /> New York</label>
      <label><input type="checkbox" /> Remote</label>
      <label><input type="checkbox" /> Bangalore</label>
    </div>
  );
}

export default Sidebar;
