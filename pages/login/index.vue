<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const supabase = useSupabaseClient();
const router = useRouter();

const email = ref("");
const password = ref("");
const errorMessage = ref("");

const Login = async () => {
  errorMessage.value = "";

  if (!email.value || !password.value) {
    errorMessage.value = "Email dan password wajib diisi!";
    return;
  }

  try {
    const { data, error } = await supabase.auth.signInWithPassword({
      email: email.value,
      password: password.value,
    });

    if (error) {
      errorMessage.value = "Email atau password salah.";  
      return;
    }

    if (data) {
      await router.push("/halaman1");  
    }
  } catch (err) {
    errorMessage.value = "Terjadi kesalahan. Coba lagi nanti.";
  }
};
</script>

<template>
  <div class="container-fluid mb-5">
    <div class="container-fluid mb-5 d-flex justify-content-center align-items-center" style="height: 50vh;">      
      <div class="col-md-4 mt-5">
        <div class="card shadow-lg p-4" style="border-radius: 15px;">
          <h2 class="text-center">Selamat Datang!</h2>
          <form @submit.prevent="Login">
            <div class="mb-3">
              <label for="email" class="form-label">Email address</label>
              <input 
                v-model="email" 
                type="email" 
                class="form-control" 
                id="email"
                placeholder="Masukkan email Anda"
              />
            </div>
            <div class="mb-3">
              <label for="password" class="form-label">Password</label>
              <input 
                v-model="password" 
                type="password" 
                class="form-control" 
                id="password"
                placeholder="Masukkan password Anda"
              />
            </div>
            <div v-if="errorMessage" class="text-danger mb-3">
              {{ errorMessage }}
            </div>
            <div>
              <button class="btn btn-primary" style="background-color: #58A86A; border: none; transition: background-color 0.3s;" @mouseover="hover = true" @mouseleave="hover = false">
                Login
              </button>
            </div>
          </form>     
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card {
  background-color: white;
}

.btn:hover {
  background-color: #45a05e; 
}
</style>
