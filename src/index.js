import React from 'react';
import ReactDOM from 'react-dom/client';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import './css/style.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'; 
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useState } from 'react';
import Login from './login.js';
import AuthForm from './signup.js';
import { Card, CardContent } from "./components/ui/card";
import { Button } from "./components/ui/button";
import { ChevronLeft, ChevronRight, Heart, X } from 'lucide-react';
const FontAwesomeCDN = () => (
  <script src="https://kit.fontawesome.com/737be57892.js" crossorigin="anonymous"></script>
);

const GoogleFonts = () => (
  <>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Dosis:wght@200..800&family=Lora:ital,wght@0,400..700;1,400..700&display=swap"
      rel="stylesheet"
    />
  </>
);

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogout = () => {
    navigate('/login'); 
  };

  return (
    <header>
      <div className="logo">
        <h1 className="logo-text"><span>Soul</span>M</h1>
      </div>
      <div className="header-divider"></div>
      <ul className="menu">
        <li><a href="#">Matches</a></li>
        <li><a href="#">Messages</a></li>
        <li><a href="#">Likes</a></li>
      </ul>
      <div className="profile-container">
        <ul className="profile">
          <li className="profile-item">
            <a href="#">Profile</a>
            <ul className="dropdown">
              <li><a href="#" onClick={handleLogout}>Logout</a></li>
            </ul>
          </li>
        </ul>
      </div>
    </header>
  );
};

const profiles = [
  { 
    id: 1, 
    name: 'Jane Doe', 
    age: 28, 
    bio: 'Loves hiking and outdoor adventures.', 
    imgs: [
      'https://images.pexels.com/photos/1674752/pexels-photo-1674752.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    ]
  },
  { 
    id: 2, 
    name: 'John Smith', 
    age: 30, 
    bio: 'Avid traveler and food lover.', 
    imgs: [
      'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/774910/pexels-photo-774910.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    ]
  },
  { 
    id: 3, 
    name: 'Emma Watson', 
    age: 26, 
    bio: 'Tech enthusiast and coffee lover.', 
    imgs: [
      'https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/1704489/pexels-photo-1704489.jpeg?auto=compress&cs=tinysrgb&w=600'
    ]
  }
];



export default function MatchScreen() {
  const [currentProfileIndex, setCurrentProfileIndex] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const currentProfile = profiles[currentProfileIndex];

  const handleSwipeRight = () => {
    if (currentProfileIndex < profiles.length - 1) {
      setCurrentProfileIndex(currentProfileIndex + 1);
      setCurrentImageIndex(0); 
    }
  };

  const handleSwipeLeft = () => {
    if (currentProfileIndex < profiles.length - 1) {
      setCurrentProfileIndex(currentProfileIndex + 1);
      setCurrentImageIndex(0);
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

  return (
    <div className="match-screen-container">
      <div className="match-card">
      <div className="profile-images">
          <img
            src={currentProfile.imgs[currentImageIndex]}
            alt={`Profile ${currentProfile.name} ${currentImageIndex + 1}`}
            className="match-profile-img"
          />
        </div>
        <h2 className="match-profile-name">{currentProfile.name}, {currentProfile.age}</h2>
        <p className="match-profile-bio">{currentProfile.bio}</p>
        <div className="image-navigation">
        <button onClick={handlePrevImage} className="prev-button">{'<'}</button> {/* Sol ok */}
        <button onClick={handleNextImage}className="next-button">{'>'}</button> {/* Sağ ok */}
        </div>
      </div>

      <div className="match-button-container">
        <div onClick={handleSwipeLeft} className="match-button dislike">
          <X className="w-6 h-6" />
        </div>
        <div onClick={handleSwipeRight} className="match-button like">
          <Heart className="w-6 h-6" />
        </div>
      </div>
    </div>
  );
}

const Editor = () => {
  const [editorData, setEditorData] = React.useState('');

  return (
    <div className="editor-container">
      <CKEditor
        editor={ClassicEditor}
        data={editorData}
        onChange={(event, editor) => {
          const data = editor.getData();
          setEditorData(data);
        }}
        config={{
          toolbar: [
            'heading',
            '|',
            'bold',
            'italic',
            'fontSize',
            'fontFamily',
            'fontColor',
            '|',
            'link',
            'bulletedList',
            'numberedList',
            'blockQuote',
          ],
          heading: {
            options: [
              { model: 'paragraph', title: 'Paragraph', class: 'ck-heading_paragraph' },
              { model: 'heading1', view: 'h1', title: 'Heading 1', class: 'ck-heading_heading1' },
              { model: 'heading2', view: 'h2', title: 'Heading 2', class: 'ck-heading_heading2' },
            ],
          },
          fontFamily: {
            options: [
              'default',
              'Ubuntu, Arial, sans-serif',
              'Ubuntu Mono, Courier New, Courier, monospace',
            ],
          },
          fontColor: {
            colorPicker: {
              format: 'hex',
            },
          },
        }}
      />
    </div>
  );
};

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-content">
        <div className="footer-section about">
          <h1 className="logo-text"><span>Soul</span>M</h1>
          <p>
            Buraya siteyi açıklayan yazı
          </p>
          <div className="contact">
            <span><i className="fas fa-phone"></i> &nbsp; 05397826654 </span>
            <span><i className="fas fa-envelope"></i> &nbsp; info@SoulM.com</span>
          </div>
          <div className="socials">
            <a href="https://www.linkedin.com/in/bilge-acart%C3%BCrk-882448258/" target="_blank"><i className="fab fa-linkedin"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-discord"></i></a>
          </div>
        </div>
        <div className="footer-section links">
          <h2>Quick Links</h2>
          <br />
          <ul>
            <a href="#"><li>Reviews</li></a>
            <a href="#"><li>Genres</li></a>
            <a href="#"><li>Gallery</li></a>
          </ul>
        </div>
        <div className="footer-section contact-form">
          <h2>Contact us</h2>
          <br />
          <form action="index.html" method="post">
            <input type="email" name="email" className="text-input contact-input" placeholder="Your email address..." />
            <textarea rows="4" name="message" className="text-input contact-input" placeholder="Your message..."></textarea>
            <button type="submit" className="btn btn-big contact-btn">
              <i className="fas fa-envelope"></i>
              Send
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

const App = () => {
  return (
    <div className="page-wrapper">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={
            <>
              <Header />
              <MatchScreen />
              <Editor />
              <Footer />
            </>
          } />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<AuthForm isRegister={true} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
