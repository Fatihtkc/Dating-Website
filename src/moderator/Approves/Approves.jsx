import React from "react";
import { useNavigate } from "react-router-dom";

const ProfilKarti = ({ id, resim, adSoyad, email, telefon }) => {
  const navigate = useNavigate();

  // Kartın tamamına tıklayınca profile yönlendirir.
  const handleCardClick = () => {
    navigate(`/profile/${id}`);
  };

  // Onay butonuna tıklanınca
  const handleApprove = (e) => {
    e.stopPropagation(); // Kartın tıklanmasını engelle
    // Onaylama işlemi (API çağrısı veya state güncellemesi) yapılabilir.
    console.log("Profili Onayla:", id);
  };

  // Sil butonuna tıklanınca
  const handleDelete = (e) => {
    e.stopPropagation(); // Kartın tıklanmasını engelle
    // Silme işlemi (API çağrısı veya state güncellemesi) yapılabilir.
    console.log("Profili Sil:", id);
  };

  return (
    <div className="profil-karti" onClick={handleCardClick}>
      <img src={resim} alt={adSoyad} className="profil-resim" />
      <div className="profil-bilgi">
        <h3>{adSoyad}</h3>
        <p>Email: {email}</p>
        <p>Telefon: {telefon}</p>
      </div>
      <div className="profil-buttons">
        <button className="approve-button" onClick={handleApprove}>
          Profili Onayla
        </button>
        <button className="delete-button" onClick={handleDelete}>
          Profili Sil
        </button>
      </div>
    </div>
  );
};

const Approves = () => {
  const profiller = [
    { id: 1, resim: "/a.png", adSoyad: "Ahmet Yılmaz", email: "ahmet@example.com", telefon: "0555 123 45 67" },
    { id: 2, resim: "/b.png", adSoyad: "Ayşe Demir", email: "ayse@example.com", telefon: "0555 765 43 21" },
    { id: 3, resim: "/a.png", adSoyad: "Ali Korkmaz", email: "ali@example.com", telefon: "0555 987 65 43" },
    { id: 4, resim: "/b.png", adSoyad: "Zeynep Şahin", email: "zeynep@example.com", telefon: "0555 654 32 10" },
  ];

  return (
    <div className="profil-listesi">
      {profiller.map((profil) => (
        <ProfilKarti key={profil.id} {...profil} />
      ))}
    </div>
  );
};

export default Approves;
