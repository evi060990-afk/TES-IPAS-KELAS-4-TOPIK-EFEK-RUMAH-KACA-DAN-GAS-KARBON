import { Question, QuestionBlueprint, CognitiveLevel, Difficulty } from '../types';

/**
 * Data Acuan Matriks Kisi-Kisi Penulisan Soal Tes Sumatif
 * Kurikulum Merdeka - Fase B (Kelas IV) Mata Pelajaran IPAS
 * Lingkup Materi: Efek Rumah Kaca dan Gas Karbon di Sekitar Kita
 */

export interface BlueprintDefinition {
  elemen: string;
  tujuanPembelajaran: string;
  indikatorSoal: string;
  levelKognitif: CognitiveLevel;
  bobotSkor: number;
}

// Peta acuan default 32 butir soal IPAS Kurikulum Merdeka Fase B
export const DEFAULT_BLUEPRINT_MAP: Record<number, BlueprintDefinition> = {
  1: {
    elemen: 'Pemahaman IPAS (Sains)',
    tujuanPembelajaran:
      'Peserta didik dapat menjelaskan mekanisme terjadinya efek rumah kaca di atmosfer Bumi melalui pengamatan diagram.',
    indikatorSoal:
      'Disajikan gambar diagram efek rumah kaca, peserta didik dapat mengidentifikasi lapisan yang menahan sebagian panas matahari di atmosfer Bumi.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  2: {
    elemen: 'Pemahaman IPAS (Sains)',
    tujuanPembelajaran:
      'Peserta didik dapat memahami alasan penamaan fenomena efek rumah kaca berdasarkan analogi rumah kaca tanaman.',
    indikatorSoal:
      'Disajikan pertanyaan konseptual, peserta didik dapat menjelaskan persamaan cara kerja atmosfer Bumi dengan rumah kaca.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  3: {
    elemen: 'Pemahaman IPAS (Sains)',
    tujuanPembelajaran:
      'Peserta didik dapat menganalisis peran alami efek rumah kaca bagi keberlangsungan suhu yang layak huni di Bumi.',
    indikatorSoal:
      'Peserta didik dapat memprediksi kondisi suhu Bumi dan makhluk hidup apabila tidak terdapat efek rumah kaca alami sama sekali.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  4: {
    elemen: 'Pemahaman IPAS (Sains)',
    tujuanPembelajaran:
      'Peserta didik dapat mengidentifikasi sumber-sumber penghasil gas karbon dioksida di lingkungan sekitar melalui pengamatan gambar.',
    indikatorSoal:
      'Disajikan gambar aktivitas harian perkotaan, peserta didik dapat menentukan aktivitas yang menjadi sumber utama gas karbon dioksida di udara.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  5: {
    elemen: 'Pemahaman IPAS (Sains)',
    tujuanPembelajaran:
      'Peserta didik dapat menyebutkan jenis gas karbon utama hasil pembakaran bahan bakar fosil pada kendaraan bermotor.',
    indikatorSoal:
      'Disajikan konteks penggunaan bensin dan solar pada kendaraan, peserta didik dapat mengidentifikasi gas karbon dioksida (CO₂) sebagai gas buang utama.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  6: {
    elemen: 'Pemahaman IPAS (Sains)',
    tujuanPembelajaran:
      'Peserta didik dapat mengaitkan proses pernapasan makhluk hidup dengan pelepasan gas karbon dioksida secara alami.',
    indikatorSoal:
      'Peserta didik dapat menentukan aktivitas alami manusia dan hewan yang mengeluarkan gas karbon dioksida.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  7: {
    elemen: 'Pemahaman IPAS (Sains)',
    tujuanPembelajaran:
      'Peserta didik dapat mengidentifikasi sumber gas metana (CH₄) sebagai salah satu gas rumah kaca di lingkungan sekitar.',
    indikatorSoal:
      'Disajikan informasi tentang gas metana, peserta didik dapat menentukan sumber pembentukannya dari pembusukan sampah organik dan kotoran ternak.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  8: {
    elemen: 'Pemahaman IPAS (Sains)',
    tujuanPembelajaran:
      'Peserta didik dapat menjelaskan peran tumbuhan hijau dalam menyerap gas karbon dioksida melalui fotosintesis.',
    indikatorSoal:
      'Disajikan gambar perbandingan hutan lestari dan hutan gundul, peserta didik dapat menjelaskan alasan pentingnya hutan hijau dalam mengurangi gas karbon.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  9: {
    elemen: 'Pemahaman IPAS (Sains)',
    tujuanPembelajaran:
      'Peserta didik dapat menganalisis hubungan penebangan serta pembakaran hutan terhadap peningkatan kadar CO₂ di atmosfer.',
    indikatorSoal:
      'Peserta didik dapat menjelaskan dua dampak sekaligus dari penebangan dan pembakaran hutan terhadap bertambahnya gas karbon di udara.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  10: {
    elemen: 'Pemahaman IPAS (Sains)',
    tujuanPembelajaran:
      'Peserta didik dapat mendefinisikan fenomena pemanasan global sebagai akibat dari efek rumah kaca yang berlebihan.',
    indikatorSoal:
      'Disajikan definisi meningkatnya suhu rata-rata permukaan Bumi, peserta didik dapat menyebutkan istilah pemanasan global.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  11: {
    elemen: 'Pemahaman IPAS (Sains)',
    tujuanPembelajaran:
      'Peserta didik dapat menghubungkan pemborosan penggunaan energi listrik rumah tangga dengan emisi gas karbon dari pembangkit listrik.',
    indikatorSoal:
      'Peserta didik dapat menjelaskan alasan kebiasaan membiarkan lampu dan televisi menyala ikut meningkatkan kadar gas karbon di udara.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  12: {
    elemen: 'Pemahaman IPAS (Sains)',
    tujuanPembelajaran:
      'Peserta didik dapat mengidentifikasi dampak mencairnya es di kutub akibat pemanasan global terhadap wilayah pesisir.',
    indikatorSoal:
      'Disajikan gambar mencairnya es di kutub, peserta didik dapat menentukan dampak langsung berupa naiknya permukaan air laut.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  13: {
    elemen: 'Pemahaman IPAS (Sains)',
    tujuanPembelajaran:
      'Peserta didik dapat menganalisis dampak perubahan iklim akibat efek rumah kaca berlebih terhadap kegiatan pertanian.',
    indikatorSoal:
      'Disajikan konteks pekerjaan petani, peserta didik dapat mengidentifikasi tanda perubahan iklim berupa musim kemarau dan hujan yang tidak menentu.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  14: {
    elemen: 'Keterampilan Proses',
    tujuanPembelajaran:
      'Peserta didik dapat memilih solusi pengelolaan sampah rumah tangga yang tepat untuk mencegah pelepasan gas karbon.',
    indikatorSoal:
      'Disajikan studi kasus tumpukan sampah plastik dan daun kering, peserta didik dapat menentukan langkah daur ulang dan pengomposan.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  15: {
    elemen: 'Keterampilan Proses',
    tujuanPembelajaran:
      'Peserta didik dapat menentukan pilihan moda transportasi ramah lingkungan untuk perjalanan jarak dekat.',
    indikatorSoal:
      'Disajikan narasi jarak rumah siswa ke sekolah sejauh 500 meter, peserta didik dapat memilih berjalan kaki atau bersepeda untuk mengurangi emisi karbon.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  16: {
    elemen: 'Keterampilan Proses',
    tujuanPembelajaran:
      'Peserta didik dapat mengidentifikasi berbagai aksi nyata pengurangan gas karbon melalui pengamatan ilustrasi.',
    indikatorSoal:
      'Disajikan gambar anak-anak bersepeda, menanam pohon, dan panel surya, peserta didik dapat menyimpulkan kombinasi upaya pengurangan efek rumah kaca.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  17: {
    elemen: 'Pemahaman IPAS (Sains)',
    tujuanPembelajaran:
      'Peserta didik dapat membandingkan energi terbarukan (panel surya) dengan pembangkit berbahan bakar batu bara dari sisi emisi karbon.',
    indikatorSoal:
      'Peserta didik dapat menjelaskan keunggulan panel surya sebagai energi bersih yang tidak menghasilkan asap gas karbon.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  18: {
    elemen: 'Pemahaman IPAS (Sains)',
    tujuanPembelajaran:
      'Peserta didik dapat menganalisis faktor penyebab perbedaan suhu udara antara wilayah perkotaan yang padat dan pedesaan yang asri.',
    indikatorSoal:
      'Disajikan fenomena suhu siang hari yang lebih panas di kota dibanding desa, peserta didik dapat menganalisis kaitannya dengan emisi karbon dan jumlah pohon.',
    levelKognitif: 'L3',
    bobotSkor: 1,
  },
  19: {
    elemen: 'Keterampilan Proses',
    tujuanPembelajaran:
      'Peserta didik dapat menjelaskan manfaat pengolahan sampah organik menjadi kompos dalam menekan emisi karbon dioksida dan metana.',
    indikatorSoal:
      'Peserta didik dapat mengidentifikasi manfaat pengomposan sisa sayur dan daun kering terhadap pengendalian gas rumah kaca.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  20: {
    elemen: 'Keterampilan Proses',
    tujuanPembelajaran:
      'Peserta didik dapat mengevaluasi dampak penggunaan transportasi umum/bus sekolah terhadap penurunan emisi gas karbon.',
    indikatorSoal:
      'Disajikan perbandingan penggunaan 20 mobil pribadi dengan 1 bus sekolah, peserta didik dapat menyimpulkan pengurangan emisi gas karbon yang terjadi.',
    levelKognitif: 'L3',
    bobotSkor: 1,
  },
  21: {
    elemen: 'Pemahaman IPAS (Sains)',
    tujuanPembelajaran:
      'Peserta didik dapat mengklasifikasikan aktivitas pada gambar yang menghasilkan emisi gas karbon dan yang bebas emisi.',
    indikatorSoal:
      'Disajikan gambar aktivitas perkotaan dan tiga pernyataan pilihan, peserta didik dapat memilih lebih dari satu aktivitas penghasil gas karbon dioksida.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  22: {
    elemen: 'Pemahaman IPAS (Sains)',
    tujuanPembelajaran:
      'Peserta didik dapat mengidentifikasi beberapa dampak negatif pemanasan global akibat gas rumah kaca berlebih.',
    indikatorSoal:
      'Disajikan tiga pernyataan dampak perubahan iklim, peserta didik dapat memilih semua pernyataan yang benar mengenai dampak pemanasan global.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  23: {
    elemen: 'Keterampilan Proses',
    tujuanPembelajaran:
      'Peserta didik dapat memilih beberapa perilaku hemat energi dan ramah lingkungan dalam kehidupan sehari-hari melalui pengamatan gambar.',
    indikatorSoal:
      'Disajikan gambar kegiatan ramah lingkungan dan tiga pilihan tindakan, peserta didik dapat memilih semua tindakan yang mengurangi gas karbon.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  24: {
    elemen: 'Pemahaman IPAS (Sains)',
    tujuanPembelajaran:
      'Peserta didik dapat memverifikasi kebenaran pernyataan terkait mekanisme efek rumah kaca pada diagram atmosfer.',
    indikatorSoal:
      'Disajikan gambar diagram efek rumah kaca dan tiga pernyataan, peserta didik dapat menentukan status Benar/Salah setiap pernyataan.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  25: {
    elemen: 'Pemahaman IPAS (Sains)',
    tujuanPembelajaran:
      'Peserta didik dapat membedakan gas-gas penyebab efek rumah kaca (CO₂, CH₄) dengan gas yang dibutuhkan untuk bernapas (O₂).',
    indikatorSoal:
      'Disajikan tiga pernyataan tentang karbon dioksida, oksigen, dan metana, peserta didik dapat menentukan kebenaran (Benar/Salah) masing-masing pernyataan.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  26: {
    elemen: 'Pemahaman IPAS (Sains)',
    tujuanPembelajaran:
      'Peserta didik dapat mengevaluasi dampak kelestarian hutan dan reboisasi terhadap keseimbangan kadar karbon di udara.',
    indikatorSoal:
      'Disajikan gambar perbandingan hutan hijau dan hutan gundul beserta tiga pernyataan, peserta didik dapat menilai Benar/Salah setiap pernyataan.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  27: {
    elemen: 'Keterampilan Proses',
    tujuanPembelajaran:
      'Peserta didik dapat mengevaluasi kebiasaan harian siswa yang dapat menekan maupun memperbesar jejak karbon.',
    indikatorSoal:
      'Disajikan tiga pernyataan kebiasaan siswa di sekolah dan rumah, peserta didik dapat menentukan kebenaran (Benar/Salah) dampaknya terhadap emisi karbon.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  28: {
    elemen: 'Pemahaman IPAS (Sains)',
    tujuanPembelajaran:
      'Peserta didik dapat menganalisis perbedaan efek rumah kaca alami yang bermanfaat dengan efek rumah kaca berlebih yang berbahaya.',
    indikatorSoal:
      'Disajikan tiga pernyataan mengenai keseimbangan gas rumah kaca di atmosfer, peserta didik dapat menentukan nilai Benar/Salah tiap pernyataan.',
    levelKognitif: 'L3',
    bobotSkor: 1,
  },
  29: {
    elemen: 'Pemahaman IPAS (Sains)',
    tujuanPembelajaran:
      'Peserta didik dapat menganalisis dampak pencairan es kutub dan pemanasan air laut terhadap ekosistem kutub, pesisir, dan terumbu karang.',
    indikatorSoal:
      'Disajikan gambar pencairan es di kutub beserta tiga pernyataan, peserta didik dapat menentukan Benar/Salah setiap pernyataan dampak pemanasan global.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  30: {
    elemen: 'Pemahaman IPAS (Sains)',
    tujuanPembelajaran:
      'Peserta didik dapat menganalisis analogi terperangkapnya panas di dalam kabin mobil tertutup sebagai model sederhana efek rumah kaca.',
    indikatorSoal:
      'Disajikan narasi mobil terparkir di bawah sinar matahari dengan kaca tertutup, peserta didik dapat menilai kebenaran (Benar/Salah) tiga pernyataan terkait.',
    levelKognitif: 'L3',
    bobotSkor: 1,
  },
  31: {
    elemen: 'Pemahaman IPAS (Sains)',
    tujuanPembelajaran:
      'Peserta didik dapat menjelaskan hubungan proses fotosintesis tumbuhan hijau dengan penyerapan CO₂ dan pelepasan O₂.',
    indikatorSoal:
      'Disajikan narasi kegiatan menanam tanaman dan tiga pernyataan terkait fotosintesis, peserta didik dapat menentukan Benar/Salah setiap pernyataan.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  32: {
    elemen: 'Keterampilan Proses',
    tujuanPembelajaran:
      'Peserta didik dapat mengevaluasi program sekolah peduli iklim dalam upaya mengurangi emisi gas karbon di lingkungan sekolah.',
    indikatorSoal:
      'Disajikan tiga usulan program lingkungan di SD N 2 Dauhwaru, peserta didik dapat menentukan kebenaran (Benar/Salah) efektivitas tiap program.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
};

/**
 * Format label bentuk soal
 */
export function getBentukSoalLabel(type: string): string {
  switch (type) {
    case 'pg':
      return 'Pilihan Ganda (PG)';
    case 'pgk':
      return 'Pilihan Ganda Kompleks (PGK)';
    case 'pgk_kategori':
      return 'Benar / Salah (PGK Kategori)';
    default:
      return 'Pilihan Ganda';
  }
}

/**
 * Format label level kognitif
 */
export function getCognitiveLevelLabel(level: CognitiveLevel): string {
  switch (level) {
    case 'L1':
      return 'L1 (Pemahaman / Mengingat)';
    case 'L2':
      return 'L2 (Aplikasi / Penerapan)';
    case 'L3':
      return 'L3 (Penalaran / Analisis HOTS)';
    default:
      return 'L2 (Aplikasi)';
  }
}

/**
 * Mendapatkan format string ringkas kunci jawaban
 */
export function formatCorrectAnswer(q: Question): string {
  if (q.type === 'pg') {
    return typeof q.correctAnswer === 'string' ? q.correctAnswer : 'A';
  }
  if (q.type === 'pgk') {
    if (Array.isArray(q.correctAnswer)) {
      return q.correctAnswer.join(', ');
    }
    return String(q.correctAnswer || 'A');
  }
  if (q.type === 'pgk_kategori') {
    if (q.statements && q.statements.length > 0) {
      return q.statements
        .map((st, i) => `${i + 1}:${st.correctAnswer ? 'B' : 'S'}`)
        .join(', ');
    }
    return 'B/S';
  }
  return '-';
}

/**
 * Menghasilkan metadata blueprint lengkap untuk butir soal tertentu
 */
export function getQuestionBlueprint(q: Question, index: number): QuestionBlueprint {
  const def = DEFAULT_BLUEPRINT_MAP[q.id];

  // Gunakan data dari definisi atau field internal question, atau inferensi logis
  const elemen =
    q.elemen ||
    (def ? def.elemen : inferElemenFromTopic(q.topic));

  const levelKognitif: CognitiveLevel =
    q.levelKognitif ||
    (def ? def.levelKognitif : inferLevelFromDifficulty(q.difficulty));

  const tujuanPembelajaran =
    q.tujuanPembelajaran ||
    (def
      ? def.tujuanPembelajaran
      : `Peserta didik mampu menerapkan konsep materi ${q.topic} dalam menyelesaikan permasalahan IPAS sehari-hari.`);

  const indikatorSoal =
    q.indikatorSoal ||
    (def
      ? def.indikatorSoal
      : `Disajikan stimulus masalah tentang ${q.topic}, peserta didik dapat menentukan jawaban yang tepat.`);

  const bobotSkor = q.bobot || (def ? def.bobotSkor : 1);

  return {
    questionId: q.id,
    noSoal: index + 1,
    elemen,
    tujuanPembelajaran,
    materiPokok: q.topic,
    indikatorSoal,
    levelKognitif,
    levelKognitifLabel: getCognitiveLevelLabel(levelKognitif),
    bentukSoal: getBentukSoalLabel(q.type),
    kunciJawaban: formatCorrectAnswer(q),
    bobotSkor,
    difficulty: q.difficulty,
  };
}

function inferElemenFromTopic(topic: string): string {
  const t = topic.toLowerCase();
  if (
    t.includes('aksi') ||
    t.includes('kebiasaan') ||
    t.includes('sampah') ||
    t.includes('upaya') ||
    t.includes('program') ||
    t.includes('evaluasi') ||
    t.includes('kebijakan')
  ) {
    return 'Keterampilan Proses';
  }
  return 'Pemahaman IPAS (Sains)';
}

function inferLevelFromDifficulty(diff: Difficulty): CognitiveLevel {
  if (diff === 'Mudah') return 'L1';
  if (diff === 'Sukar') return 'L3';
  return 'L2';
}

/**
 * Menghitung rekapitulasi distribusi kisi-kisi soal
 */
export function getBlueprintStatistics(questions: Question[]) {
  const total = questions.length;
  const blueprints = questions.map((q, idx) => getQuestionBlueprint(q, idx));

  // Distribusi Elemen
  const elemenCountMap: Record<string, number> = {};
  // Distribusi Level Kognitif
  const levelCountMap: Record<CognitiveLevel, number> = { L1: 0, L2: 0, L3: 0 };
  // Distribusi Tingkat Kesukaran
  const diffCountMap: Record<Difficulty, number> = { Mudah: 0, Sedang: 0, Sukar: 0 };
  // Distribusi Bentuk Soal
  const typeCountMap: Record<string, number> = { pg: 0, pgk: 0, pgk_kategori: 0 };

  blueprints.forEach((bp, idx) => {
    // Elemen
    elemenCountMap[bp.elemen] = (elemenCountMap[bp.elemen] || 0) + 1;
    // Level
    levelCountMap[bp.levelKognitif] = (levelCountMap[bp.levelKognitif] || 0) + 1;
    // Diff
    const q = questions[idx];
    if (q) {
      diffCountMap[q.difficulty] = (diffCountMap[q.difficulty] || 0) + 1;
      typeCountMap[q.type] = (typeCountMap[q.type] || 0) + 1;
    }
  });

  const elemenDistribution = Object.entries(elemenCountMap).map(([elemen, count]) => ({
    elemen,
    count,
    percentage: total > 0 ? Math.round((count / total) * 100) : 0,
  }));

  const levelDistribution = [
    {
      level: 'L1' as const,
      label: 'L1 (Pemahaman / C1-C2)',
      desc: 'Mengingat & Memahami konsep dasar',
      count: levelCountMap.L1,
      percentage: total > 0 ? Math.round((levelCountMap.L1 / total) * 100) : 0,
      color: 'blue',
    },
    {
      level: 'L2' as const,
      label: 'L2 (Aplikasi / C3)',
      desc: 'Menerapkan konsep pada konteks nyata',
      count: levelCountMap.L2,
      percentage: total > 0 ? Math.round((levelCountMap.L2 / total) * 100) : 0,
      color: 'emerald',
    },
    {
      level: 'L3' as const,
      label: 'L3 (Penalaran / C4-C6 HOTS)',
      desc: 'Menganalisis & memecahkan masalah kompleks',
      count: levelCountMap.L3,
      percentage: total > 0 ? Math.round((levelCountMap.L3 / total) * 100) : 0,
      color: 'amber',
    },
  ];

  const difficultyDistribution = [
    {
      difficulty: 'Mudah' as const,
      count: diffCountMap.Mudah,
      percentage: total > 0 ? Math.round((diffCountMap.Mudah / total) * 100) : 0,
      color: 'emerald',
    },
    {
      difficulty: 'Sedang' as const,
      count: diffCountMap.Sedang,
      percentage: total > 0 ? Math.round((diffCountMap.Sedang / total) * 100) : 0,
      color: 'blue',
    },
    {
      difficulty: 'Sukar' as const,
      count: diffCountMap.Sukar,
      percentage: total > 0 ? Math.round((diffCountMap.Sukar / total) * 100) : 0,
      color: 'rose',
    },
  ];

  const typeDistribution = [
    {
      type: 'pg',
      label: 'Pilihan Ganda (PG)',
      count: typeCountMap.pg,
      percentage: total > 0 ? Math.round((typeCountMap.pg / total) * 100) : 0,
    },
    {
      type: 'pgk',
      label: 'Pilihan Ganda Kompleks (PGK)',
      count: typeCountMap.pgk,
      percentage: total > 0 ? Math.round((typeCountMap.pgk / total) * 100) : 0,
    },
    {
      type: 'pgk_kategori',
      label: 'Benar / Salah (PGK Kategori)',
      count: typeCountMap.pgk_kategori,
      percentage: total > 0 ? Math.round((typeCountMap.pgk_kategori / total) * 100) : 0,
    },
  ];

  return {
    total,
    blueprints,
    elemenDistribution,
    levelDistribution,
    difficultyDistribution,
    typeDistribution,
  };
}
