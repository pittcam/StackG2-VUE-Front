<template>
    <div class="login-container">
    <Header2 />
      <div class="form-box">
        <h1 class="title">Iniciar sesión</h1>
        <form @submit.prevent="handleLogin" class="form">
          <input
            type="text"
            v-model="form.username"
            placeholder="Correo"
            required
          />
          <input
            type="password"
            v-model="form.password"
            placeholder="Contraseña"
            required
          />
          <button type="submit" class="submit-button">Iniciar sesión</button>
        </form>
  
        <p class="forgot-password">
          <a href="#">¿Olvidaste la contraseña?</a>
        </p>
      </div>
     
    </div>
    <Footer />
  </template>
  
  <script>
  import LoginController from '@/controllers/LoginController'
  export default LoginController
  </script>
  
  <style scoped>
  .login-container {
    min-height: 100vh;
    background-image: url('/src/assets/club-pelea.jpg');
    background-size: cover;
    background-position: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 60px 20px;
  }
  
  .form-box {
    background-color: rgba(0, 0, 0, 0.7);
    padding: 40px;
    border-radius: 12px;
    max-width: 500px;
    width: 100%;
    margin-top:20px;
    margin-left: auto;
    margin-right: auto;
    color: white;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
  }
  
  .title {
    font-size: 32px;
    text-align: center;
    margin-bottom: 30px;
    line-height: 1.5;
  }
  
  .form input {
    width: 75%;
    padding: 12px;
    margin-bottom: 30px;
    margin-left: 48px;
    border: none;
    border-radius: 6px;
    font-size: 15px;
  }
  
  .submit-button {
    width: 70%;
    background-color: #a51919;
    color: white;
    border: none;
    margin-left: 75px;
    padding: 14px;
    border-radius: 6px;
    font-size: 18px;
    cursor: pointer;
    transition: background-color 0.3s;
  }
  
  .submit-button:hover {
    background-color: #d42e2e;
  }
  
  .forgot-password {
    text-align: center;
    font-size: 14px;
    margin-top: 20px;
  }
  
  .forgot-password a {
    color: #00bcd4;
    text-decoration: none;
  }
  </style>
  