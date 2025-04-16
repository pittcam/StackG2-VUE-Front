<template>
    <div class="register-container">
    <Header2 />
      <div class="form-box">
        <h1 class="title">Crea tu cuenta MovieNest</h1>
        <form @submit.prevent="handleRegister" class="form">
          <input type="text" v-model="form.username" placeholder="Usuario" required />
          <input type="text" v-model="form.name" placeholder="Nombre completo" required />
          <input type="email" v-model="form.email" placeholder="Correo electrónico" required />
          <input type="password" v-model="form.password" placeholder="Contraseña" required />
          <input type="password" v-model="form.confirmPassword" placeholder="Confirmar contraseña" required />
  
        <div class="checkbox-group">
            <input type="checkbox" id="terms" v-model="form.acceptTerms" />
            <label for="terms">
                Acepto los <a href="#">términos y condiciones</a>
            </label>
        </div>

  
          <button type="submit" class="submit-button">Crear tu cuenta MovieNest</button>
        </form>
  
        <p class="redirect">
          ¿Ya tienes una cuenta?
          <router-link to="/Login">Inicia sesión</router-link>
        </p>
      </div>
  
      
    </div>
    <Footer />
  </template>
  
  <script>
  import RegisterController from '@/controllers/RegisterController.js'
  
  export default RegisterController
  </script>
  
  
  <style scoped>
  .register-container {
    min-height: 100vh;
    background-image: url('/src/views/assets/club-pelea.jpg');
    background-size: cover;
    background-position: center;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 60px 20px;
  }
  
  .form-box {
    background-color: rgba(0, 0, 0, 0.7);
    padding: 40px;
    border-radius: 12px;
    max-width: 500px;
    width: 100%;
    margin: auto;
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
    position: center;
    width: 75%;
    padding: 12px;
    margin-bottom: 40px;
    margin-left: 48px;
    border: none;
    border-radius: 6px;
    font-size: 15px;
  }
  
  .checkbox-group {
  display: flex;
  align-items: center;
  gap: 8px; /* separa checkbox y texto */
  margin-bottom: 20px;
  font-size: 14px;
  line-height: 1.5;
  }

    .checkbox-group input {
    vertical-align: middle;
    }

    .checkbox-group label {
    color: white;
    }

    .checkbox-group a {
    color: #00bcd4;
    text-decoration: none;
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
  
  .redirect {
    margin-top: 20px;
    text-align: center;
    font-size: 14px;
  }
  
  .redirect a {
    color: #00bcd4;
    text-decoration: none;
    font-weight: bold;
  }
  
  

  </style>
  