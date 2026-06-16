import { BookCheck } from 'lucide-react';
import SlidePresentation from './SlidePresentation';

export default function Bab2Pertemuan6() {
  const slides = [
    <div key="s1" className="flex flex-col items-center justify-center min-h-full text-center space-y-6 pb-8">
      <div className="bg-teal-100 p-6 rounded-3xl text-teal-600 mb-4 shadow-sm">
        <BookCheck size={64} />
      </div>
      <h2 className="text-4xl md:text-6xl font-extrabold text-gray-900 tracking-tight">Asesmen Sumatif &<br/>Evaluasi Bab 2</h2>
      <p className="text-gray-500 text-lg md:text-2xl max-w-2xl px-4 mt-4 font-medium leading-relaxed">
        Pengerjaan studi kasus dan uji ketajaman logika mengenai Algoritma dan Struktur Data.
      </p>
    </div>,
    <div key="s2" className="flex flex-col min-h-full space-y-6 pb-8">
      <h3 className="text-3xl font-bold text-gray-800 border-b border-gray-100 pb-4">Tinjauan & Evaluasi</h3>
      <div className="space-y-4 text-lg text-gray-700 leading-relaxed font-medium">
        <p>
          Pada pertemuan 6 ini, fokus pembelajaran dikerahkan untuk memperkuat seluruh materi Pengurutan (Sorting) dan Struktur Data (Stack, Queue, Larik) lewat simulasi praktis dan tes berbasis masalah sehari-hari (Problem Solving).
        </p>
        <div className="bg-teal-50 border border-teal-100 p-6 rounded-3xl mt-4">
          <h4 className="font-bold text-teal-900 text-xl mb-4">Agenda Utama:</h4>
          <ul className="list-disc ml-6 space-y-3 text-teal-800 text-base">
            <li><strong>Latihan Soal & Simulasi Tertulis:</strong> Menjalankan fungsi Sorting (seperti manual trace tabel Bubble / Quick Sort).</li>
            <li><strong>Menganalisis Kasus Kehidupan:</strong> Siswa disajikan narasi seperti &quot;Rak Buku&quot;, &quot;Antrean Loket Film&quot;, lalu diuji untuk mencocokkan struktur data apa (LIFO/FIFO) yang relevan memecahkannya.</li>
            <li><strong>Asesmen Sumatif (Ulangan Harian):</strong> Evaluasi menyeluruh guna menilai persentase ketuntasan tujuan pembelajaran (KKTP).</li>
          </ul>
        </div>
      </div>
    </div>
  ];
  return <SlidePresentation title="Pertemuan 6: Asesmen Bab 2" slides={slides} />;
}
