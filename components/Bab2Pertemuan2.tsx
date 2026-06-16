import { GitMerge } from 'lucide-react';
import SlidePresentation from './SlidePresentation';

export default function Bab2Pertemuan2() {
  const slides = [
    <div key="s1" className="flex flex-col items-center justify-center min-h-full text-center space-y-6 pb-8">
      <div className="bg-amber-100 p-6 rounded-3xl text-amber-600 mb-4 shadow-sm">
        <GitMerge size={64} />
      </div>
      <h2 className="text-4xl md:text-6xl font-extrabold text-gray-900 tracking-tight">Algoritma<br/>Merge Sort</h2>
      <p className="text-gray-500 text-lg md:text-2xl max-w-2xl px-4 mt-4 font-medium leading-relaxed">
        Mengurutkan data secara efektif menggunakan metode Divide and Conquer.
      </p>
    </div>,
    <div key="s2" className="flex flex-col min-h-full space-y-6 pb-8">
      <h3 className="text-3xl font-bold text-gray-800 border-b border-gray-100 pb-4">Konsep Divide and Conquer</h3>
      <div className="space-y-4 text-lg text-gray-700 leading-relaxed font-medium">
        <p>
          Algoritma Merge Sort tidak bekerja dengan menukar elemen satu per satu layaknya Bubble Sort, melainkan memecah (membagi) larik menjadi bagian-bagian sangat kecil, mengurutkannya, lalu menggabungkannya kembali.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
          <div className="bg-white border border-gray-200 p-5 rounded-2xl shadow-sm">
            <h4 className="font-bold text-amber-600 mb-2">1. Divide</h4>
            <p className="text-gray-600 text-sm">Memilah elemen-elemen dari rangkaian data acak menjadi dua bagian secara terus menerus hingga tersisa satu elemen per bagian.</p>
          </div>
          <div className="bg-white border border-gray-200 p-5 rounded-2xl shadow-sm">
            <h4 className="font-bold text-amber-600 mb-2">2. Conquer</h4>
            <p className="text-gray-600 text-sm">Setiap bagian kecil kemudian diurus dengan memanggil prosedur merge sort secara rekursif (berulang).</p>
          </div>
          <div className="bg-white border border-gray-200 p-5 rounded-2xl shadow-sm">
            <h4 className="font-bold text-amber-600 mb-2">3. Kombinasi</h4>
            <p className="text-gray-600 text-sm">Mengombinasikan (menggabungkan) dua bagian tersebut kembali hingga mendapatkan satu rangkaian data penuh yang berurutan.</p>
          </div>
        </div>
      </div>
    </div>
  ];
  return <SlidePresentation title="Pertemuan 2: Algoritma Merge Sort" slides={slides} />;
}
