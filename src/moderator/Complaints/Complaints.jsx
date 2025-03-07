import React from "react";
import { useNavigate } from "react-router-dom";
import "../../css/modstyle.css";
import "../../css/Complaints.css";

const complaints = [
  {
    id: 1,
    Complainant: { id: 1, ad: "Ahmet Yılmaz", image: "/a.png" },
    complainedPerson: { id: 2, ad: "Ayşe Demir", image: "/b.png" },
    reason: "Sending inappropriate messages",
  },
  {
    id: 2,
    Complainant: { id: 1, ad: "Mehmet Kaya", image: "/a.png" },
    complainedPerson: { id: 3, ad: "Elif Çelik", image: "/a.png" },
    reason: "Disturbing behavior",
  },
];

const Complaints = () => {
  const navigate = useNavigate();

  return (
    <div className="complaints-container">
    {complaints.map((complaint) => (
      <div
        key={complaint.id}
        className="complaint-box"
        onClick={() => navigate(`/complaints/${complaint.id}`)}
      >
        <div
          className="user-info"
          onClick={(e) => {
            e.stopPropagation(); // Şikayet sayfasına gitmesini engelle
            navigate(`/profile/${complaint.Complainant.id}`);
          }}
        >
          <img
            src={complaint.Complainant.image}
            alt={complaint.Complainant.ad}
            className="profile-pic"
          />
          <span className="username">{complaint.Complainant.ad}</span>
        </div>
        <span className="complaint-text">➜</span>
        <div
          className="user-info"
          onClick={(e) => {
            e.stopPropagation(); // Şikayet sayfasına gitmesini engelle
            navigate(`/profile/${complaint.complainedPerson.id}`);
          }}
        >
          <img
            src={complaint.complainedPerson.image}
            alt={complaint.complainedPerson.ad}
            className="profile-pic"
          />
          <span className="username">{complaint.complainedPerson.ad}</span>
        </div>
        <p className="complaint-reason">{complaint.reason}</p>
      </div>
    ))}
  </div>
  );
};

export default Complaints;
