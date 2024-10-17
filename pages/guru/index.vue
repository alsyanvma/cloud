<template>
  <div class="container-fluid">
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css">
      <div class="row">
          <div class="col-lg-12">
              <h2 class="text-center my-4">DATA SISWA</h2>
              <nuxt-link to="/halaman1">
              <i class="bi bi-arrow-left"></i>
              </nuxt-link>
              <div class="my-3">
                  <form @submit.prevent="getguru">
                      <input v-model="keyword" type="search" class="form-control rounded-5" placeholder="Cari">
                  </form>
                  <div class="my-3 text-muted"> menampilkan {{ visitors.length }} dari {{ jumlah }} siswa</div>
                  <table class="table table-bordered">
                      <thead>
                          <tr>
                              <td scope="col">NO</td>
                              <td scope="col">NIS</td>
                              <td scope="col">NAMA</td>
                              <td scope="col">KELAS</td>
                              
                          </tr>
                      </thead>
                      <tbody>
                        <tr v-for="(visitor, i) in filteredVisitors" :key="i">
                              <td>{{ i+1 }}.</td>
                              <td>{{ visitor.nis }}</td>
                              <td>{{ visitor.nama }}</td>
                              <td>{{ visitor.kelas }}</td>
                          </tr>
                      </tbody>
                  </table>
              </div>
          </div>
      </div>
  </div>
</template>
<script setup>
const supabase = useSupabaseClient()
const keyword = ref('')
const visitors = ref([])
const jumlah = ref ([])

const getsiswa = async () => {
  const {data, error} = await supabase.from('siswa').select(`*`)
  if(data) visitors.value = data
}

const getjumlah = async () => {
  const { data, count } = await supabase.from('siswa')
  .select("*", {count: 'exact'});
  if (data) jumlah.value = count
}

const filteredVisitors = computed(() => {
  if (!keyword.value) return visitors.value;
  return visitors.value.filter(visitor =>
    visitor.nama.toLowerCase().includes(keyword.value.toLowerCase())
  );
});

onMounted(()=> {
  getsiswa()
  getjumlah()
})

</script>

<style scoped>
i{
  color: black;
  font-size: 2em;
}
</style>