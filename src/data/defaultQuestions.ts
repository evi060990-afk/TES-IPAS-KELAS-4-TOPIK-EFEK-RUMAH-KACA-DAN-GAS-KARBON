import { Question } from '../types';
import greenhouseImg from '../assets/images/greenhouse_effect_diagram_1795060239135.jpg';
import carbonSourcesImg from '../assets/images/carbon_sources_city_1795060238099.jpg';
import forestComparisonImg from '../assets/images/forest_carbon_sink_1795060241256.jpg';
import meltingIceImg from '../assets/images/melting_ice_climate_1795060241421.jpg';
import ecoActionsImg from '../assets/images/eco_friendly_actions_1795060241161.jpg';

export const INITIAL_QUESTIONS: Question[] = [
  // =========================================================
  // A. PILIHAN GANDA (20 SOAL, 4 OPSI JAWABAN)
  // =========================================================
  {
    id: 1,
    type: 'pg',
    topic: 'Konsep Efek Rumah Kaca',
    difficulty: 'Mudah',
    imageUrl: greenhouseImg,
    imageCaption: 'Ilustrasi proses efek rumah kaca pada atmosfer Bumi',
    text: 'Perhatikan gambar proses efek rumah kaca di atas! Panas matahari yang masuk ke Bumi sebagian dipantulkan kembali ke angkasa, tetapi sebagian lainnya tertahan oleh lapisan gas di atmosfer sehingga Bumi tetap hangat. Lapisan yang menahan panas tersebut adalah...',
    options: [
      { id: 'A', text: 'Gas rumah kaca di atmosfer' },
      { id: 'B', text: 'Air laut di samudra luas' },
      { id: 'C', text: 'Awan hujan di pegunungan' },
      { id: 'D', text: 'Batuan di dalam kerak Bumi' },
    ],
    correctAnswer: 'A',
    explanation:
      'Pada gambar terlihat panas matahari dipantulkan kembali ke permukaan Bumi oleh lapisan gas rumah kaca (seperti karbon dioksida dan metana) yang berada di atmosfer.',
  },
  {
    id: 2,
    type: 'pg',
    topic: 'Pengertian Efek Rumah Kaca',
    difficulty: 'Mudah',
    text: 'Mengapa peristiwa terperangkapnya panas matahari di atmosfer Bumi dinamakan "efek rumah kaca"?',
    options: [
      { id: 'A', text: 'Karena semua rumah di kota besar terbuat dari kaca bening' },
      { id: 'B', text: 'Karena cara kerja atmosfer mirip rumah kaca yang memerangkap panas di dalamnya' },
      { id: 'C', text: 'Karena matahari memancarkan cahaya berwarna hijau seperti kaca' },
      { id: 'D', text: 'Karena kaca di rumah dapat menghasilkan gas karbon dioksida' },
    ],
    correctAnswer: 'B',
    explanation:
      'Rumah kaca (greenhouse) untuk tanaman membiarkan cahaya matahari masuk dan menahan panas tetap di dalam. Atmosfer Bumi bekerja serupa dengan menahan sebagian panas matahari agar Bumi tetap hangat.',
  },
  {
    id: 3,
    type: 'pg',
    topic: 'Manfaat Alami Efek Rumah Kaca',
    difficulty: 'Sedang',
    text: 'Apa yang akan terjadi pada makhluk hidup di Bumi apabila tidak ada efek rumah kaca alami sama sekali?',
    options: [
      { id: 'A', text: 'Suhu Bumi menjadi sangat panas hingga air laut mendidih' },
      { id: 'B', text: 'Suhu Bumi menjadi sangat dingin dan membeku sehingga sulit dihuni' },
      { id: 'C', text: 'Siang dan malam akan berlangsung selama sebulan penuh' },
      { id: 'D', text: 'Tumbuhan akan tumbuh dua kali lebih cepat dari biasanya' },
    ],
    correctAnswer: 'B',
    explanation:
      'Efek rumah kaca secara alami sangat bermanfaat menjaga suhu rata-rata Bumi tetap hangat (sekitar 15°C). Tanpa efek rumah kaca alami, seluruh panas matahari langsung lepas ke angkasa sehingga Bumi membeku.',
  },
  {
    id: 4,
    type: 'pg',
    topic: 'Sumber Gas Karbon di Sekitar Kita',
    difficulty: 'Mudah',
    imageUrl: carbonSourcesImg,
    imageCaption: 'Berbagai aktivitas manusia di lingkungan perkotaan yang menghasilkan asap',
    text: 'Amati gambar suasana lingkungan di atas! Aktivitas pada gambar yang menjadi sumber utama bertambahnya gas karbon dioksida (CO₂) di udara adalah...',
    options: [
      { id: 'A', text: 'Anak-anak berjalan kaki di trotoar dan bersepeda di jalur hijau' },
      { id: 'B', text: 'Asap kendaraan bermotor, cerobong pabrik, dan pembakaran sampah' },
      { id: 'C', text: 'Rumah-rumah penduduk yang berjajar rapi di pinggir kota' },
      { id: 'D', text: 'Pohon-pohon rindang yang tumbuh di tepi jalan raya' },
    ],
    correctAnswer: 'B',
    explanation:
      'Pada gambar tampak asap knalpot mobil/bus/truk, asap tebal dari cerobong pabrik, serta asap pembakaran sampah daun. Ketiganya melepaskan gas karbon dioksida dalam jumlah besar ke udara.',
  },
  {
    id: 5,
    type: 'pg',
    topic: 'Jenis Gas Rumah Kaca',
    difficulty: 'Mudah',
    text: 'Gas karbon yang paling banyak dihasilkan dari pembakaran bahan bakar kendaraan bermotor seperti bensin dan solar adalah...',
    options: [
      { id: 'A', text: 'Oksigen (O₂)' },
      { id: 'B', text: 'Nitrogen (N₂)' },
      { id: 'C', text: 'Karbon dioksida (CO₂)' },
      { id: 'D', text: 'Uap air murni (H₂O)' },
    ],
    correctAnswer: 'C',
    explanation:
      'Pembakaran bahan bakar fosil (bensin, solar, batu bara) menghasilkan gas karbon dioksida (CO₂) sebagai salah satu gas rumah kaca utama.',
  },
  {
    id: 6,
    type: 'pg',
    topic: 'Gas Karbon dan Pernapasan',
    difficulty: 'Mudah',
    text: 'Selain dari asap kendaraan dan pabrik, gas karbon dioksida juga dihasilkan secara alami oleh manusia dan hewan saat melakukan proses...',
    options: [
      { id: 'A', text: 'Bernapas (mengembuskan napas)' },
      { id: 'B', text: 'Minum air putih setiap hari' },
      { id: 'C', text: 'Mencuci tangan dengan sabun' },
      { id: 'D', text: 'Berjemur di bawah sinar matahari pagi' },
    ],
    correctAnswer: 'A',
    explanation:
      'Saat bernapas, manusia dan hewan menghirup oksigen (O₂) dan mengembuskan gas karbon dioksida (CO₂) secara alami.',
  },
  {
    id: 7,
    type: 'pg',
    topic: 'Gas Metana di Sekitar Kita',
    difficulty: 'Sedang',
    text: 'Selain karbon dioksida, terdapat gas rumah kaca lain yang mengandung karbon bernama gas metana (CH₄). Di lingkungan sekitar kita, gas metana banyak berasal dari...',
    options: [
      { id: 'A', text: 'Tumpukan sampah organik yang membusuk dan kotoran ternak' },
      { id: 'B', text: 'Air sungai yang mengalir deras di pegunungan' },
      { id: 'C', text: 'Angin laut yang bertiup pada siang hari' },
      { id: 'D', text: 'Batu kerikil dan pasir di halaman sekolah' },
    ],
    correctAnswer: 'A',
    explanation:
      'Pembusukan sampah organik (sisa makanan, dedaunan) tanpa oksigen dan kotoran hewan ternak (seperti sapi) menghasilkan gas metana (CH₄) yang juga memerangkap panas.',
  },
  {
    id: 8,
    type: 'pg',
    topic: 'Peran Tumbuhan Menyerap Gas Karbon',
    difficulty: 'Mudah',
    imageUrl: forestComparisonImg,
    imageCaption: 'Perbandingan kondisi hutan yang lestari (kiri) dan hutan yang ditebang habis (kanan)',
    text: 'Perhatikan gambar perbandingan dua lingkungan hutan di atas! Mengapa lingkungan pada gambar sebelah kiri sangat penting untuk mengurangi gas karbon di udara?',
    options: [
      { id: 'A', text: 'Karena pepohonan hijau menyerap karbon dioksida saat berfotosintesis' },
      { id: 'B', text: 'Karena batang pohon yang ditebang dapat mengubah asap menjadi air' },
      { id: 'C', text: 'Karena hewan di hutan memakan seluruh gas karbon yang ada di udara' },
      { id: 'D', text: 'Karena tanah gundul di sebelah kanan mampu menyerap lebih banyak oksigen' },
    ],
    correctAnswer: 'A',
    explanation:
      'Tumbuhan hijau di hutan melakukan fotosintesis dengan menyerap gas karbon dioksida (CO₂) dari udara dan menghasilkan oksigen (O₂) yang segar bagi makhluk hidup.',
  },
  {
    id: 9,
    type: 'pg',
    topic: 'Dampak Penebangan Hutan',
    difficulty: 'Sedang',
    text: 'Penebangan hutan secara liar dan pembakaran lahan menyebabkan jumlah gas karbon dioksida di udara meningkat tajam karena...',
    options: [
      { id: 'A', text: 'Pohon yang ditebang langsung berubah menjadi kendaraan bermotor' },
      { id: 'B', text: 'Berkurangnya pohon penyerap CO₂ dan pembakaran kayu melepaskan karbon' },
      { id: 'C', text: 'Hutan yang gundul membuat hujan turun terus-menerus sepanjang tahun' },
      { id: 'D', text: 'Tanah hutan yang kering menghasilkan gas oksigen berlebihan' },
    ],
    correctAnswer: 'B',
    explanation:
      'Ketika hutan ditebang dan dibakar, jumlah tumbuhan yang menyerap CO₂ berkurang drastis, sementara pembakaran kayu justru melepaskan karbon yang tersimpan ke atmosfer.',
  },
  {
    id: 10,
    type: 'pg',
    topic: 'Pemanasan Global',
    difficulty: 'Mudah',
    text: 'Peristiwa meningkatnya suhu rata-rata permukaan Bumi akibat gas rumah kaca yang berlebihan di atmosfer disebut...',
    options: [
      { id: 'A', text: 'Gerhana matahari total' },
      { id: 'B', text: 'Pemanasan global' },
      { id: 'C', text: 'Daur air alami' },
      { id: 'D', text: 'Angin muson barat' },
    ],
    correctAnswer: 'B',
    explanation:
      'Efek rumah kaca yang berlebihan memerangkap terlalu banyak panas di atmosfer sehingga suhu rata-rata Bumi meningkat; peristiwa ini disebut pemanasan global (global warming).',
  },
  {
    id: 11,
    type: 'pg',
    topic: 'Energi Listrik dan Gas Karbon',
    difficulty: 'Sedang',
    text: 'Mengapa kebiasaan membiarkan lampu dan televisi menyala saat tidak digunakan ikut menyumbang bertambahnya gas karbon di udara?',
    options: [
      { id: 'A', text: 'Karena cahaya lampu langsung berubah menjadi asap hitam di kamar' },
      { id: 'B', text: 'Karena sebagian besar pembangkit listrik masih membakar batu bara yang menghasilkan CO₂' },
      { id: 'C', text: 'Karena kabel listrik menyerap oksigen dari dalam ruangan rumah' },
      { id: 'D', text: 'Karena layar televisi mengeluarkan gas metana saat dinyalakan' },
    ],
    correctAnswer: 'B',
    explanation:
      'Sebagian besar listrik di Indonesia dihasilkan oleh PLTU yang membakar batu bara. Semakin boros memakai listrik, semakin banyak batu bara dibakar dan gas CO₂ yang dilepas ke udara.',
  },
  {
    id: 12,
    type: 'pg',
    topic: 'Dampak Pemanasan Global di Kutub',
    difficulty: 'Mudah',
    imageUrl: meltingIceImg,
    imageCaption: 'Kondisi es di daerah kutub akibat meningkatnya suhu Bumi',
    text: 'Perhatikan gambar dampak pemanasan global di daerah kutub di atas! Akibat langsung dari peristiwa mencairnya es di kutub bagi wilayah pesisir dan pulau-pulau kecil adalah...',
    options: [
      { id: 'A', text: 'Permukaan air laut naik dan dapat menenggelamkan daerah pantai' },
      { id: 'B', text: 'Air laut di seluruh dunia berubah menjadi air tawar yang beku' },
      { id: 'C', text: 'Gunung es di kutub semakin tinggi dan menutupi sinar matahari' },
      { id: 'D', text: 'Ikan-ikan di laut pindah ke daratan yang kering dan panas' },
    ],
    correctAnswer: 'A',
    explanation:
      'Es yang mencair di kutub mengalir menambah volume air laut sehingga permukaan air laut naik dan mengancam wilayah pesisir atau pulau kecil dengan banjir rob.',
  },
  {
    id: 13,
    type: 'pg',
    topic: 'Dampak Perubahan Iklim Terhadap Lingkungan',
    difficulty: 'Sedang',
    text: 'Salah satu tanda terjadinya perubahan iklim akibat efek rumah kaca berlebihan yang sering dirasakan petani adalah...',
    options: [
      { id: 'A', text: 'Musim kemarau dan musim hujan menjadi tidak menentu sehingga memicu gagal panen' },
      { id: 'B', text: 'Matahari selalu terbit dari arah selatan setiap bulan Desember' },
      { id: 'C', text: 'Tanah sawah menjadi selalu subur tanpa perlu disiram air lagi' },
      { id: 'D', text: 'Biji padi dapat tumbuh menjadi pohon besar dalam waktu satu hari' },
    ],
    correctAnswer: 'A',
    explanation:
      'Pemanasan global mengganggu pola cuaca dan iklim sehingga musim kemarau bisa berlangsung terlalu panjang (kekeringan) atau hujan turun sangat lebat (banjir), yang merugikan petani.',
  },
  {
    id: 14,
    type: 'pg',
    topic: 'Bahaya Membakar Sampah Plastik',
    difficulty: 'Mudah',
    text: 'Di halaman rumah, Beni melihat tumpukan sampah plastik dan daun kering. Agar tidak menambah gas karbon dan racun di udara sekitar, tindakan yang paling tepat adalah...',
    options: [
      { id: 'A', text: 'Membakar seluruh sampah di siang hari agar cepat habis' },
      { id: 'B', text: 'Memilah sampah plastik untuk didaur ulang dan mengolah daun kering menjadi kompos' },
      { id: 'C', text: 'Membuang sampah ke selokan agar terbawa arus sungai ke laut' },
      { id: 'D', text: 'Menyiram sampah plastik dengan bensin lalu membakarnya bersama-sama' },
    ],
    correctAnswer: 'B',
    explanation:
      'Membakar sampah menghasilkan asap, CO₂, dan gas beracun. Mendaur ulang plastik serta membuat kompos dari daun kering jauh lebih ramah lingkungan dan mengurangi emisi karbon.',
  },
  {
    id: 15,
    type: 'pg',
    topic: 'Kebiasaan Sehari-hari yang Ramah Lingkungan',
    difficulty: 'Mudah',
    text: 'Jarak rumah Siti ke sekolah hanya 500 meter dengan jalan yang aman dan rindang. Kebiasaan berangkat sekolah yang paling membantu mengurangi gas karbon adalah...',
    options: [
      { id: 'A', text: 'Meminta diantar mobil pribadi setiap hari meskipun tidak hujan' },
      { id: 'B', text: 'Berjalan kaki atau mengayuh sepeda bersama teman' },
      { id: 'C', text: 'Naik sepeda motor sambil menyalakan mesin di halaman sekolah' },
      { id: 'D', text: 'Memesan kendaraan bermotor secara terpisah untuk masing-masing anak' },
    ],
    correctAnswer: 'B',
    explanation:
      'Berjalan kaki atau bersepeda tidak menggunakan bahan bakar minyak sehingga tidak menghasilkan asap karbon dioksida sama sekali (nol emisi).',
  },
  {
    id: 16,
    type: 'pg',
    topic: 'Aksi Mengurangi Gas Karbon',
    difficulty: 'Mudah',
    imageUrl: ecoActionsImg,
    imageCaption: 'Kegiatan anak-anak dan penggunaan energi surya di lingkungan sekolah dan rumah',
    text: 'Berdasarkan gambar di atas, kombinasi upaya yang dilakukan anak-anak dan warga untuk mengurangi efek rumah kaca adalah...',
    options: [
      { id: 'A', text: 'Bersepeda, menanam pohon, dan memanfaatkan panel surya sebagai energi bersih' },
      { id: 'B', text: 'Menggunakan mobil pribadi, menebang pohon, dan menyalakan lampu di siang hari' },
      { id: 'C', text: 'Membakar sampah di taman sekolah dan memakai plastik sekali pakai' },
      { id: 'D', text: 'Menutup atap rumah dengan kaca gelap dan membuang limbah ke sungai' },
    ],
    correctAnswer: 'A',
    explanation:
      'Pada gambar tampak anak-anak bersepeda ke sekolah, menanam dan menyiram bibit pohon, serta rumah yang memakai panel surya (energi matahari yang bebas asap karbon).',
  },
  {
    id: 17,
    type: 'pg',
    topic: 'Energi Terbarukan Ramah Lingkungan',
    difficulty: 'Sedang',
    text: 'Penggunaan pembangkit listrik tenaga surya (panel surya) lebih ramah lingkungan dibandingkan pembangkit listrik batu bara karena...',
    options: [
      { id: 'A', text: 'Panel surya memanfaatkan sinar matahari tanpa menghasilkan asap gas karbon' },
      { id: 'B', text: 'Panel surya hanya bisa digunakan pada malam hari saat gelap' },
      { id: 'C', text: 'Panel surya menghasilkan gas karbon dioksida untuk membuat udara panas' },
      { id: 'D', text: 'Panel surya membutuhkan bahan bakar bensin agar dapat menyala' },
    ],
    correctAnswer: 'A',
    explanation:
      'Panel surya mengubah cahaya matahari langsung menjadi listrik tanpa membakar bahan bakar fosil, sehingga tidak menghasilkan emisi gas rumah kaca.',
  },
  {
    id: 18,
    type: 'pg',
    topic: 'Analisis Suhu Lingkungan Perkotaan dan Pedesaan',
    difficulty: 'Sukar',
    text: 'Pada siang hari yang terik, udara di pusat kota yang padat kendaraan terasa jauh lebih panas dibandingkan di desa yang banyak pepohonan. Penyebab utama perbedaan suhu tersebut adalah...',
    options: [
      { id: 'A', text: 'Matahari hanya menyinari wilayah perkotaan saja saat siang hari' },
      { id: 'B', text: 'Banyaknya asap kendaraan yang mengandung gas karbon serta sedikitnya pohon penyerap karbon dan peneduh' },
      { id: 'C', text: 'Angin di pedesaan berasal dari lemari es yang dibuka warga desa' },
      { id: 'D', text: 'Aspal jalanan di kota menghasilkan oksigen murni yang terasa panas' },
    ],
    correctAnswer: 'B',
    explanation:
      'Di kota banyak gas CO₂ dari kendaraan dan pabrik yang memerangkap panas, ditambah kurangnya pepohonan untuk menyerap CO₂ dan menyejukkan udara sekitar.',
  },
  {
    id: 19,
    type: 'pg',
    topic: 'Pengolahan Sampah Organik (Kompos)',
    difficulty: 'Sedang',
    text: 'Mengubah sisa sayur dan daun kering menjadi pupuk kompos di sekolah bermanfaat bagi pengendalian gas rumah kaca karena...',
    options: [
      { id: 'A', text: 'Mengurangi pembakaran daun dan mengurangi gas metana dari sampah yang menumpuk di TPA' },
      { id: 'B', text: 'Membuat sampah plastik di kantin ikut larut menjadi air bersih' },
      { id: 'C', text: 'Menghasilkan asap tebal yang dapat menghalangi cahaya matahari' },
      { id: 'D', text: 'Mengubah seluruh oksigen di sekolah menjadi gas karbon dioksida' },
    ],
    correctAnswer: 'A',
    explanation:
      'Pengomposan yang dikelola baik mencegah daun dibakar (mengurangi CO₂) sekaligus mengurangi timbunan sampah organik di TPA yang menghasilkan gas metana (CH₄).',
  },
  {
    id: 20,
    type: 'pg',
    topic: 'Kebijakan Mengurangi Emisi Transportasi',
    difficulty: 'Sukar',
    text: 'Dalam sebuah kelas berisi 30 siswa, 20 siswa biasanya diantar orang tua dengan 20 mobil berbeda setiap pagi. Jika sekolah menyediakan bus sekolah untuk ke-20 siswa tersebut, dampak paling nyata terhadap gas karbon di sekitar sekolah adalah...',
    options: [
      { id: 'A', text: 'Jumlah gas karbon di sekitar sekolah meningkat karena bus lebih besar' },
      { id: 'B', text: 'Emisi gas karbon berkurang drastis karena hanya ada 1 mesin kendaraan yang beroperasi menggantikan 20 mobil' },
      { id: 'C', text: 'Tidak ada perubahan karena jumlah siswa yang berangkat ke sekolah tetap sama' },
      { id: 'D', text: 'Udara di halaman sekolah berubah menjadi penuh debu batu bara' },
    ],
    correctAnswer: 'B',
    explanation:
      'Menggunakan transportasi bersama (bus sekolah) menggantikan puluhan kendaraan pribadi sehingga total bahan bakar yang dibakar dan gas CO₂ yang dilepaskan jauh lebih sedikit.',
  },

  // =========================================================
  // B. PILIHAN GANDA KOMPLEKS (3 SOAL, MASING-MASING 3 OPSI JAWABAN)
  // =========================================================
  {
    id: 21,
    type: 'pgk',
    topic: 'Identifikasi Sumber Emisi Karbon dari Gambar',
    difficulty: 'Sedang',
    imageUrl: carbonSourcesImg,
    imageCaption: 'Ilustrasi aktivitas harian di jalan raya, kawasan industri, dan lingkungan sekitar',
    text: 'Perhatikan gambar suasana lingkungan di atas! Pilihlah SEMUA aktivitas pada gambar yang menghasilkan gas karbon dioksida ke udara (jawaban benar lebih dari satu):',
    options: [
      { id: 'A', text: 'Kendaraan bermotor (mobil, bus, dan truk) yang mengeluarkan asap knalpot di jalan raya' },
      { id: 'B', text: 'Cerobong asap pabrik yang mengepulkan asap pembakaran ke langit' },
      { id: 'C', text: 'Anak-anak yang mengayuh sepeda di jalur khusus sepeda' },
    ],
    correctAnswer: ['A', 'B'],
    explanation:
      'Asap kendaraan bermotor (A) dan asap pabrik (B) mengeluarkan gas karbon dioksida hasil pembakaran bahan bakar. Sedangkan bersepeda (C) tidak menghasilkan asap karbon.',
  },
  {
    id: 22,
    type: 'pgk',
    topic: 'Dampak Buruk Pemanasan Global',
    difficulty: 'Sedang',
    text: 'Jika gas rumah kaca seperti karbon dioksida terus bertambah secara berlebihan, dampak apa saja yang akan terjadi di Bumi? Pilihlah SEMUA jawaban yang benar:',
    options: [
      { id: 'A', text: 'Suhu udara di Bumi terasa semakin panas dan memicu gelombang panas' },
      { id: 'B', text: 'Es di kutub mencair lebih cepat sehingga permukaan air laut meningkat' },
      { id: 'C', text: 'Musim hujan dan kemarau menjadi sangat teratur dan mudah diprediksi' },
    ],
    correctAnswer: ['A', 'B'],
    explanation:
      'Pemanasan global membuat suhu Bumi meningkat (A) dan mencairkan es di kutub (B). Sebaliknya, perubahan iklim membuat cuaca semakin ekstrem dan tidak menentu, bukan semakin teratur (C salah).',
  },
  {
    id: 23,
    type: 'pgk',
    topic: 'Upaya Nyata Mengurangi Gas Karbon di Sekitar Kita',
    difficulty: 'Mudah',
    imageUrl: ecoActionsImg,
    imageCaption: 'Berbagai kegiatan ramah lingkungan yang dapat dilakukan siswa',
    text: 'Amati gambar kegiatan ramah lingkungan di atas! Pilihlah SEMUA tindakan yang tepat untuk mengurangi jumlah gas karbon di sekitar kita:',
    options: [
      { id: 'A', text: 'Menanam dan merawat pohon di halaman rumah maupun sekolah' },
      { id: 'B', text: 'Bersepeda atau berjalan kaki saat menempuh jarak dekat' },
      { id: 'C', text: 'Menyalakan seluruh lampu ruang kelas sepanjang hari meski matahari terik' },
    ],
    correctAnswer: ['A', 'B'],
    explanation:
      'Menanam pohon (A) membantu menyerap CO₂ dan bersepeda (B) mengurangi asap kendaraan. Membiarkan lampu menyala di siang hari (C) memboroskan listrik dan menambah emisi karbon.',
  },

  // =========================================================
  // C. PILIHAN GANDA KOMPLEKS KATEGORI (9 SOAL, MASING-MASING 3 PERNYATAAN BENAR/SALAH)
  // =========================================================
  {
    id: 24,
    type: 'pgk_kategori',
    topic: 'Mekanisme Efek Rumah Kaca',
    difficulty: 'Mudah',
    imageUrl: greenhouseImg,
    imageCaption: 'Diagram proses masuk dan terperangkapnya panas matahari di atmosfer Bumi',
    text: 'Perhatikan gambar diagram efek rumah kaca di atas! Tentukan apakah setiap pernyataan mengenai proses efek rumah kaca berikut bernilai BENAR atau SALAH:',
    statements: [
      {
        id: 's1',
        text: 'Cahaya dan panas dari matahari menembus lapisan atmosfer untuk menghangatkan permukaan Bumi.',
        correctAnswer: true,
      },
      {
        id: 's2',
        text: 'Gas rumah kaca memantulkan sebagian panas agar tetap berada di Bumi dan tidak seluruhnya hilang ke angkasa.',
        correctAnswer: true,
      },
      {
        id: 's3',
        text: 'Efek rumah kaca hanya terjadi di dalam gedung yang dindingnya terbuat dari kaca saja.',
        correctAnswer: false,
      },
    ],
    explanation:
      'Pernyataan 1 dan 2 Benar sesuai diagram mekanisme efek rumah kaca di atmosfer Bumi. Pernyataan 3 Salah karena efek rumah kaca merupakan peristiwa alami di atmosfer Bumi.',
  },
  {
    id: 25,
    type: 'pgk_kategori',
    topic: 'Mengenal Gas Rumah Kaca di Sekitar Kita',
    difficulty: 'Sedang',
    text: 'Berikut adalah pernyataan mengenai jenis-jenis gas yang berkaitan dengan efek rumah kaca di sekitar kita. Tentukan kebenaran masing-masing pernyataan (BENAR atau SALAH):',
    statements: [
      {
        id: 's1',
        text: 'Karbon dioksida (CO₂) dan metana (CH₄) termasuk gas karbon yang berperan sebagai gas rumah kaca.',
        correctAnswer: true,
      },
      {
        id: 's2',
        text: 'Gas oksigen (O₂) yang dihasilkan tumbuhan merupakan gas berbahaya penyebab utama pemanasan global.',
        correctAnswer: false,
      },
      {
        id: 's3',
        text: 'Pembusukan sampah organik yang menumpuk tanpa udara dapat menghasilkan gas metana.',
        correctAnswer: true,
      },
    ],
    explanation:
      'CO₂ dan CH₄ adalah gas rumah kaca (Pernyataan 1 Benar), dan pembusukan sampah organik menghasilkan metana (Pernyataan 3 Benar). Oksigen bukan penyebab pemanasan global (Pernyataan 2 Salah).',
  },
  {
    id: 26,
    type: 'pgk_kategori',
    topic: 'Peran Hutan dan Penebangan Pohon',
    difficulty: 'Sedang',
    imageUrl: forestComparisonImg,
    imageCaption: 'Perbandingan hutan hijau lebat dan kawasan yang mengalami penebangan pohon',
    text: 'Amati gambar perbandingan kondisi hutan di atas! Tentukan nilai kebenaran (BENAR atau SALAH) untuk setiap pernyataan berikut:',
    statements: [
      {
        id: 's1',
        text: 'Hutan yang rimbun seperti gambar di sebelah kiri berfungsi sebagai paru-paru dunia yang menyerap gas karbon dioksida.',
        correctAnswer: true,
      },
      {
        id: 's2',
        text: 'Jika banyak hutan berubah menjadi gundul seperti gambar di sebelah kanan, kadar gas karbon di udara akan menurun drastis.',
        correctAnswer: false,
      },
      {
        id: 's3',
        text: 'Menanam kembali hutan yang gundul (reboisasi) dapat membantu menjaga keseimbangan gas karbon di atmosfer.',
        correctAnswer: true,
      },
    ],
    explanation:
      'Hutan rimbun menyerap CO₂ (1 Benar) dan reboisasi memulihkan daya serap karbon (3 Benar). Hutan gundul justru membuat kadar CO₂ di udara meningkat, bukan menurun (2 Salah).',
  },
  {
    id: 27,
    type: 'pgk_kategori',
    topic: 'Aktivitas Harian Siswa dan Jejak Karbon',
    difficulty: 'Mudah',
    text: 'Setiap kegiatan kita sehari-hari dapat memengaruhi jumlah gas karbon yang dilepaskan ke udara. Tentukan apakah pernyataan berikut BENAR atau SALAH:',
    statements: [
      {
        id: 's1',
        text: 'Mematikan kipas angin dan lampu saat keluar dari ruang kelas membantu mengurangi pelepasan gas karbon dari pembangkit listrik.',
        correctAnswer: true,
      },
      {
        id: 's2',
        text: 'Membakar sampah daun kering setiap sore adalah cara terbersih yang tidak menghasilkan gas karbon sama sekali.',
        correctAnswer: false,
      },
      {
        id: 's3',
        text: 'Membawa botol minum isi ulang (tumbler) membantu mengurangi produksi sampah plastik dan energi pabrik pembuat botol baru.',
        correctAnswer: true,
      },
    ],
    explanation:
      'Menghemat listrik (1 Benar) dan mengurangi plastik sekali pakai (3 Benar) menekan emisi karbon. Membakar daun justru melepaskan asap dan CO₂ ke udara (2 Salah).',
  },
  {
    id: 28,
    type: 'pgk_kategori',
    topic: 'Keseimbangan Efek Rumah Kaca Alami dan Berlebihan',
    difficulty: 'Sukar',
    text: 'Perhatikan perbedaan antara efek rumah kaca alami dan efek rumah kaca yang berlebihan. Tentukan kebenaran setiap pernyataan berikut (BENAR atau SALAH):',
    statements: [
      {
        id: 's1',
        text: 'Pada tingkat yang seimbang, efek rumah kaca membuat suhu Bumi nyaman untuk kehidupan manusia, hewan, dan tumbuhan.',
        correctAnswer: true,
      },
      {
        id: 's2',
        text: 'Semakin tebal lapisan gas karbon di atmosfer, semakin banyak panas yang terlepas bebas ke luar angkasa.',
        correctAnswer: false,
      },
      {
        id: 's3',
        text: 'Aktivitas industri dan transportasi modern menjadi salah satu pemicu meningkatnya kadar gas rumah kaca secara cepat.',
        correctAnswer: true,
      },
    ],
    explanation:
      'Efek rumah kaca alami membuat Bumi nyaman (1 Benar) dan industri/transportasi memicu lonjakan gas rumah kaca (3 Benar). Lapisan gas karbon yang makin tebal justru menahan lebih banyak panas di Bumi (2 Salah).',
  },
  {
    id: 29,
    type: 'pgk_kategori',
    topic: 'Dampak Pemanasan Global bagi Makhluk Hidup',
    difficulty: 'Sedang',
    imageUrl: meltingIceImg,
    imageCaption: 'Ilustrasi pencairan es di wilayah kutub dan dampaknya bagi ekosistem',
    text: 'Perhatikan gambar pencairan es di kutub di atas! Tentukan apakah pernyataan mengenai dampak pemanasan global berikut BENAR atau SALAH:',
    statements: [
      {
        id: 's1',
        text: 'Beruang kutub terancam kehilangan tempat tinggal karena lapisan es di laut kutub semakin menyusut.',
        correctAnswer: true,
      },
      {
        id: 's2',
        text: 'Mencairnya es di kutub membuat wilayah pesisir pantai semakin aman dari banjir air laut.',
        correctAnswer: false,
      },
      {
        id: 's3',
        text: 'Kenaikan suhu air laut akibat pemanasan global dapat merusak terumbu karang tempat hidup ikan.',
        correctAnswer: true,
      },
    ],
    explanation:
      'Menyusutnya es mengancam habitat beruang kutub (1 Benar) dan suhu laut yang hangat merusak terumbu karang (3 Benar). Pencairan es menaikkan muka air laut sehingga pesisir lebih rawan banjir rob (2 Salah).',
  },
  {
    id: 30,
    type: 'pgk_kategori',
    topic: 'Peristiwa Sehari-hari yang Mirip Efek Rumah Kaca',
    difficulty: 'Sukar',
    text: 'Di halaman parkir yang panas, sebuah mobil diparkir di bawah terik matahari dengan seluruh kaca jendela tertutup rapat selama 2 jam. Tentukan kebenaran pernyataan berikut (BENAR atau SALAH):',
    statements: [
      {
        id: 's1',
        text: 'Udara di dalam kabin mobil terasa jauh lebih panas daripada udara di luar karena panas matahari terperangkap oleh kaca mobil.',
        correctAnswer: true,
      },
      {
        id: 's2',
        text: 'Peristiwa terperangkapnya panas di dalam mobil tersebut merupakan contoh sederhana untuk memahami cara kerja efek rumah kaca.',
        correctAnswer: true,
      },
      {
        id: 's3',
        text: 'Jika kaca mobil dibuka lebar, suhu di dalam mobil akan menjadi lebih panas dibandingkan saat kaca tertutup rapat.',
        correctAnswer: false,
      },
    ],
    explanation:
      'Kaca mobil membiarkan cahaya masuk namun menahan panas di dalam sehingga suhunya jauh lebih tinggi (1 dan 2 Benar). Jika kaca dibuka, panas keluar bersama sirkulasi udara sehingga lebih sejuk (3 Salah).',
  },
  {
    id: 31,
    type: 'pgk_kategori',
    topic: 'Peran Tumbuhan dan Fotosintesis',
    difficulty: 'Mudah',
    text: 'Lani menanam berbagai tanaman hijau di pot dan di kebun sekolah. Tentukan kebenaran pernyataan mengenai hubungan tanaman dan gas karbon berikut (BENAR atau SALAH):',
    statements: [
      {
        id: 's1',
        text: 'Pada siang hari dengan bantuan cahaya matahari, daun tanaman menyerap gas karbon dioksida untuk membuat makanan.',
        correctAnswer: true,
      },
      {
        id: 's2',
        text: 'Hasil samping fotosintesis tumbuhan yang sangat dibutuhkan oleh manusia dan hewan untuk bernapas adalah gas oksigen.',
        correctAnswer: true,
      },
      {
        id: 's3',
        text: 'Menanam pohon di sekitar sekolah tidak berpengaruh apa-apa terhadap kesejukan udara dan jumlah gas karbon.',
        correctAnswer: false,
      },
    ],
    explanation:
      'Tumbuhan menyerap CO₂ saat fotosintesis (1 Benar) dan melepaskan oksigen (2 Benar). Menanam pohon sangat berpengaruh menyejukkan udara dan menyerap karbon (3 Salah).',
  },
  {
    id: 32,
    type: 'pgk_kategori',
    topic: 'Evaluasi Kebiasaan Sekolah Peduli Iklim',
    difficulty: 'Sedang',
    text: 'SD N 2 Dauhwaru ingin menjadi sekolah peduli lingkungan untuk menekan gas karbon di sekitar sekolah. Tentukan apakah langkah-langkah berikut BENAR atau SALAH dalam mendukung program tersebut:',
    statements: [
      {
        id: 's1',
        text: 'Membuat program "Jumat Bersih dan Tanam Pohon" serta merawat taman kelas secara rutin.',
        correctAnswer: true,
      },
      {
        id: 's2',
        text: 'Mewajibkan seluruh siswa membakar sampah kertas dan plastik di belakang sekolah setiap istirahat.',
        correctAnswer: false,
      },
      {
        id: 's3',
        text: 'Memasang poster pengingat untuk mematikan lampu dan keran air setelah digunakan di setiap kelas.',
        correctAnswer: true,
      },
    ],
    explanation:
      'Menanam/merawat pohon (1 Benar) dan kampanye hemat energi (3 Benar) mendukung penurunan emisi karbon. Membakar sampah (2 Salah) justru mencemari udara dan menambah gas karbon.',
  },
];
