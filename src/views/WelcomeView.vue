<template>
    <div class="page-container1">
        <div class="content">
            <Header />
        </div>
     
      
    </div>

    <div class="page-container2">
     
      <div class="content">
        <img src="/src/assets/imagen1-inicio.png" alt="Descripción de la imagen" class="main-image" />
      </div>
    </div>

    <div class="page-container3">
      <div class="content">
        <img src="/src/assets/imagen2-inicio.png" alt="Descripción de la imagen" class="main-image" />
      </div>
    </div>

    <div class="page-container-end">
      <div class="content">
        <img src="/src/assets/club-pelea.jpg" alt="Descripción de la imagen" class="main-image" />
        <img src="/src/assets/club-pelea.jpg" alt="Descripción de la imagen" class="secondary-image" />
      </div>
    </div>

</template>

  
  <script>
  import Header from '@/components/Header.vue';
  
  export default {
    components: {
      Header,
    },
  }
  </script>
  
  <style scoped>
  .page-container1 {
    flex-direction: column;
    margin: 0px;
    padding: 20vw;
    align-items: center;
    background-image: url('/src/assets/club-pelea.jpg');
    background-size: cover;
    background-position: center; /* Color de fondo similar al de Letterboxd */
  }

    .page-container2 {
        display: flex;
        flex-direction: column;
        align-items: center;
        background-image: url('/src/assets/club-pelea.jpg');
        background-size: cover;
        background-position: center; /* Color de fondo similar al de Letterboxd */
    }

    .page-container3 {
        display: flex;
        flex-direction: column;
        align-items: center;
        background-image: url('/src/assets/club-pelea.jpg');
        background-size: cover;
        background-position: center; /* Color de fondo similar al de Letterboxd */
    }

    .page-container-end {
        display: flex;
        flex-direction: column;
        align-items: center;
        background-image: url('/src/assets/club-pelea.jpg');
        background-size: cover;
        background-position: center; /* Color de fondo similar al de Letterboxd */
    }

  .content {
    max-width: 800px;
    text-align: center;
    margin: 0px;
  }
  
  .main-image {
    width: 100%;
    height: auto;
  }
  
  .secondary-image {
    width: 80%;
    height: auto;
    margin-top: 20px;
  }
  </style>