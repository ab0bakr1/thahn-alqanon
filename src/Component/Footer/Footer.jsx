import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h2>ذهن القانون</h2>
          <p>موقع يقدم محتوى قانوني موثوق ومفيد لجميع المهتمين بالقانون.</p>
        </div>
        <div className="footer-section links">
          <h3>روابط سريعة</h3>
          <ul>
            <li><a href="#home">الرئيسية</a></li>
            <li><a href="#services">الخدمات</a></li>
            <li><a href="#about">من نحن</a></li>
            <li><a href="#contact">اتصل بنا</a></li>
          </ul>
        </div>
        <div className="footer-section contact">
          <h3>تواصل معنا</h3>
          <p>البريد الإلكتروني: info@lawmind.com</p>
          <p>الهاتف: 123-456-7890</p>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">فيسبوك</a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">تويتر</a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">إنستغرام</a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        &copy; {new Date().getFullYear()} ذهن القانون. جميع الحقوق محفوظة.
      </div>
    </footer>
  );
};

export default Footer;
