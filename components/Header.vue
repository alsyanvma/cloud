<template>
  <div class="row align-items-center p-3 bg-plum text-white">
    <div class="col-3 col-md-2 col-lg-1 text-center">
      <img src="assets/img/LOGO-SMKN4.png" alt="logo SMKN 4" class="img-fluid logo-image" style="max-width: 100px;">
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

<style scoped>
.bg-plum {
  background-color: #58A86A;
}

.header-title {
  font-size: 24px;
}

.header-address {
  font-size: 16px;
}

@media (max-width: 576px) {
  .text-container {
    margin-left: 10px;
  }
}

@media (min-width: 768px) {
  .header-title {
    font-size: 32px;
  }
}
  .header-address {
    font-size: 20px;
}

@media (min-width: 992px) {
  .header-title {
    font-size: 40px;
  }
}
  .header-address {
    font-size: 24px;
}
</style>
