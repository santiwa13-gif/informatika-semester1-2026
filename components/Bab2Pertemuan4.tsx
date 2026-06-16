import { Layers } from 'lucide-react';
import SlidePresentation from './SlidePresentation';

export default function Bab2Pertemuan4() {
  const slides = [
    <div key="s1" className="flex flex-col items-center justify-center min-h-full text-center space-y-6 pb-8">
      <div className="bg-purple-100 p-6 rounded-3xl text-purple-600 mb-4 shadow-sm">
        <Layers size={64} />
      </div>
      <h2 className="text-4xl md:text-6xl font-extrabold text-gray-900 tracking-tight">Tumpukan<br/>(Stack)</h2>
      <p className="text-gray-500 text-lg md:text-2xl max-w-2xl px-4 mt-4 font-medium leading-relaxed">
        Memahami struktur data tumpukan berorientasi Last In First Out (LIFO).
      </p>
    </div>,
    <div key="s2" className="flex flex-col min-h-full space-y-6 pb-8">
      <h3 className="text-3xl font-bold text-gray-800 border-b border-gray-100 pb-4">Konsep Stack (LIFO)</h3>
      <div className="space-y-4 text-lg text-gray-700 leading-relaxed font-medium">
        <p>
          Stack atau tumpukan adalah sebuah list di mana penambahan dan pengambilan elemen hanya difokuskan pada satu titik, yaitu sisi terluar/tertinggi yang disebut <strong>Top</strong> (Puncak).
        </p>
        <p>
          Prinsip utamanya adalah <strong>Last In First Out (LIFO)</strong>: Yang terakhir masuk, akan menjadi yang pertama keluar.
        </p>
        <div className="bg-purple-50 p-5 rounded-2xl border border-purple-100 mt-4 text-base text-purple-800">
          <strong>💡 Contoh Dunia Nyata:</strong><br/>
          Menata batu bata di atas mobil pick-up, batu yang paling bawah adalah yang paling pertama dimasukkan. Tapi ketika diturunkan dari mobil, yang pertama diambil pastilah batu yang posisinya paling atas (terakhir dimasukkan).
        </div>
      </div>
    </div>,
    <div key="s3" className="flex flex-col min-h-full space-y-6 pb-8">
      <h3 className="text-3xl font-bold text-gray-800 border-b border-gray-100 pb-4">Lima Operasi Dasar Stack</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-base">
        <div className="bg-white border border-gray-200 p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow">
          <span className="font-bold text-purple-600 block mb-1">1. Push</span>
          <span className="text-gray-600 text-sm">Bertugas menambah atau memasukkan elemen baru ke titik puncak (Top) dari tumpukan.</span>
        </div>
        <div className="bg-white border border-gray-200 p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow">
          <span className="font-bold text-purple-600 block mb-1">2. Pop</span>
          <span className="text-gray-600 text-sm">Menghapus dan mengambil elemen yang ada pada puncak tumpukan (Top).</span>
        </div>
        <div className="bg-white border border-gray-200 p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow">
          <span className="font-bold text-purple-600 block mb-1">3. Peek</span>
          <span className="text-gray-600 text-sm">Mengintip nilai data pada tumpukan teratas, tanpa perlu menghapus elemen tersebut.</span>
        </div>
        <div className="bg-white border border-gray-200 p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow">
          <span className="font-bold text-purple-600 block mb-1">4. IsFull</span>
          <span className="text-gray-600 text-sm">Mengecek nilai benar/salah apakah seluruh kapasitas memori array untuk tumpukan itu sudah terisi penuh?</span>
        </div>
        <div className="bg-white border border-gray-200 p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow">
          <span className="font-bold text-purple-600 block mb-1">5. IsEmpty</span>
          <span className="text-gray-600 text-sm">Mengecek keadaan apakah kondisi tumpukan tersebut saat ini tidak memiliki elemen satu pun?</span>
        </div>
      </div>
    </div>
  ];
  return <SlidePresentation title="Pertemuan 4: Struktur Data Stack" slides={slides} />;
}
