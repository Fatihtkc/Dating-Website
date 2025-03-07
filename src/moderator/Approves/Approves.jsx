import React from "react";
import { useNavigate } from "react-router-dom";

const ProfilKarti = ({ id, image, nameSurname, email, phone }) => {
  const navigate = useNavigate();

  // Kartın tamamına tıklayınca profile yönlendirir.
  const handleCardClick = () => {
    navigate(`/profile/${id}`);
  };

  // Onay butonuna tıklanınca
  const handleApprove = (e) => {
    e.stopPropagation(); // Kartın tıklanmasını engelle
    // Onaylama işlemi (API çağrısı veya state güncellemesi) yapılabilir.
    console.log("Approve Profile:", id);
  };

  // Sil butonuna tıklanınca
  const handleDelete = (e) => {
    e.stopPropagation(); // Kartın tıklanmasını engelle
    // Silme işlemi (API çağrısı veya state güncellemesi) yapılabilir.
    console.log("Delete Profile:", id);
  };

  return (
    <div className="profil-karti" onClick={handleCardClick}>
      <img src={image} alt={nameSurname} className="profil-resim" />
      <div className="profil-bilgi">
        <h3>{nameSurname}</h3>
        <p>Email: {email}</p>
        <p>Phone No: {phone}</p>
      </div>
      <div className="profil-buttons">
        <button className="approve-button" onClick={handleApprove}>
          Approve
        </button>
        <button className="delete-button" onClick={handleDelete}>
          Delete
        </button>
      </div>
    </div>
  );
};

const Approves = () => {
  const profiller = [
    { id: 1, image: "/a.png", nameSurname: "Ahmet Yılmaz", email: "ahmet@example.com", phone: "0555 123 45 67" },
    { id: 2, image: "/b.png", nameSurname: "Ayşe Demir", email: "ayse@example.com", phone: "0555 765 43 21" },
    { id: 1, image: "/a.png", nameSurname: "Ali Korkmaz", email: "ali@example.com", phone: "0555 987 65 43" },
    { id: 2, image: "/b.png", nameSurname: "Zeynep Şahin", email: "zeynep@example.com", phone: "0555 654 32 10" },
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
