import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "../../css/ComplaintDetail.css";

const ComplaintDetail = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const complaint = {
    id: id,
    reason:
      "Bu kullanıcı uygunsuz davranışlar sergiledi ve spam mesajlar gönderiyor. Açıklama detayları burada yer alabilir. (Detaylı açıklama metni...)",
    images: ["/a.png", "/b.png", "/a.png"],
    owner: {
      id: 101,
      name: "Ahmet Yılmaz",
      email: "ahmet@example.com",
      phone: "0555 123 45 67",
      image: "/a.png",
    },
    target: {
      id: 102,
      name: "Ayşe Demir",
      email: "ayse@example.com",
      phone: "0555 765 43 21",
      image: "/b.png",
    },
  };

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openLightbox = (index) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const showPrevImage = (e) => {
    e.stopPropagation();
    setCurrentImageIndex(
      (prev) => (prev - 1 + complaint.images.length) % complaint.images.length
    );
  };

  const showNextImage = (e) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev + 1) % complaint.images.length);
  };

  const handleDeleteComplaint = () => {
    navigate("/complaints");
  };

  const handleBanUser = (e) => {
    e.stopPropagation();
    navigate("/complaints");
  };

  return (
    <div className="complaint-detail-container">
      {/* Sol Bölüm: Bilgiler */}
      <div className="complaint-detail-sidebar">
        <div
          className="complaint-owner-box clickable"
          onClick={() => navigate(`/profile/${complaint.owner.id}`)}
        >
          <h3>Şikayet Sahibi</h3>
          <div className="owner-info">
            <img
              src={complaint.owner.image}
              alt={complaint.owner.name}
              className="profile-pic-square"
            />
            <p>
              <span className="user-info-label">İsim Soyisim:</span>{" "}
              <span className="user-info-value">{complaint.owner.name}</span>
            </p>
            <p>
              <span className="user-info-label">Email:</span>{" "}
              <span className="user-info-value">{complaint.owner.email}</span>
            </p>
            <p>
              <span className="user-info-label">Telefon:</span>{" "}
              <span className="user-info-value">{complaint.owner.phone}</span>
            </p>
          </div>
        </div>
        <div
          className="complaint-target-box clickable"
          onClick={() => navigate(`/profile/${complaint.target.id}`)}
        >
          <h3>Şikayet edilen hesap</h3>
          <div className="target-info">
            <img
              src={complaint.target.image}
              alt={complaint.target.name}
              className="profile-pic-square"
            />
            <p>
              <span className="user-info-label">İsim Soyisim:</span>{" "}
              <span className="user-info-value">{complaint.target.name}</span>
            </p>
            <p>
              <span className="user-info-label">Email:</span>{" "}
              <span className="user-info-value">{complaint.target.email}</span>
            </p>
            <p>
              <span className="user-info-label">Telefon:</span>{" "}
              <span className="user-info-value">{complaint.target.phone}</span>
            </p>
            <button className="ban-user-button" onClick={handleBanUser}>
              Kullanıcıyı Banla
            </button>
          </div>
        </div>
      </div>

      {/* Sağ Bölüm: Şikayet Detayları */}
      <div className="complaint-detail-main">
        <div className="complaint-content-box">
          <p className="complaint-reason-text">{complaint.reason}</p>
          <div className="complaint-images">
            {complaint.images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Complaint ${index}`}
                className="complaint-image"
                onClick={() => openLightbox(index)}
              />
            ))}
          </div>
          <button
            className="delete-complaint-button"
            onClick={handleDeleteComplaint}
          >
            Şikayeti Sil
          </button>
        </div>
      </div>

      {/* Lightbox Overlay */}
      {lightboxOpen && (
        <div className="lightbox-overlay" onClick={closeLightbox}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button className="lightbox-close" onClick={closeLightbox}>
              &times;
            </button>
            <img
              src={complaint.images[currentImageIndex]}
              alt={`Complaint ${currentImageIndex}`}
              className="lightbox-image"
            />
            <button className="lightbox-prev" onClick={showPrevImage}>
              &#8249;
            </button>
            <button className="lightbox-next" onClick={showNextImage}>
              &#8250;
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ComplaintDetail;
