<template>
  <div class="container">
    
    <div class="row mt-4">
      <div class="col"   >
        <CardProduct :product="product" />
      </div>
    </div>
    <HomeView />
    <AboutView/>
  </div>
</template>
<script>
import HomeView from "./views/HomeView.vue";
import CardProduct from "./components/CardProduct.vue";
import AboutView from "./views/AboutView.vue";

export default {
  components: {
    HomeView,
    CardProduct,
    AboutView
},
 
 
};
</script>