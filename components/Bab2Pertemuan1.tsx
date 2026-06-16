import { ListOrdered } from 'lucide-react';
import SlidePresentation from './SlidePresentation';

export default function Bab2Pertemuan1() {
  const slides = [
    <div key="s1" className="flex flex-col items-center justify-center min-h-full text-center space-y-6 pb-8">
      <div className="bg-indigo-100 p-6 rounded-3xl text-indigo-600 mb-4 shadow-sm">
        <ListOrdered size={64} />
      </div>
      <h2 className="text-4xl md:text-6xl font-extrabold text-gray-900 tracking-tight">Pengenalan Larik &<br/>Pengurutan Dasar</h2>
      <p className="text-gray-500 text-lg md:text-2xl max-w-2xl px-4 mt-4 font-medium leading-relaxed">
        Memahami konsep larik (array) dengan variabel indeks dan menganalisis langkah-langkah pengurutan data.
      </p>
    </div>,
    <div key="s2" className="flex flex-col min-h-full space-y-6 pb-8">
      <h3 className="text-3xl font-bold text-gray-800 border-b border-gray-100 pb-4">A. Konsep Larik (Array)</h3>
      <div className="space-y-4 text-lg text-gray-700 leading-relaxed font-medium">
        <p>
          Dalam bahasa pemrograman, sebuah <strong>Larik (Array)</strong> adalah deretan kotak memori yang berjejer, di mana setiap kotak dapat menyimpan satu buah nilai, dan diakses menggunakan <em>indeks</em> (nomor urut).
        </p>
        <p>
          Konsep ini sangat krusial dalam algoritma <strong>Pengurutan (Sorting)</strong>, di mana data acak dalam array akan dipertukarkan posisinya hingga menjadi urut (Ascending atau Descending).
        </p>
      </div>
    </div>,
    <div key="s3" className="flex flex-col min-h-full space-y-6 pb-8">
      <h3 className="text-3xl font-bold text-gray-800 border-b border-gray-100 pb-4">B. Simulasi Pengurutan Data</h3>
      <div className="space-y-4 text-lg text-gray-700 leading-relaxed font-medium">
        <p>
          Pengurutan sering kali dilakukan melalui iterasi atau perulangan bertahap. Misalnya, pada <strong>Bubble Sort</strong> atau <strong>Selection Sort</strong>, posisi angka akan bergeser dari iterasi 1 hingga iterasi akhir.
        </p>
        <div className="bg-indigo-50 border border-indigo-100 p-6 rounded-3xl mt-4">
          <p className="font-bold text-indigo-900 mb-3">Tabel Iterasi Sederhana:</p>
          <ul className="list-disc ml-6 space-y-2 text-indigo-800 text-base">
            <li><strong>Semula:</strong> [ 80, 45, 19, 55, 32, 23 ]</li>
            <li><strong>Iterasi 1:</strong> Elemen terkecil (19) ditukar ke depan &rarr; [ 19, 80, 45... ]</li>
            <li><strong>Iterasi 2:</strong> Elemen terkecil berikutnya (23) ditukar ke urutan 2...</li>
            <li><strong>Iterasi Terakhir:</strong> Semua elemen telah berada pada indeks yang tepat (sampai Iterasi 6).</li>
          </ul>
        </div>
      </div>
    </div>
  ];
  return <SlidePresentation title="Pertemuan 1: Larik & Pengurutan Dasar" slides={slides} />;
}
