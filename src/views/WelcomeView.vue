<template>
    <div class="page-container1">
        <div class="content">
            <Header />
            <h1 class="title">Toma tu primer paso en un mundo genial</h1>
            <p class="description">MovieNest te permite realizar un seguimiento de todas las películas
               que has visto, para que puedas agregar a tu lista de favoritos o de verlas después.</p>
            <button class="button" @click="$router.push('/Login')">Únete</button>

        </div>
     
      
    </div>

  <div class="page-container2">
      <div class="text-column">
        <h1 class="subtitle1">Dinos tus películas favoritas</h1>
        <p class="description2">
          Busca tus películas favoritas y agrégalas a tu perfil.
          Presiona el ❤️ en el item de tu película para añadirla.
        </p>
    </div>

    <div class="image-column">
      <img src="/src/views/assets/imagen1-inicio.png" alt="Películas favoritas" class="side-image" />
    </div>
  </div>

  <div class="page-container3">
  <div class="image-column">
    <img src="/src/views/assets/imagen2-inicio.png" alt="Películas favoritas" class="side-image" />
  </div>

  <div class="text-column">
    <h1 class="subtitle1">Guarda películas para ver después</h1>
    <p class="description2">
      Una vez que agregues películas a tu perfil, podrás verlas aquí.
      También puedes explorar para agregar películas para ver más tarde o
      simplemente para verlas de nuevo.
    </p>
  </div>
</div>


    <div class="page-container-end">
        <Footer />
       
    </div>

</template>

  
  <script>
  import Header from '@/views/components/Header.vue';
  import Footer from '@/views/components/Footer.vue';
  
  export default {
    components: {
      Header, Footer
    },
  }
  </script>
  
  <style scoped>

  .title {
    font-size: 55px;
    font-weight: bold;
    color: white; /* Cambia el color según tu diseño */
    margin-bottom: 50px;
    padding-top: 220px;
  }

  .description {
    font-size: 20px;
    color: white; /* Cambia el color según tu diseño */
    margin-bottom: 20px;
    line-height: 1.5;
 
  }

  .button {
    background-color: #a51919; /* Color de fondo del botón */
    color: white; /* Color del texto del botón */
    border: none;
    border-radius: 5px;
    padding: 10px 20px;
    font-size: 25px;
    cursor: pointer;
    font-family:  sans-serif;
    transition: background-color 0.3s;
  }

  .text-column {
  flex: 1;
  color: white;
  max-width: 500px; 
  }

.image-column {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}

.side-image {
  max-width: 100%;
  height: auto;
  border-radius: 10px;
}

.text-column1 {
  flex: 1;
  color: white;
  max-width: 400px; 
}

.image-column1 {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}

.subtitle1 {
  font-size: 40px;
  font-weight: bold;
  color: white; /* Cambia el color según tu diseño */
  margin-bottom: 20px;
}

.side-image1 {
  max-width: 100%;
  height: auto;
  border-radius: 10px;
}
.description2 {
  font-size: 18px;
  color: white;
  line-height: 1.5; /* Cambia el color según tu diseño */
}
  
.page-container1 {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0;
  padding: 0;
  background-image: url('/src/views/assets/club-pelea.jpg');
  background-size: cover;
  background-position: center;
  min-height: 100vh;
  padding-top: 80px; 
  overflow: hidden;
}

.page-container1::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* 🔥 Aquí controlas la opacidad */
  z-index: 0;
}

  .page-container2 {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background-color: #14181c; /* fondo negro tipo Letterboxd */
    padding: 100px 60px;
    gap: 60px;
  }

  .page-container3 {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    background-color: #14181c;
    padding: 100px 60px;
    width: 92%;
    gap: 80px;
    flex-wrap: wrap;
  }

    .page-container-end {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

  .content {
    max-width: 800px;
    text-align: center;
    margin: 0px;
  }
  
  .main-image {
    width: 80%;
    height: auto;
    margin-top: 20px;
    padding-right: 60px;
    padding-left: 340px;
  }
  
  .secondary-image {
    width: 80%;
    height: auto;
    margin-top: 20px;
  }
  </style>