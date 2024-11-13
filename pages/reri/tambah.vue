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
                <th scope="col">Aksi</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(visitor, i) in filteredVisitors" :key="visitor.id">
                <td>{{ i + 1 }}.</td>
                <td>{{ visitor.nama && visitor.nama.nama ? visitor.nama.nama : 'Nama tidak ada' }}</td>
                <td>{{ visitor.keterangan && visitor.keterangan.keterangan ? visitor.keterangan.keterangan : 'Tidak ada keterangan' }}</td>
                <td>{{ visitor.created_at }}</td>
                <td>
                  <button @click="hapusRiwayat(visitor.id)" class="btn btn-danger">Hapus</button>
                </td>
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

// Fungsi untuk mengambil data riwayat
const getsiswa = async () => {
  const { data, error } = await supabase.from('riwayat').select('*, nama(*), keterangan(*)')
    .order('id', { ascending: false });

  if (data) {
    visitors.value = data;
    getjumlah();
  }
  if (error) console.error('Error fetching data:', error);
};

// Fungsi untuk mengambil jumlah siswa
const getjumlah = async () => {
  const { count } = await supabase.from('siswa').select('*', { count: 'exact' });
  if (count) jumlah.value = count;
};

// Fungsi untuk menghapus riwayat berdasarkan id
const hapusRiwayat = async (id) => {
  const { error } = await supabase.from('riwayat').delete().eq('id', id);

  if (error) {
    console.error('Error deleting riwayat:', error);
  } else {
    // Jika penghapusan berhasil, hapus data dari array `visitors`
    visitors.value = visitors.value.filter(visitor => visitor.id !== id);
    // Update data rekap jika perlu
    perbaruiRekap();
  }
};

// Fungsi untuk memperbarui rekap setelah penghapusan
const perbaruiRekap = async () => {
  const { data: riwayatData, error } = await supabase
    .from('riwayat')
    .select('nama, keterangan')
    .in('keterangan', ['sakit', 'izin', 'alpa', 'dispen']);

  if (error) {
    console.error('Error fetching riwayat data:', error);
    return;
  }

  // Update visitor dengan data terbaru
  riwayatData.forEach((record) => {
    const student = visitors.value.find((s) => s.nama === record.nama);
    if (student) {
      // Reset attendance counts for the student
      student.sakit = 0;
      student.izin = 0;
      student.alpa = 0;
      student.dispen = 0;

      // Increment based on keterangan
      switch (record.keterangan) {
        case 'sakit':
          student.sakit++;
          break;
        case 'izin':
          student.izin++;
          break;
        case 'alpa':
          student.alpa++;
          break;
        case 'dispen':
          student.dispen++;
          break;
      }
    }
  });
};

// Filter berdasarkan keyword pencarian
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
