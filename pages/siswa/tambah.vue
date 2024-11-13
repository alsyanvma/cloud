<template>
  <div class="container-fluid">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css">
    <div class="row">
      <div class="col-lg-12">
        <h2 class="text-center my-4">RIWAYAT</h2>
        <nuxt-link to="/halaman2">
          <i class="bi bi-arrow-left"></i>
        </nuxt-link>
        <div class="my-3">
          <form @submit.prevent="getsiswa">
            <input 
              v-model="keyword" 
              type="search" 
              id="searchInput" 
              name="searchInput" 
              class="form-control rounded-5" 
              placeholder="Cari nama"
              autocomplete="off" 
            />
          </form>
        </div>
        <div class="my-3 text-muted">Menampilkan {{ filteredVisitors.length }} dari {{ jumlah }} siswa</div>
        <div v-if="filteredVisitors.length === 0" class="text-center text-danger">
          Tidak ada nama yang cocok dengan pencarian.
        </div>

        <div class="table-responsive">
          <table class="table table-bordered">
            <thead>
              <tr>
                <th scope="col">No</th>
                <th scope="col">NAMA</th>
                <th scope="col">KETERANGAN</th>
                <th scope="col">WAKTU</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(visitor, i) in filteredVisitors" :key="i">
                <td>{{ i + 1 }}.</td>
                <td>{{ visitor.nama && visitor.nama.nama ? visitor.nama.nama : 'Nama tidak ada' }}</td>
                <td>{{ visitor.keterangan && visitor.keterangan.keterangan ? visitor.keterangan.keterangan : 'Tidak ada keterangan' }}</td>
                <td>{{ visitor.created_at }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
const supabase = useSupabaseClient();
const keyword = ref('');
const visitors = ref([]);
const jumlah = ref(0);


const getsiswa = async () => {
  const { data, error } = await supabase.from('riwayat').select('*, nama(*), keterangan(*)')
    .order('id', { ascending: false });

  if (data) {
    visitors.value = data;
    getjumlah();  
  }
  if (error) console.error('Error fetching data:', error);
};


const getjumlah = async () => {
  const { count } = await supabase.from('siswa').select('*', { count: 'exact' });
  if (count) jumlah.value = count;
};


const filteredVisitors = computed(() => {
  if (!keyword.value) return visitors.value;
  return visitors.value.filter(visitor =>
    visitor.nama?.nama.toLowerCase().includes(keyword.value.toLowerCase())
  );
});


onMounted(() => {
  getsiswa();
});
</script>

<style scoped>
i {
  color: black;
  font-size: 2em;
}

.table-responsive {
  overflow-x: auto;
}

table th, table td {
  text-align: center;
  vertical-align: middle;
}

table th {
  width: 15%;
}

.table th {
  background-color: #f8f9fa;
}

@media (max-width: 768px) {
  .table th, .table td {
    font-size: 0.9em;
  }
}
</style>
