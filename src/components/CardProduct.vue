<template>
  <div id="app" >
    <div class="con container" >
      <div class="col"  >
        <br />
      <carousel 
        :items="2"
        :loop="true"
        :autoplay="true"
        :margin="30"
        :nav="false"
        :dots="true"
        :animateOut="fadeOut"
        :animateIn="fadeIn"
        :autoplayHoverPause="false"
        :responsive="{
          0: {
            items: 1,
          },
          768: {
              items: 2,
            },
            1000: {
              items: 4,
            },
        }"
        > 
        <div class="coll">
          <div class="carousel"  v-for="product in products" :key="product.id" >
          <h3 class="carousel-text">{{ product.gambar }}</h3>
          <button class="carousel-btn btn btn-primary">Lihat Detail</button>
          <!-- <div class="carousel-bg"></div>
          <img
            :src="'../assets/images/' + product.path"
            class="carousel-img"
            alt
          /> -->
        </div>
        </div>
       

        <!-- <div class="carousel">
            <h3 class="carousel-text">Paket Wisata <br />Bali</h3>
            <button class="carousel-btn btn btn-primary">Lihat Detail</button>
            <div class="carousel-bg"></div>
            <img class="carousel-img" src="../assets/img/paket/bali.jpg" alt />
          </div>
          <div class="carousel">
            <h3 class="carousel-text">Paket Wisata <br />Lombok</h3>
            <button class="carousel-btn btn btn-primary">Lihat Detail</button>
            <div class="carousel-bg"></div>
            <img class="carousel-img" src="../assets/img/paket/lombok.jpg" alt />
          </div>
          <div class="carousel">
            <h3 class="carousel-text">Paket Wisata <br />Yogyakarta</h3>
            <button class="carousel-btn btn btn-primary">Lihat Detail</button>
            <div class="carousel-bg"></div>
            <img class="carousel-img" src="../assets/img/paket/jogja.jpg" alt />
          </div> -->
      </carousel>
      </div>
      
    </div>
  </div>
</template>
<script>
import carousel from "vue-owl-carousel";
import axios from "axios";
export default {
  components: {
    carousel,
  },
  data() {
    return {
      products: [],
    };
  },
  methods: {
    setProduct(data) {
      this.products = data;
    },
  },
  name: "CardProduct",
  props: ["product"],
  mounted() {
    axios
      .get( "http://localhost:3000/best-products")
      .then((response) => this.setProduct(response.data))
      .catch(function (error) {
        // handle error
        console.log("gagal :", error);
      });
  },
};
</script>
<style>
.con {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 130px;
  
}
.coll{
 
  display: flex;
  width: 999%;
  gap: 30px;
}
.carousel {
  position: relative;

  border-radius: 20px;
  overflow: hidden;
  height: 400px;
}
.carousel-text {
  position: absolute;
  bottom: 0;
  margin-bottom: 100px;
  margin-left: 20px;
  z-index: 551;
  color: #ffffff;
}
.carousel-btn {
  position: absolute;
  bottom: 0;
  z-index: 9999;
  margin-left: 20px;
  margin-bottom: 40px;
}
.carousel-bg {
  width: 100%;
  position: absolute;
  bottom: 0;
  height: 100%;
  background: linear-gradient(transparent, #000000);
  opacity: 0.8;
  z-index: 550;
  
}
.carousel-img {
  transform: scale(1.5);
  width: 200px;
  height: 319px;
}
</style>
    