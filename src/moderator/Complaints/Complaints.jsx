import React from "react";
import { useNavigate } from "react-router-dom";
import "../../css/modstyle.css";
import "../../css/Complaints.css";

const complaints = [
  {
    id: 1,
    sikayetEden: { id: 1, ad: "Ahmet Yılmaz", resim: "/a.png" },
    sikayetEdilen: { id: 2, ad: "Ayşe Demirsssssssssssssssssssssssssssssssssssssssssssssssss", resim: "/b.png" },
    neden: "Uygunsuz mesajlar göndermeDemirsssssssssssssssssssssssssssssssssssssssssssssssss",
  },
  {
    id: 2,
    sikayetEden: { id: 1, ad: "Mehmet Kaya", resim: "/a.png" },
    sikayetEdilen: { id: 3, ad: "Elif Çelik", resim: "/a.png" },
    neden: "Rahatsız edici davranış",
  },
];

const Complaints = () => {
  const navigate = useNavigate();

  return (
    <div className="complaints-container">
    {complaints.map((sikayet) => (
      <div
        key={sikayet.id}
        className="complaint-box"
        onClick={() => navigate(`/complaints/${sikayet.id}`)}
      >
        <div
          className="user-info"
          onClick={(e) => {
            e.stopPropagation(); // Şikayet sayfasına gitmesini engelle
            navigate(`/profile/${sikayet.sikayetEden.id}`);
          }}
        >
          <img
            src={sikayet.sikayetEden.resim}
            alt={sikayet.sikayetEden.ad}
            className="profile-pic"
          />
          <span className="username">{sikayet.sikayetEden.ad}</span>
        </div>
        <span className="complaint-text">➜</span>
        <div
          className="user-info"
          onClick={(e) => {
            e.stopPropagation(); // Şikayet sayfasına gitmesini engelle
            navigate(`/profile/${sikayet.sikayetEdilen.id}`);
          }}
        >
          <img
            src={sikayet.sikayetEdilen.resim}
            alt={sikayet.sikayetEdilen.ad}
            className="profile-pic"
          />
          <span className="username">{sikayet.sikayetEdilen.ad}</span>
        </div>
        <p className="complaint-reason">{sikayet.neden}</p>
      </div>
    ))}
  </div>
  );
};

export default Complaints;
