<template>
    <div class="container-fluid">
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css">
      <div class="row">
        <div class="col-lg-12">
          <h2 class="text-center my-4">ISI KEHADIRAN</h2>
          <nuxt-link to ="/halaman1">
          <i class="bi bi-arrow-left"></i>
          </nuxt-link>
          <form @submit.prevent="kirimData">
            <div class="mb-3">
              <select v-model ="form.nama" class="form-control form-control-lg form-select rounded-5">
                <option value="">NAMA</option>
                <option v-for="(member, i) in members" :key="i" :value="member.id">{{ member.nama }}</option>
              </select>
            </div>
            <div class="mb-3">
              <select v-model ="form.keterangan" class="form-control form-control-lg form-select rounded-5">
                <option value="">KETERANGAN</option>
                <option v-for="(objective, i) in objectives" :key="i"  :value="objective.id">{{ objective.keterangan }}</option>
              </select>
            </div>
            <div class="mb-3">
            </div>
            <button type="submit" class="btn btn-lg rounded-5 px-5 bg-success text-white" style="float: left;">Kirim</button>
          </form>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  const supabase = useSupabaseClient()
  
  const members = ref([])
  const objectives = ref([])
  
  const form = ref ({
    nama:"",
    keterangan:"",
   
  })
  const kirimData = async () => {
    // console.log(form.value)
    const { data, error } = await supabase.from("riwayat").insert([form.value])
    if (!error) navigateTo('/reri/tambah')
  }
  const getNama = async () => {
    const { data, error } = await supabase.from('siswa').select('*')
    if (data) members.value = data;
  } 
  const getKeterangan = async () => {
    const {data, error} = await supabase.from('keterangan').select('*')
    if (data) objectives.value = data;
  }
  onMounted(() => {
    getNama()
    getKeterangan()
  })
  </script>
  
  <style scoped>
  .btn.bg-success {
    background-color: rgb(108, 50, 163) !important;
  }
  
  i{
      color: black;
      font-size: 2em;
  }
  
  </style>