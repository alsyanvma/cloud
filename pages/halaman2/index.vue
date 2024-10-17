<template>
     <div class="container-fluid">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css">
      <div class="row">
        <div class="col-lg-12">
          <nuxt-link to="/">
            <i class="bi bi-arrow-left"></i>
          </nuxt-link>
        <div class="row my-5">
            <div class="col-lg-6">
                <nuxt-link to="/siswa/tambah">
                    <div class="card bg-success rounded-5">
                        <div class="card-body">
                            <h5>Riwayat</h5>
                        </div>
                    </div>
                </nuxt-link>
            </div>
            <div class="col-lg-6">
                <nuxt-link to="/siswa">
                    <div class="card bg-success rounded-5">
                        <div clas="card-body">
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
    margin-right: 27px;
    margin-left: 100px ;
    box-shadow: 1px 1px 20px #291f1f;
    margin-top: 100px;
 
}

i {
    color: black;
    font-size: 2em;
    
  }

h1 {
    color: rgb(255, 255, 255);
    font-size: 30px;
    text-align: center;
    margin-top: 65px;

}



h5{
    color: rgb(255, 255, 255);
    justify-content: center;
    font-size: 30px;
    text-align: center;
    margin-top: 50px;
}
</style>