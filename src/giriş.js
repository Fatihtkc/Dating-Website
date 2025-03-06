import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { FaUser } from "react-icons/fa";
import './css/style.css';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { FaPhone, FaEnvelope, FaLinkedin, FaInstagram, FaDiscord } from 'react-icons/fa';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Login from './login.js';
import Index from './index.js';
import LikesPage from './likes.js';
import AuthForm from './signup.js';
import { X, Heart, Info, FlagTriangleLeft} from 'lucide-react';
import { FaHeart } from "react-icons/fa";



const Header = ({ likedProfiles }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };


  const handleLogout = () => {
    console.log('Çıkış..');
    navigate('/login'); 
  };

  const handleEditProfile = () => {
    navigate('/ProfilePage'); 
  };

  const handleLogoClick = () => {
    navigate("/index"); 
  };

  const goToLikesPage = () => {
    navigate('/likes', { state: { likedProfiles } }); 
  };

  return (
    <header>
      <div className="logo">
        <h1 className="logo-text" onClick={handleLogoClick} style={{ cursor: "pointer" }}>SoulM</h1>
      </div>
      <div className="header-divider"></div>
      <ul className="menu">
        <li><a href="#">Matches</a></li>
        <li><a href="#">Messages</a></li>
        <li><a href="#" onClick={goToLikesPage} >Likes</a></li>
      </ul>
      <div className="profile-container">
        <ul className="profile">
          <li className="profile-item">
            <a href="#"> <FaUser /> Profile</a>
            <ul className="dropdown">
              <li><a href="#" onClick={handleLogout}>Logout</a></li>
              <li><a href="#" onClick={handleEditProfile}>Edit Profile</a></li>
            </ul>
          </li>
        </ul>
      </div>
    </header>
  );
};

const Footer = () => {

    const handleSubmitClick = () => {
        console.log('Submitting..');
      }; 

  return (
    <div className="footer">
    <div className="footer-content">
        <div className="footer-section about">
          <h1 className="logo-text"><span>Soul</span>M</h1>
          <p className="site-description">
            Did the universe forget to send you its signals? Don’t worry, we’re right here! With the most accurate algorithms (and maybe a little bit of magic), we help you find someone who truly matches you. So, you’ll not only have someone to share your coffee with but also your life.
            Ready? Sign up now, because maybe your soulmate is waiting for you right this second. Believe in coincidences, but believe in 'SoulM' even more. ❤️
          </p>
          <p className="site-description-2">One soul, two hearts, endless possibilities!</p>
          <div className="contact" >
            <span><FaPhone /> &nbsp; 05397826654 </span>
            <span><FaEnvelope /> &nbsp; info@SoulM.com</span>
          </div>
          <div className="socials">
            <a href="https://www.linkedin.com/in/bilge-acart%C3%BCrk-882448258/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaDiscord /></a>
          </div>
        </div>
        <div className="footer-section testimonials">
          <h2>What People Say</h2>
          <br />
          <div className="testimonial">
            <p className="testimonial-text">"SoulM changed my life! I never thought I'd find someone who gets me so well." – Emily J.</p>
          </div>
          <div className="testimonial">
            <p className="testimonial-text">"The best decision I ever made was joining SoulM. It's like magic!" – Michael T.</p>
          </div>
          
        </div>
        <div className="footer-section contact-form">
          <h2>Contact us</h2>
          <br />
          <form action="index.js" method="post">
            <input type="email" name="email" className="text-input contact-input" placeholder="Your email address..." />
            <textarea rows="4" name="message" className="text-input contact-input" placeholder="Your message..."></textarea>
            <button onClick={handleSubmitClick} className="btn btn-big contact-btn">
          <FaEnvelope />
        </button>
          </form>
        </div>
      </div>
      <div className="footer-bottom">
        &copy; SoulM.com | Designed by Group 19
      </div>
    </div>
  );
};

