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
                        >
                    </form>
                    <div class="my-3 text-muted"> menampilkan {{ filteredVisitors.length }} dari {{ jumlah }} siswa </div>
                    <table class="table table-bordered">
                        <thead>
                            <tr>
                                <td scope="col">No</td>
                                <td scope="col">NAMA</td>
                                <td scope="col">KETERANGAN</td>
                                <td scope="col">WAKTU</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(visitor, i) in filteredVisitors" :key="i">
                                <td>{{ i + 1 }}.</td>
                                <td>{{ visitor.nama ? visitor.nama.nama : 'Tidak ada nama' }}</td>
                                <td>{{ visitor.keterangan ? visitor.keterangan.keterangan : 'Tidak ada keterangan' }}</td>
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
const supabase = useSupabaseClient()
const keyword = ref('')
const visitors = ref([])
const jumlah = ref(0)

const getsiswa = async () => {
    const { data, error } = await supabase.from("riwayat").select(`*, nama(*), keterangan(*)`)
        .order(`id`, { ascending: false })
    if (data) {
        visitors.value = data
        getjumlah() 
    }
}

const getjumlah = async () => {
    const { data, count } = await supabase.from('riwayat').select("*", { count: 'exact' });
    if (data) jumlah.value = count
}

const filteredVisitors = computed(() => {
    if (!keyword.value) return visitors.value;
    return visitors.value.filter(visitor =>
        visitor.nama?.nama.toLowerCase().includes(keyword.value.toLowerCase())
    );
});

onMounted(() => {
    getsiswa()
})
</script>

<style scoped>
i {
    color: black;
    font-size: 2em;
}
@media (max-width: 768px) {
  .card {
    padding: 20px; 
    }
}
</style>