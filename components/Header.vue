<template>
  <div class="row align-items-center p-3 bg-dark-green text-light"> 
    <div class="col-3 col-md-2 col-lg-1 text-center">
      <picture>
        <img 
          src="assets/img/LOGO-SMKN4.png" 
          alt="logo SMKN 4" 
          class="img-fluid logo-image" 
          style="max-width: 130px;" 
          width="130" 
          height="130">
      </picture>
    </div>
    <div class="col-9 col-md-10 col-lg-11 text-container">
      <h1 class="header-title">Presensi Siswa</h1>
      <address class="header-address">
        XII PPLG 2<br>
        SMKN 4 Tasikmalaya
      </address>
    </div>
  </div>
</template>

<script setup>
useHead({ title: "menu_admin", meta: [{ name: "menu_admin", content: "HALAMAN MENU ADMIN" }] });
</script>

<style scoped>
.bg-dark-green {
  background-color: #63A66C;  
}

.text-light {
  color: #FFFFFF; 
}

.header-title {
  font-size: 2.5rem; 
  font-weight: bold;  
  letter-spacing: 1px; 
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5); 
}

.header-address {
  font-size: 1.25rem; 
  font-weight: normal; 
  letter-spacing: 0.5px; 
  margin-top: 10px; 
}

@media (max-width: 576px) {
  .text-container {
    margin-left: 10px;
  }
}



@media (min-width: 992px) {
  .header-title {
    font-size: 2,5rem; 
  }
  .header-address {
    font-size: 1,5rem; 
  }
}
</style>
