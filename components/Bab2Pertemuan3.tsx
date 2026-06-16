import { Zap } from 'lucide-react';
import SlidePresentation from './SlidePresentation';

export default function Bab2Pertemuan3() {
  const slides = [
    <div key="s1" className="flex flex-col items-center justify-center min-h-full text-center space-y-6 pb-8">
      <div className="bg-rose-100 p-6 rounded-3xl text-rose-600 mb-4 shadow-sm">
        <Zap size={64} />
      </div>
      <h2 className="text-4xl md:text-6xl font-extrabold text-gray-900 tracking-tight">Algoritma<br/>Quick Sort</h2>
      <p className="text-gray-500 text-lg md:text-2xl max-w-2xl px-4 mt-4 font-medium leading-relaxed">
        Algoritma pengerutan partisi (partition exchange sort) dan klasifikasi metode pengurutan.
      </p>
    </div>,
    <div key="s2" className="flex flex-col min-h-full space-y-6 pb-8">
      <h3 className="text-3xl font-bold text-gray-800 border-b border-gray-100 pb-4">A. Konsep Quick Sort & Pivot</h3>
      <div className="space-y-4 text-lg text-gray-700 leading-relaxed font-medium">
        <p>
          Quick sort bekerja dengan menentukan sebuah titik potong atau referensi yang disebut <strong>Pivot</strong>.
          Semua elemen yang lebih kecil dari pivot dipindah ke sebelah kiri, dan yang lebih besar dipindah ke sebelah kanan pivot.
        </p>
        <div className="bg-rose-50 border border-rose-100 p-6 rounded-3xl mt-4">
          <p className="font-bold text-rose-900 mb-3">3 Cara Memilih Pivot:</p>
          <ul className="list-disc ml-6 space-y-2 text-rose-800 text-base">
            <li><strong>Elemen Pertama / Akhir:</strong> Cocok untuk data yang benar-benar acak. Kinerjanya buruk jika data sudah setengah terurut.</li>
            <li><strong>Dipilih secara Acak:</strong> Hasilnya random, kadang cepat kadang lambat, tergantung titik tebakan.</li>
            <li><strong>Median Tabel:</strong> Paling seimbang dan efisien. Membagi data relatif sama rata meskipun data awal sudah ada yang urut.</li>
          </ul>
        </div>
      </div>
    </div>,
    <div key="s3" className="flex flex-col min-h-full space-y-6 pb-8">
      <h3 className="text-3xl font-bold text-gray-800 border-b border-gray-100 pb-4">B. Klasifikasi Metode Pengurutan</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
        <div className="bg-white border border-gray-200 p-6 rounded-3xl shadow-sm">
          <h4 className="text-xl font-bold text-gray-900 mb-2">Pengurutan Internal</h4>
          <p className="text-gray-600 text-sm leading-relaxed mb-4">
            Metode pengurutan yang dilakukan langsung di dalam <strong>memori utama komputer (RAM)</strong>. Struktur yang sering dipakai adalah Larik (Array). Cocok untuk data bervolume menengah yang muat dalam memori aktif.
          </p>
        </div>
        <div className="bg-white border border-gray-200 p-6 rounded-3xl shadow-sm">
          <h4 className="text-xl font-bold text-gray-900 mb-2">Pengurutan Eksternal</h4>
          <p className="text-gray-600 text-sm leading-relaxed mb-4">
            Metode pengurutan untuk data berukuran raksasa yang tidak muat dalam memori utama, melainkan disimpan pada <strong>disk storage</strong> atau berupa arsip (file). Data yang terlalu masif difilter bergantian secara eksternal.
          </p>
        </div>
      </div>
    </div>
  ];
  return <SlidePresentation title="Pertemuan 3: Quick Sort & Klasifikasi" slides={slides} />;
}
