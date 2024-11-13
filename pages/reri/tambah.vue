<template>
  <div class="container-fluid">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css">
    <div class="row">
      <div class="col-lg-12">
        <h2 class="text-center my-4">RIWAYAT</h2>
        <nuxt-link to="/halaman1">
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
              <tr v-for="(visitor, i) in filteredVisitors" :key="visitor.id">
                <td>{{ i + 1 }}.</td>
                <td>{{ visitor.nama?.nama || 'Nama tidak ada' }}</td>
                <td>{{ visitor.keterangan?.keterangan || 'Tidak ada keterangan' }}</td>
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
const supabase = useSupabaseClient();  // Menggunakan Supabase Client
const keyword = ref('');               // Ref untuk input pencarian
const visitors = ref([]);              // Ref untuk data riwayat
const jumlah = ref(0);                 // Ref untuk jumlah total siswa

// Fungsi untuk mengambil data riwayat
const getsiswa = async () => {
  try {
    const { data, error } = await supabase.from('riwayat')
      .select('*, nama(*), keterangan(*)')  // Mengambil data yang relevan
      .order('id', { ascending: false });  // Mengurutkan berdasarkan ID terbaru

    if (error) {
      console.error('Error fetching riwayat data:', error);
      return;
    }
    if (data) {
      visitors.value = data;  // Menyimpan data riwayat ke dalam visitors
      getjumlah();             // Memperbarui jumlah siswa
    }
  } catch (error) {
    console.error('Error fetching riwayat data:', error);
  }
};

// Fungsi untuk mengambil jumlah siswa
const getjumlah = async () => {
  try {
    const { count, error } = await supabase.from('siswa').select('*', { count: 'exact' });
    if (error) {
      console.error('Error fetching student count:', error);
      return;
    }
    if (count) jumlah.value = count;
  } catch (error) {
    console.error('Error fetching student count:', error);
  }
};

// Filter berdasarkan keyword pencarian
const filteredVisitors = computed(() => {
  if (!keyword.value) return visitors.value;
  return visitors.value.filter(visitor =>
    visitor.nama?.nama.toLowerCase().includes(keyword.value.toLowerCase())
  );
});

// Memuat data saat komponen pertama kali dimuat
onMounted(() => {
  getsiswa();
});
</script>
