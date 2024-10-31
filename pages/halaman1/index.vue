<template>
  <div class="container-fluid">
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css"/>
    <div class="row">
      <div class="col-lg-12">
        <nuxt-link to="/">
          <i class="bi bi-power"></i>
        </nuxt-link>
        <div class="row my-5">
          <div class="col-lg-6 col-md-6 col-12 mb-3">
            <nuxt-link to="/guru/tambah">
              <div class="card bg-success rounded-5">
                <div class="card-body">
                  <h5>Isi Kehadiran</h5>
                </div>
              </div>
            </nuxt-link>
          </div>
          <div class="col-lg-6 col-md-6 col-12 mb-3">
            <nuxt-link to="/reri/tambah">
              <div class="card bg-success rounded-5">
                <div class="card-body">
                  <h1>Riwayat</h1>
                </div>
              </div>
            </nuxt-link>
          </div>
        </div>
        <div class="row my-5">
          <div class="col-lg-6 col-md-6 col-12 mb-3">
            <nuxt-link to="/reri">
              <div class="card bg-success rounded-5">
                <div class="card-body">
                  <h2 class="font">Rekap</h2>
                </div>
              </div>
            </nuxt-link>
          </div>
          <div class="col-lg-6 col-md-6 col-12 mb-3">
            <nuxt-link to="/guru">
              <div class="card bg-success rounded-5">
                <div class="card-body">
                  <h6 class="font">Data Siswa</h6>
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

h1,
h2,
h5,
h6 {
  color: rgb(255, 255, 255);
  font-size: 30px;
  text-align: center;
}

h1 {
  margin-top: 65px;
}

h5 {
  margin-top: 50px;
}

h2,
h6 {
  margin: 70px;
}

@media (max-width: 768px) {
  .card {
    margin: 20px auto;
    height: auto;
  }
  h1,
  h2,
  h5,
  h6 {
    font-size: 24px;
    margin: 20px 0;
  }
}
</style>
