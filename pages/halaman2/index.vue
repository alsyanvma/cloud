<template>
    <div class="container-fluid">
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css">
      <div class="row">
        <div class="col-lg-12">
          <nuxt-link to="/">
            <i class="bi bi-arrow-left"></i>
          </nuxt-link>
          <div class="row my-5">
            <div class="col-lg-6 col-md-6 col-12 mb-3">
              <nuxt-link to="/siswa/tambah">
                <div class="card bg-success rounded-5">
                  <div class="card-body">
                    <h5>Riwayat</h5>
                  </div>
                </div>
              </nuxt-link>
            </div>
            <div class="col-lg-6 col-md-6 col-12 mb-3">
              <nuxt-link to="/siswa">
                <div class="card bg-success rounded-5">
                  <div class="card-body">
                    <h1>Rekap Harian</h1>
                  </div>
                </div>
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <style scoped>
  .card {
    height: 200px;
    box-shadow: 1px 1px 20px #291f1f;
    margin-top: 20px;
  }
  
  i {
    color: black;
    font-size: 2em;
  }
  
  h1, h5 {
    color: rgb(255, 255, 255);
    text-align: center;
    margin-top: 50px;
  }
  
  h1 {
    font-size: 30px;
  }
  
  h5 {
    font-size: 30px;
  }
  @media (max-width: 768px) {
    .card {
      height: auto;
    }
  
    h1,h5 {
      font-size: 24px;
      margin: 20px 0;
    }
  }
  </style>
  