const MatchScreen = ({ likedProfiles, setLikedProfiles }) => {
  const [currentProfileIndex, setCurrentProfileIndex] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [selectedProfile, setSelectedProfile] = useState(null);
  const [isReportModalOpen, setIsReportModalOpen] = useState(false);
  const [reportMessage, setReportMessage] = useState("");
  const [reportReason, setReportReason] = useState("");

  const profiles = [
    { 
      id: 1, 
      name: 'Jane Doe', 
      age: 28, 
      shorterbio: 'Loves hiking and outdoor adventures.',
      bio: 'I’m someone who thrives on adventure and loves exploring the outdoors. I’m looking for a partner who’s equally passionate about nature and isn’t afraid to get a little muddy on a hike. I value deep conversations under the stars and someone who can keep up with my spontaneous road trip ideas.', 
      gender: 'Female',
      relationshipType: 'Serious Relationship',
      location: 'Denver, Colorado',
      smokes: 'false',
      drinks: 'Socially',
      imgs: [
        'https://images.pexels.com/photos/1674752/pexels-photo-1674752.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        'https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        'https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
      ]
    },
    { 
      id: 2, 
      name: 'Johana Smith', 
      age: 30, 
      shorterbio: 'Avid traveler and food lover.',
      bio: 'I’m a curious soul who’s always planning my next trip or trying a new cuisine. I’m looking for someone who shares my love for exploring cultures and can turn a simple dinner into a culinary adventure. I value honesty and someone who can make me laugh even when flights get delayed.', 
      gender: 'Female',
      relationshipType: 'Casual Dating',
      location: 'Austin, Texas',
      smokes: 'false',
      drinks: 'Yes',
      imgs: [
        'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        'https://images.pexels.com/photos/774095/pexels-photo-774095.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
      ]
    },
    { 
      id: 3, 
      name: 'Derik Watson', 
      age: 26, 
      shorterbio: 'Tech enthusiast and coffee lover',
      bio: 'I’m a tech enthusiast who’s always tinkering with the latest gadgets. I’m looking for someone who’s equally curious about the world and doesn’t mind my occasional rants about AI. I value a partner who’s supportive and can balance my tech obsession with a love for real-world experiences.', 
      gender: 'Male',
      relationshipType: 'Serious Relationship',
      location: 'San Francisco, California',
      smokes: 'false',
      drinks: 'Occasionally',
      imgs: [
        'https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg?auto=compress&cs=tinysrgb&w=600',
        'https://images.pexels.com/photos/1704489/pexels-photo-1704489.jpeg?auto=compress&cs=tinysrgb&w=600'
      ]
    },
    { 
      id: 4, 
      name: 'Sophia Lee', 
      age: 25, 
      shorterbio: 'Yoga lover and fitness enthusiast.',
      bio: 'I’m a yoga lover who believes in living a balanced and mindful life. I’m looking for someone who’s kind, grounded, and shares my passion for wellness. I value emotional connection and someone who can appreciate the little things, like a quiet morning with a cup of tea.', 
      gender: 'Female',
      relationshipType: 'Serious Relationship',
      location: 'Miami, Florida',
      smokes: 'false',
      drinks: 'No',
      imgs: [
        'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        'https://images.pexels.com/photos/1036622/pexels-photo-1036622.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
      ]
    },
    { 
      id: 5, 
      name: 'Michael Brown', 
      age: 32, 
      shorterbio: 'Music producer and guitar player',
      bio: 'I’m a music producer who lives and breathes creativity. I’m looking for someone who’s passionate about their craft, whether it’s art, music, or something entirely different. I value a partner who’s independent but loves collaborating on spontaneous projects.', 
      gender: 'Male',
      relationshipType: 'Casual Dating',
      location: 'Nashville, Tennessee',
      smokes: 'true',
      drinks: 'Yes',
      imgs: [
        'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=10',
        'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
      ]
    },
    { 
      id: 6, 
      name: 'Olivia Green', 
      age: 27, 
      shorterbio: 'Photographer and art enthusiast.',
      bio: 'I’m a photographer who sees beauty in the mundane. I’m looking for someone who’s equally curious about the world and isn’t afraid to wander off the beaten path with me. I value authenticity and someone who can appreciate the art of slowing down.', 
      gender: 'Female',
      relationshipType: 'Serious Relationship',
      location: 'Portland, Oregon',
      smokes: 'false',
      drinks: 'Socially',
      imgs: [
        'https://images.pexels.com/photos/1587009/pexels-photo-1587009.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        'https://images.pexels.com/photos/1462637/pexels-photo-1462637.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
      ]
    },
    { 
      id: 7, 
      name: 'Daniel Miller', 
      age: 29, 
      shorterbio: 'Entrepreneur and adventure seeker.',
      bio: 'I’m an entrepreneur who’s always chasing the next big idea. I’m looking for someone who’s equally ambitious but knows how to unwind after a long day. I value a partner who’s supportive but isn’t afraid to challenge me to be better.', 
      gender: 'Male',
      relationshipType: 'Casual Dating',
      location: 'Seattle, Washington',
      smokes: 'false',
      drinks: 'Yes',
      imgs: [
        'https://images.pexels.com/photos/1819483/pexels-photo-1819483.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        'https://images.pexels.com/photos/1172207/pexels-photo-1172207.jpeg'
      ]
    },
    { 
      id: 8, 
      name: 'Chloe White', 
      age: 24, 
      shorterbio: 'Graphic designer and cat lover.',
      bio: 'I’m a graphic designer who finds joy in creating things that inspire others. I’m looking for someone who’s equally creative and loves sharing their passions. I value a partner who’s kind, patient, and can appreciate the beauty of a well-designed font.', 
      gender: 'Female',
      relationshipType: 'Serious Relationship',
      location: 'Chicago, Illinois',
      smokes: 'false',
      drinks: 'No',
      imgs: [
        'https://images.pexels.com/photos/1036620/pexels-photo-1036620.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        'https://images.pexels.com/photos/2065195/pexels-photo-2065195.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
      ]
    },
    { 
      id: 9, 
      name: 'William Johnson', 
      age: 31, 
      shorterbio: 'Mountain climber and nature photographer.',
      bio: 'I’m a mountain climber who’s always chasing the next summit. I’m looking for someone who’s adventurous and loves the outdoors as much as I do. I value a partner who’s resilient and can handle the ups and downs of life with a positive attitude.', 
      gender: 'Male',
      relationshipType: 'Serious Relationship',
      location: 'Boulder, Colorado',
      smokes: 'false',
      drinks: 'Occasionally',
      imgs: [
        'https://images.pexels.com/photos/1549004/pexels-photo-1549004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        'https://images.pexels.com/photos/1666779/pexels-photo-1666779.jpeg'
      ]
    },
    { 
      id: 10, 
      name: 'Isabella Martinez', 
      age: 43, 
      shorterbio: 'Chef and culinary artist.',
      bio: 'I’m a chef who believes food is the best way to connect with others. I’m looking for someone who appreciates the art of cooking and isn’t afraid to try new flavors. I value a partner who’s passionate about their craft and can share in the joy of creating something beautiful.', 
      gender: 'Female',
      relationshipType: 'Casual Dating',
      location: 'New York City, New York',
      smokes: 'true',
      drinks: 'Yes',
      imgs: [
        'https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg',
        'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
      ]
    }
  ];

  const currentProfile = profiles[currentProfileIndex];

  const handleSwipeRight = () => {
    setLikedProfiles([...likedProfiles, currentProfile]);
    if (currentProfileIndex < profiles.length - 1) {
      setCurrentProfileIndex(currentProfileIndex + 1);
      setCurrentImageIndex(0); 
      setSelectedProfile(null);
    }
  };

  const handleSwipeLeft = () => {
    if (currentProfileIndex < profiles.length - 1) {
      setCurrentProfileIndex(currentProfileIndex + 1);
      setCurrentImageIndex(0);
      setSelectedProfile(null);
    }
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? currentProfile.imgs.length - 1 : prevIndex - 1
    );
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === currentProfile.imgs.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handleInfoClick = () => {
    console.log('Info..');
    // navigate('/login'); 
    setSelectedProfile(currentProfile);
  };

  const handleFlagClick = () => {
    setIsReportModalOpen(true);
  };

  const submitReport = () => {
    if (!reportReason) return;

    setReportMessage(`Your report for ${currentProfile.name} about "${reportReason}" has been received. We will review it and get back to you soon.`);
    
    setIsReportModalOpen(false);
    
    setTimeout(() => {
      setReportMessage("");
    }, 4000);
  };

  const closeProfileDetails = () => {
    setSelectedProfile(null);
  };

  if (currentProfileIndex >= profiles.length) {
    return <div className="no-more-profiles">No more profiles to show.</div>;
  }

  return (
    <div className="match-screen-container">
      <div className={`match-screen-content ${selectedProfile ? 'slide-left' : ''}`}>
        <div className="match-card">
          <div className="profile-images">
            <img
              src={currentProfile.imgs[currentImageIndex]}
              alt={`Profile ${currentProfile.name} ${currentImageIndex + 1}`}
              className="match-profile-img"
            />
          </div>
          <h2 className="match-profile-name">{currentProfile.name}, {currentProfile.age}</h2>
          <p className="match-profile-bio">{currentProfile.shorterbio}</p>
          <p className=".match-profile-relationship-type"><FaHeart className="heart-icon" />  {currentProfile.relationshipType}</p>
          <div className="image-navigation">
          <div className="image-navigation">
          <button onClick={handlePrevImage} className="prev-button">{'<'}</button>
          <button onClick={handleNextImage} className="next-button">{'>'}</button>
        </div>

          </div>
        </div>

        {/* Buton Container'ı */}
        <div className="match-button-container">
          <div onClick={() => { 
            setSelectedProfile(null);
            setCurrentProfileIndex(currentProfileIndex + 1);
             }} className="match-button dislike">
            <X className="w-6 h-6" />
          </div>
          <div onClick={() => {
            setLikedProfiles([...likedProfiles, currentProfile]);
            setCurrentProfileIndex(currentProfileIndex + 1);
            setSelectedProfile(null);
          }} className="match-button like">
            <Heart className="w-6 h-6" />
          </div>
          <div onClick={handleInfoClick} className="match-button info">
            <Info className="w-6 h-6" />
          </div>
          <div onClick={handleFlagClick} className="match-button flag">
          <FlagTriangleLeft className="w-6 h-6" />
        </div>

        </div>
      </div>

      {/* Profil Detayları */}
      {selectedProfile && (
        <div className="profile-details-container active">
          <button className="close-button" onClick={closeProfileDetails}>X</button>
          <img src={selectedProfile.imgs[0]} alt={`${selectedProfile.name}`} className="profile-detail-img"/>
          <div className="thumbnail-gallery">
        {currentProfile.imgs.map((img, index) => (
          <img 
            key={index} 
            src={img} 
            alt={`Thumbnail ${index + 1}`} 
            className={`thumbnail ${index === currentImageIndex ? "active" : ""}`} 
            onClick={() => setCurrentImageIndex(index)}
          />
        ))}
      </div>
          <h2>{selectedProfile.name}, {selectedProfile.age} </h2>
          <p>{selectedProfile.bio}</p>
          <p>{selectedProfile.gender} </p>
          <p>{selectedProfile.relationshipType} </p>
          <p>{selectedProfile.location} </p>
          <p> Smokes: {selectedProfile.smokes ? "Yes" : "No"} </p>
          <p> Drinks: {selectedProfile.drinks} </p>
          </div>
      )}
      {isReportModalOpen && (
        <div className="report-modal">
          <h3>Report {currentProfile.name}</h3>
          <p>Select a reason for reporting:</p>
          <select value={reportReason} onChange={(e) => setReportReason(e.target.value)}>
            <option value="">-- Select Reason --</option>
            <option value="Fake Photo">Fake Photo</option>
            <option value="Inappropriate Behavior">Inappropriate Behavior</option>
            <option value="Scam / Fraud">Scam / Fraud</option>
            <option value="Harassment">Harassment</option>
            <option value="Other">Other</option>
          </select>
          <button onClick={submitReport} className="report-submit-btn">Submit Report</button>
          <button onClick={() => setIsReportModalOpen(false)} className="close-modal-btn">Cancel</button>
        </div>
      )}

      {reportMessage && (
        <div className="report-notification">
          {reportMessage}
        </div>
      )}
    </div>
  );
};

const Giriş = () => {
  const [likedProfiles, setLikedProfiles] = useState([]);

  return (
    <div className="page-wrapper">
      <Routes>
        <Route path="/" element={
          <>
            <Header likedProfiles={likedProfiles} />
            <MatchScreen likedProfiles={likedProfiles} setLikedProfiles={setLikedProfiles} />
            <Footer />
          </>
        } />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<AuthForm isRegister={true} />} />
        <Route path="/likes" element={<LikesPage />} />
      </Routes>
    </div>
  );
};

export default Giriş;