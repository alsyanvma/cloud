<template>
    <div class="container-fluid">  
        <div class="row my-5">
            <div class="col-lg-6">
                <nuxt-link to="/login">
                    <div class="card bg-success rounded-5 admin-card">
                        <div class="card-body">
                            <h2>Admin</h2> 
                        </div>
                    </div>
                </nuxt-link>
            </div>
            <div class="col-lg-6">
                <nuxt-link to="/halaman2">
                    <div class="card bg-success rounded-5 umum-card">
                        <div class="card-body">
                            <h1>Umum</h1>
                        </div>
                    </div>
                </nuxt-link>
            </div>
        </div>
    </div>
</template>

<style scoped>
.card {
    height: 180px;
    box-shadow: 0 10px 30px rgba(41, 31, 31, 0.2); 
    margin-top: 20px; 
}

.card:hover {
    box-shadow: 0 12px 40px rgba(41, 31, 31, 0.3); 
}

h1, h2 { 
    color: rgb(255, 255, 255);
    font-size: 30px;
    text-align: center;
    margin-top: 50px; 
}

@media (max-width: 768px) {
    .card {
        height: auto; 
        margin-top: 10px; 
    }

    h1, h2 {
        font-size: 24px;
        margin-top: 15px; 
    }
}


</style>
