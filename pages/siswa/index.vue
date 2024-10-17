<template>
  <div class="container-fluid">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css">
    <div class="row">
      <div class="col-lg-12">
        <h2 class="text-center my-4">REKAP HARIAN</h2>
        <nuxt-link to="/halaman2">
          <i class="bi bi-arrow-left"></i>
        </nuxt-link>
        <div class="my-3 d-flex justify-content-center">
          <input type="date" v-model="searchDate" class="form-control w-50" />
        </div>
        <div class="my-3">
          <table class="table table-bordered">
            <thead>
              <tr>
                <th scope="col">WAKTU</th>
                <th scope="col">JUMLAH IZIN</th>
                <th scope="col">JUMLAH SAKIT</th>
                <th scope="col">JUMLAH ALPA</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(rekap, index) in filteredRekapData" :key="index">
                <td>{{ formatTanggal(rekap.waktu) }}</td>
                <td>{{ rekap.jumlahIzin.toLocaleString("id-ID") }}</td>
                <td>{{ rekap.jumlahSakit.toLocaleString("id-ID") }}</td>
                <td>{{ rekap.jumlahAlfa.toLocaleString("id-ID") }}</td>
              </tr>
              <tr v-if="filteredRekapData.length === 0">
                <td colspan="4" class="text-center">Tidak ada data tersedia</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const supabase = useSupabaseClient();
const rekapData = ref([]);
const searchDate = ref(""); 


const formatTanggal = (tanggal) => {
  const options = { year: "numeric", month: "long", day: "numeric" };
  return new Date(tanggal).toLocaleDateString("id-ID", options);
};


const fetchRekapData = async () => {
  try {
    const { data: siswaData, error } = await supabase
      .from("riwayat")
      .select("keterangan (keterangan), created_at");

    if (error) throw error;

    console.log("Data Presensi:", siswaData);
    const rekap = {};
    siswaData.forEach((visitor) => {
      const key = visitor.created_at;

      if (!rekap[key]) {
        rekap[key] = { waktu: key, jumlahIzin: 0, jumlahSakit: 0, jumlahAlfa: 0 };
      }

      const keterangan = (visitor.keterangan?.keterangan || 'Tidak Diketahui').trim();
      console.log(`Keterangan pada ${key}:`, keterangan);
      switch (keterangan) {
        case 'Izin':
          rekap[key].jumlahIzin++;
          break;
        case 'Sakit':
          rekap[key].jumlahSakit++;
          break;
        case 'Alpa':
          rekap[key].jumlahAlfa++;
          break;
      }
    });

    rekapData.value = Object.values(rekap).sort((a, b) => new Date(b.waktu) - new Date(a.waktu));
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

const filteredRekapData = computed(() => {
  if (!searchDate.value) {
    return rekapData.value; 
  }
  
  return rekapData.value.filter((rekap) => {
    const formattedDate = new Date(rekap.waktu).toISOString().split("T")[0]; 
    return formattedDate === searchDate.value; 
  });
});

onMounted(() => {
  fetchRekapData();
});
</script>

<style scoped>
i {
  color: black;
  font-size: 2em;
}
.table {
  margin-top: 20px;
}
.table th, .table td {
  text-align: center;
  vertical-align: middle;
}
@media (max-width: 768px) {
  .card {
    padding: 20px; 
    }
}
</style>
