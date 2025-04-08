<template>
    <footer class="footer">
      <div class="footer-content">
        <nav class="footer-links">
          <a href="#" class="footer-link">Sobre nosotros</a>
          <a href="#" class="footer-link">Contacto</a>
          <a href="#" class="footer-link">Ayuda</a>
          <a href="#" class="footer-link">Términos</a>
        </nav>
  
        <div class="footer-icons">
          <a href="#" class="social-icon" aria-label="Instagram"><i class="fab fa-instagram"></i></a>
          <a href="#" class="social-icon" aria-label="Letterboxd"><i class="fas fa-film"></i></a>
          <a href="#" class="social-icon" aria-label="X"><i class="fab fa-x-twitter"></i></a>
          <a href="#" class="social-icon" aria-label="Facebook"><i class="fab fa-facebook-f"></i></a>
          <a href="#" class="social-icon" aria-label="TikTok"><i class="fab fa-tiktok"></i></a>
          <a href="#" class="social-icon" aria-label="YouTube"><i class="fab fa-youtube"></i></a>
        </div>
      </div>
    </footer>
  </template>
  
  <script>
  export default {
    name: "Footer",
  };
  </script>
  
  <style scoped>
  .footer {
    background-color: #1c232b;
    padding: 30px 20px;
    width: 97%;
    color: #a5b1c2;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  
  .footer-content {
    width: 100%;
    max-width: 1200px;
    text-align: center;
  }
  
  .footer-links {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 30px;
    margin-bottom: 20px;
  }
  
  .footer-link {
    color: #a5b1c2;
    text-decoration: none;
    font-weight: bold;
    transition: color 0.3s;
  }
  
  .footer-link:hover {
    color: #ffffff;
  }
  
  .footer-icons {
    display: flex;
    justify-content: center;
    gap: 20px;
  }
  
  .social-icon {
    color: #a5b1c2;
    font-size: 20px;
    transition: color 0.3s;
  }
  
  .social-icon:hover {
    color: #ffffff;
  }
  </style>
  