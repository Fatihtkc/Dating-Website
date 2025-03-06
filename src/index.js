import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import './css/style.css';
import { useNavigate } from 'react-router-dom'; 
import { FaPhone, FaEnvelope, FaLinkedin, FaInstagram, FaDiscord } from 'react-icons/fa';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useState } from 'react';
import Index from './index.js';
import Giriş from './giriş.js';
import SignUp from './signup.js';
import Login from './login.js';
import PersonalityTest from './PersonalityTest'; 
import PersonalInformation from './PersonalInformation';
import ProfilePage from './ProfilePage';
import LikesPage from './likes';
import ForgotPass from './forgottenPassword';
import { Card, CardContent } from "./components/ui/card";
import { Button } from "./components/ui/button";
import { ChevronLeft, ChevronRight, Heart, X } from 'lucide-react';

function MainPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogout = () => {
    navigate('/login'); 
  };

  const handleLogoClick = () => {
    navigate("/index"); 
  };

  const handleSignIn = () => {
    navigate('/login'); 
  };

  const handleButtonClick = () => {
    console.log("Button clicked!"); 
    navigate('/signup');
  };

  const handleSubmitClick = () => {
    console.log('Submitting..');
  }; 

  return (
    <>
    <header>
      <div className="logo">
        <h1 className="logo-text"  onClick={handleLogoClick} style={{ cursor: "pointer" }}>SoulM</h1>
      </div>
      <button className="signin-button" onClick={handleSignIn}>
            Sign In
          </button>
    </header>
    <div className="main-page">
      <div className="main-background-image">
        <div className="main-content">
          <h1>Welcome to SoulM!</h1>
          <h2 className="start-text">One soul, two hearts, endless possibilities!</h2>
          <button className="start-button" onClick={handleButtonClick}>
            Let's Start!
          </button>
        </div>
      </div>
    </div>
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
        </>
  );
}

export default MainPage;

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Router>
    <Routes>
      <Route path="/" element={
                  <>
                    <MainPage/>
                  </>
                } />
      <Route path="/index" element={<Index />} />
      <Route path="/giriş" element={<Giriş />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/personality-test" element={<PersonalityTest />} />
      <Route path="/PersonalInformation" element={<PersonalInformation />} />
      <Route path="/ProfilePage" element={<ProfilePage />} />
      <Route path="/likes" element={<LikesPage />} />
      <Route path="/forgottenPassword" element={<ForgotPass />} />
    </Routes>
  </Router>
);
