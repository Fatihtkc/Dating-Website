import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import "./css/Manager.css";

const initialEmployees = [
  {
    id: 1,
    photo: "a.png",
    fullName: "Ahmet Yılmaz",
    email: "ahmet@example.com",
    phone: "0555 123 45 67",
    birthdate: "1985-03-15",
    startdate: "2010-06-01",
    role: "manager",
  },
  {
    id: 2,
    photo: "b.png",
    fullName: "Ayşe Demir",
    email: "ayse@example.com",
    phone: "0555 765 43 21",
    birthdate: "1990-07-22",
    startdate: "2015-02-10",
    role: "moderator",
  },
];

const ManagerPage = () => {
  const location = useLocation();
  const menuRef = useRef(null);
  const navigate = useNavigate();
  const [employees, setEmployees] = useState(initialEmployees);
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedId, setExpandedId] = useState(null);
  const [editData, setEditData] = useState({});
  const [menuAcik, setMenuAcik] = useState(false);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const toggleExpand = (id) => {
    if (expandedId === id) {
      setExpandedId(null);
      setEditData({});
    } else {
      setExpandedId(id);
      const employee = employees.find((emp) => emp.id === id);
      setEditData({ ...employee });
    }
  };

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditData({ ...editData, [name]: value });
  };

  const handleSave = (id) => {
    setEmployees(
      employees.map((emp) =>
        emp.id === id ? { ...emp, ...editData } : emp
      )
    );
    setExpandedId(null);
    setEditData({});
  };

  const handleCancel = () => {
    setExpandedId(null);
    setEditData({});
  };

  const filteredEmployees = employees.filter((emp) =>
    emp.fullName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleLogout = () => {
      navigate("/login");
    };
  
    const handleLogoClick = () => {
      navigate("/index");
    };
  
    useEffect(() => {
      const handleClickOutside = (event) => {
        if (menuRef.current && !menuRef.current.contains(event.target)) {
          setMenuAcik(false);
        }
      };
  
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, []);

  return (
    <>
    <header className="header">
      <div className="header-left">
        <div className="logo">
          <h1 className="logo-text" onClick={handleLogoClick} style={{ cursor: "pointer" }}>SoulM</h1>
        </div>
      </div>
      <div className="header-right" ref={menuRef}>
        <button className="profile-button" onClick={() => setMenuAcik(!menuAcik)}>
          Profile ▼
        </button>
        {menuAcik && (
          <div className="dropdown-menu">
            <Link to="/profilePageForMod" className="dropdown-item">View Profile</Link>
            <button className="dropdown-item logout" onClick={handleLogout}>
              Logout
            </button>
          </div>
        )}
      </div>
    </header>
    <div className="manager-page-container">
      <h1 className="manager-page-title">Employee Management</h1>
      {/* Arama Kutusu */}
      <div className="search-container">
        <input
          type="text"
          placeholder="Search by name..."
          value={searchQuery}
          onChange={handleSearchChange}
          className="search-input"
        />
      </div>

      {/* Header Satırı */}
      <div className="employee-header">
        <span className="header-fullname">Full Name</span>
        <span className="header-email">Email</span>
        <span className="header-phone">Phone No</span>
        <span className="header-birthdate">Birth Date</span>
        <span className="header-startdate">Start Date</span>
        <span className="header-role">Role</span>
      </div>

      {/* Çalışan Listesi */}
      <div className="employee-list">
        {filteredEmployees.map((emp) => (
          <div key={emp.id} className="employee-card">
            <div
              className="employee-summary"
              onClick={() => toggleExpand(emp.id)}
            >
              <img
                src={emp.photo}
                alt={emp.fullName}
                className="employee-photo"
              />
              <div className="employee-info">
                <span className="info-fullname">{emp.fullName}</span>
                <span className="info-email">{emp.email}</span>
                <span className="info-phone">{emp.phone}</span>
                <span className="info-birthdate">{emp.birthdate}</span>
                <span className="info-startdate">{emp.startdate}</span>
                <span className="info-role">{emp.role}</span>
              </div>
            </div>
            {expandedId === emp.id && (
              <div className="employee-edit">
                <div className="edit-row">
                  <label>Full Name:</label>
                  <input
                    type="text"
                    name="fullName"
                    value={editData.fullName || ""}
                    onChange={handleEditChange}
                  />
                </div>
                <div className="edit-row">
                  <label>Email:</label>
                  <input
                    type="email"
                    name="email"
                    value={editData.email || ""}
                    onChange={handleEditChange}
                  />
                </div>
                <div className="edit-row">
                  <label>Phone:</label>
                  <input
                    type="text"
                    name="phone"
                    value={editData.phone || ""}
                    onChange={handleEditChange}
                  />
                </div>
                <div className="edit-row">
                  <label>Birth Date:</label>
                  <input
                    type="date"
                    name="birthdate"
                    value={editData.birthdate || ""}
                    onChange={handleEditChange}
                  />
                </div>
                <div className="edit-row">
                  <label>Start Date:</label>
                  <input
                    type="date"
                    name="startdate"
                    value={editData.startdate || ""}
                    onChange={handleEditChange}
                  />
                </div>
                <div className="edit-row">
                  <label>Role:</label>
                  <select
                    name="role"
                    value={editData.role || ""}
                    onChange={handleEditChange}
                  >
                    <option value="manager">Manager</option>
                    <option value="moderator">Moderator</option>
                  </select>
                </div>
                <div className="edit-buttons">
                  <button onClick={() => handleSave(emp.id)} className="save-button">
                    Save
                  </button>
                  <button onClick={handleCancel} className="cancel-button">
                    Cancel
                  </button>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
    <div className="footer-summary2">
        &copy; SoulM.com | Designed by Group 19
     </div>
    </>
  );
};

export default ManagerPage;