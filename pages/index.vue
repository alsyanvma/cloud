<template>
    <div class="container-fluid">
        <div class="row my-5">
            <div class="col-lg-6">
                <nuxt-link to="/login">
                    <div class="card bg-success rounded-5">
                        <div class="card-body">
                            <h5>Admin</h5>
                        </div>
                    </div>
                </nuxt-link>
            </div>
            <div class="col-lg-6">
                <nuxt-link to="/halaman2">
                    <div class="card bg-success rounded-5">
                        <div clas="card-body">
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
    height: 200px;
    margin-right: 27px;
    margin-left: 50px ;
    box-shadow: 1px 1px 20px #291f1f;
    margin-top: 200px;
    
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