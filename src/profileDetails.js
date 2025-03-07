import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { 
  FaUser, 
  FaInfoCircle, 
  FaAlignLeft, 
  FaVenusMars, 
  FaHeart, 
  FaMapMarkerAlt, 
  FaSmokingBan, 
  FaBeer, 
  FaCheck,
  FaArrowLeft
} from "react-icons/fa";
import "./css/profileDetails.css";

const detailProfiles = [
  {
    id: 1,
    name: "Jane Doe",
    age: 28,
    shorterbio: "Loves hiking and outdoor adventures.",
    bio: "I’m someone who thrives on adventure and loves exploring the outdoors. I value deep conversations under the stars.",
    gender: "Female",
    relationshipType: "Serious Relationship",
    location: "Denver, Colorado",
    smokes: "false",
    drinks: "Socially",
    approved: true,
    imgs: [
      "https://images.pexels.com/photos/1674752/pexels-photo-1674752.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    ],
  },
  {
    id: 2,
    name: "Ayşe Demir",
    age: 30,
    shorterbio: "Enjoys travel and culinary adventures.",
    bio: "I love discovering new cuisines and exploring hidden gems in the city.",
    gender: "Female",
    relationshipType: "Casual Dating",
    location: "Istanbul, Turkey",
    smokes: "false",
    drinks: "Yes",
    approved: false,
    imgs: [
      "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/774095/pexels-photo-774095.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    ],
  },
  { 
    id: 3, 
    name: 'Daniel Miller', 
    age: 29, 
    shorterbio: 'Entrepreneur and adventure seeker.',
    bio: 'I’m an entrepreneur who’s always chasing the next big idea. I’m looking for someone who’s equally ambitious but knows how to unwind after a long day. I value a partner who’s supportive but isn’t afraid to challenge me to be better.', 
    gender: 'Male',
    relationshipType: 'Casual Dating',
    location: 'Seattle, Washington',
    smokes: 'false',
    drinks: 'Yes',
    approved: false,
    imgs: [
      'https://images.pexels.com/photos/1819483/pexels-photo-1819483.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/1172207/pexels-photo-1172207.jpeg'
    ]
  },
];

const ProfileDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const profileId = parseInt(id, 10);
  const profile = detailProfiles.find(p => p.id === profileId);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showApproveModal, setShowApproveModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [infoMessage, setInfoMessage] = useState("");

  useEffect(() => {
    if (infoMessage) {
      const timer = setTimeout(() => {
        setInfoMessage("");
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [infoMessage]);

  if (!profile) {
    return <div>Profile not found</div>;
  }

  const handlePrevImage = () => {
    setCurrentImageIndex(prev => 
      prev === 0 ? profile.imgs.length - 1 : prev - 1
    );
  };

  const handleNextImage = () => {
    setCurrentImageIndex(prev =>
      prev === profile.imgs.length - 1 ? 0 : prev + 1
    );
  };

  const handleLogoClick = () => {
    navigate("/index");
  };

  const confirmApprove = () => {
    setShowApproveModal(false);
    setInfoMessage("User Approved");
    // Gerçek senaryoda backend güncellemesi yapılır.
  };

  const confirmDelete = () => {
    setShowDeleteModal(false);
    setInfoMessage("User Deleted");
    navigate(-1);
  };

  return (
    <>
<header>
        <div className="logo">
          <h1 className="logo-text" onClick={handleLogoClick} style={{ cursor: "pointer" }}>SoulM</h1>
        </div>
      </header>
    <div className="profile2-details-page">
      <button className="back-button" onClick={() => navigate(-1)}>
        <FaArrowLeft style={{ marginRight: "5px" }} /> Back
      </button>
      <div className="profile2-details-container">
        <div className="details-card">
          {/* Sol Kolon: Image Slider */}
          <div className="image2-container">
            <div className="image2-slider">
              <button className="arrow-button left" onClick={handlePrevImage}>◀</button>
              <img
                src={profile.imgs[currentImageIndex]}
                alt={profile.name}
                className="profile2-detail-img"
              />
              <button className="arrow-button right" onClick={handleNextImage}>▶</button>
            </div>
          </div>
          {/* Orta Kolon: Text Details */}
          <div className="text-container">
            <div className="text-details">
              <div className="detail-row">
                <span className="detail-heading"><FaUser /> Name:</span>
                <span className="detail-value">{profile.name}, {profile.age}</span>
              </div>
              <div className="detail-row">
                <span className="detail-heading"><FaInfoCircle /> Short Bio:</span>
                <span className="detail-value">{profile.shorterbio}</span>
              </div>
              <div className="detail-row">
                <span className="detail-heading"><FaAlignLeft /> Bio:</span>
                <span className="detail-value">{profile.bio}</span>
              </div>
              <div className="detail-row">
                <span className="detail-heading"><FaVenusMars /> Gender:</span>
                <span className="detail-value">{profile.gender}</span>
              </div>
              <div className="detail-row">
                <span className="detail-heading"><FaHeart /> Relationship:</span>
                <span className="detail-value">{profile.relationshipType}</span>
              </div>
              <div className="detail-row">
                <span className="detail-heading"><FaMapMarkerAlt /> Location:</span>
                <span className="detail-value">{profile.location}</span>
              </div>
              <div className="detail-row">
                <span className="detail-heading"><FaSmokingBan /> Smokes:</span>
                <span className="detail-value">{profile.smokes === "true" ? "Yes" : "No"}</span>
              </div>
              <div className="detail-row">
                <span className="detail-heading"><FaBeer /> Drinks:</span>
                <span className="detail-value">{profile.drinks}</span>
              </div>
            </div>
          </div>
        </div>
        {/* Sağ Kolon: Action Panel (Kartın dışında, sağda) */}
        <div className="action-panel">
          <div className="action-box approval-status">
            {profile.approved ? (
              <>
                Approved Account <FaCheck style={{ color: "green", marginLeft: "8px" }} />
              </>
            ) : (
              "Not Approved Yet"
            )}
          </div>
          <button 
            className="action-box approve-button" 
            onClick={() => setShowApproveModal(true)} 
            disabled={profile.approved}
            style={{ opacity: profile.approved ? 0.5 : 1 }}
          >
            Approve Account
          </button>
          <button className="action-box delete-button" onClick={() => setShowDeleteModal(true)}>
            Delete Account
          </button>
        </div>
      </div>

      {/* Approve Modal */}
      {showApproveModal && (
        <div className="modal-overlay">
          <div className="modal">
            <h3>Approve Account</h3>
            <p>Are you sure you want to approve this account?</p>
            <div className="modal-buttons">
              <button onClick={confirmApprove} className="modal-confirm">Yes</button>
              <button onClick={() => setShowApproveModal(false)} className="modal-cancel">Cancel</button>
            </div>
          </div>
        </div>
      )}
      {/* Delete Modal */}
      {showDeleteModal && (
        <div className="modal-overlay">
          <div className="modal">
            <h3>Delete Account</h3>
            <p>Are you sure you want to delete this account?</p>
            <div className="modal-buttons">
              <button onClick={confirmDelete} className="modal-confirm">Yes</button>
              <button onClick={() => setShowDeleteModal(false)} className="modal-cancel">Cancel</button>
            </div>
          </div>
        </div>
      )}
      {/* Info Popup */}
      {infoMessage && (
        <div className="info-popup">
          {infoMessage}
        </div>
      )}
    </div>
    <div className="footer-summary2">
        &copy; SoulM.com | Designed by Group 19
     </div>
    </>
  );
};

export default ProfileDetails;